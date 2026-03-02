const fs = require('fs');
const num_files = 100;

fs.mkdir('output', { recursive: false }, (err) => {
    if (err) {
        console.error(err);
    } else {
        createFiles();
    }
});

function createFiles(i = 0) {
    if (i == num_files) { return; }

    fs.writeFile(`output/${i}-output.txt`, 'Data-2\n', (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`output/${i}-output.txt`);
            createFiles(i += 1);
        }
    });
}

