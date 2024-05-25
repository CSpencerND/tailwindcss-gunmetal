import plugin from "tailwindcss/plugin";
import { colors } from "@tailwindcss-gunmetal/colors";
import { rose } from "tailwindcss/colors";
import { yellow } from "tailwindcss/colors";

export default plugin(
    ({ addBase, theme }) => {
        addBase({
            ":root": {
                "--background": theme("gunmetal.950"),
                "--foreground": theme("gunmetal.50"),
                "--card": theme("gunmetal.950"),
                "--card-foreground": theme("gunmetal.50"),
                "--popover": theme("gunmetal.950"),
                "--popover-foreground": theme("gunmetal.50"),
                "--primary": theme("gunmetal.50"),
                "--primary-foreground": theme("gunmetal.900"),
                "--secondary": theme("gunmetal.800"),
                "--secondary-foreground": theme("gunmetal.50"),
                "--muted": theme("gunmetal.800"),
                "--muted-foreground": theme("gunmetal.400"),
                "--accent": theme("gunmetal.800"),
                "--accent-foreground": theme("gunmetal.50"),
                "--destructive": theme("rose.900"),
                "--destructive-foreground": theme("rose.100"),
                "--border": theme("gunmetal.800"),
                "--input": theme("gunmetal.800"),
                "--ring": theme("gunmetal.300"),
            },
            ".dark": {
                "--background": theme("gunmetal.950"),
                "--foreground": theme("gunmetal.50"),
                "--card": theme("gunmetal.950"),
                "--card-foreground": theme("gunmetal.50"),
                "--popover": theme("gunmetal.950"),
                "--popover-foreground": theme("gunmetal.50"),
                "--primary": theme("gunmetal.50"),
                "--primary-foreground": theme("gunmetal.900"),
                "--secondary": theme("gunmetal.800"),
                "--secondary-foreground": theme("gunmetal.50"),
                "--muted": theme("gunmetal.800"),
                "--muted-foreground": theme("gunmetal.400"),
                "--accent": theme("gunmetal.800"),
                "--accent-foreground": theme("gunmetal.50"),
                "--destructive": theme("rose.900"),
                "--destructive-foreground": theme("rose.100"),
                "--border": theme("gunmetal.800"),
                "--input": theme("gunmetal.800"),
                "--ring": theme("gunmetal.300"),
            },
        });
    },
    {
        theme: {
            extend: {
                colors: {
                    background: colors[950],
                    foreground: colors[50],

                    card: {
                        DEFAULT: colors[950],
                        foreground: colors[50],
                    },

                    popover: {
                        DEFAULT: colors[950],
                        foreground: colors[50],
                    },

                    primary: {
                        DEFAULT: colors[50],
                        foreground: colors[900],
                    },

                    secondary: {
                        DEFAULT: colors[800],
                        foreground: colors[50],
                    },

                    muted: {
                        DEFAULT: colors[800],
                        foreground: colors[400],
                    },

                    accent: {
                        DEFAULT: colors[800],
                        foreground: colors[50],
                    },

                    destructive: {
                        DEFAULT: rose[900],
                        foreground: rose[100],
                    },

                    warning: {
                        DEFAULT: yellow[900],
                        foreground: yellow[100],
                    },

                    border: colors[800],
                    input: colors[800],
                    ring: colors[300],
                },
            },
        },
    }
);
