import DialogView from "./dialog.js";

/**
 * A automatic comfirmation dialog view - creates a dialog with yes no buttons
 * @extends DialogView
 */
class ConfirmationDialogView extends DialogView {
  constructor(options) {
    if (!options) {
      options = {}
    };
    if (!options.buttons) {
      options.buttons = {};
    }
    options.buttons.yes = "yes";
    options.buttons.no = "no";
    if (!options.style) {
      options.style = "";
    }
    
    options.style += " alert";
    super(options);
  };
};

export default ConfirmationDialogView;
