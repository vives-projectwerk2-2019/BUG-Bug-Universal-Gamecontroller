---
prev: ./game.md
# next: ./README.md #FIX: produces build errors
---

# Scoreboard

![Meme Machine](./img/meme-machine.jpg)

Using the 'Meme Machine' a score board / match status could be displayed showing information about the current game.

It could display the following information:

* match name
* match duration
* player names
* player stats (eg: progress bars)
  * health
  * power
  * bullets left
  * shots fired
* ranking
* minimap
* matches played
* ...

Example: 

![Scoreboard example](./img/scoreboard-example-large.png)

Different stats could be displayed using different screens that rotate automatically.

The Meme-Machine has an HTTP REST interface to push images to the screen. Images must be rendered in the background, and then send to the Meme-Machine using the HTTP interface.


![Scoreboard example](./img/scoreboard-example.png)

