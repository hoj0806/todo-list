function TodoListItemPopup() {
  return (
    <div className='w-[320px] h-[180px] bg-yellow rounded-xl py-4 text-center flex flex-col'>
      <p className='text-xl font-bold mb-9'>일정 제목</p>
      <p className='text-sm grow'>일정을 삭제 하겠습니까?</p>
      <div className='flex justify-center gap-6'>
        <button className='w-[76px] h-6 bg-white-10 text-sm'>네</button>
        <button className='w-[76px] h-6 bg-white-10 text-sm'>네</button>
      </div>
    </div>
  );
}

export default TodoListItemPopup;
