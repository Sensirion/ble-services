import NavigationBar from "../../common/navbar.tsx";
import FooterBar from "../../common/footer.tsx";
import ServicesList from "./services_list.tsx";
import FilterArea from "./filters.tsx";

import "./ble_info_page.css";

function BleInfoPage() {
    return (
        <>
            <NavigationBar/>
            <div id="body" className="ble_info__container">
                <FilterArea/>
                <h1>BLE Services</h1>
                <p>
                    This section describes what services are available, their UUID and the
                    exposed characteristics. Services that are public BLE services have a
                    link to download the BLE Service specification.
                </p>
                <div>
                    <ServicesList/>
                </div>
                <h1>Sample Types</h1>
                <p>
                    There are different sample types in use depending on whether it is a
                    live data stream or a data download stream.
                </p>
            </div>

            <FooterBar/>
        </>
    );
}

export default BleInfoPage;
