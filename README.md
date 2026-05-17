# Travel Memory - Full Stack MERN Application

## Project Overview

Travel Memory is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application where users can:

- Add travel experiences
- Store trip details
- View travel memories
- Manage trip information

The application includes:

- React frontend
- Node.js + Express backend
- MongoDB Atlas database
- REST API integration

---

# Tech Stack

## Frontend
- React.js
- Bootstrap
- Axios

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- MongoDB Compass

---

# Project Structure

```bash
TravelMemory/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── conn.js
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

**Features**
Add travel experiences
Store trip details in MongoDB Atlas
View all travel memories
Featured trip support
REST API communication
Responsive UI using Bootstrap
MongoDB Configuration
MongoDB Atlas

The application uses MongoDB Atlas cloud database.

Environment Variables

Create .env file inside backend folder:

PORT=3000
MONGO_URI=mongodb+srv://priyankarevri_db_user:Priyanka%40Ishan%40Rishi123@priyankacloud.dj4hhoh.mongodb.net/travelmemory?retryWrites=true&w=majority&appName=PriyankaCloud
Backend Setup

Navigate to backend:

cd backend

Install dependencies:
npm install

Start backend server:
npm start

Backend runs on:
http://localhost:3000
Frontend Setup

Navigate to frontend:
cd frontend

Install dependencies:
npm install

Start frontend server:
npm start

Frontend runs on:
http://localhost:3001
API Endpoints
Add Trip
POST /trip
Get All Trips
GET /trip
Get Trip By ID
GET /trip/:id
MongoDB Collection

