import AlertDialogView  from "./alert.js";

/**
 * A automatic message dialog view - creates a dialog ok button
 * @extends AlertDialogView
 */
class MessageDialogView extends AlertDialogView {
  constructor(options) {
    if (!options) {
      options = {}
    };
    if (!options.buttons) {
      options.buttons = {};
    }
    options.buttons.cancel = "ok";
    options.style = "alert";
    super(options);
  };
};

export default MessageDialogView;
