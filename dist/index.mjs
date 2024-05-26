// src/theme.ts
import plugin from "tailwindcss/plugin";

// src/colors.ts
var graphite = {
  hex: {
    50: "#F7FAFC",
    100: "#F0F4F9",
    200: "#E3E9F1",
    300: "#CFD6E1",
    400: "#A1A9B5",
    500: "#757C89",
    600: "#515765",
    700: "#383E4D",
    800: "#1F232F",
    900: "#131621",
    // 900: "#141722",
    950: "#070910"
  },
  rgb: {
    50: "247 250 252",
    100: "240 244 249",
    200: "227 233 241",
    300: "207 214 225",
    400: "161 169 181",
    500: "117 124 137",
    600: "81 87 101",
    700: "56 62 77",
    800: "31 35 47",
    900: "19 22 33",
    // 900: "20 23 34",
    950: "7 9 16"
  }
};

// src/theme.ts
var { hex, rgb } = graphite;
var theme_default = plugin(
  ({ addBase }) => {
    addBase({
      ":root": {
        "--background": rgb[300],
        "--foreground": rgb[900],
        "--surface1": rgb[200],
        "--suface1-foreground": rgb[800],
        "--surface2": rgb[100],
        "--surface2-foreground": rgb[700],
        "--surface3": rgb[50],
        "--surface3-foreground": rgb[600],
        divider: "17 17 17 / 0.14",
        focus: "#006FEE",
        "--primary": "#006FEE",
        "--primary-foreground": "#e6f1fe",
        "--secondary": "#7828c8",
        "--secondary-foreground": "#f2eafa",
        "--success": "#17c964",
        "--success-foreground": "#e8faf0",
        "--warning": "#f5a524",
        "--warning-foreground": "#fefce8",
        "--danger": "#f31260",
        "--danger-foreground": "#fee7ef",
        "--destructive": "#f31260",
        "--destructive-foreground": "#fee7ef"
      },
      "[data-theme='dark']": {
        "--background": rgb[900],
        "--foreground": rgb[300],
        "--surface1": rgb[800],
        "--surface1-foreground": rgb[200],
        "--surface2": rgb[700],
        "--surface2-foreground": rgb[100],
        "--surface3": rgb[600],
        "--surface3-foreground": rgb[50],
        divider: "255 255 255 / 0.14",
        focus: "#006FEE",
        "--primary": "#006FEE",
        "--primary-foreground": "#e6f1fe",
        "--secondary": "#7828c8",
        "--secondary-foreground": "#f2eafa",
        "--success": "#17c964",
        "--success-foreground": "#e8faf0",
        "--warning": "#f5a524",
        "--warning-foreground": "#fefce8",
        "--danger": "#f31260",
        "--danger-foreground": "#fee7ef",
        "--destructive": "#f31260",
        "--destructive-foreground": "#fee7ef"
      }
    });
  },
  {
    theme: {
      extend: {
        colors: {
          gunmetal: hex,
          background: "rgb(var(--background))",
          foreground: "rgb(var(--foreground))",
          surface1: {
            DEFAULT: "rgb(var(--background))",
            foreground: "rgb(var(--background))"
          },
          surface2: {
            DEFAULT: "rgb(var(--background))",
            foreground: "rgb(var(--background))"
          },
          surface3: {
            DEFAULT: "rgb(var(--background))",
            foreground: "rgb(var(--background))"
          },
          divider: "rgb(var(--divider))",
          focus: "#006FEE",
          primary: {
            DEFAULT: "#006FEE",
            foreground: "#e6f1fe"
          },
          secondary: {
            DEFAULT: "#7828c8",
            foreground: "#f2eafa"
          },
          success: {
            DEFAULT: "#17c964",
            foreground: "#e8faf0"
          },
          warning: {
            DEFAULT: "#f5a524",
            foreground: "#fefce8"
          },
          danger: {
            DEFAULT: "#f31260",
            foreground: "#fee7ef"
          }
        },
        boxShadow: {
          small: "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
          medium: "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
          large: "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
          dark: "inset 0 0 0 1px rgb(255 255 255 / 0.07)"
        },
        backgroundImage: {
          "stripe-gradient": "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 75%, transparent)"
        },
        transitionTimingFunction: {
          "soft-spring": "cubic-bezier(0.155, 1.105, 0.295, 1.12)"
        }
      }
    }
  }
);
export {
  theme_default as default
};
