import Backdrop from "./components/Backdrop/Backdrop";
import CartItem from "./components/CartItem/CartItem";
import Modal from "./components/Modal/Modal";

import {useState} from 'react';

function App() {
  // modalIsOpen => gets the default value of false
  // setModalIsOpen => is called to assign a new value to modalIsOpen
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const data = [
    {
      text: "Apples",
      checked: false
    },
    {
      text: "Bread",
      checked: false
    },
    {
      text: "Cheese",
      checked: false
    },
    {
      text: "Dough",
      checked: false
    },
    {
      text: "Eggs",
      checked: false
    },
  ];

  function clearAllHandler(props) {
    setModalIsOpen(true);
  }

  function closeModalHandler(props) {
    setModalIsOpen(false);
  }

  function checkCartItem(event) {
    console.log("checking");

  }

  function uncheckCartItem() {
    console.log("unchecking");
  }

  return (
    <div>
      <h1 className="text-center text-bg-dark text-uppercase">Shopping Cart</h1>
      <div>
        <div id="uncheckedItems">

          {data.map((item, index) => {
            return <CartItem key={index} checked={item.checked} text={item.text} onChecked={checkCartItem} onUnChecked={uncheckCartItem}/>;
          })}
       
        </div>
      </div>

      {/* We only show Modal and Backdrop if modalIsOpen is truthy */}
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      { modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
      

      <button id="fixedbutton" className="btn btn-danger" onClick={clearAllHandler}>Clear All</button>
    </div>
  );
}

export default App;
