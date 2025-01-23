import { useDispatch } from "react-redux";
import DeleteHashTagIcon from "../assets/icon/deleteHasgTag.svg";
import { deleteHasgtag } from "../slice/todoSlice";

function Popuphashtag({ tag, selectedId, index }) {
  const dispatch = useDispatch();
  function onClickDeleteHasghtag(selectedId, index) {
    dispatch(deleteHasgtag(selectedId, index));
  }
  return (
    <div className='w-12 h-4 text-[8px] bg-black text-white rounded-[8px] flex items-center px-1 gap-1 desktop:w-[100px] desktop:h-[32px] desktop:rounded-3xl desktop:px-2 desktop:gap-2'>
      <button onClick={() => onClickDeleteHasghtag(selectedId, index)}>
        <img
          src={DeleteHashTagIcon}
          className='w-2 h-2 desktop:w-4 desktop:h-4'
        />
      </button>
      <p className='desktop:text-[14px]'>{tag}</p>
    </div>
  );
}

export default Popuphashtag;
