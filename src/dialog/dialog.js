import { DecoratorView } from "presentation-decorator";

/**
 * A automatic dialog view - creates a dialog with simple configurations to customize</br/>
 * supports title, body, style, and buttons as options<br/>
 * buttons are defined as an object with key as name, value as function to call
 * @param {Object} options Options to pass to the class
 * @extends DecoratorView
 */
class DialogView extends DecoratorView {
  constructor(options) {
    super(options);
    if (!this.name) {
      this.name = "dialog";
    }
    if (options && options.title) {
      this._title = options.title;
    } else {
      this._title = "";
    }
    if (options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }
    if (options && options.style) {
      this._style = options.style;
    } else {
      this._style = "form";
    }
    if (options && options.buttons) {
      this._buttons = options.buttons;
    } else {
      this._buttons = {};
    }
    this._isOpen = false;
  };

  /**
   * isOpen property (readonly)
   * @returns {boolean} true on open
   * @property isOpen
   */
   get isOpen() {
     return this._isOpen;
   };

  /**
   * title property - the title of the dialog
   * @property title
   */
  set title(title) {
    this._title = title;
  };

  get title() {
    return this._title;
  };

  /**
   * style property - the style (form, alert, bigForm, or whatever class you want)
   * @property style
   */
  set style(style) {
    this._style = style;
  };

  get style() {
    return this._style;
  };

  /**
   * buttons object property - the buttons to match to functions
   * @property {Object} buttons
   */
  set buttons(buttons) {
    this._buttons = buttons;
  };

  get buttons() {
    return this._buttons;
  };

  /**
   * Body - sets the body content of the dialog
   * @property {String} body A string value of th body (supports HTML)
   */
  set body(body) {
    this._body = body;
  };

  get body() {
    return this._body;
  };

  /**
   * render - render the dialog
   */
  render() {
    if (this.el) {
      this.injectTemplate(this._template(), this.el);
      this.trigger("open");
      this._isOpen = true;
    }
    return this;
  };

  /**
   * cancel - standard built-in cancel callback.  Calls close method by default
   * @param {Event} event Event passed in
   */
  cancel(event) {
    return this.close(event);
  };

  /**
   * open - standard built-in open callback.  Calls render method by default
   * @param {Event} event Event passed in
   */
  open(event) {
    return this.render(event);
  };

  /**
   * close - standard built-in close callback.  Closes the dialog, triggers the 'close' event
   * @param {Event} event Event passed in
   */
  close(event) {
    this.trigger("close");
    this.removeTemplate(this.el, true);
    this._isOpen = false;
    return this;
  };

  /* private methods */

  /**
   * template - sets content of the dialog, handled internally
   * @method _template
   * @private
   */
  _template() {
    return /*html*/`<div class="blur"><dialog class="${this._style}"><h1>${this._title}</h1>${this._body}${this._getButtonGroup()}</dialog></div>`;
  };

  _getButtonGroup() {
    let html = /*html*/`<div class="buttonGroup">`, i = 0, keys = Object.keys(this._buttons), l = (keys) ? keys.length: 0;
    for (i = 0; i < l; i++) {
      html += /*html*/`<button data-${this.name}="${this._buttons[keys[i]]}" data-click="${this._buttons[keys[i]]}">${keys[i]}</button>`;
    }
    return html + "</div>";
  };
};

export default DialogView;
