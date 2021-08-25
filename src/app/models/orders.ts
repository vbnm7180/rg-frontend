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

	constructor (data){
		this.id = data.id || '';
		this.name = data.name || '';
		this.price = data.price || 0;
		//add later
	}
}