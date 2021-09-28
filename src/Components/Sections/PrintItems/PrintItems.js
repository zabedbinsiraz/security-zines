import React from "react";
import { printItems } from "../../../FakeData/FakeData";
import Item from "../../Item/Item";

const PrintItems = () => {
  return (
    <div
      className="container zines"
      style={{ background: "grey", marginTop: "0", marginBottom: "20px" }}
    >
      <div className="row">
        <div className="col">
          <div
            className="card zines-card"
            style={{ marginTop: "12px", background: "gray" }}
          >
            <div
              className="card-body zines-card-body"
              style={{ marginTop: "15px" }}
            >
              <h4
                className="card-title zines-card-title"
                style={{ color: "white", fontSize: "31px" }}
              >
                Some of them, you can print too.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex">
       {
           printItems.map(item => <Item  item={item} />)
       }
       </div>

    </div>
  );
};

export default PrintItems;
