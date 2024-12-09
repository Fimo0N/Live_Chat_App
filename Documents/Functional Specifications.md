# Functional Requirements

## Script

The backend is developed using PHP to handle WebRTC signaling and manage user sessions.
The frontend uses JavaScript, HTML, and CSS for user interface and responsiveness.
The system supports real-time, one-to-one video communication, where users can initiate, accept, or decline video calls.
The application provides notifications for incoming calls and displays both local and remote video streams.
WebSocket is used for real-time communication and signaling, while WebRTC manages the video connection.

## List of Requirements

- **Tech Stack**: PHP (Backend), WebRTC (Peer-to-Peer Video), WebSocket (Real-Time Signaling), MySQL (Database for managing user sessions).
- **One-to-One Video Chat**: The system must support initiating, accepting, and declining video call requests in real time.
- **Real-Time Signaling**: WebSocket should handle all signaling and session control for WebRTC connection setup.
- **User Interface**: A dynamic UI that displays video streams, call notifications, and accept/decline buttons for incoming calls.
- **Secure Login and Session Management**: Each user should be authenticated and maintain a secure session with unique tokens.

## UI Plan

- **Stylish UI Components**: Design an intuitive interface for call control, with clear buttons for call initiation, accept, and decline.
- **Call Notifications**: Notifications for incoming calls with options to accept or decline should be visible to users.
- **Video Display Areas**: Separate areas for local and remote video streams should be designed for easy viewing.
- **Responsive Layout**: Ensure the layout adjusts seamlessly across different device screen sizes (desktop, tablet, mobile).

## How the System Should Be

- The system should function as a real-time communication application, allowing seamless one-to-one video calls between users.
- The backend should follow best practices for PHP development, with structured code for WebSocket and WebRTC signaling.
- The frontend should offer a clean, visually appealing interface that allows users to easily initiate or respond to video calls.
- WebSocket communication should handle errors gracefully, ensuring a stable connection and smooth user experience.

## Goal

- To build and deploy a fully functional one-to-one video chat application that showcases expertise in real-time communication with WebRTC and WebSocket.
- Make the application accessible to users on a web server with SSL for secure video connections and WebSocket signaling.
  
## Constraints

- The application should be deployed on a server with SSL support to enable secure WebSocket and WebRTC connections.
- WebSocket and WebRTC implementation must be optimized to ensure low latency and high call quality.
- User data must be securely managed, with session tokens and authentication.

## Reports

- Logs of call requests, connection status, and any errors should be accessible for debugging or tracking purposes.
- Any issues during WebRTC signaling or WebSocket communication should be logged and handled gracefully by the system.
