function DesktopHeaderButton({ children, onClick }) {
  return (
    <button
      className={`hidden desktop:block w-[120px] h-[74px] bg-orange rounded-[4px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default DesktopHeaderButton;
