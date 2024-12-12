General Information
-------------------

The Sensirion Gadgets send their measurement values in the advertisement data as
part of the manufacturer data.
In addition to this, each device acts as a GATT server and exposes some
BLE Services.

To receive data from the advertisement, no connection is required.
To access a BLE Service, the client needs to connect to the GATT server.
As long as a connection is established, the client can interact with the
selected service and receive data from it, but no advertisement is sent.
This also means that the Gadget becomes invisible for all other clients while
one client is connected to it.

This specification sets out to describe all publicly available interfaces to
Sensirion Gadgets.

- **BLE Services:** Describes what services are available, their *UUID* and the
  exposed characteristics. Services that are public BLE services have a link to
  download the BLE Service specification.

- **Live Data:**
  Measurement data that is sent with the manufacturer data of the BLE
  advertising.

- **Data Download:**
  Measurement data that is sent through the BLE characteristic *Data transfer* which
  is described in the *Data Logger Service*.

This specification shall support building devices that can properly interact with
any of the Sensirion Gadgets.
Following this interface specification will also allow building your own device
that can be recognized by the Sensirion MyAmbience App.

Used Types
~~~~~~~~~~

Within the interface specifications we use these type names:

- **float**:    Specifies a four byte floating point number.
- **uint8**:    Specifies a one byte unsigned integer.
- **uint16**:   Specifies a two byte unsigned integer.
- **uint32**: Specifies a four byte unsigned integer.
- **int8**: Specifies a one byte signed integer.
- **int16**: Specifies a two byte signed integer.
- **int32**: Specifies a four byte signed integer.
- **string**: Specifies a variable sequence if one byte characters.
- **string[n]**: Specifies a variable sequence of at most n characters.
- **type[n]**: Specifies a fixed size sequence of *<type\>*.

**Note:** All multi-byte data types are *little endian*!
