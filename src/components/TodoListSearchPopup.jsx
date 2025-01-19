import SearchItem from "./SearchItem";

function TodoListSearchPopup() {
  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[320px] h-[360px] bg-yellow rounded-xl pt-4 pb-2 px-[15px] text-center flex flex-col mx-auto mt-[220px] gap-3 desktop:w-[800px] desktop:h-[600px] desktop:mt-[60px] desktop:pt-[34px] desktop:px-[40px] desktop:pb-[30px]'>
        <p className='text-xl font-bold desktop:text-[48px] mb-[80px]'>
          일정 검색
        </p>
        <input
          className='bg-yellow outline-none border-b-2 w-[420px] mx-auto pl-1 text-[24px]'
          placeholder='일정을 검색해 보세요'
        />
        <ul className='w-[550px] h-[400px] bg-orange mx-auto overflow-y-auto pt-4'>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </ul>
      </div>
    </div>
  );
}

export default TodoListSearchPopup;
