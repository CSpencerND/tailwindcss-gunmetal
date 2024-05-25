import plugin from "tailwindcss/plugin";

export const hex = {
    50: "#d8dee3",
    100: "#bec7cf",
    200: "#a5b0bb",
    300: "#8e99a7",
    400: "#788392",
    500: "#646e7e",
    600: "#50596a",
    700: "#3e4656",
    800: "#2e3342",
    900: "#1e222e",
    950: "#10121a",
};

export const rgb = {
    50: "216 222 227",
    100: "190 199 207",
    200: "165 176 187",
    300: "142 153 167",
    400: "120 131 146",
    500: "100 110 126",
    600: "80 89 106",
    700: "62 70 86",
    800: "46 51 66",
    900: "30 34 46",
    950: "16 18 25",
};

export default plugin(() => { }, {
    theme: {
        extend: {
            colors: {
                gunmetal: hex,
            },
            boxShadow: {
                small: "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
                medium: "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
                large: "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
                dark: "inset 0 0 0 1px rgb(255 255 255 / 0.07)",
            },
        },
    },
});
