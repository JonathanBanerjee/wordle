 # Wordle App

### Description
This is a clone of the popular game Wordle. This version of the application was built by @matthewjljackson
and being a DevOps Engineer, I have decided to put the application in containers. The benefits of containerisation 
includes:

* Isolating faults
* Operating system compatibility
* Vendor compatibility 

### Prerequisites
* git 
* bash
* docker 

### How to run using docker-compose
clone the repository 
```
$ git clone https://github.com/JonathanBanerjee/wordle
$ cd wordle
$ docker-compose up
```
### To play the game
1. visit `https://localhost:3000`


### To run this application without Docker:
### 
clone the repository 
```
$ git clone https://github.com/JonathanBanerjee/wordle
$ cd wordle
$ node ./server/server.js
```

Open a new terminal using ``` Control or CMD + T ```

```
$ cd frontend
$ npm start
``` 

To play the game in your browser, head to this URL:
`https://localhost:3000`

Note: The letters can be typed in, not clicked on. 