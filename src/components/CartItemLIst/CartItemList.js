import CartItem from "../CartItem/CartItem";

function CartItemList(props) {
  return (
    <div>
          <h2>{props.title}</h2>
          {props.list.map((item, index) => {
            return <CartItem key={index} checked={item.checked} text={item.text} 
              onChecked={props.checkCartItem} 
              onUnChecked={props.uncheckCartItem}
              onDelete={props.deleteItem(index)}/>;
          })}

          <div className="container-fluid mb-5">
            <button className="float-end btn btn-success" onClick={props.addBlankItem}>Add +</button>
          </div>
    </div>
  );
}

export default CartItemList;