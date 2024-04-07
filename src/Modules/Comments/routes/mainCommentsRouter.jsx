import MainComments from "../pages/MainComments";
import { commentsRouter } from "./commentsRouter";
import { singleCommentRouter } from "./singleCommentRouter";

export const mainCommentsRouter = [
    {
        path: "comments",
        element: <MainComments />,
        children: [
            ...commentsRouter,
            ...singleCommentRouter
        ]

    }
]