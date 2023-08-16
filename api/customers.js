// pages/api/customers.js

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
  },
  // ... other customers ...
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request to fetch all customers
    res.status(200).json(customers);
  } else if (req.method === "POST") {
    // Handle POST request to add a new customer
    const newCustomer = req.body;
    // Validate newCustomer data
    // ...
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
  } else if (req.method === "PUT") {
    // Handle PUT request to update a customer
    const updatedCustomer = req.body;
    const index = customers.findIndex(
      (customer) => customer.id === updatedCustomer.id
    );
    if (index !== -1) {
      customers[index] = updatedCustomer;
      res.status(200).json(updatedCustomer);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } else if (req.method === "DELETE") {
    // Handle DELETE request to delete a customer
    const customerId = req.query.id;
    const index = customers.findIndex(
      (customer) => customer.id === parseInt(customerId)
    );
    if (index !== -1) {
      customers.splice(index, 1);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
