import React from "react";
import "./UserDEtails.css";

const UserDetails = () => {
  return (
    <div className="col-3 px-0 mt-3">
      <h4 className="text-center">Details</h4>
      <div className="user-info-box">
        <div
          className="card bg-light  border-light mx-auto mb-3"
          style={{ width: "90%" }}
        >
          <div className="card-header border-light">General Info</div>
          <div className="bg-light d-flex align-items-center">
            <img
              src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
              alt="user"
              width="50"
              className="rounded-circle mx-3 my-3"
            />
            <h5>Visitor</h5>
          </div>
          <div className="mx-3 mb-3 bg-light">
            <p class="card-text"> 09:09 am local</p>
            <p class="card-text">
              <i className="mdi mdi-map-marker-radius"></i> Ashburn , Virginia,
              USA
            </p>
          </div>
          <div className="card-footer border-light text-muted">
            <img
              className="card-img-bottom"
              src="https://via.placeholder.com/350"
              alt="Card"
            />
          </div>
        </div>
        <div
          className="card bg-light  border-light mx-auto mb-3 shadow"
          style={{ width: "90%" }}
        >
          <div class="card-body">
            <h5 class="card-title">Visited Pages</h5>
            <p class="card-text">
              DMN Transport - Logistics Made.{" "}
              <a href="https://www.google.com/">https:xyz.com./abc</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
