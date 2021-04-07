// setup server
var express = require('express');
var app     = express();

// setup directory used to serve static files
app.use(express.static('public'))

// setup data store
var low      = require('lowdb');
var fs       = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db       = low(adapter);
db.defaults({accounts: []}).write();

// required data store structure
// YOUR CODE

/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/


app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    var name     = req.params.name;
    var email    = req.params.email;
    var pswd     = req.params.password;

    // return success or failure string
    var exist    = getAccount(email,{email: email});
    if(exist != null){
        var message = 'Account with name '+name+' is already being used';
        console.log(message);
        res.send(message);
    }

    var account ={
        name: name,
        email: email,
        balance: 0,
        password: pswd,
        transactions: []
    }

    // create account
    db.get('accounts')
        .push(account)
        .write();
    
    var account = db.get('accounts')
        .find({email: email, password: pswd})
        .value();
        
    if(account == null){
        var message = 'Failed to create an account:'+name;
        console.log(message);
        res.send(message);
    }
    else {
        var message = name + '\'s account was successfully created';
        console.log(message);
        res.send(message);
    }
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
    var email = req.params.email;
    var pswd    = req.params.password;

    var account = getAccount(email, {email: email, password: pswd});

    if(account==null){
        var message = 'Authentication failed for email account: '+email+'. Please check again.';
        console.log(message);
        res.send(message)
    }

    if(account == null) {
        var message = 'Unable to login account ' + email + '. Ensure your email and password are correct';
        console.log(message);
        res.send(message);
    }

    //##########account.name -> name??? ########
    else{
        var message='Login successful:'+account.name;
        console.log(message);
        res.send(message);
    }
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
    var email = req.params.email;
    var account = getAccount(email, {email: email});

    if(account == null){
        var message = 'Unable to find information: '+email;
        console.log(message);
        res.send(message);
    }
    else{
        console.log('Found the information: '+account.name);
        res.send(account);
    }
});

//Check for the exisistence of information
getAccount = function(email, query){
    var account = db.get('accounts')
        .find(query)
        .value();
    return account;
}

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    var email   = req.params.email;
    var deposit = req.params.amount;

    var account = getAccount(email, {email: email});

    if(account == null){
        var message='No information was found for '+email;
        console.log(message);
        res.send(message);
    }

    var c_balance = parseInt(account.balance);
    var n_balance  = c_balance + parseInt(deposit);
    var transactions = account.transactions;
    transactions.push({Time: new Date(), Action: 'Deposit', Amount: deposit, Description: "Deposited $" + deposit + " from account " + email})
    
    account = db.get('accounts')
        .find({email: email})
        .assign({balance: n_balance, transactions: transactions})
        .write();

    if(account==null){
        var message='Failed to withdraw from '+email;
        console.log(message);
        res.send(message);
    }
    else{
        var message=account.name + '\'s balance was deposited with ' + deposit + '. The new balance is ' +  account.balance
        console.log(message);
        res.send(message);
    }
    
    // return success or failure string
});


app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    var email    = req.params.email;
    var withdraw = req.params.amount;
    var account  = getAccount(email, {email: email});

    if(account==null){
        var message = 'Failed to retrieve data for '+email;
        console.log(message);
        res.send(message);
    }

    var c_balance = parseInt(account.balance);
    var n_balance = c_balance - parseInt(withdraw);
    var transactions = account.transactions;
    transactions.push({Time: new Date(), Action: 'Withdraw', Amount: withdraw,  Description: "Withdrew $" + withdraw + " from account " + email})
    
    account = db.get('accounts')
        .find({ email: email })
        .assign({ balance: n_balance, transactions: transactions })
        .write();
    
    if(account == null) {
        var message = 'Failed to withdraw from '+email;
        console.log(message);
        res.send(message);
    }
    else {
        var message = 'Successfully withdrew from '+account.name+'. '+'Withdrawal amount: '+withdraw+'. New balace: '+account.balance;
        console.log(message);
        res.send(message);
    }
});



app.get('/account/transactions/:email', function (req, res) {

/*
    // YOUR CODE
    // Return all transactions for account
    var email = req.params.email;
    var account = getAccount(email, { email: email });

    if(account == null) {
        var message = 'Failed to retrieve transaction information from '+email;
        console.log(message);
        res.send(message);
    }
    else {
        var message = 'Successfully retrieve transaction information from '+email+'. Transaction: '+account.transactions;
        console.log(message);
        res.send(message);
        //res.send(account.transactions);
    }
*/
    var c_account = db.get('accounts').find({email:req.params.email}).value();  
    res.send(c_account.name +' your history of transactions is the following: '+c_account.transactions)
    //JSON.stringify(c_account.transactions).replace(/]|[[]/g,'')
    //res.send(c_account.transactions)
});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
    
    
    var accounts = db.get('accounts')
        .value();

    if(accounts == null) {
        var message = 'Failed to retrieve account information';
        console.log(message);
        res.send(message);
    }
    else {
        var message = 'Successfully retrieved account information: '+accounts;
        console.log(message);
        res.send(message);
        //var text = db.get('accounts').value();
        //var obj = JSON.parse(text);
        //obj.time = eval("(" + obj.time + ")");
        //document.getElementById("").innerHTML = obj.name + ", " + obj.time(); 
        res.send((db.get('accounts').value().transactions));
    } 
});


app.get('/account/balance/:email', function (req, res) {
    
    // get current balance
    var email = req.params.email;
    // var account = db.get('accounts')
    //     .find({ email: email })
    //     .value();
    var account = getAccount(email, { email: email });

    if(account == null) {
        console.log('Unable to check balance account for ' + email);
        res.send('Unable to check balance account for ' + email);
    }
    else {
        console.log(account.name + '\'s balance was retrieved with balance of ' +  account.balance);
        res.send(account.name + '\'s balance is ' +  account.balance);
    }
    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
});



app.listen(3000, function(){
    console.log('Running on port: 3000');
});