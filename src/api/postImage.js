export const postImage = Object.freeze({
	get: async (imageId) => {
		const response = await fetch('https://twodayweb.ru/wp-json/wp/v2/media/' + imageId, {
			method: 'GET'
		});
		return await response.json();
	}
});