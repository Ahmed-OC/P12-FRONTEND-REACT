export type user = {
    id: number
    userInfos: {
        firstName: string
        lastName: string
        age: number
    }
    score: number
    keyData: {
        calorieCount: number
        proteinCount: number
        carbohydrateCount: number
        lipidCount: number
    }
};

export type userActivity = {
    userId: number
    sessions: Array<
        {
            day: string,
            kilogram: number
            calories: number
        }
    >
}

export type userAverageSessions = {
    userId: number
    sessions: Array<
        {
            day: number
            sessionLength: number
        }
    >
}

export type userPerformance = {
    userId: number
    kind: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
    }
    data: Array<{
        value: number
        kind: number
    }>
}