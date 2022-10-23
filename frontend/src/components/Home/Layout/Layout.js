import { Fragment } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <NavigationBar />
      <main>
        <div className="container">{props.children}</div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
