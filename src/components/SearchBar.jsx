function SearchBar() {
  return (
    <div className='h-11 w-[85%] flex border-2 border-black'>
      <input
        className='h-full w-full px-3 outline-none text-gray text-xl'
        placeholder='일정을 검색해 보세요'
      />
    </div>
  );
}

export default SearchBar;
