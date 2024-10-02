# Explore BD Tours
## Project Overview

A multi-page responsive website built using **Next.js**. This project simulates a travel website, similar to [explorerajasthantours.com](https://explorerajasthantours.com) and showcases various tours and services offered.

## Table of Contents
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [Responsiveness](#responsiveness)
- [Dependencies](#dependencies)

## Live Demo

Check out the live version of the website here: [Live Link](https://explore-bd-tours.vercel.app/)

## Features

- **Fully Responsive**: Optimized for mobile, tablet and desktop views.
- **Navigation Bar**: Responsive navigation bar that collapses into a hamburger menu on smaller screens.
- **Image Carousel**: A dynamic image carousel on the homepage and tour/service detail page, implemented using **Swiper**.
- **Form Validation**: The contact form includes basic validation (e.g., required fields, email format validation).
- **Animations**: Optional animations to enhance user interaction.

## Technologies Used

- **Next.js**: For file-based routing and page rendering.
- **React**: For building interactive user interfaces.
- **Tailwind CSS**: For responsive styling.
- **Swiper**: For the image carousel on the homepage and tour/service detail page.
- **React Icons**: For integrating icons in the UI.

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/noushinpervez/Explore-BD-Tours.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Explore-BD-Tours
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To run the development server:

```bash
npm run dev
```

This will start the app on [http://localhost:3000](http://localhost:3000). You can now view the website on your browser.

To build and run the production version:

```bash
npm run build
npm start
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load DM Sans, a custom Google Font.

## Folder Structure

The project follows the **file-based routing** system of Next.js, and the folder structure is organized as follows:

```
.
.
├── public
│   └── images              # Static assets like images
├── app                     # App directory for Next.js 13+
│   ├── layout.jsx          # Root layout for all pages
│   ├── page.jsx            # Home page
│   ├── about
│   │   └── page.jsx        # About Us page
│   ├── contact
│   │   └── page.jsx        # Contact Us page
│   ├── tours
│   │   ├── page.jsx        # Tours/Services page
│   │   └── [name]
│   │       └── page.jsx    # Tour/Service details page (dynamic route)
├── api                     # Root-level API routes
│   ├── tours               # API for tours
│   │   └── route.js        # API route for fetching all tours
│   └── [name]              # API for individual tour details
│       └── route.js        # API route for fetching tour details by name
├── components              # Reusable components (e.g., Navbar, Footer, Carousel etc.)
├── styles                  # Global styles and Tailwind configurations
├── README.md
└── package.json
```

## Responsiveness

The website is designed to be fully responsive using **Tailwind CSS**. The layout adapts seamlessly to different screen sizes including mobile, tablet and desktop.

## Dependencies

The following dependencies are used in this project:

- [Next.js](https://nextjs.org/) – Frontend framework.
- [React](https://reactjs.org/) – JavaScript library for building UIs.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for styling.
- [Swiper](https://swiperjs.com/) – For the image carousel.
- [React Icons](https://react-icons.github.io/react-icons/) – For including icons in the project.

---

If you have any questions or feedback, feel free to reach out!