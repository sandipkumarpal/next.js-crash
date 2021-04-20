const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <h3>Title</h3>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
