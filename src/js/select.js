const getTemplate = (data = [], placeholder) => {
    const text = placeholder ?? "Default placeholder";

    const items = data.map((item) => {
        return `
            <li data-type="item" data-id="${item.id}" class="select__item">${item.value}</li>
    `;
    });

    return `
        <div data-type="backdrop" class="select__backdrop"></div>
        <div data-type="input" class="select__input">
            <p data-type="value" >${text}</p>
            <span class="_icon-arrow"></span>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
            ${items.join("")}
            </ul>
        </div>
        <div class="select__info info">
            <div class="info__body">
                <div class="info__label">
                    <div class="info__city">City:</div>
                    <div class="info__phone">Phone:</div>
                    <div class="info__adress">Office adress:</div>
                </div>
                <div class="info__content">
                    <div>fdf</div>
                    <a href="tel:+15853930001">+1 585 393 0001</a>
                    <div>151 Charlotte Street</div>
                </div>
            </div>
            <a href="" class="info__button">Call us</a>
        </div>
    `;
};

export class Select {
    constructor(selector, options) {
        this.el = document.querySelector(selector);
        this.options = options;
        this.selectedId = null;

        this.#render();
        this.#setup();
    }

    #render() {
        const { placeholder, data } = this.options;
        this.el.classList.add("contacts__select");
        this.el.innerHTML = getTemplate(data, placeholder);
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this);
        this.el.addEventListener("click", this.clickHandler);
        this.$value = this.el.querySelector('[data-type="value"]');
    }

    clickHandler(event) {
        const { type } = event.target.dataset;

        if (type === "input") {
            this.toggle();
        } else if (type === "item") {
            const id = event.target.dataset.id;
            this.select(id);
        } else if (type === "backdrop") {
            this.close();
        } else if (type === "value") {
            this.toggle();
        }
    }

    get isOpen() {
        return this.el.classList.contains("open");
    }

    get current() {
        return this.options.data.find((item) => item.id === this.selectedId);
    }

    select(id) {
        this.selectedId = id;
        this.$value.textContent = this.current.value;

        this.el.querySelectorAll("[data-type='item']").forEach((el) => {
            el.classList.remove("active__item");
        });
        this.el.querySelector(`[data-id="${id}"]`).classList.add("active__item");

        this.options.onSelect ? this.options.onSelect(this.current) : null;

        this.close();
        this.selected();
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.el.classList.add("open");
    }

    close() {
        this.el.classList.remove("open");
    }

    selected() {
        this.el.classList.add("selected");
    }

    destroy() {
        this.el.removeEventListener("click", this.clickHandler);
    }
}

// ===============дополнительный контент======================================================================
