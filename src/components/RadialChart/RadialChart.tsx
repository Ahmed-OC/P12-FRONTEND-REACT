import { useEffect, useState } from "react";
import style from "./RadialChart.module.scss";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import { user } from "../../types/user.type";

type Props = {
  user : user | undefined;
};

type DataChart = {
  id: string;
  name: string;
  value: number;
};

function RadialChart({ user }: Props) {
  const [dataUser, setDataUser] = useState<DataChart[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
      const score = user?.score || user?.todayScore || 0;
      setScore(score);
      setDataUser([
        { id: "1", name: "L1", value: 100 - score * 100 },
        { id: "2", name: "L2", value: score * 100 },
      ]);
  }, [user]);

  return (
    <div className={style.RadialChart}>
      <p className={style.score}>Score</p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160} cx="50%" cy="50%" barGap={0}>
          <Pie
            data={dataUser}
            dataKey="value"
            innerRadius="70%"
            outerRadius="80%"
            fill="red"
            startAngle={90}
            endAngle={-270}
            paddingAngle={0}
            blendStroke
            cornerRadius={30}
            cx="50%"
            cy="60%"
          >
            <Cell key="test" fill="transparent" />
          </Pie>
          <Pie
            data={dataUser}
            dataKey="value"
            fill="white"
            startAngle={90}
            endAngle={-270}
            outerRadius="70%"
            cx="50%"
            cy="60%"
            isAnimationActive={false}
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className={style.objectif}>
        <span>{`${score * 100} %`}</span>
        <br /> de votre
        <br /> objectif
      </p>
    </div>
  );
}

export default RadialChart;