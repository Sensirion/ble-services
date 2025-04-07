import NavigationBar from "../../common/navbar.tsx";
import FooterBar from "../../common/footer.tsx";
import ServicesList from "./services/services_list.tsx";
import FilterArea from "./filters.tsx";
import {Tabs} from "radix-ui";
import {useState} from 'react';

import "./ble_info_page.css";
import DownloadSampleList from "./samples/dl_samples/dl_sample_list.tsx";
import AdvertisementSampleList from "./samples/ad_samples/ad_sample_list.tsx";
import {SearchCriterias} from "../../../types/search-criterias.d.tsx";
import {FilterContext} from "./contexts.tsx";
import {MathJaxContext} from "better-react-mathjax";


const initialSearchCriterias: SearchCriterias = {
    selectedGadget: undefined,
    selectedSensor: [],
    selectedSignals: []
}

const mathJaxConfig = {
        loader: { load: ["input/asciimath"] }
}

function BleInfoPage() {
    const [filters, setFilters] = useState<SearchCriterias>(initialSearchCriterias);
    return (
        <MathJaxContext config={mathJaxConfig}>
            <NavigationBar/>
            <div id="body" className="ble_info__container">
                <FilterContext.Provider value={{filters: filters, setFilters: setFilters}}>
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
                    <Tabs.Root className="ble_info__tabs_root" defaultValue="live">
                        <Tabs.List className="ble_info__tabs_list">
                            <Tabs.Trigger className="ble_info__tabs_trigger" value="live">
                                Live Data
                            </Tabs.Trigger>
                            <Tabs.Trigger className="ble_info__tabs_trigger" value="download">
                                Download Data
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content className="ble_info__tabs_content" value="live">
                            <AdvertisementSampleList/>
                        </Tabs.Content>
                        <Tabs.Content className="ble_info__tabs_content" value="download">
                            <DownloadSampleList/>
                        </Tabs.Content>
                    </Tabs.Root>
                </FilterContext.Provider>
            </div>
            <FooterBar/>
        </MathJaxContext>
    );
}

export default BleInfoPage;
