const { getCustomer } = require("../src/api");
const customer = getCustomer(101);
console.assert(customer.id === 101);
