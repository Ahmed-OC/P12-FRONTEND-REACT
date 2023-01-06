import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import style from "./Layout.module.scss";

/**
 * @description
 * Display the layout of the application
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <>
      <Header />
      <div className={style.content}>
        <h1>Content</h1>
      </div>
      <SideBar />
    </>
  );
}

export default Layout;