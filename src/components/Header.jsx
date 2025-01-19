import LightMode from "../assets/icon/light.svg";

function Header() {
  return (
    <div className='h-[56px] flex items-center justify-between relative px-6'>
      <div className='absolute left-1/2 translate-x--1/2'>Logo</div>
      <img src={LightMode} className='w-6 h-6 ml-auto' />
    </div>
  );
}

export default Header;
