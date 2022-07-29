const { REACT_APP_API_URL, VERCEL_ENV } = process.env
const API_URL = VERCEL_ENV === "production" ? "" : REACT_APP_API_URL

export { API_URL }
