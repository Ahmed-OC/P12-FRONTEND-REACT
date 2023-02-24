import "./App.css";
import Activity from "./components/Activity/Activity";
import KeyData from "./components/KeyData/KeyData";
import RadarCharts from "./components/RadarChart/RadarCharts";
import proteinIcon from "./assets/icons/KeyDatas/protein.svg";
import caloriesIcon from "./assets/icons/KeyDatas/calories.svg";
import carbsIcon from "./assets/icons/KeyDatas/carbs.svg";
import fatIcon from "./assets/icons/KeyDatas/fat.svg";
import RadialChart from "./components/RadialChart/RadialChart";
import style from "./App.module.scss";
import { useEffect, useState, useMemo } from "react";
import { getUserById, getUserActivityById } from "./api/User";
import { user, userActivity, formattedActivity } from "./types/user.type";
import formatActivityForChart from "./formatters/Activity";
import LinearChart from "./components/LinearChart/LinearChart";

/**
 * @description Function App permit to display the Home page of the app
 * @returns {JSX.Element}
 */

function App() {
  const queryParameters = new URLSearchParams(window.location.search);
  const id = Number(queryParameters.get("id"));
  const [user, setUser] = useState<user>();
  const [userActivity, setUserActivity] = useState<userActivity>()

  useEffect(() => {
    async function call() {
      const user = await getUserById(id);
      setUser(user);
    }
    call();
  }, [id]);

  useEffect(() => {
    async function call() {
      const userActivity = await getUserActivityById(id);
      setUserActivity(userActivity);
    }
    call();
  }, [id]);

  const keyDatas = useMemo(
    () => [
      {
        icon: caloriesIcon,
        value: `${user?.keyData.calorieCount}kcal`,
        type: "Calories",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
      },
      {
        icon: proteinIcon,
        value: `${user?.keyData.proteinCount}g`,
        type: "Proteines",
        backgroundColor: "rgba(74, 184, 255, 0.1)",
      },
      {
        icon: carbsIcon,
        value: `${user?.keyData.carbohydrateCount}g`,
        type: "Glucides",
        backgroundColor: "rgba(249, 206, 35, 0.1)",
      },
      {
        icon: fatIcon,
        value: `${user?.keyData.lipidCount}g`,
        type: "Lipides",
        backgroundColor: "rgba(253, 81, 129, 0.1)",
      },
    ],
    [user]
  );
  const activities: formattedActivity[] | undefined = useMemo(
    () => {
      if (userActivity) {
        return formatActivityForChart(userActivity)
      }
      return undefined
    }
    , [userActivity]);

  return (
    <div className={style.App}>
      {
        user ? <>
          <h1>
            Bonjour <span>{user.userInfos.firstName}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div className={style.Grid1}>
            <div className={style.chartsContainer}>
              <Activity activities={activities} />
              <div className={style.Grid2}>
                <LinearChart id={id} />
                <RadarCharts id={id} />
                <RadialChart user={user} />
              </div>
            </div>
            <div className={style.keyDatasContainer}>
              {keyDatas.map((keyData) => (
                <KeyData
                  icon={keyData.icon}
                  value={keyData.value}
                  type={keyData.type}
                  backgroundColor={keyData.backgroundColor}
                />
              ))}
            </div>
          </div>
        </> :
          <>
            <h1>Erreur : Utilisateur invalide</h1>
          </>
      }

    </div>
  );
}

export default App;