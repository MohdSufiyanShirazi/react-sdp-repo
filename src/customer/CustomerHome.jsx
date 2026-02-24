
import React, { useEffect, useState } from 'react';

export default function CustomerHome() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // Get logged-in username from sessionStorage (set during login)
    const registrations = JSON.parse(localStorage.getItem('customerRegistrations')) || [];
    // Try to get last logged-in username from sessionStorage
    const username = sessionStorage.getItem('customerUsername');
    if (username) {
      const found = registrations.find((reg) => reg.username === username);
      if (found) setCustomer(found);
    }
  }, []);

  return (
    <div>
      <h2>Customer Home</h2>
      {customer ? (
        <div className="customer-info">
          <p><strong>Name:</strong> {customer.fullName}</p>
          <p><strong>Username:</strong> {customer.username}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Gender:</strong> {customer.gender}</p>
          <p><strong>Contact No:</strong> {customer.contactNo}</p>
          <p><strong>Location:</strong> {customer.location}</p>
        </div>
      ) : (
        <p>Welcome! (No customer info found.)</p>
      )}
    </div>
  );
}

