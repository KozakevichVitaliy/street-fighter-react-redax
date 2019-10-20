
This is my simple realization of the legendary game "Street Fighter".

On the main page you can see fighters and the disabled "Start Fight" button.
When you click on any  the "Fighter info" button you will see the modal window with fighter characteristics and the  "Choose [fighter] " button.
If you click "Choose [fighter]" the fighter will be choosed, but if you click on overlay you will just close the modal.
When you choose 2 fighters the "Start Fight" button will be enabled. 
If you want to choose 3-d fighter you will see alert with warning message
Click "Start Fight" and enjoy with fight between two choosed fighters just clicking on the "Punch" buttons one by one.
When any fighter health equalize 0 you will see the modal with winner

If want to start the game on your local machine, you should download this repo, then open command line in the project folder,  and just use two commands:
First
### `npm install` 
  It will install all npm packages, then use
### `npm start`
  And you will enjoy "Street Fighter", if you open http://localhost:3000 


P.S. the game have  bug:
 1. When you click on the "Punch" button, you will see animation not only the fighter sprite, but the whole block with characteristics and button will be animated to the left