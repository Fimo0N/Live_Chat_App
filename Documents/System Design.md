# System Design Document

## 1. Introduction

**Project Overview**: This document describes the design of a web-based video chat application. Users can engage in real-time, one-on-one video calls through WebRTC, supported by WebSocket signaling for communication management.

**Tech Stack**:
- **Backend**: PHP, WebSocket, MySQL
- **Frontend**: JavaScript, HTML, CSS
- **Deployment**: Server with SSL for secure WebRTC connections

**Key Features**:
- Real-time video chat functionality
- User authentication and session management
- Simple and responsive design across devices
- WebSocket signaling for stable video call initiation and management

## 2. Overview

**System Structure**: The application follows a client-server model where the frontend (JavaScript, HTML, CSS) communicates with the backend (PHP) for signaling and data management. WebRTC is used for the peer-to-peer video connection, while WebSocket handles signaling.

**Primary Components**:
- **Backend API**: Manages signaling for WebRTC, session control, and user authentication.
- **Frontend Interface**: Displays video streams, manages user interactions, and initiates WebRTC connections.
- **Database**: MySQL for storing user session and profile information.

## 3. Goal

**Primary Objective**: To develop a secure, easy-to-use web application for real-time video chat.

**Secondary Objectives**: Ensure responsiveness, SSL-enabled deployment, and smooth call management.

## 4. Context

**User Base**: Intended for users seeking an accessible platform for live video chats, requiring minimal setup.

**Problem Solved**: Enables real-time communication with efficient signaling and a simple interface.

## 5. Design

- **Frontend**: Built with JavaScript, HTML, and CSS, with a focus on simplicity and responsiveness. Controls for starting, accepting, or declining calls are accessible on various devices.
- **Backend**: PHP handles WebSocket signaling, session management, and MySQL database interactions for user sessions.
- **Data Flow**: User actions on the frontend trigger signaling via WebSocket. PHP processes the signals to set up WebRTC connections between users.

## 6. Database Design

**Database**: MySQL, chosen for user session management and scalability.

**Tables**:
- **Users**:
  - **ID**: Integer, Primary Key, Auto-increment
  - **Name**: String, required
  - **Email**: String, required, unique
  - **Session ID**: String, unique identifier for active sessions
  - **Profile Image**: String, optional

**ORM**: SQL queries for database interaction.

## 7. Architectural Plan

**Architecture**: Client-server model using WebRTC for video connections and WebSocket for signaling.

**Components**:
- **API Endpoints**: RESTful endpoints for user authentication and session management.
- **WebSocket Signaling**: Handles signaling for WebRTC connection initiation, management, and teardown.
- **Data Flow**: The frontend communicates via WebSocket for real-time signaling, and the backend manages user sessions and signaling.

**Deployment**: Hosted on a server with SSL for secure WebSocket and WebRTC connections.

## 8. Functionality

**Features**:
- **One-on-One Video Chat**: Enables direct video calls between users.
- **Real-Time Signaling**: WebSocket-based signaling manages call setup, response, and disconnection.
- **UI for Call Management**: Users can initiate, accept, or decline calls with visible notifications and controls.
- **Responsive Design**: Optimized layout for desktop, tablet, and mobile.

**UI/UX**: Simple, intuitive design for easy navigation, with accessible call controls.

## 9. Testing Plan

**Backend Tests**:
- **Unit tests** for WebSocket signaling and user session management.
- **Integration tests** for database operations, verifying session handling.

**Frontend Tests**:
- **Component testing** for UI elements like call controls.
- **End-to-end testing** for user interactions, including call initiation and connection stability.

**Manual Testing**:
- Check responsiveness and user flow for call management across devices.

## 10. TDD (Test-Driven Development)

**Methodology**: Write tests for key functionality before implementation.

**Backend TDD**: Write unit tests for each WebSocket signaling event, verifying correct connection responses.

**Frontend TDD**: Test UI components and simulate user actions, like clicking call buttons and adjusting video streams.

## 11. Current Situation

**Development Status**: Initial prototype complete, tested locally. Deployment in progress.

**Known Issues**: Requires SSL setup for secure WebRTC and WebSocket connections.

**Future Enhancements**: Add group calling, improve call quality, and integrate more user feedback.

## 12. Functional Design

**Backend Functions**:
- WebSocket signaling to manage video call setup.
- REST API endpoints for user session management.
- Data persistence for user sessions.

**Frontend Components**:
- Call controls for video chat management (initiate, accept, decline).
- Notifications for incoming calls.
- Video stream display for local and remote users.

**Responsive Layout**: Designed to work across various screen sizes.

## 13. Maintenance Plan

**Code Maintenance**:
- Use version control for managing codebase updates.
- Regular updates to dependencies.

**Deployment Maintenance**: Monitor server performance and WebSocket stability.

**Database Maintenance**: Perform regular backups and optimize session management.

## 14. Open Questions

**Database Scalability**: Consider a more robust database (e.g., PostgreSQL) if user load increases significantly.

**Additional Features**: Potential for group calling and integration with other communication apps.

**User Authentication**: Currently simple; may expand if multi-user access becomes required.

## 15. User Case Diagram

Illustrates user interactions:
- Initiating a call
- Receiving an incoming call
- Accepting or declining a call
- Ending a call

Diagram shows each user action and corresponding WebSocket events.

## 16. Summary

**Project Recap**: A WebRTC-based video chat application for real-time, one-on-one communication.

**Key Features**: Real-time video chat, WebSocket signaling, responsive design.

**Future Considerations**: Potential for group chat, improved scalability, and enhanced user management.
