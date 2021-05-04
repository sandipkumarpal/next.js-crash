const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <h1>Page Title</h1>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
