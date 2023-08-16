import { useState } from "react";

export default function CustomerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and submit data
    if (!name || !email || !phoneNumber) {
      setError("All fields are required");
      return;
    }
    // Add customer logic
    // ...

    // Clear form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit">Add Customer</button>
      {error && <p>{error}</p>}
    </form>
  );
}
