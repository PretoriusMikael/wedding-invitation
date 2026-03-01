module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(212, 30%, 97%)",
        foreground: "hsl(212, 30%, 15%)",
        card: "hsl(212, 30%, 99%)",
        "card-foreground": "hsl(212, 30%, 15%)",
        primary: "hsl(359, 65%, 55%)",
        "primary-foreground": "hsl(0, 0%, 100%)",
        secondary: "hsl(212, 34%, 82%)",
        "secondary-foreground": "hsl(212, 30%, 20%)",
        accent: "hsl(38, 87%, 60%)",
        "accent-foreground": "hsl(38, 50%, 15%)",
        muted: "hsl(212, 20%, 92%)",
        "muted-foreground": "hsl(212, 20%, 48%)",
        destructive: "hsl(359, 83%, 63%)",
        "destructive-foreground": "hsl(0, 0%, 100%)",
        border: "hsl(212, 25%, 88%)",
        input: "hsl(212, 25%, 88%)",
        ring: "hsl(359, 65%, 55%)",
        // Envelope theme
        envelope: "hsl(212, 34%, 85%)",
        "envelope-dark": "hsl(212, 30%, 67%)",
        "envelope-flap": "hsl(212, 34%, 89%)",
        "wax-seal": "hsl(359, 65%, 55%)",
        // Raw palette
        "palette-blue": "hsl(212, 34%, 82%)",
        "palette-olive": "hsl(59, 46%, 58%)",
        "palette-amber": "hsl(38, 87%, 60%)",
        "palette-coral": "hsl(359, 65%, 55%)",
        "palette-pink": "hsl(336, 91%, 69%)",
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
