import style from "./LinearChart.module.scss";
import { useEffect, useMemo, useState } from "react";
import { getUserAverageSessionsById } from "../../api/User";
import { userAverageSessions } from "../../types/user.type";
import formatSessions from "../../formatters/AverageSessions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import PropTypes from "prop-types";

/**
 * @description Component CustomTooltip permit to generate a custom tooltip for the linear Chart
 * @param {Object} props - props
 * @param {boolean} props.active - boolean to know if the tooltip is visible
 * @param {Array} props.payload - Get the barchart data of the hovered element
 * @returns {JSX.Element | null}
 */

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={style.customTooltip}>
        <p className="label">{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
};

/**
 * @description Component CustomCursor permit to show a darker background after the hovered element
 * @param {Array} points - Array of coordinate of the tooltip
 * @returns {React.Component}
 */
const CustomCursor = ({ points }: any) => {
  console.log(points)
  return (
    <Rectangle
      fill="#000000"
      opacity={0.1}
      x={points[1].x}
      width={400}
      height={300}
    />
  );
};

/**
 * @description Component LinearChart permit to display a Linear Chart with the user's sessions data
 * @param {number} id
 */

function LinearChart({ id }: { id: number }) {
  const [averageSessions, setAverageSessions] = useState<userAverageSessions>();

  useEffect(() => {
    async function call() {
      const sessions = await getUserAverageSessionsById(id);
      setAverageSessions(sessions);
    }
    call();
  }, [id]);
  const data = useMemo(() => {
    if (averageSessions) {
      return formatSessions(averageSessions)
    }
  }, [averageSessions]);

  return (
    <div className={style.LinearChart}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            color="white"
            tick={{
              fill: "rgba(255,255,255, 0.5)",
              fontSize: "12px",
              fontWeight: "500",
            }}
          />
          <YAxis
            axisLine={false}
            hide={true}
            tickLine={false}
            tick={false}
            domain={["dataMin - 20", "dataMax + 20"]}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
            cursor={<CustomCursor />}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="rgba(255,255,255, 0.42)"
            strokeWidth={3}
            dot={false}
          />
          <text
            x="8%"
            y="18%"
            fill="#FFFFFF"
            style={{ fontSize: 15, fontWeight: 500, opacity: 0.5 }}
          >
            Durée moyenne des
          </text>
          <text
            x="8%"
            y="25%"
            fill="#FFFFFF"
            style={{
              fontSize: 15,
              fontWeight: 500,
              opacity: 0.5,
            }}
          >
            sessions
          </text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

LinearChart.propTypes = {
  id: PropTypes.number.isRequired,
};

export default LinearChart;