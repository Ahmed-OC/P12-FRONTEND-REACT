import { user, formattedUserRadial } from "../types/user.type";


export const formatRadialChart = (
    user: user
): formattedUserRadial[] => {
    const score = user?.score || user?.todayScore || 0;

    return [{ id: "1", name: "L1", value: 100 - score * 100 },
    { id: "2", name: "L2", value: score * 100 },]
};