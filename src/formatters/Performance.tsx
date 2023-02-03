import { userPerformance, formattedPerformance } from "../types/user.type";

const kind = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]

export const formatPerformanceForRadar = (
    performance: userPerformance
): formattedPerformance[] => {
    return performance.data.map((element, index) => {
        return { subject: kind[index], A: element.value, fullMark: 150 }
    })
};