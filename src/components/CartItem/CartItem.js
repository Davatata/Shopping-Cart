import "./CartItem.css";

function CartItem() {
  return (
    <div className="bg-light container shadow my-3" style={{ height: "3rem" }}>
      <div className="row">
        <img alt="Drag" className="col-sm-1 col-form-label" />
        <input
          className="col-sm-1 form-check-input mt-3 mx-2 h3"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <div className="col-sm-9">
          <textarea
            className="form-control mt-1"
            id="exampleFormControlTextarea1"
            rows="1"
          ></textarea>
        </div>

        <button className="col-sm-1 btn-close cartClose"></button>
      </div>
    </div>
  );
}

export default CartItem;
