const baseURL = 'https://jsonplaceholder.typicode.com/'

const urls = {
  users: {
    base: `${baseURL}/users`,
    byId: (id: number):string => `${baseURL}/users/${id}`
  }
}

export {
  urls
}
