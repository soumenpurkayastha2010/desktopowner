
function getCustomer(customerId) {
  return {
    id: customerId,
    name: "Sample Customer",
    status: "Active"
  };
}

module.exports = { getCustomer };
