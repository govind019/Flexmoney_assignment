# YogVeda Website

## Project Overview
This is a Yoga website that allows users to subscribe to yoga sessions, select their batch timings, and make a fake payment for enrollment. The backend updates the batch, enrollment date, and status upon successful subscription.

## Features
- User Profile Management
- Subscription with Batch Selection
- Fake Payment Integration
- Backend Update for Enrollment Status
- Modern UI 

## Technologies Used
### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- jsonwebtoken
- bcrypt

## API Routes

### Registering User Data
```http
GET /api/auth/signup
```
registers the user details of a user.

### Logs in User
```http
GET /api/user/login
```
Logs in the user.

### Logs out User
```http
GET /api/user/logout
```
Logs out the user

### Fetch User Data
```http
GET /api/user/:id
```
Fetches the profile details of a specific user.

### Update User Profile
```http
POST /api/user/:id
```
Updates user profile (Name & Age) with validation.

### Subscribe to Batch
```http
POST /api/user/:id
```
Updates batch, enrollment date, and status after fake payment.

## Installation & Setup
1. Clone the repository:

2. Navigate to the client directory:
   ```sh
   cd client
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Navigate to the server directory:
   ```sh
   cd server
   ```
5. Install dependencies:
   ```sh
   npm install
   ```
6. Start the client:
   ```sh
   npm run dev
   ```
7. Run the backend server:
   ```sh
   npm run dev
   ```