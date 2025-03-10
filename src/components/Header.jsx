import LightModeIcon from "../assets/icon/light.svg";
import SearchIcon from "../assets/icon/search.svg";
import deleteIcon from "../assets/icon/delete.svg";
import AddIcon from "../assets/icon/add.svg";
import DarkModeSearchIcon from "../assets/icon/DarkModeSearch.svg";
import DarkModeDeleteIcon from "../assets/icon/DarkModeDelete.svg";
import DarkModeIcon from "../assets/icon/dark.svg";
import DarkModeAddIcon from "../assets/icon/DarkModeAdd.svg";

import DesktopHeaderButton from "./DesktopHeaderButton";

import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../slice/darkModeSlice";
import { useEffect } from "react";
import { modifyMode } from "../slice/modeSlice";

function Header() {
  const isDark = useSelector((state) => state.darkModeSlice.isDark);
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoSlice.todoList);

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

  function onClickClearAllBtn() {
    dispatch(modifyMode("clearAll"));
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

  function onClickAddButton() {
    dispatch(modifyMode("add"));
  }

  function onClickSearchButton() {
    if (todoList.length === 0) {
      dispatch(modifyMode("add"));
      return;
    }
    dispatch(modifyMode("listSearch"));
  }
  return (
    <header className='h-[56px] flex items-center justify-between px-6 desktop:h-[120px] desktop:px-6 desktop:pb-4 shrink-0'>
      {todoList.length === 0 ? null : (
        <button onClick={onClickClearAllBtn} className='desktop:hidden'>
          <img src={isDark ? DarkModeDeleteIcon : deleteIcon} />
        </button>
      )}

      <div className='flex justify-between w-full self-end'>
        <div className='flex gap-7'>
          <DesktopHeaderButton onClick={onClickSearchButton}>
            <img
              src={isDark ? DarkModeSearchIcon : SearchIcon}
              className='mx-auto'
            />
          </DesktopHeaderButton>
          {todoList.length === 0 ? null : (
            <DesktopHeaderButton onClick={onClickClearAllBtn}>
              <img
                src={isDark ? DarkModeDeleteIcon : deleteIcon}
                className='mx-auto w-[52px] h-[52px]'
              />
            </DesktopHeaderButton>
          )}
        </div>

        <div className='flex gap-7'>
          <DesktopHeaderButton onClick={toggleHandler}>
            <img
              src={isDark ? DarkModeIcon : LightModeIcon}
              className='mx-auto w-[52px] h-[52px]'
            />
          </DesktopHeaderButton>
          <DesktopHeaderButton onClick={onClickAddButton}>
            <img
              src={isDark ? DarkModeAddIcon : AddIcon}
              className='mx-auto w-[52px] h-[52px]'
            />
          </DesktopHeaderButton>
        </div>
      </div>
      <button>
        <img
          src={isDark ? DarkModeIcon : LightModeIcon}
          className='w-6 h-6 desktop:hidden cursor-pointer'
          onClick={toggleHandler}
        />
      </button>
    </header>
  );
}

export default Header;
