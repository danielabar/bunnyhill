## Database Initialization

### To seed the database with some initial data
* From project root ```cd dbinit```
* ```mongoimport -d langfun -c decks --type json --jsonArray --drop decks.json```

### To remove all saved scores
* ```mongo langfun --eval "db.scores.remove()"```