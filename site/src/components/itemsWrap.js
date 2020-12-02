export class SampleListWrap {
    constructor() {}
    render() {
        return `
        <div class="sample_btn_wrap">
           <div class="sample_btn sample_woman">ЖЕНСКАЯ ОДЕЖДА</div>
           <div class="sample_btn sample_clear">ОЧИСТИТЬ</div>
           <div class="sample_btn sample_man">МУЖСКАЯ ОДЕЖДА</div>
        </div>
        <div class="block2_items"></div>
        `
    }
}

export class DynamicListWrap {
    constructor() {}
    render() {
        return `
        <div class="dynamic_btn_wrap">
           <input type="text" class="dynamic_input dynamic" placeholder="Введите запрос">
           <div class="dynamic_btn dynamic_push">ОТПРАВИТЬ</div>
           <div class="dynamic_btn dynamic_clear">ОЧИСТИТЬ</div>
        </div>
        <div class="block3_items"></div>
        `
    }
}