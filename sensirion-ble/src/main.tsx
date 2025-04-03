import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import './index.css'
import './colors.css'
import OverviewPage from "./components/pages/overview_page/overview.tsx";
import BleInfoPage from "./components/pages/ble_info_page/ble_info_page.tsx";


const contentRouter = createBrowserRouter([
    {
        index: true,
        Component: OverviewPage,
    },
    {
        path: "/services",
        Component: BleInfoPage,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={contentRouter}/>
    </StrictMode>
)

