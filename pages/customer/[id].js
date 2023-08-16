import { useRouter } from "next/router";
import CustomerDetails from "../../components/CustomerDetails";

export default function CustomerDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Customer Details</h1>
      <CustomerDetails customerId={id} />
    </div>
  );
}
