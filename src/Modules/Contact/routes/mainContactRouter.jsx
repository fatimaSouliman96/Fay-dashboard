import MainContact from "../pages/MainContact";
import { contactRouter } from "./contactRouter";
import { singleContactRouter } from "./singleContactRouter";

export const mainContactRouter = [
    {
        path: "/contact",
        element: <MainContact />,
        children: [
            ...contactRouter,
            ...singleContactRouter
        ]

    }
]