import LightMode from "../assets/icon/light.svg";
import SearchIcon from "../assets/icon/search.svg";
import AddIcon from "../assets/icon/add.svg";
import DesktopHeaderButton from "./DesktopHeaderButton";
import AppLogo from "./AppLogo";
function Header() {
  return (
    <header className='h-[56px] flex items-center justify-between px-6 desktop:h-[200px] desktop:px-4 desktop:pb-4 relative'>
      <AppLogo />
      <img src={LightMode} className='w-6 h-6 ml-auto desktop:hidden' />
      <DesktopHeaderButton>
        <img src={SearchIcon} className='mx-auto' />
      </DesktopHeaderButton>
      <DesktopHeaderButton rightPostion={4}>
        <img src={AddIcon} className='mx-auto w-[52px] h-[52px]' />
      </DesktopHeaderButton>
      <DesktopHeaderButton rightPostion={"[156px]"}>
        <img src={LightMode} className='mx-auto w-[52px] h-[52px]' />
      </DesktopHeaderButton>
    </header>
  );
}

export default Header;
