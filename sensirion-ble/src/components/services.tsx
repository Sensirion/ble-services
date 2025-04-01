import NavigationBar from "./navbar.tsx";
import FooterBar from "./footer.tsx";
import type {BLEServiceSchemaDefinition} from '../types/ble-service-schema.d.ts'

// @ts-expect-error: untyped object import
import services from '../resources/ble-services.yml';
import "./services.css";

const bleServices = services as BLEServiceSchemaDefinition;

function ServicesPage() {
    return <>
        <NavigationBar/>
        <div id="body">
            <h1>BLE Services</h1>
            <p>This section describes what services are available, their UUID and the exposed characteristics. Services
                that are public BLE services have a link to download the BLE Service
                specification.</p>
            <div>
            {JSON.stringify(bleServices["ble-services"].map(s => s.service.name))}
        </div>
            <h1>Sample Types</h1>
            <p>
                There are different sample types in use depending on whether it is a live data stream or a data download
                stream.
            </p>
        </div>

        <FooterBar/>
    </>
}

export default ServicesPage
