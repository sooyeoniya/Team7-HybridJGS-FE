interface RushEventType {
    rushEventId: number;
    startDateTime: string;
    endDateTime: string;
}

interface RushCardType {
    mainText: string;
    subText: string;
}

export interface GetTotalRushEventsResponse {
    serverTime: string;
    todayEventId: number;
    eventStartDate: string;
    eventEndDate: string;
    activePeriod: number;
    events: RushEventType[];
}

export type GetRushUserParticipationStatusResponse = boolean;

export interface GetTodayRushEventResponse {
    leftOption: RushCardType;
    rightOption: RushCardType;
}

export type RushEventStatusCodeResponse = 204 | 404;

export interface GetRushOptionResultResponse {
    mainText: string;
    resultMainText: string;
    resultSubText: string;
}

export interface GetRushBalanceResponse {
    optionId: number;
    leftOption: number;
    rightOption: number;
}

export interface GetRushResultResponse {
    winner: boolean;
    leftOption: number;
    rightOption: number;
    rank: number;
    totalParticipants: number;
}
