import {useRoutes} from "react-router-dom"

import "./Router.css";
import MainView from "../views/MainView";
import AksiyonAnime from "../views/AksiyonAnime"
import KomediAnime from "../views/KomediAnime"
import DogaAnime from "../views/DogaAnime"
import AnimePage from "../views/AnimePage";

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <MainView/>
            },
            {
                path: '/action',
                element: <AksiyonAnime/>
            },
            {
                path: '/comedy',
                element: <KomediAnime/>
            },
            {
                path: '/supernatural',
                element: <DogaAnime/>
            },
            {
                path: '/anime/:id',
                element: <AnimePage/>
            },
            {
                path: '*',
                element: <div>
                    404 Not Found
                </div>
            }
        ]
    )
    return routes
}
export default Router