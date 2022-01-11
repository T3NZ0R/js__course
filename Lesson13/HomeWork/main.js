//HW
// Зробити свій розпорядок дня. //
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

let wakeUp = (waking) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (waking) {
                console.log('Good morning');
                resolve(true);
            } else {
                console.log("Zzzzz Zzzzz Zzzzz");
                reject('ERROR');
            }

        }, 3000);
    });
};

let goToBathroom = (washing) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (washing) {
                console.log('Mission completed');
                resolve(prompt("Enter dish for breakfast!!!"));
            } else {
                reject('ERROR');
            }

        }, 1000);
    });
};

let haveBreakfast = (dish) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dish) {
                console.log(`${dish} is tasty`);
                resolve(prompt("Enter game for playing!!!"));
            } else {
                reject('ERROR');
            }
        }, 2000);
    });
};

let playingGame = (game) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (game) {
                console.log(`End of playing ${game}`)
                resolve(prompt("Enter subject!!!"));
            } else {
                reject('ERROR')
            }

        }, 5000);
    });
};

let doingLabs = (subject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (subject) {
                console.log(`Labs of ${subject} is done`);
                resolve(prompt("Enter dish for dinner"));
            } else {
                reject('ERROR')
            }

        }, 4000);
    });
};

let haveDinner = (dish) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dish) {
                console.log(`${dish} is very tasty`);
                resolve(prompt("Enter movie"));
            } else {
                reject('ERROR')
            }
        }, 300);
    });
};

let watchingMovie = (movie) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (movie) {
                console.log(`${movie} is very interesting`);
                resolve(prompt("Enter dish for supper"));
            } else {
                reject('ERROR')
            }

        }, 500);
    });
};

let haveSupper = (dish) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dish) {
                console.log(`${dish} is very very tasty`);
                resolve(true);
            } else {
                reject('ERROR')
            }

        }, 900);
    });
};

let studyingJS = (studying) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (studying) {
                console.log('Programming make me happy');
                resolve(true);
            }else{
                reject('ERROR')
            }
        }, 3000);
    });
};

let goSleep = (sleeping) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(sleeping){
                resolve("Zzzzz Zzzzz Zzzzzz");
            }else{
                reject('ERROR')
            }

        }, 1000);
    });
};

// wakeUp(true)
//     .then(washing =>{
//         return goToBathroom(washing);
//     })
//     .then(dish =>{
//         return haveBreakfast(dish);
//     })
//     .then(game =>{
//         return playingGame(game);
//     })
//     .then(subject =>{
//         return doingLabs(subject);
//     })
//     .then(dish =>{
//         return haveDinner(dish);
//     })
//     .then(movie =>{
//         return watchingMovie(movie);
//     })
//     .then(dish =>{
//         return haveSupper(dish);
//     })
//     .then(studying =>{
//         return studyingJS(studying);
//     })
//     .then(sleeping =>{
//         return goSleep(sleeping);
//     })
//     .then(result =>{
//         console.log(result);
//     })
//     .catch(e=>{
//         console.log('ERROR');
//     });

async function dayPlan (){
    const washing =  await wakeUp(true);

    const breakfast = await goToBathroom(washing);

    const game = await haveBreakfast(breakfast);

    const subject = await playingGame(game);

    const dinner = await doingLabs(subject);

    const movie = await haveDinner(dinner);

    const supper = await watchingMovie(movie);

    const studying = await haveSupper(supper);

    const sleeping = await studyingJS(studying);

    const result = await goSleep(sleeping);
    console.log(result);
}

dayPlan();