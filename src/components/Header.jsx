import LightModeIcon from "../assets/icon/light.svg";
import DarkModeIcon from "../assets/icon/dark.svg";
import SearchIcon from "../assets/icon/search.svg";
import AddIcon from "../assets/icon/add.svg";
import DesktopHeaderButton from "./DesktopHeaderButton";
import AppLogo from "./AppLogo";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../slice/darkModeSlice";
import { useEffect } from "react";
function Header() {
  const isDark = useSelector((state) => state.darkModeSlice.isDark);
  const dispatch = useDispatch();

  function saveDarkMode(mode) {
    localStorage.setItem("theme", mode);
  }

  function toggleHandler() {
    if (isDark) {
      dispatch(lightMode());
      saveDarkMode("light");
    } else {
      dispatch(darkMode());
      saveDarkMode("dark");
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dispatch(darkMode());
    } else {
      dispatch(lightMode());
    }
  }, [dispatch]);

  return (
    <header className='h-[56px] flex items-center justify-between px-6 desktop:h-[200px] desktop:px-4 desktop:pb-4'>
      <AppLogo />

      <img
        src={isDark ? DarkModeIcon : LightModeIcon}
        className='w-6 h-6 ml-auto desktop:hidden cursor-pointer'
        onClick={toggleHandler}
      />
      <div className='flex justify-between w-full self-end'>
        <DesktopHeaderButton>
          <img src={SearchIcon} className='mx-auto' />
        </DesktopHeaderButton>

        <div className='flex gap-7'>
          <DesktopHeaderButton>
            <img src={LightModeIcon} className='mx-auto w-[52px] h-[52px]' />
          </DesktopHeaderButton>
          <DesktopHeaderButton>
            <img src={AddIcon} className='mx-auto w-[52px] h-[52px]' />
          </DesktopHeaderButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
