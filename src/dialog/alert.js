import DialogView from "./dialog.js";

/**
 * A automatic alert dialog view - creates a dialog with cancel button and a message
 * @memberof Presentation.Component
 * @extends Presentation.Component.DialogView
 */
class AlertDialogView extends DialogView {
  constructor(options) {
    if (!options) {
      options = {}
    };
    if (!options.buttons) {
      options.buttons = {};
    }
    options.buttons.cancel = "cancel";
    options.style = "alert";
    super(options);
  };
};

export default AlertDialogView;
