# How to Launch the SSC Council Website

This guide will help you start the Social Service Council website application.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm package manager

## Installation Steps

### 1. Install Dependencies

**Important:** Due to React 19 compatibility with some packages, you need to use the `--legacy-peer-deps` flag:

```bash
npm install --legacy-peer-deps
```

Or if you prefer using pnpm:

```bash
pnpm install --legacy-peer-deps
```

**Why?** Some packages (like `react-day-picker` and `vaul`) haven't updated their peer dependencies to explicitly support React 19 yet, but they work fine with it. The `--legacy-peer-deps` flag allows npm to install them anyway.

### 2. Start Development Server

To start the development server, run:

```bash
npm run dev
```

Or with pnpm:

```bash
pnpm dev
```

The application will start on `http://localhost:3000` by default.

### 3. Open in Browser

Once the server is running, open your browser and navigate to:

```
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - React components and UI elements
- `/public` - Static assets (images, icons, etc.)
- `/lib` - Utility functions

## Pages Available

- `/` - Homepage
- `/about` - About Social Service Council
- `/clubs` - Information about SSC clubs
- `/jagriti` - Jagriti Festival page
- `/gallery` - Gallery with image carousel
- `/contact` - Contact page

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, Next.js will automatically try the next available port (3001, 3002, etc.). Check the terminal output for the actual port.

### Dependency Issues

The project requires `--legacy-peer-deps` due to React 19 compatibility. Always use:

```bash
npm install --legacy-peer-deps
```

If you still encounter issues, try:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Build Errors

If you encounter build errors, try:

```bash
rm -rf node_modules .next
npm install
npm run dev
```

## Production Build

To create a production build:

```bash
npm run build
npm run start
```

## Notes

- The development server supports hot reloading - changes will automatically refresh in the browser
- Make sure all environment variables are set if required
- Check the browser console for any runtime errors

---

**Happy Coding! 🚀**

