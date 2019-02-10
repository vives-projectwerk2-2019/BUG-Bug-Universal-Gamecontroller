---
prev: ../
next: ./controller.md
---

# Project description

Many game consoles exist. They all focus on graphics and expensive hardware. Most of them are not portable. They are big and heavy. Only some of them are really mobile. But even then batteries don't last that long. With this project, we would like to tackle these problems, and make a gaming console that is very low power, so low power that batteries would never be you concern.

It is only recently that new technologies come available that make real low power applications available. Not many of these technologies are used with game consoles. Lets change this and apply them to make a difference.

## Power consumption

Console | Watts
 --- | ---
Nintendo Switch	 | 10-18
PS4 Pro | 	75-160*
PS4 Slim | 	55-110
PS4 | 	90-150
Xbox One X | 	65-180*
Xbox One S | 	35-90
Xbox One | 	70-120
Wii U	 | 35
PS3 Slim | 	85
PS3 Original | 	190
Xbox 360 S | 	90
Xbox 360 |  Original	180
Wii | 	40

[source: energyusecalculator.com](http://energyusecalculator.com/electricity_gameconsole.htm)

When taking a look at the table above, we can see that game consoles use a lot of power. Even the portable ones. The Nintendo Switch uses between 10 to 15 Watts of power. This is enough to make it last a couple of ours on batteries before you need to recharge it.

## Making a difference

To save power we could use some interesting technologies to make sure you never need to worry about batteries again. 

We need to experiment with what is possible, but some technologies enable to thing in milliWatts instead of Watts. Are we able to solve this problem with a power consumption below 10mW? This would mean that our console is 1000 times more energy efficient than the Nintendo Switch.

### LoRaWAN

LoRaWAN is a low power wireless communication technology. It enables you to communicate over great distances (20-40 km in good conditions). And it uses almost no power to achieve this. LoRaWAN is an IoT (Internet of Things) technology that enables sensors to measure and send values to the cloud with batteries that last for more than 10 years.
This makes LoRaWAN the ideal wireless communication protocol for our game console.

![LoRaWAN logo](./img/lorawan.png)

### E-Ink display

E-Ink or E-Paper is a display technology that only uses power when changing the image you want to display. This means that it is very low power. When the image does not need to change, it uses effectively 0 power. You can even decouple the power and the image will persist for eternity.

A low power design would not be possible with even some leds to give feedback. Another solution must be found. Our controller could use E-Paper display to give some feedback to the user. It does not need to show much, but feedback is definitely a welcoming feature.

![E-Paper display](./img/epaper.jpg)

### Capacitive touch

Capacitive touch is widely used now days in touch screens and other devices. From a hardware perspective it is even cheap, as you do not need any costly components. Just some space on a PCB. 

![Touchberry Pi Shield](./img/touchberrypi.jpg)

### Browser based gaming

Another important feature for our gaming console is portability. Smooth and awesome graphics on a custom hardware console would be very difficult. Look at the consoles that are already available. To solve this, we could ditch the console entirely. 

If we host the games and applications for the controller in the cloud, then there is no extra hardware needed and power problem will not even exist. If we support browser based games and applications. Then the portability problem is solved as well. Using the browser, means that people can play on there smartphones, PC's, TV's, or any device that has access to the internet. If you are playing on your PC and need to go outside, just switch to your phone. This ability makes our console truly portable.

![Portable game](./img/smartphonegame.jpg)

### Gaming platform

Instead of making a dedicated console or controller we could even go a step further. We could create a platform allowing anybody to build there own games and solution. To allow this, we could create an publicly accessible API that provides information about the controller without knowing how it works. Without knowledge of the hardware, anybody is able to access the information and use it for whatever they want.

* [Controller](./controller.md)
* [API](./api.md)
* [Game](./game.md)
* [Scoreboard](./scoreboard.md)