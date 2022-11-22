import {useRoutes} from "react-router-dom"

import "./Router.css";
import MainView from "../views/MainView";
import AksiyonAnime from "../views/AksiyonAnime"
import KomediAnime from "../views/KomediAnime"
import DogaAnime from "../views/DogaAnime"

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
                path: '/anime',
                element: <div/>
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