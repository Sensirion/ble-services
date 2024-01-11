# BLE-services

Describe the BLE services that are used by Sensirion gadgets.

The purpose of this repository is to provide a description of the BLE services
that is precise enough to implement the services in various devices.

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
