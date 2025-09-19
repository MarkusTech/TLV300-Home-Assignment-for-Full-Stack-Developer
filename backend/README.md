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
