export class Popup {
	public isPopupShown: boolean;
  public popupHeader: string;
  public popupContent: string;
  public redirectUrl: string;

	constructor(data?: any) {
		this.isPopupShown = data.isPopupShown || false;
		this.popupHeader = data.popupHeader || '';
		this.popupContent = data.popupContent || '';
		this.redirectUrl = data.redirectUrl || '';
	}
}
