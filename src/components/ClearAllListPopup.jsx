import { useDispatch } from "react-redux";
import { modifyMode } from "../slice/modeSlice";
import { clearAllList } from "../slice/todoSlice";

function ClearAllListPopup() {
  const dispatch = useDispatch();

  function onClickSubmitBtn() {
    dispatch(clearAllList());
    dispatch(modifyMode("default"));
  }
  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[340px] h-[200px] bg-yellow rounded-xl py-4 text-center flex flex-col mx-auto mt-[280px] desktop:w-[500px] desktop:h-[280px] desktop:mt-[200px] desktop:py-8'>
        <p className='text-xl font-bold mb-10 desktop:text-[48px] desktop:mb-[65px]'>
          일정 비우기
        </p>
        <p className='text-md grow desktop:text-[24px]'>
          일정을 모두 삭제 하시겠습니까?
        </p>
        <div className='flex justify-center gap-6'>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px] hover:bg-black rounded-md hover:text-white'
            onClick={onClickSubmitBtn}
          >
            네
          </button>
          <button
            onClick={() => dispatch(modifyMode("default"))}
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px] hover:bg-black rounded-md hover:text-white'
          >
            아니요
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClearAllListPopup;
