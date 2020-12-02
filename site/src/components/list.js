import {StaticListItems, DynamicListItems } from './items.js';

let classes = {
    'StaticList': StaticListItems,
    'SampleList': StaticListItems,
    'DynamicList': DynamicListItems
}

export default class List {
  constructor(url, container) {
    this.url = url
    this.items = [];
    this.container = document.querySelector(container);
  }

  _renderItems() {
    let htmlStr = '';
    this.items.forEach(item => {
        htmlStr += new classes[this.constructor.name](item).render();
    });
    this.container.innerHTML = htmlStr;
  }
}

