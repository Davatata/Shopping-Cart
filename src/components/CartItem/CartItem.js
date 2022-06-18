import {useState} from 'react';

function CartItem(props) {
  const [text, setText] = useState(props.text);

  function deleteHandler() {
    console.log("closing " + props.text);
  }

  function updateCheckValue(event) {
    console.log("Setting " + props.text + " to " + event.target.checked);

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
    <div className="bg-light container-fluid shadow my-3 cartItem rounded" style={{ height: "3rem" }}>
      <div className="row">
      <div class="col-1 text-center">
        <input
          className="form-check-input mx-2 align-self-center"
          checked={props.checked}
          type="checkbox"
          onChange={updateCheckValue}
        />
        </div>
        <div className="col-9 col-sm-10">
          <textarea
            className="form-control text-uppercase"
            rows="1"
            onChange={textUpdateHandler}
            value={text}
          ></textarea>
        </div>

        <div className="col-1 text-center">
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
