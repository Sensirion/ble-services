BLE Services documentation
==========================

This repository contains the definition of BLE specifications used by Sensirion gadgets. Specifications are written in YAML and are then compiled to a web format.

# How to obtain HTML render
With a python environment having the dependencies installed with poetry(see pyproject.toml), you can run:
```
python specification_publisher/main.py
```
This will create an `output` directory where the HTML resources are located.

# Node setup
We use node version `22.11.0`

## YAML schema update
In case of YAML schema change, the Type definitions need to be redefined.
It can be done using:
```
json2ts -i 'src/resources/schemas/*.json' -o src/types
```
