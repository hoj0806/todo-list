import LightMode from "../assets/icon/light.svg";
import SearchIcon from "../assets/icon/search.svg";
import AddIcon from "../assets/icon/add.svg";
function Header() {
  return (
    <div className='h-[56px] flex items-center justify-between relative px-6 desktop:h-[200px] desktop:px-4 desktop:pb-4 relative'>
      <div className='absolute left-1/2 translate-x--1/2 '>Logo</div>
      <img src={LightMode} className='w-6 h-6 ml-auto desktop:hidden' />
      <button className='hidden desktop:block w-[120px] h-[74px] bg-orange rounded-[4px] absolute bottom-4'>
        <img src={SearchIcon} className='mx-auto' />
      </button>
      <button className='hidden desktop:block w-[120px] h-[74px] bg-orange rounded-[4px] absolute bottom-4 right-4'>
        <img src={AddIcon} className='mx-auto w-[52px] h-[52px]' />
      </button>
      <button className='hidden desktop:block w-[120px] h-[74px] bg-orange rounded-[4px] absolute bottom-4 right-[156px]'>
        <img src={LightMode} className='mx-auto w-[52px] h-[52px]' />
      </button>
    </div>
  );
}

export default Header;
