import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import './colors.css'
import NavigationBar from "./components/navbar.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div id="navbar-container">
            <NavigationBar/>
        </div>
        <div id="body">

        </div>
        <div id="footer">
            FOOTER
        </div>
    </StrictMode>,
)

