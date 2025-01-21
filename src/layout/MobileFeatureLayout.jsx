function MobileFeatureLayout({ children }) {
  return <div className='flex desktop:hidden'>{children}</div>;
}

export default MobileFeatureLayout;
