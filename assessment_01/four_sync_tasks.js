const fs = require('fs');
const zlib = require('zlib');
const dns = require('dns');

function read_deflated() {
    fs.readFile("domain.deflated", { encoding: null }, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        zlib.inflate(data, (err, buf) => {
            if (err) {
                console.log(err);
                return;
            }

            let decompressed = buf.toString('utf8');
            dns.resolve(decompressed, 'A', (err, records) => {
                if (err) {
                    console.log(err);
                    return;
                }

                fs.writeFile("ip_address.txt", records[0], () => { });
            })
        });
    });
}

read_deflated();
