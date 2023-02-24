import { userPerformance, formattedPerformance } from "../types/user.type";

const kind = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]

/**
 * @description Function formatPerformanceForRadar permit to format the performance of the user for the Radar chart and get only info on sessions
 * @param {userPerformance} performance
 * @returns {formattedPerformance[]}
 *
 */

const formatPerformanceForRadar = (
    performance: userPerformance
): formattedPerformance[] => {
    return performance.data.map((element, index) => {
        return { subject: kind[index], A: element.value, fullMark: 150 }
    })
};

export default formatPerformanceForRadar