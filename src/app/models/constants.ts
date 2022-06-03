export const NAV_MENU = [{
	label: 'Приставки',
	items: [{
		label: 'Sega',
		routerLink: ['/category/1']
	},
	{
		label: 'Nintendo',
		routerLink: ['/category/3']
	}
	]
},
{
	label: 'Игры',
	items: [{
		label: 'Sega',
		routerLink: ['/category/2']
	},
	{
		label: 'Nintendo',
		routerLink: ['/category/4']
	}
	]
},
{
	label: 'Доставка и оплата',
	routerLink: ['/delivery']
},
{
	label: 'О нас',
	routerLink: ['/about']
}];

export const SLIDER_CONFIG = {
	arrows: true,
	prevArrow: '.left-slide-btn',
	nextArrow: '.right-slide-btn',
	dots: true,
	appendDots: '.slide-dots',
	dotsClass: 'dot-item'
};
