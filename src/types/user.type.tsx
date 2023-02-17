export type user = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  score?: number;
  todayScore?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
};

export type formattedUserRadial = {
  id: string;
  name: string;
  value: number;
};

export type userActivity = {
  userId: number;
  sessions: Array<{
    day: string;
    kilogram: number;
    calories: number;
  }>;
};

export type formattedActivity = {
  day: string;
  kilogram: number;
  calories: number;
};



export type userAverageSessions = {
  userId: number;
  sessions: Array<{
    day: number;
    sessionLength: number;
  }>;
};

export type formattedSessions = {
  name: string,
  uv: number,
};

export type userPerformance = {
  userId: number;
  kind: Record<number, string>;
  data: Array<{
    value: number;
    kind: number;
  }>;
};

export type formattedPerformance = {
  subject: string
  A: number
  fullMark: number
};