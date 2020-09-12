const { App } = require("./src/app");

function main() {
    const server = new App();
    server.start();
}

main();