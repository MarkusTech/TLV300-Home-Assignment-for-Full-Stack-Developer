# Whois Lookup Full-Stack Application

This project is a full-stack application that allows users to query Whois information for any domain.
It provides both Domain Information and Contact Information using the Whois API.

The backend is built with Node.js + Express + TypeScript, and the frontend is built with React + Vite.

# Features

# Backend (Express + TypeScript)

One main endpoint /api/whois that:

- Accepts a domain name and type (domain or contact).
- Fetches Whois data from the Whois API.
- Returns a cleaned and structured response.
  Handles errors gracefully (invalid domains, API errors, etc.).
  Configurable with .env (no sensitive data committed).

# Frontend (React + Vite)

- Single-page application with:
- Input field for a domain name.
- Dropdown to select Domain Info or Contact Info.
- Button to submit lookup.
- Results displayed in a styled table format.
  Graceful error handling for failed lookups.
  Styled with TailwindCSS (or your chosen styling).

# Project Structure

# Backend

```bash
backend/
├── src/
│ ├── app.ts # Express app setup
│ ├── server.ts # Server entry point
│ ├── routes/
│ │ └── whoisRoutes.ts
│ ├── controllers/
│ │ └── whoisController.ts
│ ├── types/
│ │ └── whoisTypes.ts
│ └── config/
│ └── env.ts
├── .env
├── tsconfig.json
├── package.json

```

# Frontend

```bash
frontend/
├── src/
│   ├── components/         # React components
│   ├── pages/              # Page views
│   ├── App.tsx             # Main entry
│   └── main.tsx            # ReactDOM render
├── index.html
├── vite.config.ts
├── package.json

```

# Setup & Installation

# 1. Clone the repository

```bash
git clone https://github.com/MarkusTech/TLV300-Home-Assignment-for-Full-Stack-Developer.git
cd TLV300-Home-Assignment-for-Full-Stack-Developer
```

# 2. Backend Setup

```bash
cd backend
npm install
```

# Create a .env file by copying the example file:

```bash
cp .env.example .env
```

# Then open .env and add your own Whois API key:

```bash
PORT=5000
WHOIS_API_KEY=your_api_key_here
WHOIS_BASE_URL=https://whoisxmlapi.com/whoisserver/WhoisService
```

# Run backend in dev mode:

```bash
npm run dev
```

# 3. Frontend Setup

```bash
cd frontend
npm install
```

# Run frontend in dev mode:

```bash
npm run dev
```

# Usage

1. Open the frontend at http://localhost:5173.
2. Enter a domain (e.g., amazon.com).
3. Choose data type:

- Domain Information → registrar, registration date, expiration date, domain age, hostnames.
- Contact Information → registrant, technical, admin, contact email.

4. Click Lookup.
5. Results appear in a formatted table.

# Example API Request (Backend)

# POST http://localhost:5000/api/whois

```bash
{
  "domain": "amazon.com",
  "type": "domain"
}
```

# Response (Domain Info Example)

```bash
{
  "domainName": "amazon.com",
  "registrar": "MarkMonitor Inc.",
  "registrationDate": "1994-11-01",
  "expirationDate": "2028-11-01",
  "estimatedDomainAge": "30 years",
  "hostnames": "ns1.p31.dynect.net, ns2.p31.dynect.net..."
}
```

# Notes

- API key must be obtained from WhoisXML API.
- Hostnames field is truncated at 25 characters as per assignment requirements.
- Errors (invalid domain, missing key, request failure) are displayed clearly on the frontend.
