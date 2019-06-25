import AlertDialogView  from "./alert.js";

/**
 * A automatic error dialog view - creates a dialog ok button
 * @extends AlertDialogView
 */
class ErrorDialogView extends AlertDialogView {
  constructor(options) {
    if (!options) {
      options = {}
    };
    if (!options.buttons) {
      options.buttons = {};
    }
    options.buttons.cancel = "ok";
    options.style = "error alert";
    if (!options.title) {
      options.title = "An Error Occurred! 😞"
    }
    super(options);
  };
};

export default ErrorDialogView;
