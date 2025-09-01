# Portfolio Website

This is a comprehensive portfolio website built with a modern web development stack. The site is designed to be easily reusable and self-guided, allowing for simple customization and deployment.

-----

## Tech Stack

The project utilizes a robust and modern technology stack for a dynamic and responsive user experience:

### Frontend

  * **React**: A popular JavaScript library for building user interfaces.
  * **Vite**: A fast, next-generation frontend tooling that serves as the build tool and development server.
  * **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  * **Framer Motion**: A production-ready motion library for React to power animations and transitions.
  * **Radix UI**: A collection of accessible UI components for building a design system.
  * **Lucide React**: A library of open-source icons.

### Backend

  * **Node.js**: A JavaScript runtime environment for server-side logic.
  * **Express.js**: A minimalist web framework for Node.js, used here to power the contact form API.
  * **CORS**: A Node.js middleware for enabling Cross-Origin Resource Sharing.
  * **`dotenv`**: A zero-dependency module that loads environment variables from a `.env` file.

## New Capabilities

This portfolio website is more than a static page; it includes several dynamic features:

  * **Customizable Content**: All main content sections, including "About", "Skills", "Experience", and "Projects", are powered by external JSON files. This allows for easy content updates without modifying the React components themselves.
  * **Contact Form with Backend**: The contact section includes a functional form that sends data to a Node.js/Express server. The server logs the submissions to a `log.txt` file, providing a simple, self-contained way to manage inquiries.
  * **Responsive Design**: The layout is built with Tailwind CSS, ensuring a responsive and consistent experience across various screen sizes.
  * **Dynamic UI Components**: The site features a range of pre-built UI components from `shadcn/ui` and other libraries, such as carousels, drawers, and an animated header, to enhance interactivity and visual appeal.

-----

## Project File Structure

```
Portfolio-Website/
├── public/
│   ├── about.json
│   ├── contact.json
│   ├── education.json
│   ├── experience.json
│   ├── projects.json
│   └── skills.json
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ui/
│   │       ├── ... (UI component files)
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── styles/
│       └── globals.css
├── .env
├── .gitignore
├── index.html
├── server.js
├── package.json
├── vite.config.ts
├── README.md
└── ...
```

-----

## How to Start: A Self-Guided Setup

Follow these steps to get the project up and running on your local machine:

### 1\. Environment Setup

  * **Prerequisites**: Make sure you have Node.js installed on your system.
  * **Environment Variables**: Create a `.env` file in the root directory and add the following line to configure the backend API URL:
    `VITE_API_BASE_URL=http://localhost:3001`

### 2\. Installation

1.  **Install Dependencies**: Navigate to the project's root directory in your terminal and run the following command to install all necessary packages for both the frontend and backend:
    `npm i`
2.  **Start the Development Server**: To start the main Vite-based frontend application, run:
    `npm run dev`
    This will typically start the website on `http://localhost:3000`.
3.  **Start the Backend Server**: In a separate terminal window, start the Express server to handle contact form submissions:
    `npm start`
    This will run the server on `http://localhost:3001`.

Your portfolio website is now live on your local machine\! You can navigate to `http://localhost:3000` to view it.