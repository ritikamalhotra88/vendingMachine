"use strict";
exports.__esModule = true;
exports.stockCalc = void 0;
var payment_1 = require("./payment");
var payment = new payment_1.paymentCalc(); //Object initialization for paymentcalc class
var stockCalc = /** @class */ (function () {
    function stockCalc(cansPresent) {
        this.cansPresent = cansPresent;
    }
    stockCalc.prototype.displayStock = function () {
        console.log("Total number of cans available : " + this.cansPresent);
    };
    stockCalc.prototype.resupplyStock = function (cansToBeAdded) {
        this.cansPresent = this.cansPresent + cansToBeAdded;
        console.log(cansToBeAdded + " Cans added");
        this.displayStock();
    };
    stockCalc.prototype.dispatchCans = function (cansNeeded, amountSupplied) {
        var amountSufficient = payment.checkMoney(cansNeeded, amountSupplied);
        if (Number(amountSufficient) >= 0) {
            var cansAvailable = this.checkCansAvailability(cansNeeded);
            if (Boolean(cansAvailable == true)) {
                this.updatestock(cansNeeded);
                console.log("\nPlease collect your " + cansNeeded + " cans and remaining amount : $" + amountSufficient.toFixed(2));
            }
            else {
                console.log("Out of stock");
            }
        }
        else {
            console.log("\nInsufficient money");
        }
    };
    stockCalc.prototype.updatestock = function (cansNeeded) {
        this.cansPresent = this.cansPresent - cansNeeded;
    };
    stockCalc.prototype.checkCansAvailability = function (cansNeeded) {
        if (cansNeeded > this.cansPresent) {
            return false;
        }
        else {
            return true;
        }
    };
    return stockCalc;
}()); //End of stock calculation class
exports.stockCalc = stockCalc;
//# sourceMappingURL=stock.js.map