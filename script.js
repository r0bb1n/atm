// BANK ACCOUNT

let userName,
    correctPass = (/^[0-9]{4}$/),
    passTry = 3,
    balance = 100;

// The login page
function atmUsername() {
  userName = prompt("Enter you name");
  if (userName !== "" && userName !== null) {
    atmPassword();
  } else {
    atmUsername();
  }
}

function atmPassword() {
  let pswEntry = parseInt(prompt("Dear " + userName + ", enter you PIN"));
  checkPassword(pswEntry);
}

// To check if the password is correct, right now it can be anything as long as it is 4 digits
function checkPassword(userInput) {
  if (correctPass.test(userInput)){
    atm();
  } else {
    while (!(correctPass.test(userInput))) {
      if (passTry === 1) {
        alert("Incorrect PIN");
        alert("Maximum tries exceeded, account has been locked");
        exit();
        break;
      } else {
        passTry -= 1;
        alert("Incorrect PIN, please try again");
        alert("You have " + passTry + " chance/s to try");
        atmPassword();
      }
    }
  }
}

function getBalance() {
  alert("Your current balance is:" + balance);
  atm();
}

function makeDeposit(){
  let deposit = parseFloat(prompt(`How much would you like to deposit?`));
  if (deposit !== "" && deposit !== null && !isNaN(deposit)) {
    if (deposit >= 1) {
      balance += deposit;
      alert('You have deposited ' + deposit + "\n" + 'You now have ' + balance);
      atm();
    } else {
      alert("You can't insert 0 or negative amount");
      atm();
    }
  }
}

function makeWithdrawal() {
	let withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1"));
	if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
		if (withdrawalAmount >= 1) {
			if (withdrawalAmount <= balance) {
				balance -= withdrawalAmount;
				alert("Transaction successful!");
				alert("Your remaining balance is $" + balance);
				atm();
			} else {
				alert("You do not have sufficient funds!");
				makeWithdrawal();
			}
		} else {
			alert("You must withdraw at least $1000");
			makeWithdrawal();
		}
	} else {
		alert("Error: please enter a number!");
		makeWithdrawal();
	}
}	

function error() {
  alert('Error: accepted number are 1 through 4');
  atm();
}

function exit() {
  let confirmLeave = confirm('You have selected exit');
  if (confirmLeave) {
    window.close();
  } else {
    atm();
  }
}

// The menu, was going to change this to switch but it is still very comprehensible like this
function atm() {
  let choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit'));

  if (choice === 1) {
    getBalance();
  } else if (choice === 2) {
    makeDeposit();
  } else if (choice === 3) {
    makeWithdrawal();
  } else if (choice === 4) {
    exit();
  } else {
    error();
  }
}

atmUsername();