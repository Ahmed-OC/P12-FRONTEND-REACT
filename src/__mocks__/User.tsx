import {
  user,
  userActivity,
  userAverageSessions,
  userPerformance,
} from "../types/user.type";
import {
  USER_ACTIVITY,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
} from "./data";

/**
* @description Function mockGetUserById permit to get the user by id
* @param {number} id
* @returns {Promise<user>}
*/

export async function mockGetUserById(id: number): Promise<user> {
  const user = USER_MAIN_DATA.find((user) => user.id === id);
  if (user) {
    return user;
  }
  throw new Error();
}

/**
 * @description Function mockGetUserActivityById permit to get the activity of the user by id
 * @param {number} id
 * @returns {Promise<userActivity>}
 *
 */

export async function mockGetUserActivityById(id: number): Promise<userActivity> {
  const userActivity = USER_ACTIVITY.find(
    (userActivity) => userActivity.userId === id
  );
  if (userActivity) {
    return userActivity;
  }
  throw new Error();
}

/**
* @description Function mockGetUserAverageSessionsById permit to get the average sessions of the user by id
* @param {number} id
* @returns {Promise<userAverageSessions>}
*
*/

export async function mockGetUserAverageSessionsById(
  id: number
): Promise<userAverageSessions> {
  const userAverageSessions = USER_AVERAGE_SESSIONS.find(
    (userAverageSessions) => userAverageSessions.userId === id
  );
  if (userAverageSessions) {
    return userAverageSessions;
  }
  throw new Error();
}

/**
 * @description Function mockGetUserPerformanceById permit to get the performance of the user by id
 * @param {number} id
 * @returns {Promise<userPerformance>}
 *
 */

export async function mockGetUserPerformanceById(
  id: number
): Promise<userPerformance> {
  const userPerformance = USER_PERFORMANCE.find(
    (userPerformance) => userPerformance.userId === id
  );
  if (userPerformance) {
    return userPerformance;
  }
  throw new Error();
}