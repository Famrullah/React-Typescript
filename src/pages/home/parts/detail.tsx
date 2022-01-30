import React from "react";
import { useLocation, navigate } from "@reach/router";
import { Text } from "../../../components/atom/text";

const Table = () => {
  const { state }: any = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto">
      <button
        className="bg-blue-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex mb-20 mt-10"
        onClick={() => goBack()}
      >
        <span>Back</span>
      </button>
      <div className="card">
        <Text tag="h2" className="right-0 mb-10">
          Detail Transaction
        </Text>
        <table>
          <tbody>
            <tr>
              <td className="py-2 font-bold"> Id</td>
              <td>: &nbsp; &nbsp;</td>
              <td>{state ? state.data.id : "-"}</td>
            </tr>
            <tr>
              <td className="py-2 font-bold">Debit</td>
              <td>: &nbsp; &nbsp;</td>
              <td>{state ? state.data.debit : "-"}</td>
            </tr>
            <tr>
              <td className="py-2 font-bold">Credit</td>
              <td>: &nbsp; &nbsp;</td>
              <td>{state ? state.data.credit : "-"}</td>
            </tr>
            <tr>
              <td className="py-2 font-bold">Category</td>
              <td>: &nbsp; &nbsp;</td>
              <td>{state ? state.data.category : "-"}</td>
            </tr>
            <tr>
              <td className="py-2 bold font-bold">Description</td>
              <td>: &nbsp; &nbsp;</td>
              <td>{state ? state.data.description : "-"}</td>
            </tr>
            <tr>
              <td className="py-2 font-bold">Transaction Date</td>
              <td>: &nbsp; &nbsp;</td>
              <td>{state ? state.data.transactionDate : "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
