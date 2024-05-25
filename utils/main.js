const fs = require("node:fs");
const colorgen = require("@k-vyn/coloralgorithm");
const config = require("./config.json");
const output = require("./output.json");

function generate() {
    const colors = colorgen.generate(config.properties, config.options);
    return JSON.stringify(colors, null, 4);
}

function writeOutputToFile() {
    fs.writeFile("output.json", json, (err) => {
        if (err) console.log(err);
        else console.log("done");
    });
}

function getHex() {
    return output.colors.map((color) => color.hex);
}

function getRgb() {
    return output.colors.map((color) =>
        color.rgbString.replaceAll(",", " ")
    );
}

function main() {
    console.log(getHex());
    console.log(getRgb());
}

// main();
