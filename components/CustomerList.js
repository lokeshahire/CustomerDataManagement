import Link from "next/link";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
  },
  // ... other customers ...
];

export default function CustomerList() {
  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.id}>
          <Link href={`/customer/${customer.id}`}>
            <a>{customer.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
