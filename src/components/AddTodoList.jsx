import { useState } from "react";
import { useDispatch } from "react-redux";
import { returnDefault } from "../slice/modeSlice";
import { addList } from "../slice/todoSlice";
function AddTodoList() {
  const [listTitle, setListTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    setErrorMessage(false);
    setListTitle(e.target.value);
  }

  function submitAddList(listTitle) {
    if (listTitle.trim() === "" || listTitle.length > 12) {
      setErrorMessage(true);
      return;
    }
    dispatch(addList(listTitle));
    dispatch(returnDefault());
  }

  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[320px] h-[180px] bg-yellow rounded-xl py-4 text-center flex flex-col mx-auto mt-[280px] desktop:w-[500px] desktop:h-[280px] desktop:mt-[200px] desktop:py-8'>
        <p className='text-xl font-bold mb-9 desktop:text-[48px] desktop:mb-[65px]'>
          일정 추가
        </p>
        {errorMessage && (
          <div className='text-rose-600'>일정을 입력해주세요</div>
        )}
        <input value={listTitle} onChange={handleChange} maxLength={12} />
        <div className='flex justify-center gap-6'>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px]'
            onClick={() => submitAddList(listTitle)}
          >
            추가
          </button>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px]'
            onClick={() => dispatch(returnDefault())}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodoList;
