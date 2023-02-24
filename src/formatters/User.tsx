import { user, formattedUserRadial } from "../types/user.type";

/**
 * @description Function formatRadialChart permit to format the score of the user for the Radial chart and get only info on score
 * @param {user} user
 * @returns {formattedUserRadial[]}
 */
const formatRadialChart = (
    user: user
): formattedUserRadial[] => {
    const score = user?.score || user?.todayScore || 0;

    return [{ id: "1", name: "L1", value: 100 - score * 100 },
    { id: "2", name: "L2", value: score * 100 },]
};

export default formatRadialChart