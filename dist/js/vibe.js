const vibes = [
"and you are blessed",
"and you will be fruitful",
"and you are awesome"
];

let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);


