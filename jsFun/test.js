let array = [];
array.push(10);
array.push("Celesty");
array.push({name:"Celesty"});
array.push([1, 2, 3]);
array.push(1, 45);
console.log(array);

for(let i=0;i<10;i++){
    console.log(i);
}

array.forEach((item) => console.log(item));
    
let tempObj = {};
tempObj["Hello my key is this"]= 2;
tempObj[45]=67;
tempObj[[1,2,3]]=67;
console.log(tempObj);
console.log(tempObj["Hello my key is this"]);

let obj = {}
let obj = []


