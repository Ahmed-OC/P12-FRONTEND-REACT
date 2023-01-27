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
  
  export async function mockGetUserById(id: number): Promise<user> {
    const user = USER_MAIN_DATA.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error();
  }
  
  export async function mockGetUserActivityById(id: number): Promise<userActivity> {
    const userActivity = USER_ACTIVITY.find(
      (userActivity) => userActivity.userId === id
    );
    if (userActivity) {
      return userActivity;
    }
    throw new Error();
  }
  
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