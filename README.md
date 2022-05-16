# The Game of Nothing

A 2D Dungeon Crawler game, using Phaser 3, Node, Express, PostgreSQL, Babel 7, AWS Elastic Beanstalk and Webpack 4.

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

### Deployment: AWS Elastic Beanstalk

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
	
