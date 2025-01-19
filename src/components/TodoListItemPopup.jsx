function TodoListItemPopup() {
  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[320px] h-[180px] bg-yellow rounded-xl py-4 text-center flex flex-col mx-auto mt-[280px] desktop:w-[500px] desktop:h-[280px] desktop:mt-[200px] desktop:py-8'>
        <p className='text-xl font-bold mb-9 desktop:text-[48px] desktop:mb-[65px]'>
          일정 제목
        </p>
        <p className='text-sm grow desktop:text-[24px]'>
          일정을 삭제 하겠습니까?
        </p>
        <div className='flex justify-center gap-6'>
          <button className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px]'>
            네
          </button>
          <button className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px]'>
            아니요
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoListItemPopup;
