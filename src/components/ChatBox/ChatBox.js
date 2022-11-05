import React from "react";
import "./ChatBox.css";
const ChatBox = () => {
  return (
    <div className="col-6 px-0">
      <div className="d-flex flex-column px-4 py-5 chat-box bg-white">
        <div className="media w-50 mb-3">
          <img
            src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
            alt="user"
            width="50"
            className="rounded-circle"
          />
          <div className="media-body ml-3">
            <div className="bg-light rounded py-2 px-3 mb-2">
              <p className="text-small mb-0 text-muted">
                Test which is a new approach all solutions
              </p>
            </div>
            <p className="small text-muted">12:00 PM | Aug 13</p>
          </div>
        </div>

        <div className="media align-self-end w-50 ml-auto mb-3">
          <div className="media-body">
            <div className="bg-primary rounded py-2 px-3 mb-2">
              <p className="text-small mb-0 text-white">
                Test which is a new approach to have all solutions
              </p>
            </div>
            <p className="small text-muted">12:00 PM | Aug 13</p>
          </div>
        </div>

        <div className="media w-50 mb-3">
          <img
            src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
            alt="user"
            width="50"
            className="rounded-circle"
          />
          <div className="media-body ml-3">
            <div className="bg-light rounded py-2 px-3 mb-2">
              <p className="text-small mb-0 text-muted">
                Test, which is a new approach to have
              </p>
            </div>
            <p className="small text-muted">12:00 PM | Aug 13</p>
          </div>
        </div>

        <div className="media align-self-end w-50 ml-auto mb-3">
          <div className="media-body">
            <div className="bg-primary rounded py-2 px-3 mb-2">
              <p className="text-small mb-0 text-white">
                Apollo University, Delhi, India Test
              </p>
            </div>
            <p className="small text-muted">12:00 PM | Aug 13</p>
          </div>
        </div>

        <div className="media w-50 mb-3">
          <img
            src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
            alt="user"
            width="50"
            className="rounded-circle"
          />
          <div className="media-body ml-3">
            <div className="bg-light rounded py-2 px-3 mb-2">
              <p className="text-small mb-0 text-muted">
                Test, which is a new approach
              </p>
            </div>
            <p className="small text-muted">12:00 PM | Aug 13</p>
          </div>
        </div>

        <div className="media align-self-end w-50 ml-auto mb-3">
          <div className="media-body">
            <div className="bg-primary rounded py-2 px-3 mb-2">
              <p className="text-small mb-0 text-white">
                Apollo University, Delhi, India Test
              </p>
            </div>
            <p className="small text-muted">12:00 PM | Aug 13</p>
          </div>
        </div>
      </div>

      <form action="/" className="bg-light">
        <div className="input-group align-items-center">
          <input
            type="text"
            placeholder="Type a message"
            aria-describedby="button-addon2"
            className="form-control rounded-0 border-0 py-3 bg-light"
          />
          <div className="input-group-append">
            <button id="button-addon2" type="button" className="btn btn-link">
              {" "}
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;
