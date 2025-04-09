import NavigationBar from "../../common/navbar.tsx";
import FooterBar from "../../common/footer.tsx";
import ServicesList from "./services/services_list.tsx";
import FilterArea from "./filters.tsx";
import {Dialog, Tabs} from "radix-ui";
import {ReactNode, useState} from 'react';

import "./ble_info_page.css";
import DownloadSampleList from "./samples/dl_samples/dl_sample_list.tsx";
import AdvertisementSampleList from "./samples/ad_samples/ad_sample_list.tsx";
import {SearchCriterias} from "../../../types/search-criterias.d.tsx";
import {FilterContext} from "./contexts.tsx";
import {MathJaxContext} from "better-react-mathjax";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";


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
                                Live Data <LiveDataInfo />
                            </Tabs.Trigger>
                            <Tabs.Trigger className="ble_info__tabs_trigger" value="download">
                                Download Data <DownloadDataInfo />
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

const InfoModal = ({title, children}: {title: string, children?: ReactNode}) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <FontAwesomeIcon icon={faInfoCircle} />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="dialog_overlay" />
                <Dialog.Content className="dialog_content" aria-describedby={undefined}>
                    <Dialog.Title className="dialog_title">{title}</Dialog.Title>
                    <Dialog.Close asChild>
                        <button className="dialog_close_button" aria-label="Close">X</button>
                    </Dialog.Close>
                    {children}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

const LiveDataInfo = () => {
    return (
      <InfoModal title={"Live Data Info"}>
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
                  <img src="/BleAdvertisingData.png" alt="BLE Live Data" width="100%" />
              </p>
          </div>
      </InfoModal>
    );
}

const DownloadDataInfo = () => {
    return (
      <InfoModal title={"Download Data Info"}>
          <div>
              <p>
                  SHT31 Smart Gadget (Smart Humigadget) does not support this data download service.
                  Documentation for the SHT31 Gadget can be found&nbsp;
                  <a href="https://sensirion.com/media/documents/429F0DF6/61643DC1/Sensirion_Humidity_Sensors_SHT3x_Smart-Gadget_User-Guide_1.pdf" target="_blank">here</a>.
              </p>

              <p>
                  The data download is implemented by the Data Logger Service.
                  The documentation can be found in the "BLE Services" section.
              </p>

              <p>
                  The data download is split into frames of 20 bytes each.
                  Each frame starts with a two-byte sequence number, followed by 18 bytes of data.<br />
                  The first frame contains the header including all necessary information for the data download:
                  <ul>
                      <li>The Version and Protocol: Set both to 0x00</li>
                      <li>
                          The sample type ID: This defines what signals are sent.
                          You can find a list of supported sample types below.
                          E.g. for the SHT43 Demo Board, this is 0x05
                      </li>
                      <li>The sampling interval in milliseconds</li>
                      <li>
                          The age of the latest measurement in milliseconds.
                          The age is defined as the difference between the time when the data download was started
                          and the time when the last sample has been logged on the gadget.
                      </li>
                      <li>The number of samples available for download.</li>
                  </ul>
                  The next frames contain the measurement data for the selected sample type.
              </p>
              <p>
                  The following image shows an example of a data download sequence for sample type 5:
                  <img src="/BleDataDownload.png" alt="BLE Download Data" width="100%" />
              </p>
          </div>
      </InfoModal>
    );
}

export default BleInfoPage;
