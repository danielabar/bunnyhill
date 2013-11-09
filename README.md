bunnyhill
=========

Resources and practice for JavaScript developers getting started with the MEAN stack.

M: MongoDB

E: Express

A: Angular

N: Node

The following documentation will walk you through the steps of installation and project setup.
The section on Learning Resources provides links to learn more about each of the tools and technologies used.

## Install Tools
* [MongoDB](http://docs.mongodb.org/manual/installation/)
* [Sublime Text 2](http://www.sublimetext.com/2)
* [Git](http://git-scm.com/downloads)
* [Node.js](http://nodejs.org/)

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
* ```cd``` to your ```projects``` directory
* ```https://github.com/danielabar/bunnyhill.git```
* ```cd bunnyhill```
* ```npm install```
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
			"path": "/Users/dbaron/projects/bunnyhill"
		}],
		"settings": {
			"tab_size": 2,
			"detect_indentation": false,
			"translate_tabs_to_spaces": false,
			"use_tab_stops": true	
		}
	}
	```

## Learning Resources
* [Git Simple Guide](http://rogerdudler.github.io/git-guide/) Just the basics, get started quickly.
* [Pro Git e-book](http://git-scm.com/book)
* [Sublime Text 2 Free Video Course](http://net.tutsplus.com/articles/news/perfect-workflow-in-sublime-text-free-course/) A series of short screencasts.
* [Sublime Text 2 Unofficial Documentation](http://sublime-text-unofficial-documentation.readthedocs.org/en/sublime-text-2/)
* [Angular Phonecat Tutorial](http://docs.angularjs.org/tutorial)
* [The Art of Node](https://github.com/maxogden/art-of-node) A short introduction to Node.js
* [The Little MongoDB Book](http://openmymind.net/mongodb.pdf)