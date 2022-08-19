//task 1
function createUser(name) {
  return { name: name };
}

let user = new Object();
let user1 = {};
let user2 = { name: "John" };
user2.surName = "Smith";
createUser.setAttribute("name", "Pete");
delete createUser.name;
console.log(Myelement.value);

//task 2

let schedule = {};

alert(isEmpty(schedule)); 

schedule["11.00"] = "meeting";

alert(isEmpty(schedule));

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// task 3
function salary(name, salary){
    return{name:name, salary:salary};
}
let user1 = salary("celesty", 50000);
let user2 = salary("christ", 20000);
let user3 = salary("rocky", 65000);
let user4 = user.salary + user.salary + user3.salary;
console.log(user4)
// task 4

//task 5
function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
let n = 4;
answer = factorial(n);
console.log("The factorial of " + n + " is " + answer);

//cloning
let obj3 = { name: "John", age: 12 };
let obj4 = Object.assign({}, obj3);
console.log("obj3 and obj4 are equal ? :", obj3 == obj4);
console.log(obj3);
console.log(obj4);

let nesObj = {
  name: "John",
  age: 45,
  job: {
    title: "Analyst",
    salary: 200,
  },
};
console.log(Object.assign({}, nesObj));

//merging
function merge(para1, para2){
    let array=[];
    let i=0;
    let j=0;
    while(i<para1.length && j<para2.length){
        if(para1[i]<=para2[j]){
            array.push(para1[i]);
            i=i+1;
        }
        else{
            array.push(para2[j])
            j=j+1;
        }
    }
    while(i<para1.length){
        array.push(para1[i]);
        i=i+1;
    }
    while(j<para2.length){
        array.push(para2[j]);
        j=j+1;
    }
    return array;
}
let arr1=[1, 4, 9, 16, 25, 30];
let arr2=[5, 7, 11];
console.log(merge(arr1, arr2))
arr1=merge(arr1, arr2)
console.log(arr1)

