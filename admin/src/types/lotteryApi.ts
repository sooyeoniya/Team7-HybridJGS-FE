import { InfiniteParticipantListData } from "./common";
import { LotteryEventType, LotteryExpectationsType, LotteryWinnerType } from "./lottery";

export type GetLotteryResponse = LotteryEventType[];

export interface PostLotteryWinnerResponse {
    message: string;
}

export interface GetLotteryWinnerParams {
    id: number;
    size: number;
    page: number;
    phoneNumber?: string;
}

export interface GetLotteryExpectationsParams {
    lotteryId: number;
    participantId: number;
}

export type GetLotteryExpectationsResponse = LotteryExpectationsType[];

export type GetLotteryWinnerResponse = InfiniteParticipantListData<LotteryWinnerType>;
