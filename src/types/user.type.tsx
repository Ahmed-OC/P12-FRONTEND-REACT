export type user = {
    data: {
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
    }
};

export type userActivity = {
    data: {
        userId: number
        sessions: Array<
            {
                day: string,
                kilogram: number
                calories: number
            }
        >
    }
}

export type userAverageSessions = {
    data: {
        userId: number
        sessions: Array<
            {
                day: number
                sessionLength: number
            }
        >
    }
}

export type userPerformance = {
    data: {
        userId: number
        kind: Record< number, string >
        data: Array<{
            value: number
            kind: number
        }>
    }
}