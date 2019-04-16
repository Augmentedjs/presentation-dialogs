
describe('Given Augmented Presentation Dialog View', () => {
	it('is defined', () => {
		expect(Components.DialogView).to.not.be.undefined;
	});

	describe('Given an instance of DialogView', () => {
		let view;

		beforeEach(() => {
			view = new Components.DialogView({"name": "sample", "el": "#sandbox"});
		});

		afterEach(() => {
			view.remove();
			view = null;
		});

		it('instance is an instance of DialogView', () => {
			expect(view instanceof Components.DialogView).to.be.true;
		});

		it('dialog can open', () => {
			view.open();
			const el = document.querySelector(view.el);
			expect(el.firstChild).to.not.be.null;
		});

		it('dialog can close', () => {
			view.close();
			const el = document.querySelector(view.el);
			expect(el.firstChild).to.be.null;
		});
	});

	describe('Given an instance of ConfirmationDialogView', () => {
		let view;

		beforeEach(() => {
			view = new Components.ConfirmationDialogView();
		});

		afterEach(() => {
			view.remove();
			view = null;
		});

		it('instance is an instance of ConfirmationDialogView', () => {
			expect(view instanceof Components.ConfirmationDialogView).to.be.true;
		});

		it('has buttons', () => {
			expect(view.buttons).to.deep.equal({ "yes": "yes", "no": "no" });
		});
	});

	describe('Given an instance of AlertDialogView', () => {
		let view;

		beforeEach(() => {
			view = new Components.AlertDialogView();
		});

		afterEach(() => {
			view.remove();
			view = null;
		});

		it('instance is an instance of AlertDialogView', () => {
			expect(view instanceof Components.AlertDialogView).to.be.true;
		});

		it('has alert style', () => {
			expect(view.style).to.equal("alert");
		});
	});
});
