import CartItem from "../CartItem/CartItem";

function CartItemList(props) {
  return (
    <div>
          <span className="h4">{props.title}</span>
          {props.list.map((item, index) => {
            return <CartItem key={index} checked={item.checked} text={item.text} 
              onChecked={props.checkCartItem} 
              onUnChecked={props.uncheckCartItem}
              onDelete={props.deleteItem}
              onChange={props.onChange}
              onKeyUp={props.onKeyUp}
              index={index}
              autofocus={item.autofocus}/>;
          })}

          <div className="container-fluid">
            <button className="float-end btn btn-success text-uppercase" onClick={props.addBlankItem}>Add +</button>
          </div>
    </div>
  );
}

export default CartItemList;