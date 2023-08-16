import React, { useState } from "react";
import ConfirmationModal from "../components/ConfirmationModal";
import Link from "next/link";
import CustomerList from "../components/CustomerList";

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

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const handleDeleteClick = (customerId) => {
    setSelectedCustomerId(customerId);
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    // Implement customer deletion logic here
    // After successful deletion, update customers array and close modal
    // You should also handle error cases and show notifications to the user
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    setSelectedCustomerId(null);
  };

  return (
    <div>
      <h1>Customer Management App</h1>
      <CustomerList
        customers={customers}
        onCustomerClick={(customerId) =>
          console.log(`View customer ${customerId}`)
        }
        onDeleteClick={handleDeleteClick}
      />
      <ConfirmationModal
        isOpen={isModalOpen}
        onCancel={handleModalCancel}
        onConfirm={handleModalConfirm}
      />
    </div>
  );
};

export default HomePage;
