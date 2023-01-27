import Activity from "./components/Activity/Activity";
import Header from "./components/Header/Header";
import KeyData from "./components/KeyData/KeyData";
import RadarCharts from "./components/RadarChart/RadarCharts";
import SideBar from "./components/SideBar/SideBar";
import style from "./Layout.module.scss";
import proteinIcon from "./assets/icons/KeyData/protein.svg"
import RadialChart from "./components/RadialChart/RadialChart";

function Layout() {
  const queryParameters = new URLSearchParams(window.location.search)
  const id =  Number(queryParameters.get("id"))

  const activities = [
    {
      day: "2020-07-01",
      kilogram: 70,
      calories: 240,
    },
    {
      day: "2020-07-02",
      kilogram: 69,
      calories: 220,
    },
    {
      day: "2020-07-03",
      kilogram: 70,
      calories: 280,
    },
    {
      day: "2020-07-04",
      kilogram: 70,
      calories: 500,
    },
    {
      day: "2020-07-05",
      kilogram: 69,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 69,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 69,
      calories: 390,
    },
    {
      day: "2020-07-05",
      kilogram: 69,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 69,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 69,
      calories: 390,
    },
  ];
  return (
    <>
      <Header />
      <div className={style.content}>
        <h1>
          Bonjour <span>Thomas</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <Activity activities={activities} />
        <RadarCharts id={id} />
        <KeyData icon={proteinIcon} value='155g' type='Proteines' backgroundColor='rgba(74, 184, 255, 0.1)'/>
        <RadialChart id={id} />
      </div>
      <SideBar />
    </>
  );
}

export default Layout;