export const postCategory = Object.freeze({
    get: async (postId) => {
        const response = await fetch('https://twodayweb.ru/wp-json/wp/v2/categories?post=' + postId, {
            method: 'GET'
        })
        return await response.json()
    }
})