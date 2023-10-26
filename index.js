var programcontinue = true
var username = null
//please create the user account list, the properties referring to the assignment brief
//basic : assume this is a logged in user UI and you only manipulate a specific user
// bonus:hint: find a way to remember the logged in user (i.e. create an empty object and copy the whole logged in user to it, and set it to null when the user logout)

var user1 = {name:"louis", password:1234, balance: 10000, type: 'basic'}
var user2 = {name:"tony", password:123, balance: 630000, type: 'premier'}
var user3 = {name:"mandy", password:89990, balance: 45000, type: 'basic'}
var logged = {}

var userlist = [user1, user2, user3]

function menu(){
  console.log("Welcome to Repli Bank")
  console.log("Please enter username to start")
  username = prompt("Enter your username")
  checklogin(username)
// call the check login function passing the username
}

//prompt pw
//login & check pw
function checklogin(userinput){
  for (i in userlist){
    if (userlist[i].name === userinput){
      console.log("Found you " + userinput);
      logged = userlist[i];
      checkpassword();
    }
  } 
  console.log('User not found. Please check again.');
  menu();
  }

function checkpassword() {
  const inputPassword = prompt("Enter your password");
  if (inputPassword == logged.password) {
    console.log("Login successful!");
    loginMenu();
  } else {
    console.log("Invalid password. Please try again.");
    checkpassword();
  }
}

//This is user menu
function loginMenu(){
  console.log("Type 'check' to check account balance, type 'withdraw' to withdraw money, type 'logout' to logout")
  let menuInput
  menuInput = prompt("Please type");
  switch (menuInput) {
    case "check":
      checkbalance();
    case "withdraw":
      withdrawReq();
    case "logout":
      logout();
    default:
      console.log("cannot understand, please try again");
      loginMenu();
    }
}

function checkbalance(){
  console.log(`Account balance: ${logged.balance}`);
  loginMenu();
}

function logout(){
  logged = null;
  console.log("Thank you for using repli bank, We will see you in near furture");
  menu()
}



function withdrawReq() {
  let withdrawAmt = +(prompt("Enter the amount you would like to withdraw:"));
  if (withdrawAmt <= logged.balance) {
    if (logged.type === "premier") {
      logged.balance -= withdrawAmt;
      console.log("Withdrawal successful.");
      checkbalance();
    } else if (logged.type === "basic") {
      if (withdrawAmt % 100 === 0 && withdrawAmt <= 500) {
        logged.balance -= withdrawAmt;
        console.log('Withdrawal successful.');
        checkbalance();
      } else {
        console.log("Withdrawal Failed: Amount must be a multiple of HKD 100 and maximum withdrawal amount for Basic account is HKD 500");
      withdrawReq();
      }
    }
  } else {
    console.log("Withdrawal Failed: Insufficient balance");
     withdrawReq();
  }
}
//execution
while(programcontinue){ 
  menu()
}







