import CollapsibleInfo from "../common/collapsible_info.tsx";
import DownloadSampleList from "./dl_sample_list.tsx";
import FilterListPage from "../common/filter_list_page.tsx";

function DlSamplePage() {
    return (
        <>
            <FilterListPage displayedFilters={["gadget", "signal", "sensor"]}>
                <h1>Download Data</h1>
                <p>
                    This section describes all available download data samples, their fields
                    and provides the byte layout for every sample.
                </p>
                <InfoAccordion/>
                <div>
                    <DownloadSampleList/>
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
                    SHT31 Smart Gadget (Smart Humigadget) does not support this data download service.
                    Documentation for the SHT31 Gadget can be found&nbsp;
                    <a href="https://sensirion.com/media/documents/429F0DF6/61643DC1/Sensirion_Humidity_Sensors_SHT3x_Smart-Gadget_User-Guide_1.pdf"
                       target="_blank">here</a>.
                </p>

                <p>
                    The data download is implemented by the Data Logger Service.
                    The documentation can be found in the "BLE Services" section.
                </p>

                <p>
                    The data download is split into frames of 20 bytes each.
                    Each frame starts with a two-byte sequence number, followed by 18 bytes of data.<br/>
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
                    <img src="/BleDataDownload.png" alt="BLE Download Data" width="100%"/>
                </p>
            </div>
        </CollapsibleInfo>
    );
}

export default DlSamplePage;
