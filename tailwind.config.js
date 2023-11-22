/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "default-white": "#fff",
        "blue-gray-600": "#475569",
        "purple-100": "#f3e8ff",
        "purple-800": "#6b21a8",
        "blue-gray-900": "#0f172a",
        "blue-gray-200": "#e2e8f0",
        "default-alert": "#da1e28",
        "blue-600": "#2563eb",
        "blue-gray-300": "#cbd5e1",
        "blue-gray-100": "#f1f5f9",
        darkgray: "#a2a2a2",
        "red-100": "#fee2e2",
        "red-800": "#991b1b",
      },
      spacing: {},
      fontFamily: {
        "body-xs": "Roboto",
        "open-sans": "'Open Sans'",
        "y-content": "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "18xl-5": "37.5px",
        "43xl-5": "62.5px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      lg: "18px",
      "5xl": "24px",
      "37xl": "56px",
      "53xl": "72px",
      xl: "20px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
