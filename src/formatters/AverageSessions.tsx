import { userAverageSessions, formattedSessions } from "../types/user.type";

const daysArray = ["L", "M", "M", "J", "V", "S", "D"];
/**
 * @description Function formatSessions permit to format the sessions of the user for the Linear chart and get only day and session length
 * @param {userAverageSessions} averageSessions
 * @returns {formattedSessions[]}
 *
 */

const formatSessions = (
    averageSessions: userAverageSessions
): formattedSessions[] => {
    return averageSessions.sessions.map((session, index) => {
        return {
          name: daysArray[index],
          uv: session.sessionLength,
        };
      });
};

export default formatSessions