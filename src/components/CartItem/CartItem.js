function CartItem(props) {

  function deleteHandler() {
    console.log("closing " + props.text + " " + props.index);
    props.onDelete(props.index);
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
    props.onChange(event.target.value, props.index);
  }

  return (
    <div className="bg-light container-fluid shadow cartItem rounded" style={{ height: "3rem" }}>
      <div className="row">
        <div className="col-1 text-center">
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
            value={props.text}
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
