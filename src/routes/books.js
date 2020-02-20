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
		path : '/news/:id',
		pathurl : '/news/',
		icon : '',
		title : 'Новина',
		onMenu : false
	},
	profile : {
		path : '/profile',
		title : 'Ви завершили тест',
		icon : 'book',
		onMenu : true
	},
});