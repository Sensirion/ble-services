import "./navbar.css";
import {NavigationMenu} from "radix-ui";
import {SensirionLogo} from "./sensirionLogo.tsx";

const NavigationBar = () => {
    return (
        <NavigationMenu.Root className="navbar">
            <div className="navbar__logo">
                <SensirionLogo />
            </div>
            <div className="navbar__branding">
                BLE INTERFACES
            </div>
            <NavigationMenu.List className="navbar__menu_list">
                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="navbar__menu_link"
                        href="#"
                    >
                        Overview
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="navbar__menu_link"
                        href="#"
                    >
                        Services & Samples
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};


export default NavigationBar;

