import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
    createHashRouter,
    RouterProvider,
} from "react-router";
import './index.css'
import './colors.css'
import OverviewPage from "./components/pages/overview_page/overview.tsx";
import BleServicesPage from "./components/pages/filter_pages/ble_services_page/ble_services_page.tsx";
import AdSamplePage from "./components/pages/filter_pages/ad_sample_page/ad_sample_page.tsx";
import DlSamplePage from "./components/pages/filter_pages/dl_sample_page/dl_sample_page.tsx";
import {MathJaxContext} from "better-react-mathjax";


const contentRouter = createHashRouter([
    {
        index: true,
        Component: OverviewPage,
    },
    {
        path: "/services",
        Component: BleServicesPage,
    },
    {
        path: "/live-data",
        Component: AdSamplePage,
    },
    {
        path: "/data-download",
        Component: DlSamplePage,
    }
]);

const mathJaxConfig = {
    loader: {load: ["input/asciimath"]},
    options: {
        enableMenu: false
    }
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MathJaxContext config={mathJaxConfig}>
            <RouterProvider router={contentRouter}/>
        </MathJaxContext>
    </StrictMode>
)
