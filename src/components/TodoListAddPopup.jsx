import { useState } from "react";
import { useDispatch } from "react-redux";
import { returnDefault } from "../slice/modeSlice";
import { addList } from "../slice/todoSlice";
import makeDateString from "../util/makeDateString";
function TodoListAddPopup() {
  const [listTitle, setListTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    setErrorMessage(false);
    setListTitle(e.target.value);
  }

  function submitAddList() {
    if (listTitle.trim() === "") {
      setErrorMessage(true);
      return;
    }
    dispatch(addList(listTitle, makeDateString()));
    dispatch(returnDefault());
  }

  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[340px] h-[200px] bg-yellow rounded-xl py-4 text-center flex flex-col mx-auto mt-[280px] desktop:w-[550px] desktop:h-[320px] desktop:mt-[250px] desktop:py-8'>
        <p className='text-xl font-bold grow desktop:text-[48px]'>일정 추가</p>
        {errorMessage && (
          <div className='text-rose-600 desktop:text-lg'>
            일정을 입력해주세요
          </div>
        )}
        <input
          className='focus:outline-none bg-transparent  mb-8 w-2/3 mx-auto border-b-2 px-1 desktop:mt-5 desktop:text-lg'
          value={listTitle}
          onChange={handleChange}
          maxLength={12}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitAddList();
            }
          }}
        />
        <div className='flex justify-center gap-6 desktop:mt-5'>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px] hover:bg-black rounded-md hover:text-white'
            onClick={submitAddList}
          >
            추가
          </button>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px] hover:bg-black rounded-md hover:text-white'
            onClick={() => dispatch(returnDefault())}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoListAddPopup;
