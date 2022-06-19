import {useState, useEffect} from 'react';

import Backdrop from "./components/Backdrop/Backdrop";
import Modal from "./components/Modal/Modal";
import CartItemList from "./components/CartItemLIst/CartItemList";
import packageJson from '../package.json';


function App() {
  // modalIsOpen => gets the default value of false
  // setModalIsOpen => is called to assign a new value to modalIsOpen
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  // updating these arrays will update the UI
  const [ checkedItems, setCheckedItems ] = useState(() => {
    const json = localStorage.getItem("checkedItems");
    const savedItems = JSON.parse(json);
    return savedItems || [];
  });
  const [ uncheckedItems, setUncheckedItems ] = useState(() => {
    const json = localStorage.getItem("uncheckedItems");
    const savedItems = JSON.parse(json);
    return savedItems || [];
  });

  function clearAllHandler() {
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

  function checkCartItem(index) {
    const newUnchecked = [...uncheckedItems];
    const newChecked= [...checkedItems];
    let item = newUnchecked.splice(index, 1)[0];
    item.checked = true;
    item.autofocus = false;
    newChecked.push(item);
    setCheckedItems(newChecked);
    setUncheckedItems(newUnchecked);
  }

  function uncheckCartItem(index) {
    const newUnchecked = [...uncheckedItems];
    const newChecked= [...checkedItems];
    let item = newChecked.splice(index, 1)[0];
    item.checked = false;
    item.autofocus = false;
    newUnchecked.push(item);
    setCheckedItems(newChecked);
    setUncheckedItems(newUnchecked);
  }

  function addBlankUnchecked() {
    const newArray = [...uncheckedItems];
    newArray.push(
      {
        text: "",
        checked: false,
        autofocus: true
      }
    );
    setUncheckedItems(newArray);
  }

  function addBlankChecked() {
    const newArray = [...checkedItems];
    newArray.push(
      {
        text: "",
        checked: true,
        autofocus: true
      }
    );
    setCheckedItems(newArray);
  }

  function deleteUnchecked(index) {
    let newArray = [...uncheckedItems];
    newArray.splice(index, 1);
    setUncheckedItems(newArray);
  }

  function deleteChecked(index) {
    let newArray = [...checkedItems];
    newArray.splice(index, 1);
    setCheckedItems(newArray);
  }

  function updateUncheckedItems(text, index) {
    let newArray = [...uncheckedItems];
    newArray[index].text = text;
    setUncheckedItems(newArray);
  }

  function updateCheckedItems(text, index) {
    let newArray = [...checkedItems];
    newArray[index].text = text;
    setCheckedItems(newArray);
  }

  function uncheckedEnterPress(event) {
    if (event.key === "Enter") {
      addBlankUnchecked();
    }
  }

  function checkedEnterPress(event) {
    if (event.key === "Enter") {
      addBlankChecked();
    }
  }

  useEffect(() => {
    const json = JSON.stringify(checkedItems);
    localStorage.setItem("checkedItems", json);
  }, [checkedItems]);

  useEffect(() => {
    const json = JSON.stringify(uncheckedItems);
    localStorage.setItem("uncheckedItems", json);
  }, [uncheckedItems]);


  return (
    <div>
      <span id="version" className=''>v{packageJson.version}</span>
      <h3 className="p-1 text-center text-bg-dark text-uppercase rounded">Shopping Cart</h3>
      
      <div>
        <div id="lists">

          <div className="card card-body listCard lightSkyBlue">
            <CartItemList 
              title="Need"
              list={uncheckedItems}
              checkCartItem = {checkCartItem}
              uncheckCartItem = {uncheckCartItem}
              deleteItem = {deleteUnchecked}
              addBlankItem = {addBlankUnchecked}
              onKeyUp = {uncheckedEnterPress}
              onChange= {updateUncheckedItems}/>
          </div>

          <div className="card card-body listCard lightGreenBg">
            <CartItemList 
              title="In Cart"
              list={checkedItems}
              checkCartItem = {checkCartItem}
              uncheckCartItem = {uncheckCartItem}
              deleteItem = {deleteChecked}
              addBlankItem = {addBlankChecked}
              onKeyUp={checkedEnterPress}
              onChange= {updateCheckedItems}/>
          </div>       

        </div>
      </div>

      {/* We only show Modal and Backdrop if modalIsOpen is truthy */}
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={removeAllItems}/>}
      { modalIsOpen && <Backdrop onClick={closeModalHandler}/>}      

        <div className="text-end">
          {(uncheckedItems.length > 0 || checkedItems.length > 0) &&
            <button id="fixedbutton" className=" btn btn-danger text-uppercase" onClick={clearAllHandler}>Clear All</button>
          }
        </div>      
    </div>
  );
}

export default App;
