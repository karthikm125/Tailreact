import React from "react";

const contacts = [
  {
    name: "John Doe",
    position: "CEO",
    email: "john.doe@example.com",
    phone: "+1234567890",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    email: "jane.smith@example.com",
    phone: "+0987654321",
  },
  {
    name: "Mike Johnson",
    position: "HR Manager",
    email: "mike.johnson@example.com",
    phone: "+1122334455",
  },
  {
    name: "Emily Davis",
    position: "Lead Developer",
    email: "emily.davis@example.com",
    phone: "+6677889900",
  },
];

const Contacts = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Company Contacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">{contact.name}</h2>
            <p className="text-gray-600 mt-2">{contact.position}</p>
            <p className="text-blue-600 mt-4">Email: <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a></p>
            <p className="text-gray-800 mt-2">Phone: <a href={`tel:${contact.phone}`} className="underline">{contact.phone}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
