# Whois API Backend

A **TypeScript Express backend** for fetching domain information and contact details using the [Whois API](https://whoisxmlapi.com/).  
This backend exposes a single endpoint for querying domain data, designed to be consumed by a frontend SPA.

---

## 📂 Folder Structure

backend/
├── src/
│ ├── app.ts # Express app setup
│ ├── server.ts # Server entry point
│ ├── routes/
│ │ └── whoisRoutes.ts
│ ├── controllers/
│ │ └── whoisController.ts
│ ├── config/
│ │ └── env.ts
│ ├── types/
│ │ └── whoisTypes.ts
├── .env
├── nodemon.json
├── tsconfig.json
├── package.json
└── README.md

yaml
Copy code

---

## ⚙️ Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- A free [Whois API key](https://whoisxmlapi.com/)

---

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend folder:

env
Copy code
WHOIS_API_KEY=at_your_generated_api_key_here
PORT=5000
Replace at_your_generated_api_key_here with your actual Whois API key.

🚀 Running the Server
Development Mode (auto-restarts on changes)
bash
Copy code
npm run dev
Production Mode
bash
Copy code
npm run build
npm start
📝 API Endpoint
POST /api/whois
Fetch domain or contact information.

Headers:

pgsql
Copy code
Content-Type: application/json
Request Body Example:

json
Copy code
{
  "domain": "amazon.com",
  "type": "domain"
}
domain (string): The domain to look up.

type (string): "domain" for domain info, "contact" for contact info.

✅ Response Example – Domain Info
json
Copy code
{
  "domainName": "amazon.com",
  "registrar": "MarkMonitor Inc.",
  "registrationDate": "1994-11-01T05:00:00Z",
  "expirationDate": "2028-11-01T05:00:00Z",
  "estimatedDomainAge": "30",
  "hostnames": "ns1.p31.dynect.net, ns2..."
}
✅ Response Example – Contact Info
json
Copy code
{
  "registrantName": "Amazon.com, Inc.",
  "technicalContactName": "Amazon.com, Inc.",
  "adminContactName": "Amazon.com, Inc.",
  "contactEmail": "abuse@amazon.com"
}
❌ Error Response Example
json
Copy code
{
  "error": "Failed to fetch WHOIS data"
}
🧰 Features
TypeScript + Express backend

MVC-ish structure: controllers + routes

Environment configuration with .env

Nodemon for auto-restart in dev

CORS enabled for frontend requests

Graceful error handling

Truncated hostnames if longer than 25 characters

📡 Testing with Postman
Create a POST request to:

bash
Copy code
http://localhost:5000/api/whois
Add header:

pgsql
Copy code
Content-Type: application/json
Add body:

json
Copy code
{
  "domain": "amazon.com",
  "type": "domain"
}
Click Send and you should receive the WHOIS data.

🔒 Notes
Make sure your .env file is never committed to GitHub.

Restart the server after updating .env.

The backend runs on http://localhost:5000 by default.
```
