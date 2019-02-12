---
prev: ./firmware.md
next: ./minimum-requirements.md
---

# Software requirements

## Browser based

The game must be browser based. It will come online on the domain name: [bug-game.devbit.be](https://bug-game.devbit.be) (or any other domain name if another name is chosen).

## Git and GitHub

All software code should be managed using Git and GitHub. A GitHub organization is provided for all the repositories. Make use of this [vives-projectwerk2-2019](https://github.com/vives-projectwerk2-2019) organization to create and manage your projects. Code should not be published on any private accounts.

## Docker

### Docker Cloud

All docker containers should be uploaded to [docker cloud](https://hub.docker.com/) This can easily be done by configuring docker cloud to build new containers whenever new code is pushed to GitHub. Automate container building to prevent problems or extra work.

### Docker-compose

Software projects should also contain [docker-compose](https://docs.docker.com/compose/) files to get the containers running quickly without manually figuring out the settings.