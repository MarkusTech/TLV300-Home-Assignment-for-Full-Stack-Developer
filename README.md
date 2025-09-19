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
