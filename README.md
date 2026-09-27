# CodeChef ABESEC — College Club Event Management

A responsive full-stack recruitment task project for managing college club events.

## Stack
- React + Vite
- Node.js + Express
- REST API
- Responsive CSS

## Features
### Student
- Home page and club introduction
- Upcoming events
- Events page
- Search and category filter
- Event registration
- Responsive UI

### Admin
- Add/edit/delete events
- View registered students
- Registration data table

## Run locally
### Backend
```bash
cd server
npm install
npm start
```
API: http://localhost:5000

### Frontend
```bash
cd client
npm install
npm run dev
```
Frontend: http://localhost:5173

> Demo data is stored in memory, so restarting the backend resets events and registrations. For production, connect MongoDB/PostgreSQL and add authentication.
