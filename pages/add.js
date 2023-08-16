import React from "react";
import Link from "next/link";
import CustomerForm from "../components/CustomerForm";

const AddPage = () => {
  const handleAddCustomer = (newCustomer) => {
    // Implement add functionality here
  };

  return (
    <div>
      <h1>Add Customer</h1>
      <CustomerForm onSubmit={handleAddCustomer} />
      <Link href="/">List</Link>
    </div>
  );
};

export default AddPage;
