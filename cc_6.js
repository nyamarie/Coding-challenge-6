// Task 1 - Business Profit Calculation
function calculateProfit(costPrice, salePrice, unitsSold) {
    let profit = (salePrice - costPrice) * unitsSold;
    console.log('Total Profit: $${profit}');
    return profit;
}
calculateProfit(10, 15, 100);
calculateProfit(20, 30, 50);

// Task 2 - Sales Tax Calculation
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    console.log('Sales Tax: $${salesTax}');
    return salesTax;
};
calculateSalesTax(100, 0.07);
calculateSalesTax(200, 0.1);

// Task 3 - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonusRates = { "low": 0.05, "medium": 0.1, "high": 0.15 };
    let bonus = salary * (bonusRates[performanceRating] || 0);
    console.log('Bonus: $${bonus}');
    return bonus;
};
calculateBonus(50000, "high");
calculateBonus(60000, "medium");

// Task 4 - Suscbription Pricing Model
function calculateSubscriptionPrice(plan, months, discount = 0) {
    let pricing = { "basic": 10, "premium": 20, "enterprise": 30 };
    let cost = (pricing[plan] || 0) * months - discount;
    console.log('Subscription Price: $${cost}');
    return cost;
}
calculateSubscriptionPrice("premium", 12, 50);
calculateSubscriptionPrice("basic", 6);

// Task 5 - Currency Conversion
function convertCurrency(amount, rate) {
    let convertedAmount = amount * rate;
    console.log('Converted Amount: $${converted.toFixed(2)}');
    return convertedAmount;
}
convertCurrency(100, 1.2);
convertCurrency(200, 0.85);

// Task 6 - Higher-Order Function for Bulk Orders
let orders = [200, 600, 1500, 450, 800];
function applyBulkDiscount(orders, discountFunction) {
    let discountedOrders = orders.map(discountFunction);
    console.log(iscountedOrders);
    return discountedOrders;
};
applyBulkDiscount(orders, amount => amount > 1000 ? amount * 0.9 : amount);

// Task 7 - Business Expense Tracker
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;
        console.log('Total Expenses: $${totalExpenses}');
        return totalExpenses;
    };
}
let tracker = createExpenseTracker();
tracker(100);
tracker(200);

// Task 8 - Employee Promotion Evaluation
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        console.log("Years to Promotion: 0");
        return 0;
    }
    let years = 2 + calculateYearsToPromotion(employeeLevel + 1);
    console.log("Years to Promotion: $${years}");
    return years;
}
calculateYearsToPromotion(8);
calculateYearsToPromotion(10);