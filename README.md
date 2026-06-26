# MediQueue – Tutor Booking System

## Live Website
🔗 Live Site URL: https://madiquee-tutor-b13-a9-wxi5.vercel.app/

## Client Repository
🔗 GitHub Client: https://github.com/ibrahimhosen4045-max/Madiquee-Tutor-B13-A9.git

## Server Repository
🔗 GitHub Server: https://github.com/ibrahimhosen4045-max/A9_server.git


## Project Overview

MediQueue is a modern tutor booking web application designed to make the tutor-student scheduling process simple, organized, and efficient.

Students can explore available tutors, search and filter tutors based on requirements, book learning sessions, and manage their scheduled classes. Tutors can create, update, and manage their tutor profiles through a secure dashboard.

The system prevents scheduling conflicts, manages available slots automatically, and generates digital booking sessions for a smooth learning experience.


## Features

- 🔐 Secure authentication system with Email/Password login and Google authentication.
- 👨‍🏫 Users can create, update, and delete their own tutor profiles.
- 🔎 Advanced tutor searching with case-insensitive name search using MongoDB regex.
- 📅 Tutor filtering system based on registration dates.
- 📚 Students can view tutor details and book available learning sessions.
- 🎟️ Automatic session booking management with slot availability control.
- 📊 Personal dashboard for managing created tutors and booked sessions.
- 🌙 Dark and Light theme toggle for better user experience.
- 📱 Fully responsive design for mobile, tablet, and desktop devices.
- 🔔 Toast notifications for all CRUD operations and user activities.
- 🚫 Protected private routes with authentication verification.
- ⚡ Dynamic page titles based on route changes.
- 🛡️ JWT authentication implemented for secure private route access.


## Technology Stack

### Client Side
- Next.js
- React.js
- JavaScript
- Tailwind CSS
- React Hook Form
- Axios
- React Hot Toast
- Lucide React Icons

### Server Side
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- CORS
- Dotenv


## Main Pages

### Public Pages
- Home Page
- Tutors Page
- Login Page
- Register Page
- 404 Not Found Page


### Private Pages
- Add Tutor
- Tutor Details
- My Tutors
- My Booked Sessions
- Profile Management


## Authentication Features

- User registration with password validation.
- User login with email and password.
- Google social authentication.
- Protected private routes.
- JWT token verification.
- User-specific data management.


## Tutor Management

Users can:

- Add tutor information.
- Upload tutor image.
- Select subject category.
- Set available days and time slots.
- Add hourly fees and total slots.
- Add institution, experience, and location.
- Update tutor information.
- Delete tutor profiles.


## Booking System

Students can:

- View detailed tutor information.
- Book available sessions.
- Get automatic slot validation.
- Prevent booking before session start date.
- Automatically decrease available slots after successful booking.
- Cancel booked sessions.


## Search and Filter

The Tutors page includes:

- Tutor name search functionality.
- Case-insensitive searching.
- Date range filtering using MongoDB operators:
  - `$gte`
  - `$lte`
  - `$regex`


## UI Features

- Modern responsive layout.
- Smooth animations.
- Consistent typography and button design.
- Mobile-friendly navigation.
- Dark/Light theme support.
- Loading spinner during data fetching.
- Friendly empty-state messages.


## Deployment

The application is deployed using:

- Client: Vercel
- Server: Vercel / Render


## Installation and Setup

### Client Setup

```bash
git clone client-repository-link

cd client-folder

npm install

npm run dev