var ui = {};

ui.navigation = `
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
<header class="masthead mb-auto">
  <div class="inner">
    <h3 class="masthead-brand">Cover</h3>
    <nav class="nav nav-masthead justify-content-center">
      <a class="nav-item nav-link" href="#" id="homeButton" onclick="loadHome()">Home</a>
      <a class="nav-item nav-link" href="#" id="createAccountNavButton" onclick="loadCreateAccount()">Create Account<span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#" id="loginNavButton" onclick="loadLogin()">Login</a>
      <a class="nav-item nav-link" href="#" id="depositNavButton" onclick="loadDeposit()">Deposit</a>
      <a class="nav-item nav-link" href="#" id="withdrawNavButton" onclick="loadWithdraw()">Withdraw</a>
      <a class="nav-item nav-link" href="#" id="transactionsNavButton" onclick="loadTransactions()">Transactions</a>
      <a class="nav-item nav-link" href="#" id="balanceNavButton" onclick="loadBalance()">Balance</a>
      <a class="nav-item nav-link" href="#" id="allDataNavButton" onclick="loadAllData()">AllData</a>
    </nav>
  </div>
</header>
`;

ui.home = `
<div class="col-md-4 mt-4">
    		    <div class="card profile-card-5">
    		        <div class="card-img-block">
    		            <img class="card-img-top" src="https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap">
    		        </div>
                    <div class="card-body pt-0">
                    <p></p>
                    <p></p>
                    <h5 class="card-title">Welcome to BadBank!</h5>
                    <p></p>
                    <p class="card-text">Thank you for choosing BadBank for your business banking needs. We continue to work hard to
earn your business every day by providing extraordinary services. </p>
                    
                  </div>
                </div>
    		</div>
    		
    	</div>
    </div>
`;

ui.createAccount = `
<form onsubmit="create()">
    <div class="card profile-card-5 mb-3" style="max-width: 40%;">
    <div class="card-img-block">
    		            <img class="card-img-top" src="https://images.pexels.com/photos/3759101/pexels-photo-3759101.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap">
    		        </div>
        <div class="card-header">Create Account</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                </div>
                <input id="createName" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Name" required>
            </div>
            <br/>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="createEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                </div>
                <input id="createPswd" type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Password" required>
            </div>
            <div><i>*You cannot use a same name to create an account.</i></div>
            <br/>
            

            <button type="submit" class="btn btn-light">Create Account</button>
            <br/>
            <br/>
            <div id="status"></div>
        </div>
    </div> 
</form>
`;


ui.login = `
<h1 class="cover-heading">Login Page</h1>
<p class="lead">Welcome, Dear customer. Please enter your account info to log in.</p>

<form onsubmit="login()">
    <div class="card profile-card-5 mb-3" style="max-width: 30%;">
    <div class="card-img-block">
    		            <img class="card-img-top" src="https://images.pexels.com/photos/3585095/pexels-photo-3585095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap">
    		        </div>
        <div class="card-header">Login</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="loginEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                </div>
                <input id="loginPswd" type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Password" required>
            </div>
            <br/>

            <button type="submit" class="btn btn-light">Login</button>
            <br/>
            <br/>
            <div id="status"></div>
        </div>
    </div> 
</form> 
`;

ui.deposit = `
<h1 class="cover-heading">Deposit</h1>
<p class="lead">Please enter your email address and amount you want to deposit.</p>

<form onsubmit="deposit()">
    <div class="card profile-card-5 mb-3" style="max-width: 30%;">
    <div class="card-img-block">
    		            <img class="card-img-top" src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap">
    		        </div>
        <div class="card-header">Deposit</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="depositEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Amount</span>
                </div>
                <input id="depositAmount" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Amount" required>
            </div>
            <br/>

            <button type="submit" class="btn btn-light">Deposit</button>
            <br/>
            <br/>
            <div id="status"></div>
        </div>
    </div> 
</form> 
`;

ui.withdraw = `
<h1 class="cover-heading">Withdraw</h1>
<p class="lead">Please enter your email address and amount you want to withdraw.</p>

<form onsubmit="withdraw()">
    <div class="card profile-card-5 mb-3" style="max-width: 30%;">
    <div class="card-img-block">
    		            <img class="card-img-top" src="https://images.pexels.com/photos/5497951/pexels-photo-5497951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap">
    		        </div>
        <div class="card-header">Withdraw</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="withdrawEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Amount</span>
                </div>
                <input id="withdrawAmount" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Amount" required>
            </div>
            <br/>

            <button type="submit" class="btn btn-light">Withdraw</button>
            <br/>
            <br/>
            <div id="status"></div>
        </div>
    </div> 
</form> 
`;

ui.transactions = `
<h1 class="cover-heading">Transaction History</h1>
<p class="lead">Please enter your email address to view your transaction history.</p>
<form onsubmit="transactions()">
  <div class="card profile-card-5 mb-3" style="max-width: 30%;">
    <div class="card-img-block">
    		            <img class="card-img-top" src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap">
    		        </div>
        <div class="card-header">Transactions</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="transactionsEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>

            <button type="submit" class="btn btn-light">Show Transactions</button>
            <br/>
            <br/>
            <div id="status"></div>
        </div>
    </div> 
</form> 
`;

ui.balance = `
<h1 class="cover-heading">Balance</h1>
<p class="lead">Please enter your email address to see your current balance.</p>
<form onsubmit="balance()">
    <div class="card profile-card-5 mb-3" style="max-width: 30%;">
    <div class="card-img-block">
    		            <img class="card-img-top" src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap">
    		        </div>
        <div class="card-header">Balance</div>
        <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email address</span>
                </div>
                <input id="balanceEmail" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" required>
            </div>
            <br/>

            <button type="submit" class="btn btn-light">Show Balance</button>
            <br/>
            <br/>
            <div id="status"></div>
        </div>
    </div> 
</form>  
`;

ui.allData = `
<h1 class="cover-heading">Add Data Page</h1>
<p class="lead">Please click 'Show All Data' to see all the detailed information of your account.</p>
<form onsubmit="allData()">
    <div class="card profile-card-5 mb-3" style="max-width: 30%;">
    <div class="card-img-block">
    		            <img class="card-img-top" src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap">
    		        </div>
        <div class="card-header">All Data</div>
        <div class="card-body">
            <br/>

            <button type="submit" class="btn btn-light">Show All Data</button>
            <br/>
            <br/>
            <div id="status"></div>
        </div>
    </div> 
</form> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

var activeNavButton;

var loadHome = function(){
    target.innerHTML = ui.home;

    // set active marker
    setActiveNavBar("homeButton");
};

var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;

    // set active marker
    setActiveNavBar("createAccountNavButton");
};

var loadLogin = function(){
    target.innerHTML = ui.login;

    // set active marker
    setActiveNavBar("loginNavButton");
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;

    // set active marker
    setActiveNavBar("depositNavButton");
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;

    // set active marker
    setActiveNavBar("withdrawNavButton");
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;

    // set active marker
    setActiveNavBar("transactionsNavButton");
};

var loadBalance = function(){
    target.innerHTML = ui.balance;

    // set active marker
    setActiveNavBar("balanceNavButton");
};

var defaultModule = function(){
    target.innerHTML = ui.home;

    // set default active as whole nav bar
    activeNavButton = navigation;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;

    // set active marker
    setActiveNavBar("allDataNavButton");
};

var setActiveNavBar = function(id){
    // set active marker
    activeNavButton.classList.remove("active");
    activeNavButton = document.getElementById(id);
    activeNavButton.classList.add("active");
}

defaultModule();
