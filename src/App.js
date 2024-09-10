import React from "react";
import Invoice from "./components/Invoice";
import './App.css';

const App = () => {
  const invoiceData = {
    seller: {
      name: "Varasiddhi Silk Exports",
      address: "75, 3rd Cross, Lalbagh Road",
      city: "BENGALURU",
      state: "KARNATAKA",
      pincode: "560027",
      pan: "AACFV3325K",
      gst: "29AACFV3325K1ZY",
    },
    buyer: {
      name: "Madhu B",
      address:
        "Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum, Lakshminarayana Pura, AECS Layout",
      city: "BENGALURU",
      state: "KARNATAKA",
      pincode: "560037",
      stateCode: "29",
    },
    shipping: {
      name: "Madhu B",
      address:
        "Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum, Lakshminarayana Pura, AECS Layout",
      city: "BENGALURU",
      state: "KARNATAKA",
      pincode: "560037",
      stateCode: "29",
    },
    placeOfSupply: "KARNATAKA",
    placeOfDelivery: "KARNATAKA",
    order: {
      number: "403-3225714-7676307",
      date: "28.10.2019",
    },
    invoice: {
      number: "IN-761",
      date: "28.10.2019",
    },
    items: [
      {
        description: "Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42)",
        unitPrice: 538.1,
        quantity: 1,
        taxRate: 5,
      },
      {
        description: "Shipping Charges",
        unitPrice: 30.0,
        quantity: 1,
        taxRate: 5,
      },
    ],
    reverseCharge: false,
    signatureImage: "path/to/signature.png",
  };

  return (
    <div>
      <Invoice data={invoiceData} />
    </div>
  );
};

export default App;
