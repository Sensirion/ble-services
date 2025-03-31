import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import './index.css'
import './colors.css'
import OverviewPage from "./components/overview.tsx";
import ServicesPage from "./components/services.tsx";


const contentRouter = createBrowserRouter([
    {
        index: true,
        element: OverviewPage(),
    },
    {
        path: "/services",
        element: ServicesPage(),
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={contentRouter}/>
    </StrictMode>
)

