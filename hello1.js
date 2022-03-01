var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
    if (data.length === 1){
        let n = Number(data[0]);
        if (n >=1 || n <= 2000000000){
            let i = 0;
            while(n !== 1){
                n = Math.round(n/2);
                i++;
            }
           console.log(i);
        }
    }
});


