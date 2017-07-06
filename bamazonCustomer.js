//variables for npm install and other js files
const mysql = require('mysql');
const inquirer = require('inquirer');
//const Table = require('cli-table2');
const fs = require('fs');
// const bamazonManager = require('./bamazonManager.js');
// const bamazonSupervisor = require('./bamazonSupervisor.js');
let newQuantity;

//mySql connection setup
var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,

    //username and password
    user: 'root',
    password: 'root',
    database: 'Bamazon_DB'
});
//connection setup and functional call for mySql product table
connection.connect(function (err) {
    if (err) throw err;
    //console.log('connected as id ' + connection.threadId + '/n');
    //call function to show table
    showProducts();
    // startSearch();
});


//function to show listing info for all products
function showProducts() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
            for (var i=0; i<res.length; i++) {
                console.log('Item #: '+ res[i].item_id + ' ', 'Product: ' + res[i].product_name + ' ' + 'Price: '+ res[i].price + ' ', 'Stock: ' + res[i].stock_quantity);
            }
            startSearch();
    });
};
//function and inquirer prompts for user input
function startSearch() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
    inquirer.prompt([
        {
            type: "list",
            message: "Choose ID number of product you would like to buy.",
            name: "choice",
            choices: function() {
                let itemArray = [];
                for (var i=0; i<res.length;i++) {
                    itemArray.push(res[i].product_name);
                }
                return itemArray;      
            }
        },
        {
            type: "input",
            message: "Enter quantity to purchase.",
            name: "quantity",
        }
    ])
    //then function to show products from user input
    .then(function(answer) {
        let chosenProduct;
            for (var i=0; i<res.length;i++) {
                if (res[i].product_name == answer.choice) {
                    chosenProduct = res[i];
                }
            }
        //quantity of items desired
        let userAmount = parseInt(answer.quantity);
        //stock quantity of item
        let stockAmount = parseInt(chosenProduct.stock_quantity);
        //item ID of product
        let itemId = parseInt(chosenProduct.item_id);
        let newQuantity = stockAmount - userAmount;
            if (userAmount > stockAmount) {
                console.log('Insufficient Quantity!')
                startSearch();
            } else if(userAmount <= stockAmount) {
                updateDatabase(itemId,newQuantity);
                //startSearch();
            }else {
                startSearch();
            }
     }); //close then statement

function updateDatabase(choiceId,quantity){
  connection.query("UPDATE products SET ? WHERE ?",
  [
    { 
      stock_quantity: quantity
    },
    {
      item_id: choiceId
    }
  ],function(err, res) {
        //console.log(res);
        connection.query("SELECT * FROM products", function(err,res){
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log('Item #: '+ res[i].item_id + ' ', 'Product: ' + res[i].product_name + ' ' + 'Price: '+ res[i].price + ' ', 'Stock: ' + res[i].stock_quantity);
            }
            }),
        //begin search again
        startSearch();
    });   

};//close updateDatabase function
});//closes startSearch connection
};//closes startSearch function

