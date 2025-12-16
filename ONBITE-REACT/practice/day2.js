// Quiz 1
const x = 15;
const y = 20;

let max = x > y ? x : y;

console.log(max);

// Quiz 2
const a = true;

switch (typeof a){
    case "number":{
        console.log("숫자");
        break;
    }
    case "string":{
        console.log("문자열");
        break;
    }
    case "boolean":{
        console.log("불리언");
        break;
    }
    case "undefined":{
        console.log("언디파인드");
        break;
    }
}

// Quiz 3
let temperature = 10;

if (temperature<0){
    console.log("매우 추움");
}else if (temperature <10){
    console.log("추움");
}else if (temperature <20){
    console.log("적당");
}else{
    console.log("더움");
}

