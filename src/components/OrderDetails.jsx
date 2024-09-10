import React from 'react';

const OrderDetails = ({ data }) => {
  return (
    <div>
      <p>Order Number: {data.order.number}</p>
      <p>Order Date: {data.order.date}</p>
      <p>Invoice Number: {data.invoice.number}</p>
      <p>Invoice Date: {data.invoice.date}</p>
      <p>Place of Supply: {data.placeOfSupply}</p>
      <p>Place of Delivery: {data.placeOfDelivery}</p>
    </div>
  );
};

export default OrderDetails;
