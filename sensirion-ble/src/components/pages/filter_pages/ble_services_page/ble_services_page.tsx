import ServicesList from "./services_list.tsx";
import FilterListPage from "../common/filter_list_page.tsx";

function BleServicesPage() {
    return (
        <>
            <FilterListPage displayedFilters={["gadget"]}>
                <h1>BLE Services</h1>
                <p>
                    This section describes what services are available, their UUID and the
                    exposed characteristics. Services that are public BLE services have a
                    link to download the BLE Service specification.
                </p>
                <div>
                    <ServicesList/>
                </div>
            </FilterListPage>
        </>
    );
}

export default BleServicesPage;
