export const apiPosts = Object.freeze({
	get: async (page) => {
		const response = await fetch('https://twodayweb.ru/wp-json/wp/v2/posts?page=' + page, {
			method: 'GET'
		});
		return await response.json();
	}
});