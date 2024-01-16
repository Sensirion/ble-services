BLE Services on Sensirion Gadgets
=================================

Describe the BLE Interface of Sensirion Gadgets.

General Information
-------------------

The Sensirion Gadgets send their measurement values in the advertisement data as
part of the manufacturer data. The layout of the advertised data is specified
in the description of the sample types.
In addition to this each device act as GATT server and exposes some BLE Services.
All the publicly used services are specified in BLE Services.

The purpose of this repository is to provide a specification of the used
interfaces that allows to successfully interact with these devices.

Used Types
----------

Within the data descriptions we use these type names:

* **float**:    Specifies a four byte floating point number.
* **uint8**:    Specifies a one byte unsigned integer.
* **uint16**:   Specifies a two byte unsigned integer.
* **uint32**: Specifies a four byte unsigned integer.
* **int8**: Specifies a one byte signed integer.
* **int16**: Specifies a two byte signed integer.
* **int32**: Specifies a four byte signed integer.
* **string**: Specifies a variable sequence if one byte characters.
* **string[n]**: Specifies a variable sequence of at most n characters.
* **type[n]**: Specifies a fixed size sequence of <type\>.

**Note:** All multi-byte data types are little endian!
