/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentMaxProfit = prices[i] - min;

    if (currentMaxProfit > maxProfit) {
      maxProfit = currentMaxProfit;
    }

    if (prices[i] < min) {
      min = prices[i]
    }
  }
  
  return maxProfit
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))

// Here we can sell at any day, but we need to buy stock at minimum price.
// min -> It maintains min stock value