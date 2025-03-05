function SearchItem({ todo }) {
  return (
    <li className='w-[500px] h-[60px] bg-white-20 rounded-2xl mx-auto mb-3 text-left px-3 flex items-center'>
      <p className='text-xl'>{todo.title}</p>
    </li>
  );
}

export default SearchItem;
