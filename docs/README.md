---
sidebar: false
---


# BUG: Bug Universal Gamecontroller

Students of the VIVES electronics-ICT department at campus Bruges (aka devbit) introduce: BUG, the universal gameconsole. BUG is the worlds most low power game console. By using the LoRaWAN Internet of Things wireless technology, BUG is able to communicate over long distances without using mucht power. Therefore you won't need to think about batteries in the controller. 

On top of this, the BUG controller is customizable and configurable by means of small pluggable cards. This enables you to choose your own weapons and upgrades by composing your own controller. 

The BUG console constructed out of a collection of open source API's that enable everybody to develop there own games and applications. 

At the [Maker Faire Gent](https://www.makerfairegent.be/) we will launch the first game, a turn-based, top-down tank battle game. On thop of that we will display an DIY display based on a Raspberry Pi with FPGA and 6000 RGB leds.

![Bug Logo](./img/bug-logo.png)

This projects consists out of the following part:

* [Controller](./controller): Controller that uses LoRaWAN for communication. Input is handled by capacitive touch buttons, and an E-Ink display for status and feedback. 
* [API](./api): All actions performed by the controller are available by an API. This enables you to do whatever you want with the controller. Making it truely *universal*
* [Game](./game): To demonstrate the controller and the API, an game is developed to showcase all its features.
* [Scoreboard](./scoreboard): An DIY scoreboard that displays the gamestatues. The board is DIY made with an Raspberry Pi, FPGA and 6000 RGB leds.

## Features

* LoRaWAN wireless communication technology
* E-Ink display for low power visualization
* Capacitive touch
* Open source API's
* Customizable with addon cards
* Turn-based, top-down tank game
* DIY scoreboard


