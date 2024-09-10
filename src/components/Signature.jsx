import React from 'react';

const Signature = ({ data }) => {
  return (
    <div className="signature">
      <p>For {data.seller.name}:</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcpXbG_oKNCqjtBffoBPu2gYBbKwWDqB_dA&s" alt="Authorized Signature" />
      
    </div>
  );
};

export default Signature;
