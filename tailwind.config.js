module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js 13
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js 12
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(40, 30%, 96%)",
        foreground: "hsl(20, 25%, 20%)",
        card: "hsl(40, 35%, 98%)",
        "card-foreground": "hsl(20, 25%, 20%)",
        primary: "hsl(350, 45%, 35%)",
        "primary-foreground": "hsl(40, 30%, 96%)",
        secondary: "hsl(140, 20%, 75%)",
        accent: "hsl(38, 70%, 50%)",
        "accent-foreground": "hsl(20, 25%, 15%)",
        muted: "hsl(40, 20%, 90%)",
        "muted-foreground": "hsl(20, 15%, 45%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
        "destructive-foreground": "hsl(40, 30%, 96%)",
        border: "hsl(35, 25%, 85%)",
        input: "hsl(35, 25%, 85%)",
        ring: "hsl(350, 45%, 35%)",
        // Envelope theme
        envelope: "hsl(35, 40%, 85%)",
        "envelope-dark": "hsl(30, 35%, 70%)",
        "envelope-flap": "hsl(35, 45%, 80%)",
        "wax-seal": "hsl(350, 50%, 40%)",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
