"use strict";
exports.__esModule = true;
var stock_1 = require("./stock");
var canStock = new stock_1.stockCalc(1); //Declaration of object of stockCalc class with initial supply of 1 can
var vendingMachine = /** @class */ (function () {
    function vendingMachine() {
        this.isDone = false; //Global variable for while loop
        console.clear();
        console.log("Welcome to CAN vending machine");
    }
    vendingMachine.prototype.main = function () {
        var readline = require('readline-sync'); //For accepting command line input from user
        do {
            var option = readline.question("Options : \n 1. Purchase Cans \n 2. Refill Cans \nEnter your choice : "); //Main Menu options
            switch (Number(option)) {
                case 1:
                    console.log("Option 1 - Purchase Cans (1 Can = $1.20)");
                    canStock.displayStock(); //Displays the total number of cans available
                    var cansNeeded = readline.question("\nEnter the number of cans needed : ");
                    if (Number(cansNeeded > 0)) {
                        var amountSupplied = readline.question("\nEnter the money : ");
                        canStock.dispatchCans(Number(cansNeeded), Number(amountSupplied));
                    }
                    else {
                        console.log("Please enter valid can number");
                    }
                    break;
                case 2:
                    console.log("Option 2 - Refill Cans selected");
                    var refillCans = readline.question("Enter the number of cans to be resupplied : ");
                    if (refillCans > 0) {
                        canStock.resupplyStock(Number(refillCans)); //Adds the cans to total stock available
                    }
                    else {
                        console.log("Please enter a valid number");
                    }
                    break;
                default:
                    console.log("Please enter a valid choice");
                    break;
            }
            var toContinue = readline.question("\nDo you wish to continue , Y or N \n");
            switch (String(toContinue)) {
                case "Y":
                case "y":
                    this.isDone = true;
                    break;
                case "n":
                case "N":
                    this.isDone = false;
                    break;
                default:
                    console.log("Please enter a valid choice");
                    break;
            }
        } while (Boolean(this.isDone) == true);
    };
    return vendingMachine;
}());
var vending = new vendingMachine(); //Initializing objects
vending.main();
//# sourceMappingURL=vendingmachine.js.map