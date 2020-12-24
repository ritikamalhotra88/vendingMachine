/* Initialization steps : 
	a. Import classes 
	b. Creating objects
	c. Declaring global variables
*/
import {stockCalc} from "./stock";

let canStock = new stockCalc(1);
let isDone: boolean = false;

console.clear();
console.log("Welcome to CAN vending machine");

var readline = require('readline-sync'); 

do
{
	let option   = readline.question("Options : \n 1. Purchase Cans \n 2. Refill Cans \nEnter your choice : ");
	
	switch(Number(option)){
	case 1:
		console.log("Option 1 - Purchase Cans (1 Can = $1.20)");
		canStock.displayStock();
		let cansNeeded = readline.question ("\nEnter the number of cans needed : ");
			if (Number(cansNeeded > 0)){
				let amountSupplied = readline.question ("\nEnter the money : ");
				canStock.dispatchCans(Number(cansNeeded),Number(amountSupplied));
			}
			else{
				console.log("Please enter valid can number");
			}
		break;

	case 2 :
		console.log("Option 2 - Refill Cans selected");
		let refillCans:number   = readline.question("Enter the number of cans to be resupplied : ");
			if(refillCans > 0 ){
			canStock.resupplyStock(Number(refillCans));
			}
			else{
				console.log("Please enter a valid number");
			}
		break;

	default :
		console.log("Please enter a valid choice");
		break;

	}

	let toContinue   = readline.question("\nDo you wish to continue , Y or N \n");

	switch(String(toContinue)){
		case "Y":
		case "y":
			isDone = true;
			break;
		case "n":
		case "N":
			isDone = false;
			break;
		default:
			console.log("Please enter a valid choice");
		break;
	}
} while(Boolean(isDone) == true);