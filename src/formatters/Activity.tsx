import { userActivity, formattedActivity } from "../types/user.type";

/**
 * @description Function formatActivityForChart permit to format the activity of the user for the Activity chart and get only info on sessions
 * @param {userActivity} activity
 * @returns {formattedActivity[]}
 */

const formatActivityForChart = (
    activity: userActivity
): formattedActivity[] => {
    return activity.sessions;
};

export default formatActivityForChart