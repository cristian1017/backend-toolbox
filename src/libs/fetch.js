import axios from 'axios'

const API_URL_FILES = 'https://echo-serv.tbxnet.com/v1/secret/files'
const API_URL_FILE = 'https://echo-serv.tbxnet.com/v1/secret/file'
const API_KEY = 'aSuperSecretKey'

/**
 * Asynchronously fetches files using the provided API endpoint and returns the files data.
 *
 * @return {Array} The array of files data if successful, otherwise an empty array.
 */
export const fetchFiles = async () => {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }
    const { data } = await axios.get(API_URL_FILES, options)
    return data?.files
  } catch (error) {
    return []
  }
}

/**
 * Asynchronously fetches a file using the provided API endpoint and returns the file data.
 *
 * @param {string} file - The name of the file to fetch.
 * @return {Promise<Object>} A promise that resolves to the file data if successful, otherwise an empty string.
 */
export const fetchFile = async (file) => {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }
    const { data } = await axios.get(`${API_URL_FILE}/${file}`, options)
    return data
  } catch (error) {
    return ''
  }
}
