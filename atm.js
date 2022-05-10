const account = {
    accountName: "Robin",
    balance: 100,
    getBalance: function() {
        const choice = parseInt(alert(`Your current balance is ${this.balance}`))
        atm();
    },
    makeDeposit: function() {
        let deposit = parseFloat(prompt("How much would you like to deposit?"));

        if (isNaN(deposit) || deposit < 0 || deposit === "" || typeof deposit === 'string') {
            const invalidInput = alert(`Sorry ${deposit} is an invalid input`)
        };
        if (deposit >= 1) {
            this.balance += deposit;
            alert('You have deposited ' + deposit + '\n' + 'You now have ' + this.balance);
            atm();
        } else {
            alert("You can't insert 0 or negative amount");
            atm();
        }
    },
    makeWithdrawal: function() {
        let withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1"));
        if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
            if (withdrawalAmount >= 1) {
                if (withdrawalAmount <= this.balance) {
                    this.balance -= withdrawalAmount;
                    alert("Transaction successful!");
                    alert("Your remaining balance is $" + this.balance);
                    atm();
                } else {
                    alert("You do not have sufficient funds!");
                    makeWithdrawal();
                }
            } else {
                alert("You must withdraw at least $1");
                makeWithdrawal();
            }
        } else {
            alert("Error: please enter a number!");
            makeWithdrawal();
        }
    },
    exit: function () {
        const confirmLeave = confirm('You have slected exit');
        if (confirmLeave) {
            window.close();
        } else {
            atm();
        }
    },
    getAccountName: function() {
        const accountName = alert(`Account name: ${this.accountName}. press ok to go back`);
        atm();
    },
    error: function () {
        alert('Error: accepted numbers are 1 through 4');
        atm();
    }
}

function atm() {
    let choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Account Name 5.) Exit'));
  
    if (choice === 1) {
      account.getBalance();
    } else if (choice === 2) {
      account.makeDeposit();
    } else if (choice === 3) {
      account.makeWithdrawal();
    } else if (choice === 4) {
      account.getAccountName();
    } else if (choice === 5) {
      account.exit();
    } else {
    this.atm();
    }
  }
  
  atm();