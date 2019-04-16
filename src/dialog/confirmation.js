import DialogView from "./dialog.js";

/**
 * A automatic comfirmation dialog view - creates a dialog with yes no buttons
 * @memberof Presentation.Component
 * @extends Presentation.Component.DialogView
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
    options.style = "alert";
    super(options);
  };
};

export default ConfirmationDialogView;
