///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, current) => acc + current.price, 0);

console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    const total = cartTotal * (1 + tax);
    const finalPrice = total - couponValue;
    return finalPrice;
}

const total = 50;
const coupon = 10;
const tax = 0.1;

const finalPrice = calcFinalPrice(total, coupon, tax);
console.log(finalPrice);



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    Below please find an example customer object. The object has the following properties and data types:
    1. firstName (string): represent the customer's first name. It is a string.
    2. lastName (string): represent the customer's last name. It is a string.
    3. email (string): represent the customer's email. It is a string as email is normally stored in text.
    4. phone (string): represent the customer's phone number. It is a string as phone number is normally stored in text.
    5. coupon points(number): represent the customer's coupon points. It is a number as arithmetic operations will be performed upon this value.

*/



/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customerOne = {
    firstName: 'Joe',
    lastName: 'Dow',
    email: '123@123.com',
    phone: '1234567890',
    couponPoints: 200
}

console.log(customerOne);
