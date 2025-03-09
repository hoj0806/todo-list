import { useDispatch } from "react-redux";
import DeleteHashTagIcon from "../assets/icon/deleteHasgTag.svg";
import { deleteHasgtag } from "../slice/todoSlice";

function Popuphashtag({ tag, selectedId, index }) {
  const dispatch = useDispatch();
  function onClickDeleteHasghtag(selectedId, index) {
    dispatch(deleteHasgtag(selectedId, index));
  }
  return (
    <div className='h-5 text-[12px] bg-black text-white rounded-3xl flex items-center justify-center px-2 gap-1 desktop:h-[32px] desktop:px-2 desktop:gap-2'>
      <button onClick={() => onClickDeleteHasghtag(selectedId, index)}>
        <img
          src={DeleteHashTagIcon}
          className='w-3 h-3 desktop:w-4 desktop:h-4'
        />
      </button>
      <p className='desktop:text-[18px]'>{tag}</p>
    </div>
  );
}

export default Popuphashtag;
