export class Product {
	public id: string;
	public name: string;
	public price: number;
	public imagePath: string;
	public categoryID: string;
	public description: string;
	public attributes: any;

	constructor (data){
		this.id = data.id || '';
		this.name = data.name || '';
		this.price = data.price || 0;
		this.imagePath = data.price || '';
		this.categoryID = data.categoryID || '';
		this.description = data.description || '';
		this.attributes = data.attributes || [];
	}
}