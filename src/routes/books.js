export const book = Object.freeze({
	root : {
		path : '/',
		pathurl : '/',
		title : 'Головна',
		icon : 'home',
		onMenu : true
	},
	news : {
		path : '/news',
		pathurl : '/news',
		title : 'Новини',
		icon : 'book',
		onMenu : true
	},
	post : {
		path : '/news/:slug',
		pathurl : '/news/',
		icon : '',
		title : 'Новина',
		onMenu : false
	},
	profile : {
		path : '/profile',
		title : 'Профиль',
		icon : 'book',
		onMenu : true
	},
});