import { DecoratorView } from "presentation-decorator";
import Dom from "presentation-dom";

/**
* A automatic dialog view - creates a dialog with simple configurations to customize
* @memberof Presentation.Component
* @extends Presentation.DecoratorView
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
  * body property - the body of the dialog, handled by setBody method
  * @property body
  */

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
  * @property buttons
  */
  set buttons(buttons) {
    this._buttons = buttons;
  };

  get buttons() {
    return this._buttons;
  };

  /**
  * template - sets content of the dialog, handled internally
  * @method _template
  * @private
  */
  _template() {
    return `<div class="blur"><dialog class="${this._style}"><h1>${this._title}</h1>${this._body}${this._getButtonGroup()}</dialog></div>`;
  };
  /**
  * setBody - sets the body content of the dialog
  * @param {String} body A string value of th body (supports HTML)
  */
  set body(body) {
    this._body = body;
  };

  get body() {
    return this._body;
  };

  _getButtonGroup() {
    let html = `<div class="buttonGroup">`, i = 0, keys = Object.keys(this._buttons), l = (keys) ? keys.length: 0;
    for (i = 0; i < l; i++) {
      html = html + `<button data-${this.name}="${this._buttons[keys[i]]}" data-click="${this._buttons[keys[i]]}">${keys[i]}</button>`;
    }
    return html + "</div>";
  };

  /**
  * render - render the dialog
  */
  render() {
    if (this.el) {
      Dom.setValue(this.el, this._template());
      this.delegateEvents();
      this.trigger("open");
    }
    return this;
  };
  // built-in callbacks

  /**
  * cancel - standard built-in cancel callback.  Calls close method by default
  * @param {Event} event Event passed in
  */
  cancel(event) {
    this.close(event);
  };
  /**
  * open - standard built-in open callback.  Calls render method by default
  * @param {Event} event Event passed in
  */
  open(event) {
    this.render();
  };
  /**
  * close - standard built-in close callback.  Closes the dialog, triggers the 'close' event
  * @param {Event} event Event passed in
  */
  close(event) {
    this.trigger("close");
    Dom.empty(this.el, true);
  };
};

export default DialogView;
