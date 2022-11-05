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

      <form className=" border border-white rounded ">
        {/* message input starts*/}
        <input
          id="input"
          className=" border-0 w-100 mx-auto p-3 bg-light"
          type="text"
          placeholder="Type a message ..."
        />
        {/* message input ends */}

        {/* extra buttons with features starts here */}
        <div className="container pb-2  bg-light">
          <div className="row align-items-center">
            <div className="col ms-2 ">
              <input
                className=""
                type="checkbox"
                checked
                data-toggle="toggle"
                data-on="<i class='fa fa-lock'></i> Private"
                data-off="<i class='fa fa-unlock'></i> Default"
              ></input>
            </div>
            <div className="col-6 me-5">
              <i
                class="fa fa-hashtag d-inline-block mx-3"
                aria-hidden="true"
              ></i>
              <i
                class="fa fa-paperclip d-inline-block mx-3"
                aria-hidden="true"
              ></i>
              <i
                class="fa fa-smile-o d-inline-block mx-3"
                aria-hidden="true"
              ></i>
            </div>
            <div className="col">
              <button className="border-0 bg-transparent text-primary">
                <i
                  class="fa fa-paper-plane d-inline-block ms-5"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
        {/* extra buttons with features ends here  */}
      </form>
    </div>
  );
};

export default ChatBox;
