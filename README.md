# Paytm Clone Project

This repository contains a full-stack Paytm Clone, including both frontend and backend components.

## Overview

- **Frontend**: React + Vite client
- **Backend**: Node.js + Express + MongoDB API

## Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)
- MongoDB running locally (or an Atlas URI)
- Docker (optional, for MongoDB)

## Quick Start

### 1) Backend

1. Create environment file:
   - Copy `backend/.env.example` to `backend/.env` and edit as needed
2. Install and run:
   ```bash
   cd backend
   npm install
   npm start
   ```
3. Server runs on http://localhost:4000

Env variables (backend):

- `MONGO_URL` (e.g., mongodb://127.0.0.1:27017/paytm)
- `JWT_SECRET` (set a strong secret)

### 2) Frontend

1. Create environment file:
   - Copy `frontend/.env.example` to `frontend/.env`
2. Install and run:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
3. App runs on the Vite dev server (URL shown in terminal, typically http://localhost:5173)

Env variables (frontend):

- `VITE_API_BASE_URL` (default http://localhost:4000)

## API Base URL in Frontend

The frontend currently calls backend endpoints using hardcoded `http://localhost:4000` URLs in some components.
If you deploy to another host/port, update these to use `VITE_API_BASE_URL` or let me refactor to a centralized API client.

Files using direct URLs (examples):

- `frontend/src/pages/Signin.jsx`
- `frontend/src/pages/Signup.jsx`
- `frontend/src/components/Balance.jsx`
- `frontend/src/components/Users.jsx`
- `frontend/src/components/AppBar.jsx`
- `frontend/src/pages/SendMoney.jsx`

## Optional: MongoDB with Docker

Simple standalone MongoDB:

```bash
# From repo root
docker run -d --name paytm-mongo -p 27017:27017 mongo:6
```

Replica-set (for transactions) example using included Dockerfile:

```bash
# This Dockerfile configures a Mongo image with a replica set
# Used only if you need transactions locally
# Build and run
docker build -t paytm-mongo-rs -f Dockerfile .
docker run -d --name paytm-mongo-rs -p 27017:27017 paytm-mongo-rs
```

## Detailed Docs

- Backend: `backend/README.md`
- Frontend: `frontend/README.md`

## Scripts

- Backend: `npm start` (in `backend/`)
- Frontend: `npm run dev` (in `frontend/`)

## Troubleshooting

- Ensure backend shows "backend running on port 4000"
- Verify Mongo connectivity: `MONGO_URL` reachable and correct (Atlas users: add your IP, ensure credentials correct)
- In browser DevTools, confirm API calls point to the correct host/port
- If env changes don’t take effect in frontend, restart Vite dev server

## License

For educational purposes.
