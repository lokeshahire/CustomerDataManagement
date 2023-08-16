import { useState } from "react";

export default function CustomerDetails({ customerId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    // Perform validation and update customer data
    if (!name || !email || !phoneNumber) {
      setError("All fields are required");
      return;
    }
    // Update customer logic
    // ...

    setIsEditing(false);
  };

  const handleDelete = () => {
    // Perform deletion
    // ...
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
