class Solution 
{
    //Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, wt, val, n)
    { 
       // code here
       return this.maxProfit(wt, val, 0, W, n, {});
    }
    
    maxProfit(weights, profit, currentItem, capacity, n, memo) {
        if (currentItem === n) {
            return 0;
        }
        
        const currentItemWeight = weights[currentItem];
        const currentItemProfit = profit[currentItem];
        
        const currentKey = `${currentItem}-${capacity}`;
        
        if (memo[currentKey]) {
            return memo[currentKey]
        }
        
        let consider = 0;
        if (currentItemWeight <= capacity) {
            consider = currentItemProfit + this.maxProfit(weights, profit, currentItem + 1, capacity - currentItemWeight, n, memo)
        }
        const notConsider = this.maxProfit(weights, profit, currentItem + 1, capacity, n, memo);
        memo[currentKey] = Math.max(consider, notConsider);
        return memo[currentKey];
    }
}

const s = new Solution();
console.log(s.knapSack(4, [4,5,1], [1,2,3], 3));
