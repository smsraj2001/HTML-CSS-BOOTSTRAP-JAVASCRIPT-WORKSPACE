let promise = new Promise((resolve, reject) => {
    let  a = 1;
    if(a == 1) 
    {
        resolve('Promise is fulfilled...');
    } 
    else 
    {
        reject('Promise is rejected...');
    }
});

console.log(promise);

promise.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});

promise.then(res => console.log(res)).catch(error => console.log(error)).finally(msg => console.log('This is finally...')) ;

