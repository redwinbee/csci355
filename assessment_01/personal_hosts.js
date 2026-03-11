const fs = require('fs');
const dns = require('dns');

let hosts, domains;
fs.readFile('domains.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("failed to read domains file!");
        return;
    }

    domains = data.trim().split("\n");
    hosts = Array(domains.length);
    for (let i = 0; i < domains.length; i++) {
        dns.resolve(domains[i], 'A', (err, records) => {
            if (err) {
                console.error("failed to resolve domain!");
                console.error(err);
                return;
            }

            hosts[i] = records[0];
        });
    }

    writeHosts();
});

function writeHosts() {
    for (let i = 0; i < hosts.length; i++) {
        let payload = `${hosts[i]}\t${domains[i]}`;
        fs.writeFile('hosts.txt', payload, (err) => {
            if (err) {
                console.error("failed to write hosts file!");
                console.error(err);
                return;
            }
        });
    }
}
