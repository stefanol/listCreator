List Creator
=========

Instructions on how to run:

1. Download and unzip this file. Export to desired location.
2. Open Terminal, the command line will be used to navigate and run this file
3. Type "cd" in command line to clear your path
4. Navigate to your file through terminal (ex. If the folder is exported to Desktop, you would type "cd chatList" into the command line.
5. Install node by using "npm install". If that doesn't work, use "sudo npm install".
6. Run your server locally by passing node server.js into the terminal

If you would like to work off of this file, and change code in the Jade/HTML and LESS/CSS files:

1. Open a new terminal tab
2. Run gulp watch

Now all changes made in the Jade/LESS files will be converted into the HTML/CSS files, using the corresponding coding language! Cool huh?


What does everything do?
=========

node server.js - Running this will set up your server, which when running, is accesible by navigating to localhost:3000 in your browser

npm install - Running this will set up node, which is the main back end in this project

gulp watch - Running this will watch for any changes made in the Jade & LESS files, which will then turn the markup into HTML & CSS respectively
