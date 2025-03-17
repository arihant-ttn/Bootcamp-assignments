"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled-components for the table
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  color: var(--font-color-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  padding: 0.75rem;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #e6f7ff;
  }
`;

const TableCell = styled.td`
  padding: 0.75rem;
  font-size: var(--font-size-small);
  color: var(--font-color-secondary);
  border: 1px solid #ddd;
  text-align: left;
`;

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData.products))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Product Table</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Description</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, title, description }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>{description}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Page;
