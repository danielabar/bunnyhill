bunnyhill
=========

Resources and practice for JavaScript developers getting started with the MEAN stack.

**M:** [MongoDB](http://www.mongodb.org/) Open-source NoSQL document database.

**E:** [Express](http://expressjs.com/) Web Application Framework for Node.

**A:** [Angular](http://angularjs.org/) JavaScript MVC Framework for the client side.

**N:** [Node](http://nodejs.org/) JavaScript for the server side. A platform built on [Chrome's JavaScript runtime](https://code.google.com/p/v8/).

The following documentation will walk you through the steps of setting up your development environment and getting up and running with the sample project in this repo.
The section on [Learning Resources](#learning-resources) provides links to learn more about each of the tools and technologies used.

## Tooling: Setup Your Development Environment
* Install [MongoDB](http://docs.mongodb.org/manual/installation/)
* Install [Sublime Text 2](http://www.sublimetext.com/2)
* Install [Node.js](http://nodejs.org/)
* Install [Git](http://git-scm.com/downloads)
* Install [Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en), a Chrome extension to debug Angular applications.

### Optional Tools
* If you prefer to use a GUI for Git version control, install [SourceTree](http://www.sourcetreeapp.com/). *Bonus: It also works for BitBucket/Mercurial repos.*
* If you prefer to use a GUI for inspecting and managing your Mongo database, install [Robomongo](http://robomongo.org/)

## Install Node Modules
Now that you have node installed, open a terminal window (Mac/Linux) or command window (Windows) and run these commands to install node modules globally.
Mac/Linux users may require each command preceded by ```sudo```.
Windows users may need to open the the command window as Administrator.
	
	```
	npm install -g nodemon
	npm install -g karma
	npm install -g grunt-cli
	npm install -g bower
	npm install -g yo
	npm install -g generator-angular
	```

## Project Setup
* If you don't already have one, [Sign up for a Github account](https://github.com/). Strictly speaking, you don't need one just to clone a repo, but you will need an account to create your own repos and collaborate with others.
* ```cd``` to your ```projects``` directory
* ```git clone https://github.com/danielabar/bunnyhill.git```
* ```cd bunnyhill```
* ```npm install```
* ```cd dbinit```
* ```mongoimport -d langfun -c decks --type json --jsonArray --drop decks.json```
* ```cd ..```
* ```grunt test```
* ```nodemon server.js```
* Launch a browser and enter [http://localhost:3000](http://localhost:3000)

## Configure Project Settings
* Open Sublime Text 2
* File -> Open, navigate to projects/bunnyhill and open the folder
* Project -> Save Project As
* Enter filename ```bunnyhill.sublime-project``` (it will be ignored by git, this is good for now)
* Edit the file so it looks like this:

	```
		{
		"folders": [{
			"path": "<path to your project here, it will already be filled in for you>"
		}],
		"settings": {
			"tab_size": 2,
			"detect_indentation": false,
			"translate_tabs_to_spaces": false,
			"use_tab_stops": true	
		}
	}
	```

## <a name="learning-resources"/>Learning Resources
* [Git Simple Guide](http://rogerdudler.github.io/git-guide/) Just the basics, get started quickly.
* [Pro Git e-book](http://git-scm.com/book)
* [Sublime Text 2 Free Video Course](http://net.tutsplus.com/articles/news/perfect-workflow-in-sublime-text-free-course/) A series of short screencasts.
* [Sublime Text 2 Unofficial Documentation](http://sublime-text-unofficial-documentation.readthedocs.org/en/sublime-text-2/)
* [Angular Phonecat Tutorial](http://docs.angularjs.org/tutorial) Build a phone catalogue app with Angular. Excellent step-by-step instructions and explanation of Angular concepts.
* [The Art of Node](https://github.com/maxogden/art-of-node) A short introduction to Node.js
* [Express Guide](http://expressjs.com/guide.html)
* [The Little MongoDB Book](http://openmymind.net/mongodb.pdf)