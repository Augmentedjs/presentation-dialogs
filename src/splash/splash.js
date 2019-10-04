import { View } from "presentation-view";
const SPLASH_STYLE = "splash";
const DEFAULT_TIMEOUT = 2000;

/**
 * Splash Screen View
 * @param options Options to pass
 * @extends View
 * @example options passed are: title, subTitle, subSubTitle, name, style, and figureStyle
 */
class Splash extends View {
  constructor(options) {
    if (!options) {
      options = {};
    }
    if (!options.name) {
      options.name = SPLASH_STYLE;
    }

    if (!options.style) {
      options.style = SPLASH_STYLE;
    } else {
      options.style = `${options.style} ${SPLASH_STYLE}`;
    }

    if (!options.title) {
      options.title = "Untitled";
    }

    if (!options.figureStyle) {
      options.figureStyle = "logo_large";
    }

    if (!options.template) {
      options.template = `
        ${ (options.title) ? "<h1>" + options.title + "</h1>" : "" }
        ${ (options.subTitle) ? "<h2>" + options.subTitle + "</h2>" : "" }
        ${ (options.subSubTitle) ? "<h3>" + options.subSubTitle + "</h3>" : "" }
        <figure class="${options.figureStyle}"></figure>
      `;
    }

    super(options);

    if (options.timeOut) {
      this.timeOut = options.timeOut;
    } else {
      this.timeOut = DEFAULT_TIMEOUT;
    }
  };

  render() {
    const that = this;
    const to = this.timeOut;

    setTimeout(function() {
      const el = that.el;
      el.classList.add("fade");

      setTimeout(function() {
        that.remove();
        el.remove();
      }, to);
    }, (to*2));
    return super.render();
  };
};

export default Splash;
