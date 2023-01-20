import { useEffect, useState } from 'react'
import style from "./RadialBarChart.module.scss";
import { RadialBarChart, RadialBar } from "recharts";
import { getUserById } from '../../api/User';

type Props = {
    id: number
}

type DataChart = {
    uv: number
    fill: string
}


function RadialChart({ id }: Props) {
    const [dataUser, setDataUser] = useState<DataChart[]>([])
    const [score, setScore] = useState<number>(0)

    useEffect(() => {
        async function call() {
            const data = await getUserById(id)
            const score = data.data.score || data.data.todayScore || 0
            setScore(score)
            setDataUser(
                [
                    {
                        uv: 100,
                        fill: "#FFFFFF"
                    },
                    {
                        uv: score * 100,
                        fill: "#FF0000"
                    },
                ]
            )
        }
        call()
    }, [id])

    return (
        <div className={style.RadialChart}>
            <p className={style.score}>Score</p>
            <RadialBarChart
                width={200}
                height={200}
                cx={110}
                cy={150}
                startAngle={30}
                endAngle={390}
                innerRadius={50}
                outerRadius={100}
                barSize={10}
                data={dataUser}
            >
                <RadialBar dataKey='uv' />
            </RadialBarChart>
            <p className={style.objectif}><span>{`${score*100} %`}</span><br/> de votre<br/> objectif</p>
        </div>
    )
}

export default RadialChart