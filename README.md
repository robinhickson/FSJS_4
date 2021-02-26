# FSJS_4
A simple Javascript word game, and Techtree FSJS Project 4


HTML and CSS modified from the provided files as follows:
1. Key identifier added to QWERTY buttons to facilitate keyboard listener e.g. ```<button class="key QKey">q</button>```
2. Font changed to something less boring i.e. ```<link href="https://fonts.googleapis.com/css2?family=Reggae+One&display=swap" rel="stylesheet">```
3. Modification of css variable colours e.g. ``` --color-win: #3db44b;```
4. Addition of animated 'miss' indicator i.e. ```livesHearts[this.missed - 1].firstElementChild.setAttribute("src", "images/lostHeart.png");```

```@keyframes beating{
  from {transform: scale(1.5);}
  to {transform: scale(0.8);}
}
.lastHeart{
animation-name: beating;
animation-duration: 1s;
animation-iteration-count: infinite;
}
```


