import MainHeader from "./main-header";

const Layout = (props) => {
  return (
    <>
      <MainHeader/>
      <div>{props.children}</div>
    </>
  );
}

export default Layout