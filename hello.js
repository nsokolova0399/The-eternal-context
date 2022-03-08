var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;

rl.on('line', function (data) {
    data = data.split(' ');
    let result = 0;
    if (checkList(data) && data.length===4){
        result = Task(data);
        console.log(result);
        rl.close();
    }
}).on('close', (total)=> process.exit(0));

function checkList(list){
    let result = false;
    let k = 0;
    for(let i = 0; i < list.length; i++){
        if (Number(list[i])<=100 && Number(list[i])>=1){
            k++;
        }
    }
    if (k === list.length){
        result = true;
    }
    if (list.length !== 4){
        result = false;
    }
    return result;
}

function Task(list){
    let result = 0;
    let a = Number(list[0])
    let b = Number(list[1])
    let c = Number(list[2])
    let d = Number(list[3])
    if (b >= d){
        result = a;
    }
    else if (b < d){
        result = c * (d-b) + a;
    }
    return result;
}

