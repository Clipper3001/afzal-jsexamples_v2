
// promise object that takes in callback function to create a delay
const sleep = (delay) => new Promise((resolve) => {
    setTimeout(() => {
        console.log("I'm sleeping for 2 seconds");
        resolve();
    }, delay);
});

async function main() {
    await sleep(2000);

    // when using setTimeout, we are essentially applying a callback also
    // after 2 secs, setTimeout should run callback with console
    setTimeout(() => {
        console.log("I've been waiting for 2 seconds");
    }, 2000);
}

main();


