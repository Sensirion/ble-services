import CollapsibleInfo from "../common/collapsible_info.tsx";
import AdvertisementSampleList from "./ad_sample_list.tsx";
import FilterListPage from "../common/filter_list_page.tsx";

function AdSamplePage() {
    return (
        <>
            <FilterListPage displayedFilters={["gadget", "signal", "sensor"]}>
                <h1>Live Data</h1>
                <p>
                    This section describes all available live data samples, their fields
                    and provides the byte layout for every sample.
                </p>
                <InfoAccordion/>
                <div>
                    <AdvertisementSampleList />
                </div>
            </FilterListPage>
        </>
    );
}

const InfoAccordion = () => {
    return (
        <CollapsibleInfo>
            <div>
                <p>
                    Live data is sent as the manufacturer data of the BLE advertising data.
                    Each live data sample starts with an advertisement type and a sample type.
                    The advertisement type is set to 0x00 for advertisements containing live data,
                    and the sample type is set based on the type of the broadcast data.
                </p>

                <p>
                    Please note that the sample data and local name can use at most 20 bytes combined.
                    Therefore, we use "S" as the local name for DIY Gadgets.
                    This allows us to send up to eight signals as live data.
                </p>

                <p>
                    The following image shows an example of a live data sample as sent by the SHT43 Demo Board:
                    <img src="/BleAdvertisingData.png" alt="BLE Live Data" width="100%"/>
                </p>
            </div>
        </CollapsibleInfo>
    );
}

export default AdSamplePage;
