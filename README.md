# Paytm Clone Project

This repository contains a full-stack Paytm Clone, including both frontend and backend components.

## Overview

- **Frontend:** Built with React and Vite, provides user authentication, dashboard, money transfer, and transaction result pages.
- **Backend:** Built with Node.js, Express, and MongoDB, handles user management, authentication, and transaction APIs.

## Features

- User registration and login
- View account balance
- List all users
- Send money to other users
- Transaction history and result feedback

## Folder Structure

- `frontend/` – React-based client application
- `backend/` – Express.js server and API

## Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm or yarn
- Docker (for MongoDB, optional)

### Setup

#### Backend

```bash
cd backend
npm install
npm start
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

#### MongoDB (Docker)

```bash
docker build -t paytm-mongo .
docker run -d -p 27017:27017 --name paytm-mongodb paytm-mongo
```

## Environment Variables

- Add a `.env` file in `backend/` for sensitive configuration (e.g., JWT secret, MongoDB URI).

## License
