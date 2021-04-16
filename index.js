#!/usr/bin/env node
const { exec } = require("child_process");

let input = process.argv[2];
let output = process.argv[3] || input.replace(/\.[^/.]+$/, ".mp4");

exec(`ffmpeg -i ${input} -vcodec libx264 -crf 20 ${output}`, (error, stdout, stderr) => {
    if (error) {
        console.error(error.message);
        return;
    }
    if (stderr) {
        console.error(stderr);
        return;
    }
    if (stdout) {
        console.log(stdout);
        return;
    }

});
