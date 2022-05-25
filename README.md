# The Game of Nothing

A 2D Dungeon Crawler game, using Phaser 3, Node, Express, PostgreSQL, Babel 7, Heroku and Webpack 4.

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command         | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm install`   | Install project dependencies                      |
| `npm start`     | Build project and open web server running project |
| `npm run build` | Builds code bundle with production settings       |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server.

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at `dist/bundle.min.js` along with any other assets your project depended.

# NOTHING EMBASSY inc

## Members: 
- German: Game Developer CEO
- Omar: Hybrid Developer CEO
- Kevin: Back End Developer CEO

## Describe your application in 3-5 sentences. Include what the functionality is and why you’ve chosen it/what problem this solves: 
	We’ve chosen to develop a little dungeon crawler where you’re a knight fighting through waves of ogres, looking to defeat the Ogre king. The faster the player clears it the more points they get and are put into a high score leaderboard once the game is cleared. The player will have up to 3 lives, after 3 lives are used up it will take him to the losing screen. If the player successfully defeats the ogres he will be taken to the winner screen, where it’ll show the high score page. 

## What technologies are we using:

### Front End: PhaserJS
- Game Development

### Back End: Node & Express + postgreSQL, Webpack, Babel
- For High Score & User Authentication 
- JSON Web Token

### Deployment: Heroku

## What is the structure/schema of our documents/tables: 
https://drive.google.com/file/d/1YD7-nO5_aam4GBDMjXVCtsl36sv1O4rN/view?usp=sharing

## What tools are we using to track progress? (Asana, Trello, Docs) Please provide a link:

We are using Github Project Issues in a kanban work environment.
The Game of Nothing (github.com)

## What are the features we hope to implement:
	-Soundtrack
	-SFX
	-Scenes
	-Hitbox
	-Lives
	-Levels
	-Movement
	-Mobile friendliness
	-User Authentication
	-Working High Score
	-Better shortcut layout (Stretch Goal)
	-Storing player progress
	
## ChangeLogs
From most recent commits down to the oldest.

- added controllers and encryption
- Merge pull request #35 from omarmoreta/WinLoss
- added register form
- added login menu
- added login and loss screen properties and hotkeys, working on login screen
- Merge branch 'main' of https://github.com/omarmoreta/Final-Project into WinLoss Updating this branch
- Merge pull request #33 from omarmoreta/heroku
- merged
- added base files for winning / losing screen
- changes
- make it better
- initial commit
- Merge branch 'enemyFollow' of https://github.com/omarmoreta/Final-Project into deployment
- added flip troll depending on player
- untracking package-lock and placed in gitignore
- merging branches with new package-lock changes
- removed package-lock from being tracked
- Merge branch 'main' into main
- Merge branch 'main' of https://github.com/omarmoreta/Final-Project into deployment
- fix
- changed var to let
- added collision for the trolls
- fixed #16 enemies follow the character at different speeds
- Merge pull request #31 from omarmoreta/interface
- Update README.md
- merging interface
- merged PauseUI
- adding all branches together
- added walking sfx to knight
- added mute button, changed cursor, added stats, added interface scene
- added game soundtrack
- added pause scene and pause ui
- Merge pull request #30 from omarmoreta/Player
- Merge branch 'main' of https://github.com/omarmoreta/Final-Project into Player Updating main
- merged player and troll / map
- Merge branch 'troll-and-map' of https://github.com/omarmoreta/Final-Project into troll-and-map
- working repo with troll and map
- added preloading character assets, camera assets, physics
- added player, and player controls
- added entity properties
- added character cameras and basic game scene config
- Update README.md
- added trolls and map
- merging Mainmenu branch
- merging Bootscene branch
- heroku deployment test
- debugging the deployment environment
- added custom font to main menu
- added temp music and sfx to main menu
- added main menu
- added Bootscene and config
- Merge pull request #3 from KevinsCodeStorage/database-integration
- Merge branch 'main' into database-integration
- initial database creation
- Merge pull request #1 from omarmoreta/main
- Merge branch 'main' into main
- edited readme config
- updated readme to include google doc from noshua
- Update package-lock.json
- adding license and source to README
- Initial commit
