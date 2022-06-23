export class SortState {
	public sortField: string;
	public sortOrder: string;

	constructor(data?: any) {
		this.sortField = data?.sortField || 'name';
		this.sortOrder = data?.sortOrder || 1;
	}
}
