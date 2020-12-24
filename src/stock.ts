import {paymentCalc} from "./payment";

let payment = new paymentCalc();										//Object initialization for paymentcalc class

export class stockCalc{													//Stock Manipulation Class
	cansPresent: number;

	constructor(cansPresent: number){
		this.cansPresent = cansPresent;
	}
	
	displayStock():void{												//Module to display number of available cans
		console.log("Total number of cans available : " + this.cansPresent);
	}

	resupplyStock(cansToBeAdded: number):void{							//Module to resupply stock
		this.cansPresent = this.cansPresent + cansToBeAdded;
		console.log(cansToBeAdded + " Cans added");
		this.displayStock();
	}

	dispatchCans(cansNeeded:number, amountSupplied:number):void{		//Module to dispatch cans
		var amountSufficient = payment.checkMoney(cansNeeded , amountSupplied);
		if (Number(amountSufficient) >= 0 ){
			var cansAvailable = this.checkCansAvailability(cansNeeded);
			if (Boolean(cansAvailable == true)){
				this.updatestock(cansNeeded);
				console.log("\nPlease collect your " + cansNeeded + " cans and remaining amount : $" + amountSufficient.toFixed(2));
			}
			else{
				console.log("Out of stock");
			}
		}
		else{
			console.log("\nInsufficient money");
		}
	}

	updatestock(cansNeeded:number){									//Module to update stock
		this.cansPresent = this.cansPresent - cansNeeded;
	}

	checkCansAvailability(cansNeeded:number){						//Module to check cans availability in stock
		if (cansNeeded > this.cansPresent )
		{
			return false;
		}
		else{
			return true;
		}
	}
} //End of stock calculation class