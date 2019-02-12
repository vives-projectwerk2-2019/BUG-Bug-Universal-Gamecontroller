---
sidebar: false
---

# BUG: Bug Universal Gamecontroller

Students of the VIVES electronics-ICT department at campus Bruges (aka devbit) introduce: **BUG, the universal gameconsole**. BUG is the worlds most low power game console. By using the LoRaWAN Internet of Things wireless technology, BUG is able to communicate over long distances without using much power. Therefore you won't need to think about batteries in the controller for many years to come.

On top of this, the BUG controller is customizable and configurable by means of small plugable cards. This enables you to choose your own weapons and upgrades by composing your own controller.

The BUG console is build out of a collection of open source API's that enable everybody to develop there own games and applications.

At the [Maker Faire Gent](https://www.makerfairegent.be/) we will launch the first game, a turn-based, top-down tank battle game. On top of that we will showcase a DIY display based on a Raspberry Pi, a Mojo FPGA and over 6000 RGB leds.

![Bug Logo](./img/bug-logo.png)

This projects consists of the following components:

* [A controller](./controller): A controller that uses LoRaWAN for communication. Input is handled by capacitive touch buttons. A low power E-Ink display is used for status and feedback. It is also equipped with expansion slots to plug in several addon cards.
* [An API](./api): All actions performed by the controller are available by an API. This enables you to do whatever you want with the controller. Making it truly *universal*
* [A game](./game): To demonstrate the controller and the API, a game is used to showcase all its features.
* [A scoreboard](./scoreboard): A DIY scoreboard that displays the status of the game. The board is made with a Raspberry Pi, a Mojo FPGA and over 6000 RGB leds.

## Features

* LoRaWAN wireless communication technology
* E-Ink display for low power visualization
* Capacitive touch
* Open source API's
* Customizable with addon cards
* Turn-based, top-down tank game
* DIY scoreboard
