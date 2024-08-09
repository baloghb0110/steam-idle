### Prerequisites

You'll need NodeJS and npm.

### Setup

1. Edit the `username` and `password` values in the `IdlerConfig.js` file with your own credentials, then save the file.
2. Run the following commands:

```bash
npm i
node IdlerConfig.js
```

You can find the GameID in every Steam game link.
You can modify the game IDs in **line 10** of the `IdlerConfig.js` file.

single

```bash
config.games = [730]
```

multiple games(max 10) you can list the numbers separated by commas

```bash
config.games = [730, 10]
```
