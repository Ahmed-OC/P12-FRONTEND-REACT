import Header from "./components/Header/Header";
import RadarCharts from "./components/RadarChart/RadarCharts";
import SideBar from "./components/SideBar/SideBar";
import style from "./Layout.module.scss";

// /**
//  * @description
//  * Display the layout of the application
//  * @returns {JSX.Element}
//  */
function Layout() {
  return (
    <>
      <Header />
      <div className={style.content}>
        <h1>Content</h1>
        <RadarCharts id={12} />
      </div>
      <SideBar />
    </>
  );
}

export default Layout;