# Chatya (Real-Time Chat Application)

**Chatya** is a modern, responsive real-time chat application built with the MERN stack. It leverages Socket.io for instant messaging, provides secure authentication, and includes online presence indicators. Styled with TailwindCSS and Daisy UI, Chatya delivers a smooth and engaging user experience.  

**Live Demo:** [https://chatappdeploy-tyld.onrender.com/](https://chatappdeploy-tyld.onrender.com/)

---
### Test Login Credentials
You can try the app using the following account:

- **Email:** test@example.com
- **Password:** Test@1234


## About the Project

I built Chatya to deepen my understanding of full-stack development and real-time applications. This project pushed me to learn and implement new technologies like **Socket.io** for real-time messaging and **Zustand** for state management. While integrating these tools, I faced challenges like synchronizing messages across multiple users and efficiently handling global state, which taught me a lot about real-world application architecture.

---

## Key Features

- **Secure Authentication:** JWT-based login and protected routes  
- **Real-Time Messaging:** Instant chat powered by Socket.io  
- **Online Status:** See which users are online in real-time  
- **Global State Management:** Lightweight state handling with Zustand  
- **Media Uploads:** Upload and store profile images using Cloudinary  
- **Error Handling:** Graceful handling of issues on both client and server  

---

## Feature Overview

| Feature | Description |
|---------|-------------|
| **JWT Authentication** | Implemented secure login and protected routes. Learned the nuances of token-based authentication and managing user sessions. |
| **Real-Time Messaging (Socket.io)** | Developed fast, real-time conversations. Overcame challenges in synchronizing messages across multiple clients and handling socket events efficiently. |
| **Online Status** | Show online/offline users in real-time. This required understanding Socket.io presence management and updating the UI dynamically. |
| **Global State Management (Zustand)** | Managed app-wide state using Zustand. Initially challenging as I was learning it from scratch, but it made state handling much simpler and cleaner. |
| **Cloudinary Media Uploads** | Enabled profile picture and media uploads. Learned how to integrate third-party cloud storage and handle file uploads securely. |
| **Error Handling** | Added error boundaries and server-side error handling. Improved app reliability and user experience by gracefully managing unexpected issues. |

---

## Tech Stack

- **Frontend:** React, TailwindCSS, Daisy UI  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Real-Time Communication:** Socket.io  
- **State Management:** Zustand  
- **Deployment:** Render, Firebase  

---

## Screenshots & Demo

### GIF Showcase
Here’s a quick visual overview of Chatya in action:  

![Chatya Demo GIF](https://github.com/satyajit-jbl/chatAppDeploy/blob/main/images/chatApp.gif)

### Screenshots
**Login & Registration**  
![Login Page](https://github.com/satyajit-jbl/chatAppDeploy/blob/main/images/login.PNG)  

**Sending Image**  
![Login Page](https://github.com/satyajit-jbl/chatAppDeploy/blob/main/images/image.PNG)  

**Real-Time Chat Interface with Online Status**  
![Chat Interface](https://github.com/satyajit-jbl/chatAppDeploy/blob/main/images/Online.PNG)  

**Color theme interface**  
![Online Status](https://github.com/satyajit-jbl/chatAppDeploy/blob/main/images/theme.PNG)  


---

## How I Built It

1. **Backend Setup:**  
   - Configured Express server and MongoDB database.  
   - Implemented JWT authentication and secure routes.  

2. **Real-Time Chat with Socket.io:**  
   - Learned how to handle socket connections, events, and broadcasting messages.  
   - Managed online/offline user presence and real-time updates.  

3. **Frontend Development:**  
   - Built responsive UI with React, TailwindCSS, and Daisy UI.  
   - Integrated Zustand for lightweight global state management.  

4. **Media Uploads:**  
   - Configured Cloudinary for profile image uploads.  
   - Managed file handling securely on both client and server.  

5. **Error Handling & Deployment:**  
   - Implemented error boundaries on the frontend.  
   - Set up server-side error handling for reliability.  
   - Deployed full-stack app using Render and Firebase.  

---

## Challenges & Learning

- Learning **Socket.io** for real-time updates was challenging but rewarding.  
- **Zustand** required a new approach to state management, which improved my understanding of app architecture.  
- Implementing **JWT authentication** deepened my knowledge of secure session handling.  
- Integrating **Cloudinary** gave hands-on experience with cloud storage and media uploads.  

This project strengthened my full-stack skills and taught me how to build scalable, user-friendly, real-time applications.

---

## Future Development / Roadmap

I am constantly looking to improve Chatya’s user experience. Planned enhancements include:


- **Read Receipts & Typing Indicators**: Real-time feedback on message delivery and activity.
- **Group Chats & Channels**: Support for multiple users in the same conversation.
- **Push Notifications**: Alerts for new messages even when offline or in background.
- **Media Sharing Enhancements**: Support videos, GIFs, and file attachments, although currently the app can only send small-size images.
- **Emoji & Reactions**: React to messages with emojis to make conversations fun.
- **Search & Filters**: Quickly find messages or conversations.
- **Performance Optimization**: Improve speed and memory usage for long conversations.
- **Accessibility Improvements**: Enhance navigation, screen reader support, and contrast for all users.
- **Message Actions**: Add the ability to delete/unsend messages, forward messages to other users, and edit sent messages.



## Setup Instructions

1. Clone the repository:  
```bash
git clone https://github.com/satyajit-jbl/chatAppDeploy
```


2. Navigate to the project directory:  
```bash
cd chatApp-Satyajit
```
3. Install dependencies:  
```bash
npm install
```
4. Configure environment variables (MongoDB URI, JWT secret, Cloudinary keys, etc.)  

5. Run the app locally:
```bash
npm run dev
```

## Acknowledgements

Special thanks to **burakorkmez** for the original idea and inspiration behind Chatya.