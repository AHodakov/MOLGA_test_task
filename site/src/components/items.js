export class StaticListItems {
    constructor(item) {
        this.item = item;
    }
    render() {
        return `
        <div class='product_card'>
            <img src="${this.item.link}" alt="" width="220px" height="235px">
            <p class="name">${this.item.name}</p>
            <p class="price">${this.item.price}$</p> <p>скидка: ${this.item.discount}%</p>
            <p>Категория: ${this.item.Category}</p>
            <p>Тип: ${this.item.Type}</p>
        </div>`
    }
}

export class DynamicListItems {
    constructor(item) {
        this.item = item;
    }
    render() {
        return `
        <pre>
            ${JSON.stringify(this.item, null, 1)}
        </pre>`
    }
}
