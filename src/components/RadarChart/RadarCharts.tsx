import React, { useEffect, useState } from 'react'
import style from "./RadarCharts.module.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Label } from 'recharts';
import { getUserPerformanceById } from '../../api/User';

type Props = {
  id: number
}
type dataCharts = {
  subject: string
  A: number
  fullMark: number
}

function RadarCharts({ id }: Props) {
  const [dataUser, setDataUser] = useState<dataCharts[]>([])


  useEffect(() => {
    async function call() {
      const data = await getUserPerformanceById(id)
      const dataUser = data.data.data.map((element, index) => {
        return { subject: data.data.kind[index + 1], A: element.value, fullMark: 150 }
      })
      setDataUser(dataUser)
    }
    call()
  }, [id])

  return (
    <div className={style.RadarCharts}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" width={258} height={253} outerRadius="80%" data={dataUser}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF' }} />
          <Radar name="Mike" dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
          <Label position="outside" style={{ fill: "red" }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarCharts