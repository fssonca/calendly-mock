# My Calendly Mock

A React-based application that replicates key scheduling functionalities similar to Calendly. This project includes features such as calendar navigation, time slot selection, timezone support, and a responsive design, powered by modern tools like React, Redux Toolkit, TailwindCSS, and Vite.

---

## Features

- **Calendar Navigation**: Navigate between months and select available dates.
- **Time Slot Selection**: View and select time slots for a given day.
- **Timezone Support**: Automatically update the displayed time slots based on the selected timezone.
- **Real-time Updates**: Dynamic updates for time display every 2 seconds using React hooks.
- **Modern UI Design**: Built with TailwindCSS for a clean and responsive interface.
- **Optimized State Management**: Powered by Redux Toolkit for predictable state handling.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fssonca/calendly-mock.git
   cd calendly-mock
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Development Server
To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Production Build
To build the application for production:
```bash
npm run build
```
The optimized output will be generated in the `dist` folder.

### Preview Build
To preview the production build locally:
```bash
npm run preview
```

### Linting
To run ESLint and check for code quality:
```bash
npm run lint
```

---

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **TailwindCSS**: For styling the application.
- **Headless UI**: For accessible, unstyled UI components.
- **Heroicons**: For modern SVG icons.

### Build Tools
- **Vite**: For fast development and build setup.
- **TypeScript**: For static typing and enhanced development experience.

### Code Quality
- **ESLint**: For linting JavaScript and TypeScript code.
- **PostCSS**: For CSS processing with plugins like Autoprefixer.

---

## Project Structure

```
my-calendly-mock/
├── src/
│   ├── assets/            # Static assets (images, icons)
│   ├── components/        # Reusable React components
│   ├── data/              # Static data files (e.g., timezone data)
│   ├── icons/             # Custom SVG icons
│   ├── store/             # Redux Toolkit slices and store
│   ├── types/             # TypeScript types and interfaces
│   ├── utils/             # Utility functions (e.g., date manipulation)
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── public/                # Public assets
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project metadata and dependencies
```

---

## Environment Variables

For API integration or environment-specific settings, use a `.env` file. Example:
```
VITE_API_BASE_URL=https://api.example.com
```
Access these variables in your code using `import.meta.env`.

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Create a production build.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check for issues.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements

- [Calendly](https://calendly.com/) for inspiration.
- [Vite](https://vitejs.dev/) for the fast and modern development experience.
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework.

---

## Contact

If you have any questions or feedback, feel free to reach out to fssonca@gmail.com.

```
