import React from "react";
import { useRouter } from "next/router";
import CustomerDetails from "../../components/CustomerDetails";

const customerData = {
  // Sample customer data (replace with your actual data)
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  phone: "123-456-7890",
};

const CustomerDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleUpdateCustomer = (updatedCustomer) => {
    // Implement update functionality here
  };

  return (
    <div>
      <h1>Customer Details</h1>
      <CustomerDetails
        customer={customerData}
        onUpdate={handleUpdateCustomer}
      />
    </div>
  );
};

export default CustomerDetailsPage;
