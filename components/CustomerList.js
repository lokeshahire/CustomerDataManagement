import React from "react";
import Link from "next/link";

const CustomerList = ({ customers, onCustomerClick, onDeleteClick }) => {
  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <span>{customer.name}</span>
            <button onClick={() => onCustomerClick(customer.id)}>View</button>
            <button onClick={() => onDeleteClick(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link href="/add">Add Customer</Link>
    </div>
  );
};

export default CustomerList;
