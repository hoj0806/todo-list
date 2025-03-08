function AppLayout({ children }) {
  return (
    <div className='bg-white-20 mx-auto max-w-screen-xl h-full flex flex-col w-full'>
      {children}
    </div>
  );
}

export default AppLayout;
