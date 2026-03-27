# Arpan Sankesh - Portfolio Website

Welcome to the Arpan Sankesh Portfolio website! This project is a modern, high-converting personal portfolio designed to showcase projects, services, and clear calls to action (booking calls).

## 🚀 Tech Stack

- **Framework:** React + Vite
- **Language:** JavaScript (JSX)
- **Styling:** Tailwind CSS + Custom CSS (`src/index.css`)
- **Animations:** Framer Motion (for dynamic scroll, custom cursor, and layout animations)
- **Icons:** Lucide React

## 📁 Code Structure

The project has been carefully modularized to keep the codebase clean, legible, and easy to maintain.

```text
├── assets/
│   └── logo.webp                  # Global logo/avatar image
├── public/                        # Publicly accessible assets
├── src/
│   ├── components/                # Modular React components
│   │   ├── BookingModal.jsx       # Google Calendar iframe modal
│   │   ├── CustomCursor.jsx       # Custom blob cursor that follows the mouse
│   │   ├── Footer.jsx             # Contact information and links footer
│   │   ├── Header.jsx             # Top navigation and mobile menu
│   │   ├── Hero.jsx               # Main banner section (Hero)
│   │   ├── ProcessSection.jsx     # "My Process" breakdown  
│   │   ├── ProjectDetail.jsx      # Full-screen expanded project case study modal
│   │   ├── ScrollProgress.jsx     # Top progress bar reading scroll distance
│   │   ├── ServicesSection.jsx    # Display of service offerings
│   │   ├── TestimonialsSection.jsx# Testimonials display layout
│   │   └── WorkSection.jsx        # Project grid section
│   ├── data.js                    # Contains all the mapped arrays (projects, services, testimonials, etc)
│   ├── App.jsx                    # Root container orchestrating states and components
│   ├── index.css                  # Core CSS and Tailwind directives
│   └── main.jsx                   # React entry-point
├── index.html                     # HTML Entry point
├── package.json                   # Dependencies & scripts
└── vite.config.js                 # Vite compiler configuration
```

## 🧠 How it Works

### 1. Data Driven
All of the content (projects, services, process steps, testimonials) lives in `src/data.js`. If you want to add a new project or change a service price, you simply update the arrays in `src/data.js` and the UI will automatically update. No need to touch the layout code!

### 2. State Management (`App.jsx`)
The `App.jsx` file is the "brain" of the layout. It holds the states for:
- `isScrolled`: Checks if you have scrolled past the top to give the `Header` a solid backdrop.
- `activeSection`: Uses `IntersectionObserver` to highlight the current section in your `Header`.
- `selectedProject`: Controls whether the `ProjectDetail` modal is open or closed when you click a project in the `WorkSection`.
- `isBookingOpen`: Controls whether the Google Calendar `BookingModal` is open or closed.

These state modifiers are passed securely down as `props` to individual components.

### 3. Animations
This project heavily uses `framer-motion` for fluid animations.
- The `CustomCursor` takes `clientX`/`clientY` mapping from mouse events to drive a custom spring-animated blob.
- `AnimatePresence` is used around `BookingModal` and `ProjectDetail` to gently animate them in and out of the screen.

## 🚀 Running & Building

**Development Mode:**
```bash
npm run dev
```

**Production Build (For Vercel):**
```bash
npm run build
```
The build command creates an optimized, minified bundle in the `/dist` directory. 

## 🌐 Deploying to Vercel

Since this is a standard Vite application, deploying it to Vercel is extremely straightforward:
1. Connect this repository to your Vercel account.
2. Ensure the Framework Preset is set to **Vite**.
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`
5. Click **Deploy**! 

Everything will compile perfectly on Vercel's end thanks to the included package.json scripts.
