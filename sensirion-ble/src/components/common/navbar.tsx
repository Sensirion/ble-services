import "./navbar.css";
import {NavigationMenu} from "radix-ui";
import {NavLink} from "react-router";
import {SensirionLogo} from "../vectors/sensirionLogo.tsx";

const NavigationBar = () => {
    return (
        <NavigationMenu.Root className="navbar">
            <div className="navbar__logo">
                <SensirionLogo/>
            </div>
            <div className="navbar__branding">
                BLE INTERFACES
            </div>
            <NavigationMenu.List className="navbar__menu_list">
                <NavigationMenu.Item>
                    <NavLink to="/" className="navbar__menu_link" end>
                        Overview
                    </NavLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavLink to="/services" className="navbar__menu_link" end>
                        Services
                    </NavLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavLink to="/live-data" className="navbar__menu_link" end>
                        Live Data
                    </NavLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavLink to="/data-download" className="navbar__menu_link" end>
                        Data Download
                    </NavLink>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};


export default NavigationBar;

