# ir-temp-app
Contains an arduino program for the Uno R3, and a Python script to write it's outputs to a CSV file. The program records the ambient and object temperatures using an Adafruit MLX90614 sensor

## Required Hardware
- Arduino UNO R3
- Jumper Wires (Male-Male, Male-Female)
- Push Buttons x2
- Adafruit MLX90614 IR Temperature Sensor
- Breadboard

## Required Software
- Arduino IDE (plus all required libraries mentioned in code)
- Python
- Python libraries: serial

## To Use
- In ```temp_script.py``` Make sure to change the ```serial_port``` variable's value to the port your Arduino is connected to