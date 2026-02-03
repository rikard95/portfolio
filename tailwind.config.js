/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '600px',
        'md': '900px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        // Dark mode colors
        'dark-bg-primary': '#0a0118',
        'dark-bg-secondary': '#1a0032',
        'dark-bg-card': '#1e0a3e',
        'dark-text-primary': '#ffffff',
        'dark-text-secondary': '#b8b8d0',
        'dark-border': '#3d1f5c',
        'dark-accent': '#ffcc00',
        'dark-accent-hover': '#ffd633',
        'dark-success': '#00ff88',
        
        // Light mode colors
        'light-bg-primary': '#f0f4f8',
        'light-bg-secondary': '#e1e8ed',
        'light-bg-card': '#f8fafb',
        'light-text-primary': '#000000',
        'light-text-secondary': '#1a1a1a',
        'light-border': '#cbd5e0',
        'light-accent': '#3b82f6',
        'light-accent-hover': '#2563eb',
        'light-success': '#10b981',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'sm-custom': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'md-custom': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'lg-custom': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'xl-custom': '0 12px 48px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'sm-custom': '8px',
        'md-custom': '12px',
        'lg-custom': '16px',
        'xl-custom': '24px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
