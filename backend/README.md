# Whois API Backend

A **TypeScript Express backend** for fetching domain information and contact details using the [Whois API](https://whoisxmlapi.com/).  
This backend exposes a single endpoint for querying domain data, designed to be consumed by a frontend SPA.

---

## 📂 Folder Structure

```bash
backend/
├── src/
│   ├── app.ts                 # Express app setup
│   ├── server.ts              # Server entry point
│   ├── routes/
│   │   └── whoisRoutes.ts     # API routes
│   ├── controllers/
│   │   └── whoisController.ts # Controller logic
│   ├── config/
│   │   └── env.ts             # Environment variables
│   ├── types/
│   │   └── whoisTypes.ts      # TypeScript types
├── .env
├── nodemon.json
├── tsconfig.json
├── package.json
└── README.md
```

---

## Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- A free [Whois API key](https://whoisxmlapi.com/)

---

## Installation

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
