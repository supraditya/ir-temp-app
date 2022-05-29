##############
## Script listens to serial port and writes contents into a file
##############
## requires pySerial to be installed 
import serial
# import keyboard

serial_port = 'COM5'
baud_rate = 9600; #In arduino, Serial.begin(baud_rate)
write_to_file_path = "output.csv"

output_file = open(write_to_file_path, "w+")
ser = serial.Serial(serial_port, baud_rate)
while True:
    line = ser.readline()
    line = line.decode("utf-8") #ser.readline returns a binary, convert to string
    if 'exit' in line:
        # print("Inside function")
        output_file.close()
        break
    else:
        line=line.replace("\n", "")
        print(line)
    output_file.write(line)
    # if keyboard.read_key()=='q':
    #     print("Writing to file, exiting program...")
    #     output_file.close()
    #     break         