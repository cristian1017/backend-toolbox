/**
 * Formats the response data by splitting it into lines, removing the first line,
 * and extracting the text, number, and hex values from each line. The extracted
 * values are then added to an array and returned.
 *
 * @param {string} data - The response data to be formatted.
 * @return {Array} An array of objects containing the extracted text, number, and hex values.
 */
export const formatResponse = (data) => {
  const lines = data.split('\n').slice(1)
  return lines.reduce((acc, line) => {
    const [, text, number, hex] = line.split(',')
    if (text && number && hex) {
      acc.push({ text, number, hex })
    }
    return acc
  }, [])
}
