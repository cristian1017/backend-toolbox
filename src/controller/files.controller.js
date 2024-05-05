import { fetchFile, fetchFiles } from '../libs/fetch.js'
import { formatResponse } from '../libs/format.js'

export default class FilesController {
  /**
  * Asynchronously fetches and formats files based on the provided file name or all files if no specific file is requested.
  *
  * @param {Object} req - The request object.
  * @param {Object} res - The response object.
  * @return {Promise} The formatted list of files or an error object.
  */
  async getFilesFormat (req, res) {
    try {
      const { fileName } = req.query
      const files = fileName ? [fileName] : await fetchFiles()

      const list = await Promise.all(files.map(async (file) => ({
        file,
        lines: formatResponse(await fetchFile(file))
      })))

      return res.json(list)
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  /**
 * Retrieves a list of files asynchronously and returns it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves to the JSON response containing the list of files, or rejects with an error.
 */
  async getListFiles (req, res) {
    try {
      const files = await fetchFiles()
      return res.json(files)
    } catch (error) {
      return error
    }
  }
}
