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



for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце?"),
        b = prompt("Во сколько обойдется");

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a !='' && b !='' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--
    };
}

appData.moneyPerDay = appData.budget / 30;
    

alert('Ежедневный бюджет: ' + appData.moneyPerDay)
    
if(appData.moneyPerDay < 100) {
    console.log('Minimum level')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Midle level');
} else if (appData.moneyPerDay > 2000) {
    console.log('High level');
} else {
    console.log('ERROR')
}

