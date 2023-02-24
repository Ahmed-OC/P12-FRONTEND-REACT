import style from "./Activity.module.scss";
import { formattedActivity } from "../../types/user.type";
import PropTypes from "prop-types"; // ES6
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

/**
 * @description Component CustomTooltip permit to generate a custom tooltip for the barchart
 * @param {Object} props - props
 * @param {boolean} props.active - boolean to know if the tooltip is visible
 * @param {Array} props.payload - Get the barchart data of the hovered element
 * @returns {JSX.Element | null}
 */

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={style.customTooltip}>
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

/**
 * @description Component formatterLegend permit to return a custom legend for the bar chart
 * @param {number} index - index of the legend
 * @returns {JSX.Element}
 */

const formatterLegend = (__value: string, __entry: any, index: any) => {
  return (
    <span className={style.customizedLegend} style={{ color: "#74798C" }}>
      {index === 0 ? "Poids (kg)" : "Calories brûlées (kCal)"}
    </span>
  );
};

/**
 * @description Component Activity permit to display a Barchart with kiogram and calories burnt per day
 * @param {formattedActivity[]} activities - An array of kilogram and calories burnt per day
 */

function Activity({ activities }: { activities?: formattedActivity[]}) {
  return (
    <div className={style.Activity}>
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          height={300}
          data={activities?.map((activity: any, index: number) => {
            return { ...activity, day: index + 1 };
          })}
          margin={{
            top: 60,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          title="Activité quotidienne"
        >
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#8884d8"
            width={43}
            tickLine={false}
            axisLine={false}
            dataKey="calories"
            hide
            tickCount={3}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#9B9EAC"
            tickCount={3}
            domain={["dataMin -1", "dataMax"]}
            axisLine={false}
            tickLine={false}
            dataKey="kilogram"
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ top: 0, right: 26 }}
            formatter={formatterLegend}
            iconType="circle"
            iconSize={8}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

Activity.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ).isRequired,
};
export default Activity;