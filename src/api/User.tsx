import axios from "axios";
import env from "react-dotenv";
import {
  user,
  userActivity,
  userAverageSessions,
  userPerformance,
} from "../types/user.type";
import {
  mockGetUserById,
  mockGetUserAverageSessionsById,
  mockGetUserActivityById,
  mockGetUserPerformanceById,
} from "../__mocks__/User";

/**
 * @description Function getUserById permit to get the user by id
 * @param {number} id
 * @returns {Promise<user>}
 */

export async function getUserById(id: number): Promise<user> {
  try {
    if (env.ENVIRONMENT === "production") {
      const { data } = await axios.get(`${env.API_URL}user/${id}`);
      return data.data;
    } else {
      return mockGetUserById(id);
    }
  } catch (error) {
    throw new Error();
  }
}

/**
 * @description Function getUserActivityById permit to get the activity of the user by id
 * @param {number} id
 * @returns {Promise<userActivity>}
 *
 */

export async function getUserActivityById(id: number): Promise<userActivity> {
  try {
    if (env.ENVIRONMENT === "production") {
      const { data } = await axios.get(`${env.API_URL}user/${id}/activity`);
      return data.data;
    } else {
      return mockGetUserActivityById(id);
    }
  } catch (error) {
    throw new Error();
  }
}

/**
 * @description Function getUserAverageSessionsById permit to get the average sessions of the user by id
 * @param {number} id
 * @returns {Promise<userAverageSessions>}
 *
 */

export async function getUserAverageSessionsById(
  id: number
): Promise<userAverageSessions> {
  try {
    if (env.ENVIRONMENT === "production") {
      const { data } = await axios.get(
        `${env.API_URL}user/${id}/average-sessions`
      );
      return data.data;
    } else {
      return mockGetUserAverageSessionsById(id);
    }
  } catch (error) {
    throw new Error();
  }
}

/**
 * @description Function getUserPerformanceById permit to get the performance of the user by id
 * @param {number} id
 * @returns {Promise<userPerformance>}
 *
 */

export async function getUserPerformanceById(
  id: number
): Promise<userPerformance> {
  try {
    if (env.ENVIRONMENT === "production") {
      const { data } = await axios.get(`${env.API_URL}user/${id}/performance`);
      return data.data;
    } else {
      return mockGetUserPerformanceById(id);
    }
  } catch (error) {
    throw new Error();
  }
}