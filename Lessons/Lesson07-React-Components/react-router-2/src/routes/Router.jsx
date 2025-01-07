import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import ParameterView from "../views/ParameterView";
import NewsView from "../views/NewsView";
import SportsView from "../views/SportsView";
import EconomyView from "../views/EconomyView";

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <HomeView /> },
        { path: "/about", element: <AboutView /> },
        { path: "/parameter/:id", element: <ParameterView /> },
        {
            path: "/news/", element: <NewsView />,
            children: [
                { index: true, element: <Navigate to="sport" /> },
                { path: "sport", element: <SportsView /> },
                { path: "economy", element: <EconomyView /> },
            ],
        },
    ]);
    
    return routes;
};

export default Router;
