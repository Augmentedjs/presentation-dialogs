import DialogView from "../dialog/dialog.js";
const NOTIFY_STYLE = "notify";
const DEFAULT_TIMEOUT = 2000;
const NOTIFY_ANIMATION_CLASS = "slide";

/**
 * Notification
 * @param options Options to pass
 * @example options passed are: timeOut, name, style
 * @extends DialogView
 */
class Notification extends DialogView {
  constructor(options) {
    if (!options) {
      options = {};
    };

    if (!options.style) {
      options.style = NOTIFY_STYLE;
    } else {
      options.style = `${options.style} ${NOTIFY_STYLE}`;
    }

    if (!options.name) {
      options.name = NOTIFY_STYLE;
    }

    options.tagName = "div";

    options.buttons = {};

    super(options);

    if (options.timeOut) {
      this.timeOut = options.timeOut;
    } else {
      this.timeOut = DEFAULT_TIMEOUT;
    }
  };

  /**
   * template - sets content of the dialog, handled internally
   * @private
   */
  _template() {
    return `${(this._title) ? "<h1>" + this._title + "</h1>" : ""}${this._body}`;
  };

  render() {
    const that = this;
    const to = this.timeOut;

    setTimeout(function() {
      const el = that.el;
      el.classList.add(NOTIFY_ANIMATION_CLASS);

      setTimeout(function() {
        that.remove();
        el.remove();
      }, to);
    }, (to*2));
    return super.render();
  };
};

export default Notification;
