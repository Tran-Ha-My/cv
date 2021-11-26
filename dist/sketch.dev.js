"use strict";

var img;

function preload() {
  img = loadImage('5_.jpg');
}

function setup() {
  createCanvas(1280, 720); // i noticed that if i let width = 640 the image will double, and i increase the height manually to view the full image
}

function draw() {
  background(220);
  image(img, 0, 0);
} //the canvas width and height is off so img ended up multiplying itself and the background and broke