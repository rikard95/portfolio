/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors - Professional slate-based palette
        'dark-bg-primary': '#0f172a',
        'dark-bg-secondary': '#1e293b',
        'dark-bg-card': '#334155',
        'dark-text-primary': '#f1f5f9',
        'dark-text-secondary': '#94a3b8',
        'dark-border': '#475569',
        'dark-accent': '#3b82f6',
        'dark-accent-hover': '#60a5fa',
        'dark-success': '#10b981',
        
        // Light mode colors - Light palette with blue-400 main background
        'light-bg-primary': '#60a5fa',
        'light-bg-secondary': '#f1f3f5',
        'light-bg-card': '#e9ecef',
        'light-text-primary': '#1a1a1a',
        'light-text-secondary': '#495057',
        'light-border': '#dee2e6',
        'light-accent': '#3b82f6',
        'light-accent-hover': '#2563eb',
        'light-success': '#10b981',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.6)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
