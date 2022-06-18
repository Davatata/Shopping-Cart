function Modal(props) {

  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modalPopup">
      <p>Are you sure?</p>
      <button className="btn btn-outline-dark mx-2" onClick={cancelHandler}>Cancel</button>
      <button className="btn btn-danger mx-2" onClick={confirmHandler}>Delete</button>
    </div>
  );
}

export default Modal;
