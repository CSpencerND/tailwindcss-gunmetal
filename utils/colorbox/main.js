import fs from "node:fs";
import colorgen from "@k-vyn/coloralgorithm";
import config from "./config.json";

const colors = colorgen.generate(config.properties, config.options);
const json = JSON.stringify(colors, null, 4);

fs.writeFile("output.json", json, (err) => {
    if (err) console.log(err);
    else console.log("done");
});
