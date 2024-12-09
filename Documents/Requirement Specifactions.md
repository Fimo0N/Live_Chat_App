# Project Requirement Specification

## Project Name
One-to-One Live Video Chat Application

## Purpose
To create a web application that enables real-time one-to-one video communication between users, similar to WhatsApp or Google Meet.

## Intended Audience
End-users who need a responsive, real-time video communication tool, designed to provide high-quality video chat features.

## User Needs
- Simple and intuitive interface for initiating and receiving video calls.
- Real-time communication with minimal latency.
- Notifications for incoming calls with accept/decline options.
- Visual display of local and remote video streams.
- Secure connections through token-based authentication and session management.

## System Rules, Patterns, Recommendations
- Use virtual environments (venv) for development.
- Follow best practices in PHP, JavaScript, and MySQL.
- Use WebRTC for peer-to-peer video communication.
- Use WebSocket for signaling and real-time message handling.
- Set up MySQL as the database for session and user data persistence.

## Current Business Flow Model
1. User logs in, establishing a secure session.
2. User can initiate or receive a video call request.
3. Upon receiving a call, the user can accept or decline through a popup.
4. If accepted, a peer-to-peer video connection is established between the users.
5. Video call is displayed with both local and remote video streams.
6. WebSocket facilitates signaling between users for connection setup.
7. Data is securely handled with session tokens.

## Project Outline
- **Tech Stack**: PHP (Backend), JavaScript (Frontend), WebRTC, WebSocket, MySQL (Database)
- **Features**:
  - One-to-one video chat using WebRTC.
  - Real-time signaling using WebSocket.
  - Secure login and session management.
  - Notification system for incoming call requests.
- **Deployment**: Deployment on a web server with secure WebSocket and SSL support.

## Current Situation
The project is currently under development. The backend is built using PHP, while JavaScript is utilized for frontend functionality. WebRTC is set up for establishing peer-to-peer video connections, and WebSocket is configured for real-time signaling. MySQL is used as the database for managing user data and sessions.

## Goal
To deploy the application, making it accessible to users and ensuring a smooth, reliable video chat experience. The app should be scalable and maintainable.

## Glossary
- **WebRTC**: Web Real-Time Communication, used for peer-to-peer audio and video.
- **WebSocket**: A protocol for real-time, bidirectional communication.
- **Signaling Server**: Server used to coordinate WebRTC connections between users.

## Non-Functional Requirements
- Responsive design adaptable to different screen sizes.
- Secure video connections using WebRTC.
- App must support SSL for secure WebSocket connections.
- Reliable call quality with low latency and high availability.
