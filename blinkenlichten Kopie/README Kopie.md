
# Blinkenlichten Project

![](./docs/images/blinkenlichten.gif)

## Project Overview

The "Blinkenlichten" project is an interactive cityscape created using Arduino boards, motion sensors, and LED lights. The project was developed by a group of four students as part of a course at HBK Braunschweig. The goal was to combine physical crafting with programming to create a visually engaging and interactive experience.

The cityscape consists of two rows of small houses made from recycled materials, illuminated by LED lights. Motion sensors detect movement and trigger a chain reaction, lighting up the houses sequentially as the viewer walks through the "street." The project emphasizes sustainability, creativity, and teamwork.

---

## Tools and Materials Used

### Electronics
- **Arduino Uno**: Used to control the LED lighting sequence.
- **FastLED Library**: A library for controlling LED strips.
- **Motion Sensors**: Detect movement to trigger the lighting sequence.
- **LED Strips (WS2811)**: Provide the lighting for the houses.
- **Power Supply**: Powers the Arduino and LED strips.
- **Soldering Tools**: Used to connect wires and components.

### Construction
- **Recycled Materials**: Tea boxes, egg cartons, cans, and plastic packaging were used to build the houses.
- **Spray Paint**: Blue paint was used to give the houses a uniform appearance.
- **Cutter Knife**: Used to cut windows into the houses.
- **Glue**: For assembling the houses and securing components.

---

## Key Features
- **Interactive Lighting**: Motion sensors trigger a chain reaction of lights as viewers move through the installation.
- **Sustainability**: The project uses recycled materials to construct the houses.
- **Collaborative Effort**: Tasks were divided among team members, combining programming, electronics, and crafting.

---

## Lessons Learned
- The importance of careful planning and testing when working with physical components.
- How to use Arduino boards and the FastLED library to control LEDs.
- Soldering and wiring techniques for creating reliable circuits.
- The value of teamwork and task delegation in completing a complex project.

---

## Future Improvements
- Adding more houses to create a denser cityscape.
- Refining the motion sensor logic for more dynamic interactions.
- Including miniature scenes inside the houses for added detail and immersion.
- Placing the houses at eye level to enhance the viewer's experience.

---

## How to Run the Project
1. Install the [FastLED](https://github.com/FastLED/FastLED) library in the Arduino IDE.
2. Install the board definition for the Arduino Uno in the Arduino IDE.
3. Adjust the `NUM_LEDS` and `DATA_PIN` in the code to match your setup.
4. Upload the code to the Arduino board.
5. Connect the motion sensors and LED strips as per the circuit diagram.
6. Power the Arduino and enjoy the interactive cityscape!

---

## Images and Videos
![](./docs/images/fastled_starter_bb.png)

For more visuals, check out the project images and videos in the `/docs/images` folder.
