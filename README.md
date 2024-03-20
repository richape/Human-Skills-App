# Human Skills Reflections App

This is an app to help capture student reflections for Human Skills Assessments. 

### Why?

There has been a lot of trial and error and a lot of work figuring out how we can make this experience easier and more streamline and more accessible for students first and then the Human Skills Team. As a team we have tried creating a reflections logbook using Google Docs to using google forms which feeds a separate google spreadsheet for each cohort.

### What's included

### User / students
* login functionality using Auth0,
* registration page for students to input details:
  - Full-name,
  - Email,
  - Cohort,
  - Password,
* an introduction page,
* phase breakdown of Deep Dives,
* Weekly reflections pages to add, edit

### Admin
* Human Skills Team can login and will be able to access student input to pull out information for AirTable (for recording purposes),

# Todo:

- [ ] complete components,
- [ ] create database,
- [ ] test database,
- [ ] create client side routes,
- [ ] test routes,
- [ ] react-calendar 
  - [ ] Integrate with Auth0,
  - [ ] Customize calendar for User bookings,
  - [ ] Implement state management for Bookings,
  - [ ] Backend integration for Persistance,
  - [ ] Optimize performance,
  - [ ] User experience,
  - [ ] Security,
  - [ ] Test and Feedback,

Will add tasks if more arise.

---

# Boilerplate: React with Express and Vite

This is a starter project that uses Vite to bundle a React app and Express to serve it in production. Express is used in development to serve an API server.

Vite React App: [http://localhost:5173](http://localhost:5173)
Express API Server: [http://localhost:3000](http://localhost:3000)

Requests to `http://localhost:5173/api` are proxied to `http://localhost:3000/api`.

## Setup

### Installation

To use, consider these steps:

- Fork this repo
- Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`.

Additional components should be placed in `client/components`.

---

[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-react-api)
