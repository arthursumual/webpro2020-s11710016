const account = {
    name: "arthur",
    expenses: []
};

const addExpenses = function(description, amount){
    account.expenses.push({deskripsi: description, jumlah: amount});
    console.log(account.expenses[account.expenses.length-1].deskripsi +': '+ account.expenses[account.expenses.length-1].jumlah);
}

var totalExpense= 0;
const getAccountSummary = function(){
    account.expenses.forEach(function(element){
        totalExpense=totalExpense+element.jumlah;
    });
    console.log('Total Pengeluaran '+ account.name + ' adalah Rp.' + totalExpense);
}

addExpenses('Aqua', 15000);
addExpenses('Kripik Singkong', 5000);
addExpenses('Kacang Goyang', 38000);
getAccountSummary();