
const { login } = require("../src/login");

const result = login("admin", "demo123");

console.assert(result === "Login successful");
