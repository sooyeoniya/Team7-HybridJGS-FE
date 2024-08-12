import { useCallback, useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { InfiniteParticipantListData } from "@/types/common";

interface UseInfiniteFetchProps<R> {
    fetch: (pageParam: number) => Promise<R>;
    initialPageParam?: number;
    getNextPageParam: (currentPageParam: number, lastPage: R) => number | undefined;
    startFetching?: boolean;
}

interface InfiniteScrollData<T> {
    data: T[];
    totalLength: number;
    fetchNextPage: () => void;
    refetch: () => void;
    hasNextPage: boolean;
    isSuccess: boolean;
    isError: boolean;
}

export default function useInfiniteFetch<T>({
    fetch,
    initialPageParam,
    getNextPageParam,
    startFetching = true,
}: UseInfiniteFetchProps<InfiniteParticipantListData<T>>): InfiniteScrollData<T> {
    const { showBoundary } = useErrorBoundary();

    const [data, setData] = useState<T[]>([]);
    const [currentPageParam, setCurrentPageParam] = useState<number | undefined>(initialPageParam);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);
    const [totalLength, setTotalLength] = useState<number>(0);

    const fetchNextPage = useCallback(async () => {
        if (!hasNextPage || isLoading || currentPageParam === undefined) return;

        setIsLoading(true);
        setIsError(false);
        setIsSuccess(false);
        try {
            const lastPage = await fetch(currentPageParam);
            const nextPageParam = getNextPageParam(currentPageParam, lastPage);

            setData([...data, ...lastPage.participants]);
            setCurrentPageParam(nextPageParam);
            setHasNextPage(nextPageParam !== undefined);
            setTotalLength(lastPage.totalParticipants);
            setIsSuccess(true);
        } catch (error) {
            showBoundary(error);
            setIsError(true);
            setIsSuccess(false);
        } finally {
            setIsLoading(false);
        }
    }, [fetch, getNextPageParam, currentPageParam, data, hasNextPage]);

    const refetch = useCallback(async () => {
        setCurrentPageParam(initialPageParam);
        setData([]);
    }, []);

    useEffect(() => {
        if (startFetching && currentPageParam === initialPageParam) {
            fetchNextPage();
        }
    }, [startFetching, currentPageParam]);

    return {
        data,
        totalLength,
        fetchNextPage,
        refetch,
        hasNextPage,
        isSuccess,
        isError,
    };
}
