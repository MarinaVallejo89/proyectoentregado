import React from "react";
import "./Table.css";

const translate = (text) => {
  switch(text){
    case 'name': return 'Nombre';
    case 'color': return 'Color';
    case 'price': return 'Precio';
    case '__v': return 'Extra';
    default: return text;
  }
}

const Table = ({ data, showManufacterData }) => {
  return (
    <div className="contTable">
      <table className="table">
        <caption className="tableTitle">Resultados de tu coche ideal</caption>
        <thead>
          <tr>
            {Object.keys(data[0]).map((keyName, index) => {
              return (
                keyName !== "_id" && (
                  <th key={"th_" + index} className="first-row">
                    {translate(keyName)}
                  </th>
                )
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((elem, index) => {
            return (
              <tr
                key={index}
                className="row-data"
                onClick={() => showManufacterData(elem._id)}
              >
                {Object.values(elem).map((data, index) => {
                  return index !== 0 && <td key={"td_" + index}>{data}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
