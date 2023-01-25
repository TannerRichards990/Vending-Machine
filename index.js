/**
 * @file Vending machine change calculator
 *
 * @requires process
 */
const process = require("process");

/**
 * Logs the command line arguments passed to the script
 */
console.log(process.argv);

/**
 * @type {null}
 */
let itemCostInput = null;
/**
 * @type {null}
 */
let paymentInput = null;

/**
 * Iterates over the command line arguments, looking for the "--itemCost" and "--payment" arguments.
 * If found, sets the corresponding input variable and increments the iterator.
 */
for (let i = 0; i < process.argv.length; i++) {
  const arg = process.argv[i];
  if (arg === "--itemCost") {
    itemCostInput = process.argv[i + 1];
    ++i;
  } else if (arg === "--payment") {
    paymentInput = process.argv[i + 1];
    ++i;
  }
}

/**
 * If the item cost input is null, logs an error message and exits the script with status code 1.
 */
if (itemCostInput == null) {
  console.error("--item-cost must be provided");
  process.exit(1);
}

/**
 * Converts the item cost input to a number and multiplies by 100.
 * @type {number}
 */
const itemCost = Number(itemCostInput) * 100;
/**
 * If the item cost input is not a number, logs an error message and exits the script with status code 1.
 */
if (isNaN(itemCost)) {
  console.log("--item-cost must be a number");
  process.exit(1);
}

/**
 * If the payment input is null, logs an error message and exits the script with status code 1.
 */
if (paymentInput == null) {
  console.error("--payment must be provided");
  process.exit(1);
}

/**
 * Converts the payment input to a number and multiplies by 100.
 * @type {number}
 */
const payment = Number(paymentInput) * 100;
/**
 * If the payment input is not a number, logs an error message and exits the script with status code 1.
 */
if (isNaN(payment)) {
  console.log("--payment must be a number");
  process.exit(1);
}

/**
 * @function calculateChange
 *
 * @param {number} price - cost of the item
 * @param {number} amountPaid - amount paid
 *
 * @returns {string} - console.log the change in terms of quarters, dimes, nickels, pennies and the total change
 */

/**

@function calculateChange

@param {number} price - The price of the item being purchased.

@param {number} amountPaid - The amount paid by the customer.

@returns {void} - This function calculates the change due to a customer and outputs the number of each coin needed to make change and the total change in the console.
*/
function calculateChange(price, amountPaid) {
  let change = amountPaid - price;
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Uses while loops to determine the amount of each coin needed to make change.
  while (change >= 25) {
    change -= 25;
    quarters += 1;
  }

  while (change >= 10) {
    change -= 10;
    dimes += 1;
  }

  while (change >= 5) {
    change -= 5;
    nickels += 1;
  }

  while (change >= 1) {
    change -= 1;
    pennies += 1;
  }

  //finds the longest number of coins needed to make change
  let maxCoin = Math.max(quarters, dimes, nickels, pennies);

  //finds the length of the longest number of coins needed to make change
  let maxCoinLen = maxCoin.toString().length;

  //Checks and prints the amount of each coin needed to make change.
  if (quarters > 0) {
    console.log(`Quarters: ${quarters.toString().padStart(maxCoinLen)}`);
  }
  if (dimes > 0) {
    console.log(`Dimes: ${dimes.toString().padStart(maxCoinLen)}`);
  }
  if (nickels > 0) {
    console.log(`Nickels: ${nickels.toString().padStart(maxCoinLen)}`);
  }
  if (pennies > 0) {
    console.log(`Pennies: ${pennies.toString().padStart(maxCoinLen)}`);
  }

  //Prints the total change
  console.log(`Total Change: $${(amountPaid - price) / 100}`);
}

//calls the calculateChange function and outputs the result in terminal
console.log(calculateChange(itemCost, payment));
