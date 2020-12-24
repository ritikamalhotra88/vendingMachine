export class paymentCalc{
	
	costOfCan: number = 1.20;												//Global variable for defining cost of a can

	checkMoney(cansNeeded:number , amountSupplied:number){					//Module to check money supplied by customer
		let totalAmountDue:number = this.calculateDue(Number(cansNeeded));  //Getting total amount required for the cans
		let remainingAmount:number = amountSupplied - totalAmountDue;		
		return Number(remainingAmount);										//Returning the remaining amount
	}

	calculateDue(cansNeeded:number):number{									//Module to calculate total amount for the cans needed
		var amountDue = (cansNeeded * this.costOfCan).toFixed(2);
		console.log("$" +amountDue + " amount is required for the purchase of cans ");
		return Number(amountDue);	
	}
}