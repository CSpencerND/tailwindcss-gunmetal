import plugin from "tailwindcss/plugin";

import { rose, yellow } from "tailwindcss/colors";
import { hex, rgb } from "./colors";

export default plugin(
    ({ addBase }) => {
        addBase({
            ":root": {
                "--background": rgb[950],
                "--foreground": rgb[50],
                "--card": rgb[950],
                "--card-foreground": rgb[50],
                "--popover": rgb[950],
                "--popover-foreground": rgb[50],
                "--primary": rgb[50],
                "--primary-foreground": rgb[900],
                "--secondary": rgb[800],
                "--secondary-foreground": rgb[50],
                "--muted": rgb[800],
                "--muted-foreground": rgb[400],
                "--accent": rgb[800],
                "--accent-foreground": rgb[50],
                "--destructive": rose[900],
                "--destructive-foreground": rose[100],
                "--border": rgb[800],
                "--input": rgb[800],
                "--ring": rgb[300],
            },
            ".dark": {
                "--background": rgb[950],
                "--foreground": rgb[50],
                "--card": rgb[950],
                "--card-foreground": rgb[50],
                "--popover": rgb[950],
                "--popover-foreground": rgb[50],
                "--primary": rgb[50],
                "--primary-foreground": rgb[900],
                "--secondary": rgb[800],
                "--secondary-foreground": rgb[50],
                "--muted": rgb[800],
                "--muted-foreground": rgb[400],
                "--accent": rgb[800],
                "--accent-foreground": rgb[50],
                "--destructive": rose[900],
                "--destructive-foreground": rose[100],
                "--border": rgb[800],
                "--input": rgb[800],
                "--ring": rgb[300],
            },
        });
    },
    {
        theme: {
            extend: {
                colors: {
                    background: hex[950],
                    foreground: hex[50],

                    card: {
                        DEFAULT: hex[950],
                        foreground: hex[50],
                    },

                    popover: {
                        DEFAULT: hex[950],
                        foreground: hex[50],
                    },

                    primary: {
                        DEFAULT: hex[50],
                        foreground: hex[900],
                    },

                    secondary: {
                        DEFAULT: hex[800],
                        foreground: hex[50],
                    },

                    muted: {
                        DEFAULT: hex[800],
                        foreground: hex[400],
                    },

                    accent: {
                        DEFAULT: hex[800],
                        foreground: hex[50],
                    },

                    destructive: {
                        DEFAULT: rose[900],
                        foreground: rose[100],
                    },

                    warning: {
                        DEFAULT: yellow[900],
                        foreground: yellow[100],
                    },

                    border: hex[800],
                    input: hex[800],
                    ring: hex[300],
                },
            },
        },
    }
);
