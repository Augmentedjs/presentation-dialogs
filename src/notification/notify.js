import DialogView from "../dialog/dialog.js";

/**
 * Notification
 * @param options Options to pass
 * @example options passed are: timeOut, name, style
 */
class Notification extends DialogView {
  constructor(options) {
    if (!options) {
      options = {};
    };

    if (!options.style) {
      options.style = "notify";
    } else {
      options.style = `${options.style} notify`;
    }

    if (!options.name) {
      options.name = "notify";
    }

    options.tagName = "div";

    options.buttons = {};

    super(options);

    if (options.timeOut) {
      this.timeOut = options.timeOut;
    } else {
      this.timeOut = 2000;
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
      el.classList.add("slide");

      setTimeout(function() {
        that.remove();
        el.remove();
      }, to);
    }, (to*2));
    return super.render();
  };
};

export default Notification;
