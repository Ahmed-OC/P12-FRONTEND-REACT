import { userActivity, formattedActivity } from "../types/user.type";


export const formatActivityForChart = (
    activity: userActivity
): formattedActivity[] => {
    return activity.sessions;
};