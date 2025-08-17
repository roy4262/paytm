# Frontend (React + Vite)

## Environment

Create a `.env` file in `frontend/` to configure API base URL:

```
VITE_API_BASE_URL=http://localhost:4000
```

## Scripts

- dev: `npm run dev`
- build: `npm run build`
- preview: `npm run preview`

The app uses a centralized Axios client (`src/apiClient.js`) that reads `VITE_API_BASE_URL`.
