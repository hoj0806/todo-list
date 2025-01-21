function DesktopHeaderButton({ children, rightPostion = 0 }) {
  return (
    <button
      className={`hidden desktop:block w-[120px] h-[74px] bg-orange rounded-[4px] absolute bottom-4 right-${rightPostion}`}
    >
      {children}
    </button>
  );
}

export default DesktopHeaderButton;
