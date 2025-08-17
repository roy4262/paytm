# Paytm Clone (Full‑Stack)

A minimal Paytm-like app with user auth, balance view, and P2P transfers.

## Tech Stack

- **Frontend**: React 18, Vite, React Router, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB, Mongoose, Zod, JSON Web Tokens (JWT)
- **Tooling**: ESLint, Axios

## Features

- User signup and signin (JWT-based)
- View authenticated user profile (first/last name)
- View account balance
- Search users and send money to another user
- Transaction result screen

## Monorepo Structure

```
.
├─ backend/                 # Express API
│  ├─ routes/               # user & account routes
│  ├─ db.js                 # Mongoose models & connection
│  ├─ middleware.js         # JWT auth middleware
│  ├─ index.js              # Server entry (port 4000)
│  └─ .env                  # MONGO_URL, JWT_SECRET (you create this)
├─ frontend/                # React app (Vite)
│  ├─ src/pages/            # Landing, Signin, Signup, Dashboard, SendMoney, Result
│  ├─ src/components/       # AppBar, Balance, Users, etc.
│  └─ vite.config.js
└─ README.md
```

## Prerequisites

- Node.js 18+ and npm
- MongoDB running locally (or via Docker)
- Ports used: **4000** (backend), **5173** (frontend)

## Quick Start

1. Backend

```bash
cd backend
npm install
# Create .env (see below)
npm start
# backend running on http://localhost:4000
```

2. Frontend

```bash
cd frontend
npm install
npm run dev
# frontend running on http://localhost:5173
```

## Environment Variables (backend/.env)

Create `backend/.env` with:

```ini
MONGO_URL=mongodb://127.0.0.1:27017/paytm
JWT_SECRET=replace-with-a-strong-secret
```

Notes:

- The backend loads `.env` from the `backend/` folder.
- Ensure MongoDB is reachable at `MONGO_URL`.

## API Reference

- **Base URL**: `http://localhost:4000/api/v1`
- **Auth Header**: `Authorization: Bearer <token>`

### Auth & User

- POST `/user/signup`

  - Body:
    ```json
    {
      "username": "john@example.com",
      "password": "secret123",
      "firstName": "John",
      "lastName": "Doe"
    }
    ```
  - Response: `{ msg, token, user }`

- POST `/user/signin`

  - Body:
    ```json
    { "username": "john@example.com", "password": "secret123" }
    ```
  - Response: `{ msg, token, user }`

- GET `/user/me` (auth)

  - Response: `{ username, firstName, lastName }`

- PUT `/user` (auth)

  - Body (any field optional):
    ```json
    { "firstName": "Jane", "lastName": "Doe", "password": "newpass" }
    ```
  - Response: `{ msg: "user updated" }`

- GET `/user/bulk?filter=` (auth)
  - Returns other users matching `firstName` or `lastName` (excluding current user)
  - Response: `{ user: [{ _id, username, firstName, lastName }] }`

### Account

- GET `/account/balance` (auth)

  - Response: `{ balance: number }`

- POST `/account/transfer` (auth)
  - Body:
    ```json
    { "to": "<otherUserId>", "amount": 1000 }
    ```
  - Response: `{ msg: "tansfer sucessful" }`

### cURL Examples

```bash
# Sign up
curl -X POST http://localhost:4000/api/v1/user/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"john@example.com","password":"secret123","firstName":"John","lastName":"Doe"}'

# Sign in (get token)
TOKEN=$(curl -s -X POST http://localhost:4000/api/v1/user/signin \
  -H "Content-Type: application/json" \
  -d '{"username":"john@example.com","password":"secret123"}' | jq -r .token)

# Me
curl http://localhost:4000/api/v1/user/me -H "Authorization: Bearer $TOKEN"

# Balance
curl http://localhost:4000/api/v1/account/balance -H "Authorization: Bearer $TOKEN"

# Search users
curl "http://localhost:4000/api/v1/user/bulk?filter=jo" -H "Authorization: Bearer $TOKEN"

# Transfer
curl -X POST http://localhost:4000/api/v1/account/transfer \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"to":"<OTHER_USER_ID>","amount":500}'
```

## Frontend Notes

- Routes:
  - `/` Landing
  - `/signin`, `/signup`
  - `/dashboard` (requires auth)
  - `/send` (navigated with `?id=<userId>&name=<firstName>`)
  - `/result`
- Auth token is stored in `localStorage` after signin.
- Components call backend at `http://localhost:4000` via Axios with `Authorization` header.

## Development

- Frontend scripts (in `frontend/`):
  - `npm run dev` — start Vite dev server (HMR)
  - `npm run build` — build for production
  - `npm run preview` — preview production build
  - `npm run lint` — ESLint report
- Backend scripts (in `backend/`):
  - `npm start` — start Express server

## Troubleshooting

- "Cannot connect to server" / `ECONNREFUSED`:
  - Ensure MongoDB is running and `MONGO_URL` is correct
  - Ensure backend is running on port 4000
- Auth errors (`411` or token invalid/expired):
  - Sign in again; the app will clear token and redirect to `/signin` when invalid
- Empty dashboard:
  - Check that backend endpoints respond correctly and token exists in `localStorage`
- CORS issues:
  - Backend enables CORS globally via `cors()`

## Security Notes (for production hardening)

- Passwords are currently stored as plaintext in MongoDB (demo only). Add hashing (e.g., bcrypt) and salting before production use.
- Use HTTPS and secure cookies/local storage strategies.
- Validate and sanitize all inputs thoroughly (Zod is already used server-side).

## License

This project is for learning purposes. Add a license if you plan to distribute.

---

If you need a more advanced setup (Docker Compose for Mongo + API + Frontend, CI, or production build instructions), let me know and I’ll extend this README with those details.
