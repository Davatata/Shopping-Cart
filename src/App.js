import Backdrop from "./components/Backdrop/Backdrop";
import Modal from "./components/Modal/Modal";

import {useState} from 'react';
import CartItemList from "./components/CartItemLIst/CartItemList";

function App() {
  const unchecked = [
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

  const checked = [
    {
      text: "Fries",
      checked: true
    },
  ];

  // modalIsOpen => gets the default value of false
  // setModalIsOpen => is called to assign a new value to modalIsOpen
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  // updating these arrays will update the UI
  const [ checkedItems, setCheckedItems ] = useState(checked);
  const [ uncheckedItems, setUncheckedItems ] = useState(unchecked);

  function clearAllHandler() {
    console.log("Clear all button clicked");
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function removeAllItems() {
      setCheckedItems([]);
      setUncheckedItems([]);
    closeModalHandler();
  }

  function checkCartItem(event) {
    console.log("checking", event);
    //iterate unchecked and mark clicked item as checked
  }

  function uncheckCartItem() {
    console.log("unchecking");
    //iterate checked and mark clicked item as unchecked
  }

  function addBlankUnchecked() {
    const newArray = [...uncheckedItems];
    newArray.push(
      {
        text: "",
        checked: false
      }
    );
    setUncheckedItems(newArray);
    console.log("Adding blank item");
  }

  function addBlankChecked() {
    const newArray = [...checkedItems];
    newArray.push(
      {
        text: "",
        checked: true
      }
    );
    setCheckedItems(newArray);
    console.log("Adding blank item");
  }

  function deleteUnchecked(e) {
    console.log(e);
  }

  function deleteChecked(params) {
    console.log("Delete");
  }

  return (
    <div>
      <h1 className="text-center text-bg-dark text-uppercase">Shopping Cart</h1>
      <div>
        <div id="lists">

          <div className="card card-body listCard lightSkyBlue">
            <CartItemList 
              title="Need"
              list={uncheckedItems}
              checkCartItem = {checkCartItem}
              uncheckCartItem = {uncheckCartItem}
              deleteItem = {deleteUnchecked}
              addBlankItem = {addBlankUnchecked}/>
          </div>

          <div className="card card-body listCard lightGreenBg">
            <CartItemList 
              title="In Cart"
              list={checkedItems}
              checkCartItem = {checkCartItem}
              uncheckCartItem = {uncheckCartItem}
              deleteItem = {deleteChecked}
              addBlankItem = {addBlankChecked}/>
          </div>
       

        </div>
      </div>

      {/* We only show Modal and Backdrop if modalIsOpen is truthy */}
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={removeAllItems}/>}
      { modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
      

      <button id="fixedbutton" className="btn btn-danger" onClick={clearAllHandler}>Clear All</button>
    </div>
  );
}

export default App;
