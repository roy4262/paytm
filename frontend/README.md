# Paytm Clone – Frontend

React + Vite frontend for the Paytm Clone. Implements signup, signin, dashboard with balance, user list, and send-money flow.

## Tech Stack

- React 18, React Router
- Vite
- Axios
- Tailwind CSS

## Requirements

- Node.js 18+
- Backend running (default http://localhost:4000)

## Setup

1. Create env file:
   - Copy `.env.example` to `.env`
2. Install and run:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
3. Dev server URL is shown in the terminal (typically http://localhost:5173)

### Environment Variables

- `VITE_API_BASE_URL` – Backend base URL (e.g., `http://localhost:4000`)

## API Base URL Usage

All API calls read from `VITE_API_BASE_URL` (fallback to `http://localhost:4000`).
Files using it:

- `src/pages/Signin.jsx`
- `src/pages/Signup.jsx`
- `src/pages/SendMoney.jsx`
- `src/components/Balance.jsx`
- `src/components/Users.jsx`
- `src/components/AppBar.jsx` (for `/user/me`)

## Available Scripts

- `npm run dev` – Start dev server
- `npm run build` – Production build
- `npm run preview` – Preview built app
- `npm run lint` – Lint code

## Troubleshooting

- 401 errors: Make sure you have a valid token in localStorage (`token`) and backend `JWT_SECRET` matches.
- CORS errors: Ensure backend has `cors()` middleware (it does in this project) and that the backend is running.
- Network errors: Check that `VITE_API_BASE_URL` points to the correct backend URL/port.
