import React from 'react';

const Details = ({ data }) => {
  return (
    <div className="details">
      <div className="seller-details">
        <h3>Sold By:</h3>
        <p>{data.seller.name}</p>
        <p>{data.seller.address}</p>
        <p>{`${data.seller.city}, ${data.seller.state}, ${data.seller.pincode}`}</p>
        <p>PAN No: {data.seller.pan}</p>
        <p>GST Registration No: {data.seller.gst}</p>
      </div>
      <div className="buyer-details">
        <h3>Billing Address:</h3>
        <p>{data.buyer.name}</p>
        <p>{data.buyer.address}</p>
        <p>{`${data.buyer.city}, ${data.buyer.state}, ${data.buyer.pincode}`}</p>
        <p>State/UT Code: {data.buyer.stateCode}</p>
        <h3>Shipping Address:</h3>
        <p>{data.shipping.name}</p>
        <p>{data.shipping.address}</p>
        <p>{`${data.shipping.city}, ${data.shipping.state}, ${data.shipping.pincode}`}</p>
        <p>State/UT Code: {data.shipping.stateCode}</p>
      </div>
    </div>
  );
};

export default Details;
