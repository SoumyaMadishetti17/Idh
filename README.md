# India Data Hub Dashboard (React + Vite)

A React-based data catalogue dashboard inspired by the India Data Hub interface. This application allows users to explore hierarchical economic datasets, switch between multiple data sources, and efficiently navigate large datasets using pagination. The project demonstrates dynamic UI rendering, clean architecture, and performance optimization using modern React practices.

---

## Features

* Login interface (UI simulation using Context API)
* Dataset switching between:

  * India Data (`response1.json`)
  * IMF Data (`response2.json`)
* Dynamic recursive sidebar with expand/collapse
* Supports deeply nested category structures
* Economic Monitor table displaying frequently used indicators
* Pagination (10 records per page)
* Automatic pagination reset when dataset changes (improved UX)
* Dashboard layout similar to real-world data portals

---

## Tech Stack

* React (Vite)
* JavaScript (ES6)
* Context API (Global State Management)
* React Router
* Custom CSS
* Static JSON Data

---

## Project Structure

```
src/
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
```

---

## Key Concepts Implemented

* Recursive component rendering for hierarchical sidebar navigation
* Context API for authentication and dataset management
* Dynamic UI generation from JSON data
* Pagination using array slicing to improve performance
* Optimized rendering using `useMemo`
* State synchronization using:

```js
useEffect(() => setPage(1), [dataset])
```

This ensures the pagination resets when switching datasets, preventing empty or inconsistent views.

---

## Installation & Setup

Clone the repository:

```
git clone https://github.com/your-username/india-data-hub.git
cd india-data-hub
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## About Vite

This project uses **Vite** for:

* Fast development server
* Hot Module Replacement (HMR)
* Optimized production builds

---

## Future Enhancements

* Sidebar-based filtering of table data
* Search functionality
* API integration
* Lazy loading / virtualization for large datasets
* Backend authentication
* Dark mode support

---

## Author

Soumya Madishetti
Frontend Developer | React Enthusiast

---

## Deployed Link:
https://melodic-marzipan-85e150.netlify.app/
