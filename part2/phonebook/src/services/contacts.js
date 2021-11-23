import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}


const create = newContact => {
  const request = axios.post(baseUrl, newContact)
  return request.then(res => res.data)
}


const update = (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj)
  return request.then(res => res.data)
}


const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(res => res.data)
}


const contactService = {
  getAll,
  create,
  update,
  remove
}

export default contactService
