import { userAverageSessions, formattedSessions } from "../types/user.type";

const daysArray = ["L", "M", "M", "J", "V", "S", "D"];

export const formatSessions = (
    averageSessions: userAverageSessions
): formattedSessions[] => {
    return averageSessions.sessions.map((session, index) => {
        return {
          name: daysArray[index],
          uv: session.sessionLength,
        };
      });
};