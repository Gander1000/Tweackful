import scss from "./Adout_us.module.scss";
import Sp from "../../assets/Google.svg";
import { Link } from "react-router-dom";
import { useState } from "react";


function Adout_us() {
  const [yourCon, setYourCon] = useState("");
  const [emeilCon, setEmeilCon] = useState("");

  return (
    <section className={scss.Adout_us}>
      <div className={scss.info_block}>
        <h1>Contact Us</h1>
        <span>
          If you have any questions about the subscription <br />
          or are not sure which plan is right for you, contact <br />
          our team and let’s schedule a call.
        </span>

        <div className={scss.contact_links}>
          <span>Call us <br />{yourCon}</span>
          <span>Email us <br />{emeilCon}</span>
        </div>
      </div>

      <div className={scss.icons}>
        <img src={Sp} alt="icon" />
        <img src={Sp} alt="icon" />
        <img src={Sp} alt="icon" />
        <img src={Sp} alt="icon" />
      </div>

      <div className={scss.form_block}>
        <h1>Let’s Talk 👋</h1>
        <span>
          If you have any question or issues using our <br />
          product, fill the form below. We'll help you.
        </span>

        <div className={scss.row}>
          <div className={scss.name}>
            <p>
              Your name <span>*</span>
            </p>
            <input
            type="text"
            maxLength={30}
            placeholder="Enter your name"
            vocab={yourCon}
            onChange={(e) => setYourCon(e.target.value)}
            required />
          </div>
          <div className={scss.name}>
            <p>
              Your email <span>*</span>
            </p>
            <input
            type="email"
            maxLength={30}
            placeholder="Enter your email"
            value={emeilCon}
            onChange={(e) => setEmeilCon(e.target.value)}
            required />
          </div>
        </div>

        <div className={scss.row_2}>
          <div className={scss.name}>
            <p>
              Choose topic <span>*</span>
            </p>
            <input type="text" placeholder="Select one topic" required />
          </div>
        </div>

        <div className={scss.row_3}>
          <div className={scss.name}>
            <p>
              Message <span>*</span>
            </p>
            <input type="text" placeholder="Write your message" required />
          </div>
        </div>

        <button>Contact Us</button>
      </div>
    </section>
  );
}

export default Adout_us;
