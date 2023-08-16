import Link from "next/link";
import CustomerList from "../components/CustomerList";

export default function Home() {
  return (
    <div>
      <h1>Customer List</h1>
      <CustomerList />
      <Link href="/add">Add Customer</Link>
      <Link href="/">
        <CustomerList />
      </Link>
    </div>
  );
}
