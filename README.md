India Data Hub Dashboard (React + Vite)

A React-based data catalogue dashboard inspired by the India Data Hub interface.
This application allows users to explore hierarchical economic datasets with dynamic navigation, dataset switching, and paginated results.

Built using React + Vite for fast development and optimized performance.

Live Features

Login (UI simulation)

Dynamic hierarchical sidebar (recursive)

Dataset switching (India / IMF)

Economic indicators table

Pagination (10 records per page)

Pagination reset on dataset change

Responsive dashboard layout

Tech Stack

React (Vite)

JavaScript (ES6)

Context API (State Management)

React Router

CSS (Custom styling)

Project Overview

This project simulates a real-world data portal where users can:

Authenticate and access a dashboard

Browse economic categories in a nested structure

Switch between multiple datasets:

India Data (response1.json)

IMF Data (response2.json)

View frequently used indicators

Navigate large datasets efficiently

Folder Structure
src/
│
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── Table.jsx
│   └── Pagination.jsx
│
├── context/
│   ├── AuthContext.jsx
│   └── DataContext.jsx
│
├── data/
│   ├── response1.json
│   └── response2.json
│
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css


