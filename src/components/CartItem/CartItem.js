import "./CartItem.css";

import {useState} from 'react';

function CartItem(props) {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState(props.text);

  function deleteHandler() {
    console.log("closing " + props.text);
  }

  function updateCheckValue(event) {
    console.log("Setting " + props.text + " to " + event.target.checked);
    setChecked(event.target.checked);

    if (event.target.checked === true) {
      props.onChecked(event);
    }
    else {
      props.onUnChecked(event);
    }
  }

  function textUpdateHandler(event) {
    setText(event.target.value);
  }

  return (
    <div className="bg-light container shadow my-3" style={{ height: "3rem" }}>
      <div className="row">
        <input
          className="col-1 form-check-input mx-2 align-self-center"
          type="checkbox"
          onChange={updateCheckValue}
        />
        <div className="col-8 col-sm-10">
          <textarea
            className="form-control text-uppercase"
            rows="1"
            onChange={textUpdateHandler}
            value={text}
          ></textarea>
        </div>

        <div className="col-1">
          <button
            className="btn-close cartClose"
            onClick={deleteHandler}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
