import { createBrowserRouter } from "react-router-dom";
import { LotteryAPI } from "./apis/lotteryAPI";
import { RushAPI } from "./apis/rushAPI";
import Layout from "./components/Layout";
import { ProtectedRoute, UnProtectedRoute } from "./components/Route";
import RushLayout from "./features/Rush/Layout";
import Login from "./pages/Login";
import Lottery from "./pages/Lottery";
import LotteryWinner from "./pages/LotteryWinner";
import LotteryWinnerList from "./pages/LotteryWinnerList";
import Rush from "./pages/Rush";
import RushWinnerList from "./pages/RushWinnerList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <UnProtectedRoute />,
                children: [
                    {
                        path: "login/",
                        element: <Login />,
                    },
                ],
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "rush/",
                        element: <RushLayout />,
                        children: [
                            {
                                index: true,
                                element: <Rush />,
                                loader: RushAPI.getRush,
                            },
                            {
                                path: "winner-list",
                                element: <RushWinnerList />,
                            },
                        ],
                    },
                    {
                        path: "lottery/",
                        children: [
                            {
                                index: true,
                                element: <Lottery />,
                                loader: LotteryAPI.getLottery,
                            },
                            {
                                path: "winner",
                                element: <LotteryWinner />,
                                loader: LotteryAPI.getLottery,
                            },
                            {
                                path: "winner-list",
                                element: <LotteryWinnerList />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
