"use strict";
exports.__esModule = true;
exports.paymentCalc = void 0;
var paymentCalc = /** @class */ (function () {
    function paymentCalc() {
        this.costOfCan = 1.20; //Global variable for defining cost of a can
    }
    paymentCalc.prototype.checkMoney = function (cansNeeded, amountSupplied) {
        var totalAmountDue = this.calculateDue(Number(cansNeeded)); //Getting total amount required for the cans
        var remainingAmount = amountSupplied - totalAmountDue;
        return Number(remainingAmount); //Returning the remaining amount
    };
    paymentCalc.prototype.calculateDue = function (cansNeeded) {
        var amountDue = (cansNeeded * this.costOfCan).toFixed(2);
        console.log("$" + amountDue + " amount is required for the purchase of cans ");
        return Number(amountDue);
    };
    return paymentCalc;
}());
exports.paymentCalc = paymentCalc;
//# sourceMappingURL=payment.js.map