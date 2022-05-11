/***************************************************
  This is a library example for the MLX90614 Temp Sensor
  Designed specifically to work with the MLX90614 sensors in the
  adafruit shop
  ----> https://www.adafruit.com/products/1747 3V version
  ----> https://www.adafruit.com/products/1748 5V version
  These sensors use I2C to communicate, 2 pins are required to
  interface
  Adafruit invests time and resources providing this open source code,
  please support Adafruit and open-source hardware by purchasing
  products from Adafruit!
  Written by Limor Fried/Ladyada for Adafruit Industries.
  BSD license, all text above must be included in any redistribution
 ****************************************************/

#include <Adafruit_MLX90614.h>

Adafruit_MLX90614 mlx = Adafruit_MLX90614();

// constants won't change. They're used here to set pin numbers:
const int BUTTON_PIN = 7; // the number of the pushbutton pin

const int EXIT_BUTTON_PIN = 8; //The number of exit pushbutton pin

// Variables will change:
int readButtonLastState = HIGH; // the previous state from the input pin
int readButtonCurrentState;    // the current reading from the input pin

//States for exit switch button
int exitButtonLastState=HIGH;
int exitButtonCurrentState;

void setup() {
  Serial.begin(9600);
  
  // the pull-up input pin will be HIGH when the switch is open and LOW when the switch is closed.
  pinMode(BUTTON_PIN, INPUT_PULLUP);

    // the pull-up input pin will be HIGH when the switch is open and LOW when the switch is closed.
  pinMode(EXIT_BUTTON_PIN, INPUT_PULLUP);
  
  while (!Serial);


  if (!mlx.begin()) {
    Serial.println("Error connecting to MLX sensor. Check wiring.");
    while (1);
  };

//  Serial.print("Emissivity = "); Serial.println(mlx.readEmissivity());
//  Serial.println("================================================");
}



void loop() {
    // read the state of the switch/button:
  readButtonCurrentState = digitalRead(BUTTON_PIN);
  exitButtonCurrentState = digitalRead(EXIT_BUTTON_PIN);

  if(readButtonLastState == LOW && readButtonCurrentState == HIGH)
  {
    int t=3;
    float avgAmbientC=0.0;
    float avgObjectC=0.0;
    float avgAmbientF=0.0;
    float avgObjectF=0.0;
//    Serial.println("Temps are in *C.");
    Serial.println("Amb1,Obj1,Amb2,Obj2,Amb3,Obj3,Avg_Amb,Avg_Obj");
    while (t>0)
    {
        Serial.print(mlx.readAmbientTempC());Serial.print(",");
        Serial.print(mlx.readObjectTempC());Serial.print(",");
      avgAmbientC+=mlx.readAmbientTempC();
      avgObjectC+=mlx.readObjectTempC();
      avgAmbientF+=mlx.readAmbientTempF();
      avgObjectF+=mlx.readObjectTempF();
      t--;
      delay(500);
    }
    Serial.print(avgAmbientC/3.0);Serial.print(",");
    Serial.print(avgObjectC/3.0);Serial.println(",");

    Serial.println("exit");
  }

//    Serial.println("The state changed from LOW to HIGH");
  

  // save the last state
  readButtonLastState = readButtonCurrentState;

  if(exitButtonLastState == LOW && exitButtonCurrentState == HIGH)
  {
    Serial.println("exit");
    exitButtonLastState = exitButtonCurrentState;
    while(1);
  }


}
