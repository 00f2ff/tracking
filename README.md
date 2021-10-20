# Tracking App

Backend: Async Kotlin server with H2 datastore
Frontend: Functional React + TypeScript

Requirements:

Backend
- [x] Each character has a name and six different stats which can range
     from 1 to 20. Those stats are Strength (STR), Dexterity (DEX),
     Constitution (CON), Intelligence (INT), Wisdom (WIS), Charisma (CHA).
     Do server-side validation
- [x] CRUD app
- [x] DB. Probably MySQL
- [] Authentication (nice to have) to control Update / Delete
- [] Authentication likely includes users in DB
- [] Error handling across the board
- [] Tests

Frontend
- [] TypeScript, functional React
- [] Tests

Deployment
- Probably just a docker compose that runs BE/FE