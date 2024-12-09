'use strict';

//buttons
let callBtn=$('#callBtn');
let callBox=$('#callBox');
let answerBtn=$('#answerBtn');
let declineBtn=$('#declineBtn');
let alertBox=$('#alertBox');

let pc;
let sendTo = callBtn.data('user');
let localStream;

//video elements
const localVideo = document.querySelector("#localVideo");
const remoteVideo = document.querySelector("#remoteVideo");
const mediaConst = {
    video:true,
    audio:true

};

const config = {
    iceServers: [
        {urls: 'stun:stun1.l.google.com:19302'}, // STUN server
        {urls: 'turn:your-turn-server.com', username: 'user', credential: 'password'} // TURN server (if needed)
    ]
};


//what to receive from other client
const options = {
    offerToReceiveVideo: 1,
    offerToReceiveAudio: 1
}

function getConn()
{
    if(!pc)
    {
        pc = new RTCPeerConnection(config);
    }
}

//ask for media input form the user

async function getCam(){
    let mediaStream;
    try{
        if(!pc) {
            await getConn();  
        }
        mediaStream = await navigator.mediaDevices.getUserMedia(mediaConst);
        localVideo.srcObject = mediaStream;
        localStream = mediaStream;
        localStream.getTracks().forEach(track => pc.addTrack(track, localStream));

        // Make sure local video is visible for local user
        localVideo.style.display = 'block';   // Show local video for local peer

    } catch(error) {
        console.log(error);
    }
}

async function createOffer(sendTo) {
    await sendIceCandidate(sendTo);
    await pc.createOffer(options);
    await pc.setLocalDescription(pc.localDescription);
    send('client-offer', pc.localDescription, sendTo);
}

async function createAnswer(sendTo, data) {
    if (!pc) {
        await getConn();
    }
    if (!localStream) {
        await getCam();
    }
    await sendIceCandidate(sendTo);
    await pc.setRemoteDescription(data);
    await pc.createAnswer();
    await pc.setLocalDescription(pc.localDescription);
    send('client-answer', pc.localDescription, sendTo);
}

function sendIceCandidate(sendTo)
{
    pc.onicecandidate = e => {
        if (e.candidate !== null) {
            console.log("Sending ICE candidate:", e.candidate);
            send('client-candidate', e.candidate, sendTo);
        }
    };
    

    pc.ontrack = e => {
        console.log('Remote Stream received:', e.streams);
        if (e.streams && e.streams[0]) {
            $('#video').removeClass('hidden'); // Show remote video container
            $('#profile').addClass('hidden');  // Hide profile picture
            remoteVideo.srcObject = e.streams[0];  // Set the remote stream
    
            // Hide the local video for the remote peer
            localVideo.style.display = 'none';   // Hide the local video on the remote side
        } else {
            console.error("No remote stream received.");
        }
    };
    


}

function hangup(){
    send('client-hangup',null, sendTo)
    pc.close();
    pc =null
}
$(`#callBtn`).on(`click`, async () => {
    await getCam();
    await getConn();  // Always initialize the peer connection when the call is made
    send('is-client-ready', null, sendTo);
});
$(`#hangupBtn`).on(`click`, () => {
    hangup();
    location.reload(true);
});

conn.onopen = e =>{
    console.log('connected to websocket');
}
let isOnCall = false;
conn.onmessage = async e =>{
    let message = JSON.parse(e.data);
    let by = message.by;
    let data = message.data;
    let type = message.type;
    let profileimage = message.profileimage;
    let username = message.username;
    $('#username').text(username);
    $('#profileimage').attr('src', profileimage);
    

    switch(type)
    {
        case 'client-candidate':
        if(pc.localDescription) 
            {
                await pc.addIceCandidate(new RTCIceCandidate(data));
            }   
        break;

        case 'is-client-ready':
    if (!pc) {
        await getConn();  // Ensure the connection is always available
    } 
    if (pc.iceConnectionState === "connected") {
        send('client-already-oncall', null, by);
    } else {
        // If the peer is ready, show the video call UI
        displayCall();
        if(window.location.href.indexOf(username)>-1)
        {
        answerBtn.on('click', () => {
            callBox.addClass('hidden');
            $('.wrapper').removeClass('glass');
            send('client-is-ready', null, sendTo); // Respond to the incoming call
        });}
        else
        {
            answerBtn.on('click', () => {
                callBox.addClass('hidden');
                redirectToCall(username,by);
            });  
        }
        declineBtn.on('click', () => {
            send('client-rejected', null, sendTo);
            location.reload(true);
        });
    }
    break;

// When the call offer is received, respond and set up video connection
case 'client-offer':
    createAnswer(sendTo, data);
    $('#callTimer').timer({format: '%m:%s'});
    break;
       
            case 'client-is-ready':
                createOffer(sendTo);
                break;
            
            case 'client-answer':
                if (pc.localDescription) {
                    await pc.setRemoteDescription(data);
                    $('#callTimer').timer({format: '%m:%s'});
                }
                break;
            


       case 'client-already-oncall':
        //display popup right here
        displayAlert(username, profileimage , 'is on another call')
        setTimeout('window.location.reload(true)',2000);
        break;

        case 'client-rejected':
            displayAlert(username , profileimage, 'is busy')
            setTimeout('window.location.reload(true)',2000);
            break;

        case 'client-hangup':
        //display popup right here
        displayAlert(username, profileimage , 'Disconnected the call')
        setTimeout('window.location.reload(true)',2000);
        break;
    }   
}

function send(type, data, sendTo)
{
    conn.send(JSON.stringify({
        sendTo:sendTo,
        type:type,
        data:data
    }));
}
function displayCall()
{
    callBox.removeClass('hidden');
    $('.wrapper').addClass('glass');
}

function displayAlert(username, profileimage, message)
{
    alertBox.find('#alertName').text(username);
    alertBox.find('#alertImage').attr('src', profileimage);
    alertBox.find('#alertMessage').text(message);
    alertBox.removeClass('hidden');
    $('.wrapper').addClass('glass');
    $('#video').addClass('hidden');
    $('#profile').removeClass('hidden');
}

function redirectToCall(username, sendTo)
{
    if(window.location.href.indexOf(username)==-1)
    {
        sessionStorage.setItem('redirect',true);
        sessionStorage.setItem('sendTo',sendTo);
        window.location.href='/VChat/'+username;

    }
}

if(sessionStorage.getItem('redirect'))
{
    sendTo = sessionStorage.getItem('sendTo');
    let waitForWs = setInterval(() => {
        if(conn.readyState===1)
        {
            send('client-is-ready',null, sendTo);
            clearInterval(waitForWs);

        }
    }, 500);
sessionStorage.removeItem('redirect');
sessionStorage.removeItem('sendTo');
}
