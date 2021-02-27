# FSJS_4
A simple Javascript word game, and Techtree FSJS Project 4

Note: I disabled the buttons using a conditional, rather than switching them off with .disable: I felt that this was a more elegant solution than the brute force method, since it allowed me to approach both the keyboard input and the onscreen input with a similar methodology.

HTML and CSS modified from the provided files as follows:
1. Key identifier added to QWERTY buttons to facilitate keyboard listener e.g. ```<button class="key QKey">q</button>```
2. Font changed to something less boring i.e. ```<link href="https://fonts.googleapis.com/css2?family=Reggae+One&display=swap" rel="stylesheet">```
3. Modification of css variable colours e.g. ``` --color-win: #3db44b;```
4. Addition of animated 'miss' indicator i.e. JS: ```livesHearts[this.missed - 1].firstElementChild.setAttribute("src", "images/lostHeart.png");```
CSS:
```
@keyframes beating{
  from {transform: scale(1.5);}
  to {transform: scale(0.8);}
}
.lastHeart{
animation-name: beating;
animation-duration: 1s;
animation-iteration-count: infinite;
}
```


