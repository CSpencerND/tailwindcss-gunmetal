import fs from "node:fs";
import colorgen from "@k-vyn/coloralgorithm";
import colorboxConfig from "./config.json";

const config = JSON.parse(colorboxConfig);

// const config = {
//     properties: {
//         steps: 11,
//         hue: {
//             start: 207,
//             end: 227,
//             curve: "linear",
//         },
//         saturation: {
//             start: 0.05,
//             end: 0.37,
//             rate: 1,
//             curve: "linear",
//         },
//         brightness: {
//             start: 0.89,
//             end: 0.1,
//             curve: "linear",
//         },
//     },
//     options: {
//         minorSteps: [],
//         name: "gunmetal",
//         provideInverted: true,
//         rotation: "clockwise",
//     },
// };

const colors = colorgen.generate(config.properties, config.options);
const json = JSON.stringify(colors, null, 4);

fs.writeFile("output.json", json, (err) => {
    if (err) console.log(err);
    else console.log("done");
});
