import NavigationBar from "./navbar.tsx";
import './overview.css'

function OverviewPage() {
    return <>
        <NavigationBar/>
        <div id="body" className="overview_container">
            <p>
                The Sensirion Gadgets send their measurement values in the advertisement data as
                part of the manufacturer data.
                In addition to this, each device acts as a GATT server and exposes some
                BLE Services.
            </p>
            <p>
                To receive data from the advertisement, no connection is required.
                To access a BLE Service, the client needs to connect to the GATT server.
                As long as a connection is established, the client can interact with the
                selected service and receive data from it, but no advertisement is sent.
                This also means that the Gadget becomes invisible for all other clients while
                one client is connected to it.
            </p>
            <p>
                This specification sets out to describe all publicly available interfaces to
                Sensirion Gadgets.
            </p>
            <ul>
                <li>
                    <span className="overview_bold">BLE Services:</span>Describes what services are available, their
                    <span className="overview_mono">UUID</span> and the
                    exposed characteristics. Services that are public BLE services have a link to
                    download the BLE Service specification.
                </li>
                <li>
                    <span className="overview_bold">Live Data:</span>
                    Measurement data that is sent with the manufacturer data of the BLE
                    advertising.
                </li>
                <li>
                    <span className="overview_bold">Data Download:</span>
                    Measurement data that is sent through the BLE characteristic <span className="overview_mono">Data transfer</span> which
                    is described in the <span className="overview_mono">Data Logger Service</span>.
                </li>
            </ul>

            <p>
                This specification shall support building devices that can properly interact with
                any of the Sensirion Gadgets.
                Following this interface specification will also allow building your own device
                that can be recognized by the Sensirion MyAmbience App.
            </p>

            <h3>Used Types</h3>
            <p>
                Within the interface specifications we use these type names:
            </p>
            <ul>
                <li>
                    <span className="overview_mono">float:</span> Specifies a four byte floating point number.
                </li>
                <li>
                    <span className="overview_mono">uint8:</span> Specifies a one byte unsigned integer.
                </li>
                <li>
                    <span className="overview_mono">uint16:</span> Specifies a two byte unsigned integer.
                </li>
                <li>
                    <span className="overview_mono">uint32:</span> Specifies a four byte unsigned integer.
                </li>
                <li>
                    <span className="overview_mono">int8:</span> Specifies a one byte signed integer.
                </li>
                <li>
                    <span className="overview_mono">int16:</span> Specifies a two byte signed integer.
                </li>
                <li>
                    <span className="overview_mono">int32:</span> Specifies a four byte signed integer.
                </li>
                <li>
                    <span className="overview_mono">string:</span> Specifies a variable sequence of one byte
                    characters.
                </li>
                <li>
                    <span className="overview_mono">string[n]:</span> Specifies a variable sequence of one byte
                    characters.
                </li>
                <li>
                    <span className="overview_mono">type[n]:</span> Specifies a fixed size sequence of <span
                    className="overview_mono">type</span>
                </li>
            </ul>


            <p>
                <span className="overview_bold">Note:</span>All multi-byte data types are *little endian*!
            </p>
        </div>
        <div id="footer">
            FOOTER
        </div>
    </>
}

export default OverviewPage
