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
│ │ └── whoisTypes.ts # (optional) type definitions
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

git clone https://github.com/MarkusTech/TLV300-Home-Assignment-for-Full-Stack-Developer.git
cd TLV300-Home-Assignment-for-Full-Stack-Developer
