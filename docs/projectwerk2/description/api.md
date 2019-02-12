---
prev: ./controller.md
next: ./game.md
---

# API

Instead of creating custom applications in The Things Network console, we will create this application for the user. Instead all communication should go through an API. The API will inform any interested party of the buttons and controls that are pressed an used on any controller. Making this abstraction will make it very easy for any software to interface with the controllers. No knowledge of hardware or LoRaWAN is needed.

## MQTT / REST

A combination of MQTT and HTTP REST must be used to perform actions and get information from the controller.

MQTT could be used to communicate all actions performed on the controller. The real-time aspect of MQTT makes it ideal for this kind of situations. MQTT can be used to get information about:

* direction buttons that are being pressed
* action buttons that are being pressed
* available extension boards and there functionality 
* authenticating a user


An HTTP REST API could be used for:

* managing games
  * creating new games
  * starting games
  * get information about the current state
* authentication
* user registration

## Authenticaion

Before you can authenticate using a registered dongle, you must register and manage a profile. An HTTP REST interface could be used for this feature. Together with a web interface to manage all users.

## Docker

To run the software on a server in a manageable way, some help is needed. Docker makes containers for software. These containers contain everything needed to run the applications. Because all these dependencies are shipped inside a container, setting up a new instance or even updating a server application is easy. Just run some commands and everything is up. 

All server software should be made available using Docker and docker-compose. This will make it very easy to get the code live and publicly available on a server. 

## Public

All API's should be made publicly available so everybody is able to use the controllers. This will also enable them to create and build new and custom applications that make use of our controllers. New games or applications could be created by everyone.

Public API's need to be documented very well for anybody to make use of them. Spend the time and effort to make them useful and complete.

Organizing a small workshop on how to use the API in your own games could be an addition to  the project.

## Fake controller

To develop, test and demonstrate all functionality, a fake controller should be build. This controller exists purely out of software, and could be a (web) application. This controller can then be used during development. Features could be tested before the hardware is finished, or when the physical controller is not available.

