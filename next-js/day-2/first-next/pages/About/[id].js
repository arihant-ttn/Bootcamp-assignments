"use client";
import React from 'react';
import employee from './about.json';
import { useRouter } from 'next/router';


export default function Id() {
  const router = useRouter();
  const { id } = router.query;

 
  const selectedEmployee = employee.find((emp) => emp.id === id);

  if (!selectedEmployee) {
    return <p className="p-4 text-red-500">Employee not found.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
      <p className="text-lg font-semibold">ID: {selectedEmployee.id}</p>
      <p className="text-md">Name: {selectedEmployee.name}</p>
      <p className="text-md">Department: {selectedEmployee.department}</p>
      <p className="text-md text-blue-600 underline">{selectedEmployee.email}</p>
    </div>
  );
}
