# Paytm Clone – Backend

Node.js + Express + MongoDB API that powers the Paytm Clone. Handles authentication, user listing, account balance, and money transfer.

## Tech Stack

- Node.js, Express
- MongoDB, Mongoose
- JSON Web Tokens (JWT)
- Zod for validation
- CORS, dotenv

## Requirements

- Node.js 18+
- MongoDB URI (local or Atlas)

## Setup

1. Create env file:
   - Copy `.env.example` to `.env` and set values
2. Install dependencies and run:
   ```bash
   cd backend
   npm install
   npm start
   ```
3. Server runs at: http://localhost:4000

### Environment Variables

- `MONGO_URL` – Mongo connection string (e.g., `mongodb://127.0.0.1:27017/paytm` or Atlas SRV URI)
- `JWT_SECRET` – Strong secret used to sign tokens

## Data Models

- UserData
  - username (unique, trimmed, lowercased)
  - password (plain for demo; do NOT use in production without hashing)
  - firstName, lastName
- AccountData
  - userId (ref UserData)
  - balance (number)

Note: On signup, an Account is created with a random starting balance.

## API Reference

Base: `/api/v1`

Auth

- POST `/user/signup`
  - Body: `{ username, password, firstName, lastName }`
  - 200: `{ msg, token }`
  - 411: invalid data or user already exists
- POST `/user/signin`
  - Body: `{ username, password }`
  - 200: `{ msg, token, id }`
  - 400: invalid credentials

User

- GET `/user/me` (auth)
  - 200: `{ username, firstName, lastName }`
  - 401: not authenticated
- GET `/user/bulk?filter=string` (auth)
  - 200: `{ user: [{ _id, username, firstName, lastName }, ...] }` excluding current user
- PUT `/user/` (auth)
  - Body: any of `{ password, firstName, lastName }`
  - 200: `{ msg: "user updated" }`

Account

- GET `/account/balance` (auth)
  - 200: `{ balance: number }`
- POST `/account/transfer` (auth)
  - Body: `{ to, amount }`
  - 200: `{ msg: "tansfer sucessful" }`
  - 400/411: invalid amount / insufficient balance / invalid to account

### Auth

Send Authorization header:

```
Authorization: Bearer <JWT>
```

## Common Issues

- 401 invalid token / not authenticated: Ensure `JWT_SECRET` is set and you pass `Authorization: Bearer <token>`.
- Mongo connection errors: Verify your `MONGO_URL`, IP allowlist (Atlas), and credentials.
- 411 errors: Validation failures or business rules (e.g., duplicate user, insufficient balance).

## Example cURL

```bash
# Signup
curl -X POST http://localhost:4000/api/v1/user/signup \
 -H "Content-Type: application/json" \
 -d '{"username":"test@example.com","password":"123456","firstName":"Test","lastName":"User"}'

# Signin
curl -X POST http://localhost:4000/api/v1/user/signin \
 -H "Content-Type: application/json" \
 -d '{"username":"test@example.com","password":"123456"}'

# Then set TOKEN from response and call:
# Balance
curl http://localhost:4000/api/v1/account/balance -H "Authorization: Bearer $TOKEN"
```

## Notes for MongoDB Atlas

- Use SRV connection string (mongodb+srv://...)
- Add your IP to the Network Access list
- Create a DB user with proper permissions
