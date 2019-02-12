---
prev: ./firmware.md
next: ./minimum-requirements.md
---

# Software requirements

## Browser Game

The game that needs to be build is not just acting as a showcase for the controller, its a standalone entity that may be used with other applications or controllers. It should comply to the following requirements:

* It should be a top down, slow speed game following the proposed game mechanics
* It needs to be browser based so it is portable
* It should make use of a framework such as Phaser to build the actual game mechanics and logic
* Its state needs to be advertized via a public API
* The game needs to be manageable via the API
* The player should be able to authenticate against the API
* Controlling a game character is also achieved via the API

Of course visualization can be done directly in the browser.

By making the API the main interaction interface, the game is decoupled from the rest of the setup. This allows other applications to interact with the game using its API.

## Registration and Authentication

Games, users, highscores, ... need to be persisted. The best approach here is to use a database. Most of this information must also be made available through the API so that information can be easily retrieved.

Users also need to be able to register on the game platform. This will allow for the creation of personalized addon cards for the controller.

Identification and authentication will also be required when sending commands to the API.

## Dockerization

All services and applications should be hosted in docker containers. This will allow quick and easy deployment and management on our production servers.

## Git and GitHub

All code should be hosted on public git repositories inside the [https://github.com/vives-projectwerk2-2019](https://github.com/vives-projectwerk2-2019) organization. Code that was never committed, never existed.

Make sure to document the API thoroughly so anyone can use it.