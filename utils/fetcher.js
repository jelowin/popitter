export default async function fetcher(url) {
  const API_URL = `${process.env.API}/${url}`
  const res = await fetch(API_URL)

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.")
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  const data = await res.json()

  console.log("-----------", data)
  return data
}
