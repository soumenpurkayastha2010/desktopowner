
function login(username, password) {
  if (username === "admin" && password === "demo123") {
    return "Login successful";
  }
  return "Invalid credentials";
}

module.exports = { login };
