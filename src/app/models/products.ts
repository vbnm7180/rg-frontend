export class Product {
	public id: string;
	public name: string;
	public price: number;
	public image_path: string;
	public product_category_id: string;
	public description: string;
	public attributes: any;

	constructor(data) {
		this.id = data.id || '';
		this.name = data.name || '';
		this.price = data.price || 0;
		this.image_path = data.image_path || '';
		this.product_category_id = data.product_category_id || '';
		this.description = data.description || '';
		this.attributes = data.attributes || [];
	}
}