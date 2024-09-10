import React from 'react';
import Header from './Header';
import Details from './Details';
import OrderDetails from './OrderDetails';
import ItemsTable from './ItemsTable';
import Signature from './Signature';
import { numberToWords} from '../utils/numberToWords'; 

const Invoice = ({ data }) => {
  return (
    <div className="invoice">
      <Header />
      <Details data={data} />
      <OrderDetails data={data} />
      <ItemsTable items={data.items} placeOfSupply={data.placeOfSupply} placeOfDelivery={data.placeOfDelivery} />
      <Signature data={data} />
      <p>Amount in Words: {numberToWords(data.items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0))} only</p>
      <p>Whether tax is payable under reverse charge - {data.reverseCharge ? "Yes" : "No"}</p>
    </div>
  );
};

export default Invoice;
