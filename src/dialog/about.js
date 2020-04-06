import DialogView from "./dialog.js";

/**
* A automatic about dialog view - creates a dialog with cancel button and a message.<br/>
* Pass the following options for pre-formated dialog:
* <ul>
* <li>description</l1>
* <li>author</l1>
* <li>version</l1>
* <li>website</l1>
* </ul>
* <em>* for preformated, do not pass 'body' option</em>
* @extends DialogView
*/
class AboutDialogView extends DialogView {
  constructor(options) {
    if (!options) {
      options = {}
    };
    if (!options.buttons) {
      options.buttons = {};
    }
    options.buttons.cancel = "cancel";
    if (!options.style) {
      options.style = "bigForm about";
    } else {
      options.style = `${options.style} about`;
    }

    if (!options.name) {
      options.name = "about";
    }

    if (!options.body && (options.description && options.author && options.version && options.website)) {
      options.body = /*html*/`
        <h2>${options.description}</h2>
        <h3>Version ${options.version}</h3>
        <p class="author">Written by ${options.author}</p>
        <p class="website">${options.website}</p>
        <figure class="logo"></figure>
      `;
    }

    if (!options.title) {
      options.title = "About";
    }

    super(options);
  };
};

export default AboutDialogView;
