function CartItem(props) {

  function deleteHandler() {
    console.log("closing " + props.text + " " + props.index);
    props.onDelete(props.index);
  }

  function updateCheckValue(event) {
    console.log("Setting " + props.text + " to " + event.target.checked);

    if (event.target.checked === true) {
      props.onChecked(props.index);
    }
    else {
      props.onUnChecked(props.index);
    }
  }

  function textUpdateHandler(event) {
    props.onChange(event.target.value, props.index);
  }

  return (
    <div className="shadow cartItem rounded">

        <div className="input-group">
          <div className="input-group-text">
            <input
              className="form-check-input mt-0 align-self-center cartItemCheckbox"
              checked={props.checked}
              type="checkbox"
              aria-label="Checkbox to denote if item is in cart"
              onChange={updateCheckValue}
            />
          </div>
          <input
              className="form-control text-uppercase fw-bold cartItemText"
              aria-label="Cart item name"
              type="text"
              onChange={textUpdateHandler}
              value={props.text}
            />
          <button
            type="button"
              className="btn btn-secondary fw-bold"
              onClick={deleteHandler}
            >X</button>
        </div>
      
    </div>
  );
}

export default CartItem;
