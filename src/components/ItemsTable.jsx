import React from 'react';

const ItemsTable = ({ items, placeOfSupply, placeOfDelivery }) => {
  let total = 0;

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Unit Price</th>
          <th>Qty</th>
          <th>Net Amount</th>
          <th>Tax Rate</th>
          <th>Tax Type</th>
          <th>Tax Amount</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          let netAmount = item.unitPrice * item.quantity;
          let taxAmount = netAmount * (item.taxRate / 100);
          let totalAmount = netAmount + taxAmount;
          total += totalAmount;

          let taxType = placeOfSupply === placeOfDelivery ? `CGST (${item.taxRate / 2}%) / SGST (${item.taxRate / 2}%)` : `IGST (${item.taxRate}%)`;

          return (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.unitPrice.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>{netAmount.toFixed(2)}</td>
              <td>{item.taxRate}%</td>
              <td>{taxType}</td>
              <td>{taxAmount.toFixed(2)}</td>
              <td>{totalAmount.toFixed(2)}</td>
            </tr>
          );
        })}
        <tr className="total">
          <td colSpan="7">Total:</td>
          <td>{total.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ItemsTable;
