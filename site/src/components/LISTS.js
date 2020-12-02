import axios from 'axios';
import List from './list.js';
import { SampleListWrap, DynamicListWrap } from './itemsWrap.js';

let classes = {
  SampleList: SampleListWrap,
  DynamicList: DynamicListWrap,
};

export class StaticList extends List {
  constructor(url, container) {
    super(url, container);
    this._init();
  }
  _init() {
    this._getData();
  }
  _getData() {
    axios
      .get(this.url)
      .then((res) => {
        this.items = res.data;
        this._renderItems();
      })
      .catch((err) => {
        console.log('Ошибка запроса СЕРВЕРА!');
        console.log(err);
      });
  }
}

export class SampleList extends List {
  constructor(url, container) {
    super(url, container);
    this.containerWrap = document.querySelector(container);
    this.containerItems = `${container}_items`;
    this._init();
  }
  _init() {
    this._renderWrap();
    this._handleAction();
    this.container = document.querySelector(this.containerItems);
  }
  _renderWrap() {
    let htmlStr = '';
    htmlStr = new classes[this.constructor.name]().render();
    this.containerWrap.innerHTML = htmlStr;
  }

  clear() {
    let htmlStr = '';
    this.container.innerHTML = htmlStr;
  }

  _handleAction() {
    let man = document.querySelector('.sample_man');
    man.addEventListener('click', (event) => {
      this.getData(`${this.url}manlist`);
    });

    let woman = document.querySelector('.sample_woman');
    woman.addEventListener('click', (event) => {
      this.getData(`${this.url}womanlist`);
    });

    let clear = document.querySelector('.sample_clear');
    clear.addEventListener('click', (event) => {
      this.clear();
    });
  }

  getData(url) {
    axios
      .get(url)
      .then((res) => {
        this.items = res.data;
        this._renderItems();
      })
      .catch((err) => {
        console.log('Ошибка запроса СЕРВЕРА!');
        console.log(err);
      });
  }
}

export class DynamicList extends List {
  constructor(url, container) {
    super(url, container);
    this.containerWrap = document.querySelector(container);
    this.containerItems = `${container}_items`;
    this._init();
  }
  _init() {
    this._renderWrap();
    this._handleAction();
    this.container = document.querySelector(this.containerItems);
  }
  _renderWrap() {
    let htmlStr = '';
    htmlStr = new classes[this.constructor.name]().render();
    this.containerWrap.innerHTML = htmlStr;
  }

  _handleAction() {
    let push = document.querySelector('.dynamic_push');

    push.addEventListener('click', (event) => {
      this.getData(this.url);
    });

    let clear = document.querySelector('.dynamic_clear');
    clear.addEventListener('click', (event) => {
      this.clear();
    });
  }
  clear() {
    let htmlStr = '';
    this.container.innerHTML = htmlStr;
    document.querySelector('.dynamic_input').value = '';
  }

  getData() {
    let inputValue = document.querySelector('.dynamic_input').value;
    axios
      .post(this.url, { req: inputValue })
      .then((res) => {
        this.items = res.data;
        this._renderItems();
      })
      .catch((err) => {
        console.log('Ошибка запроса СЕРВЕРА!');
        console.log(err);
        console.log(this.items);
      });
  }
}
