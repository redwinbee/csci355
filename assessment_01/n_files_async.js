const fs = require('fs');

fs.mkdir('output', { recursive: false }, (err) => {
    if (err) {
        console.error(err);
    } else {
        createFiles();
    }
});

function createFiles() {
    for (let i = 0; i < 100; i++) {
        fs.writeFile(`output/${i}-output.txt`, 'Data-1\n', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`${i}-output.txt`);
            }
        });
    }
}
