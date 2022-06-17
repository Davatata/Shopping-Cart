function CartItem() {
  return (
    <div className="bg-light container shadow my-3" style={{ height: "3rem" }}>
      <div className="row">
        <img alt="Icon" className="col-sm-2 col-form-label" />
        <input className="col-sm-2 form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <div className="col-sm-6">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
          ></textarea>
        </div>

        <button className="col-sm-2 btn btn-danger">X</button>
      </div>
    </div>
  );
}

export default CartItem;
