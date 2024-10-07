const baseURL = 'https://jsonplaceholder.typicode.com'

const urls = {
  users: {
    base: `${baseURL}/users`,
    byId: (id: number):string => `${baseURL}/users/${id}`
  },
  posts: {
    base: `${baseURL}/posts`,
    byId: (id: number):string => `${baseURL}/posts/${id}`
  },
  comments: {
    base: `${baseURL}/comments`,
    byId: (id: number):string => `${baseURL}/comments/${id}`
  }
}

export {
  urls
}
