function DesktopHeaderButton({ children }) {
  return (
    <button
      className={`hidden desktop:block w-[120px] h-[74px] bg-orange rounded-[4px]`}
    >
      {children}
    </button>
  );
}

export default DesktopHeaderButton;
