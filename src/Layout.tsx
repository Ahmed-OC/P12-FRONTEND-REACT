import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import style from "./Layout.module.scss";
import App from "./App";

/**
 * @description
 * Display the layout of the application
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className={style.Layout}>
      <Header />
      <div className={style.content}>
        <App />
      </div>
      <SideBar />
    </div>
  );
}

export default Layout;