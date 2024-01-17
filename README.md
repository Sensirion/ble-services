BLE Services of Sensirion Gadgets
=================================

Describe the BLE Interfaces of Sensirion Gadgets.

General Information
-------------------

The Sensirion Gadgets send their measurement values in the advertisement data as
part of the manufacturer data.
In addition to this each device acts as a GATT server and exposes some
BLE Services.

To receive data from the advertisement no connection is required. In order to
access a BLE Service the client needs to connect to the GATT server. As long
a connection  is established the client can interact with the
selected service and receive data from it but no advertisement is sent.
This also means that the Gadget becomes invisible for all other clients while
one client is connected to it.

This specification sets out to describe all publicly available interfaces to
Sensirion Gadgets.

- **BLE Services**: Describes what services are available, their *UUID* and the
  exposed characteristics. Services that are public BLE services have a link to
  download the BLE Service specification.

- **Sample Types**: Describes the data structures that contain measurement data.
  There are two kind of sample types.

  - *Advertisement Sample Type*:
    Measurement data that is sent with the manufacturer data of the BLE
    advertisement. An advertisement sample is one contiguous data structure
    starting with an advertisement type and a sample type.

  - *Data Logger Sample Type*:
    Measurement data that is sent when downloading data using the
    *Data Logger Service*. The data logger sample type has a two byte identifier /sample number
    that is sent in the beginning of the download procedure.
    The measurement data is sent in subsequent packets and do not include the
    sample number.

    *Note:* The fact that it is not one contiguous data structure is reflected in the
    byte offset:

This specification shall support building devices that can properly interact with
any of the Sensirion Gadgets.
Following this interface specification will also allow to build your own device
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
