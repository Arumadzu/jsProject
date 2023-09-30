let money = +prompt("Ваш бюджет на месяц?", '300000'),
    time = prompt("Введите дату в формате YYYY-MM-DD", '2023.11.01');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


function detectDayBudget() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце?", 'Еда'),
            b = prompt("Во сколько обойдется", '10000');
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a !='' && b !='' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--
        };
    };
};
detectDayBudget()


appData.moneyPerDay = appData.budget / 30;
    

alert('Ежедневный бюджет: ' + appData.moneyPerDay)


function detectLevel(){
    if(appData.moneyPerDay < 100) {
        console.log('Minimum level')
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Midle level');
    } else if (appData.moneyPerDay > 2000) {
        console.log('High level');
    } else {
        console.log('ERROR')
    };
};
    
detectLevel();

let count = 1;
function chooseOptExpenses(){
    for (let i = 1; i < 4; i++){
        let d = prompt('Статья необязательных расходов?', 'Дофамин'),            

        count = i;
        if (typeof(d) === 'string' && typeof(d) !=null && d != '' && d.length < 50) {
            console.log('fine');
            appData.optionalExpenses[count] = d;
        } else {
            i--

        };
    };
};



chooseOptExpenses();

// if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a !='' && b !='' && a.length < 50) {
//     console.log('done');
//     appData.expenses[a] = b;
// } else {
//     i--
// };



















// let i = 0
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце?", 'Еда'),
//         b = prompt("Во сколько обойдется", '10000');
//     i++;

//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a !='' && b !='' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--
//     };
// }


// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце?", 'Еда'),
//         b = prompt("Во сколько обойдется", '10000');
//     i++;

//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a !='' && b !='' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--
//     };
// } while (i<2);