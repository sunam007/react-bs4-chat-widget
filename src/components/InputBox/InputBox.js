import React from "react";
import "./InputBox.css";
const InputBox = () => {
  return (
    // <div class="input-group mb-3 mt-3">
    //   <div class="input-group-prepend">
    //     <span class="input-group-text">$</span>
    //   </div>
    //   <input
    //     type="text"
    //     class="form-control"
    //     aria-label="Amount (to the nearest dollar)"
    //   />
    //   <div class="input-group-append">
    //     <span class="input-group-text">.00</span>
    //   </div>
    // </div>
    <div className="box">
      <form action="">
        <button id="btn-1">
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
        <button id="btn-2">
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
        <button id="btn-3">
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>

        <input type="text" />
      </form>
    </div>
  );
};

export default InputBox;
