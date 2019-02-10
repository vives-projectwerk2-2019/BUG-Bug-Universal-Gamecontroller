---
prev: ./api.md
next: ./scoreboard.md
---

# Game requirements


## Game mechanics

#### Turn

* 2 actions
  * Move 
  * Fire
* If hit (in range) subtract (damage- applied Armor Points) from Health Points

#### Stats

* Movement
  * Move = hexes per turn
	  * Rear is directed to origin hex after movement has ended
  * Rotate stationary
	  * Costs 1 move, stay in hex
  * Ramming: when moving into an occupied hex both bots get 5 damage 
* Health
  * Health points: 0 HP = disabled
* Armor
  * Armor points
  * Front / side /rear
* Weapon
  * 1 fire action per weapon per turn
  * Specials
  * Range - Line of Sight (LoS) weapons mounted at front
  * Damage

#### Standard bot

* Movement: 2
* HP: 20
* AP Front: 3, Side: 2, Rear: 1
* Weapons: gatling gun
  * Range: line LoS 20 hexes
  * Damage: 4

#### Items

* Movement
  * Rocket engine: movement +3
  * Amphibious: may enter water
  * Harrier: jump 6 hexes once every 3 turns, can only jump into clear terrain, ignores terrain in between
* Armor
  * Adamantium: 1 side AP +3, movement -1
  * Gravy shield: each turn, choose side AP +1
* Health
  * Nanobots: regenerate 2 HP once every 3 turns (max. original health)
  * Structural strengthening: HP +5 
* Weapon
  * Flammenwerfer
	  * Range: line LoS 3 hexes
	  * Damage: 8
	  * Special: BURN BURN BURN: next turn 5 damage
  * Laser
	  * Range: line LoS unlimited
	  * Damage: 3
  * Mines (5)
	  * Bury 1 mine on a hex
	  * When a bot enters a hex, mine deals 10 damage, discard mine afterwards
  * Plasma gun
	  * Range: 90 degrees max. 3 hexes
	  * Damage: 6
	  * Special: ignores AP
  * EMP bomb
	  * Range: all adjacent hexes
	  * Special: Disable 1 item for the next turn, mines are also disabled
  * Ram
	  * Range: none
	  * Damage: ramming damage +3

#### Terrain

* Clear
* Obstacle: cannot enter hex, blocks LoS
* Water: cannot enter hex
* Fortification: all AP +1  

