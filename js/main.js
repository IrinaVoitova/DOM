'use strict';
const items = document.querySelector('.items');
console.log(items);

const itemTitles = document.querySelectorAll('.item__title');
console.log(itemTitles);

const item = document.querySelectorAll('.item');
console.log(item);

const propsItems = document.querySelectorAll('.props__item');
console.log(propsItems);

const propsList = document.querySelectorAll('.props__list');

const ads = document.querySelector('.ads');

// ES6
const itemSix = document.querySelector('.item_six');
const propsItemsEs = itemSix.querySelectorAll('.props__item');

// type
const itemFour = document.querySelector('.item_four');
const propsItemsType = itemFour.querySelectorAll('.props__item');
console.log(propsItemsType);

// asinchron
const itemFive = document.querySelector('.item_five');
const propsItemsAsinchron = itemFive.querySelectorAll('.props__item');

// obl vidimosti
const itemTwo = document.querySelector('.item_two');
const propsItemsVidimost = itemTwo.querySelectorAll('.props__item');

items.prepend(item[1], item[2], item[3]);

propsItemsVidimost[8].append(propsItemsEs[8]);
propsItemsVidimost[8].append(propsItemsEs[9]);

propsList[4].append(propsList[3]);
itemTitles[2].after(propsItemsAsinchron[6]);
itemTitles[2].after(propsItemsAsinchron[5]);
itemTitles[2].after(propsItemsAsinchron[4]);
itemTitles[2].after(propsItemsAsinchron[3]);
itemTitles[2].after(propsItemsAsinchron[2]);
itemTitles[2].after(propsItemsAsinchron[1]);
itemTitles[2].after(propsItemsAsinchron[0]);

propsItemsType[1].append(propsItemsVidimost[3]);

propsList[5].prepend(itemTitles[1]);
propsList[4].prepend(itemTitles[4]);
propsList[2].prepend(itemTitles[3]);

itemTitles[2].textContent = 'This и прототипы объектов';

ads.remove();

