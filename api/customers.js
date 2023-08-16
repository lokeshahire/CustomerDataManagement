// pages/api/customers.js
import nc from "next-connect";

const customers = [
  // Sample customer data (replace with your actual data)
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
];

const handler = nc();

handler.get((req, res) => {
  res.status(200).json(customers);
});

handler.post((req, res) => {
  const newCustomer = req.body;
  // Implement add functionality here
  res.status(201).json(newCustomer);
});

handler.put((req, res) => {
  const updatedCustomer = req.body;
  // Implement update functionality here
  res.status(200).json(updatedCustomer);
});

handler.delete((req, res) => {
  const customerId = req.body.id;
  // Implement delete functionality here
  res.status(200).json({ message: "Customer deleted successfully" });
});

export default handler;
