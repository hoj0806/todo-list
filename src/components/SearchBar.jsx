function SearchBar({ onChangeSearchValue }) {
  return (
    <div className='h-11 w-[85%] flex border-2 border-black'>
      <input
        className='h-full w-full px-3 outline-none text-xl placeholder:text-gray'
        placeholder='일정을 검색해 보세요'
        onChange={onChangeSearchValue}
      />
    </div>
  );
}

export default SearchBar;
