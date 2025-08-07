console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No, the random number is not supporting you");
    } else {
        setTimeout(() => {
            console.log("Yes, I am done");
            resolve("Shail");
        }, 3000);
    }
});

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No, the random number is not supporting you 2");
    } else {
        setTimeout(() => {
            console.log("Yes, I am done 2");
            resolve("Shail 2");
        }, 1000);
    }
});

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
// })

Promise.allSettled([prom1, prom2])
    .then((results) => {
        console.log("All Promises Resolved:", results);
    })
    .catch((err) => {
        console.log("At least one promise rejected:", err);
    });
