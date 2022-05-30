import { Product } from "./products";

export class Order {
	public id: string;
	public name: string;
	public email: string;
	public city: string;
	public address: string;
	public postcode: string;
	public phone: string;
	public user_id: string;
	public date: string;
	public price: number;
	public products: Product[];
	public status: string;

	constructor(data) {
		this.id = data.id || '';
		this.name = data.name || '';
		this.email = data.email || '';
		this.city = data.city || '';
		this.address = data.address || '';
		this.postcode = data.postcode || '';
		this.phone = data.phone || '';
		this.user_id = data.user_id || '';
		this.date = data.date || '';
		this.price = data.price || 0;
		this.products = data.products || [];
		this.status = data.status || '';
	}
}