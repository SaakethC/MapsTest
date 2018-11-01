(function () {
'use strict';

/**
 * Panel which holds controls
 * @class
 * @extends external:H.ui.Control
 */
class Panel extends H.ui.Control {
    /**
     * @param {string} header - panel title
     */
    constructor(header) {
        super();
        this.header_ = header;
        this.setAlignment('top-left');
    }
    renderInternal(el, doc) {
        this.addClass('dl-panel');
        el.innerHTML = `
            <div class="dl-panel__header">${this.header_}</div>
        `;
        super.renderInternal(el, doc);
    }
    addChild(control) {
        //subscribe on events of child controls
        control.setParentEventTarget(this);
        return super.addChild(control);
    }
}

/**
 * Label for Control
 * @class
 * @extends external:H.ui.Control
 */
class Label extends H.ui.Control {
    renderInternal() {
        this.addClass('dl-label');
    }
    /**
     * @param {string} html - label html
     */
    setHTML(html) {
        this.getElement().innerHTML = html;
        return this;
    }
}

Object.assign(window, {Panel, Label});

}());