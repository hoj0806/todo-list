function TodoListHashtag({ tag }) {
  return (
    <div className='text-[10px]  px-1 h-4 bg-black text-white rounded-3xl flex items-center font-regular desktop:text-xl desktop:px-3 desktop:h-6'>
      <p>{tag}</p>
    </div>
  );
}

export default TodoListHashtag;
