import AddIcon from "../assets/icon/add.svg";

function AddButton() {
  return (
    <button className='grow h-11 bg-pink'>
      <img src={AddIcon} className='mx-auto' />
    </button>
  );
}

export default AddButton;
