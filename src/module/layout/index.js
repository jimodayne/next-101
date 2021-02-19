const Layout = ({ children }) => {
  return (
    <div className="mx-auto md:px-4 md:max-w-3xl min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
