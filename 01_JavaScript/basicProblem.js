//sum from 1 to 100

let sum=0;
for(let i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);

//fibonacci

function fib(n){
    if(n<=2){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
console.log(fib(10));

//patter making

function pattern(n){
    for(let i=0;i<n;i++){
        let s="";
        for(let j=n;j>=n-i;j--){
            s=s+"*";
        }
        console.log(s);
    }
}
pattern(3);

