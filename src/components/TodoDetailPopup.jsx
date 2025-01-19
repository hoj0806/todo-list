import DeleteHashTagIcon from "../assets/icon/deleteHasgTag.svg";

function TodoDetailPopup() {
  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[320px] h-[360px] bg-yellow rounded-xl pt-4 pb-2 px-[15px] text-center flex flex-col mx-auto mt-[220px] gap-3'>
        <p className='text-xl font-bold'>일정 제목</p>

        <div className='text-right grow'>
          <p className='text-[12px] mb-1'>2025.01.01</p>
          <div className='bg-green w-full h-[200px] text-left rounded-[8px]'>
            ss
          </div>
          <div className='w-12 h-4 text-[8px] bg-black text-white rounded-[8px] flex items-center px-1 gap-1'>
            <img src={DeleteHashTagIcon} className='w-2 h-2' />
            <p>해시태그</p>
          </div>
        </div>

        <button className='bg-white-10 text-sm w-[76px] h-6 rounded-[4px] self-end'>
          확인
        </button>
      </div>
    </div>
  );
}

export default TodoDetailPopup;
