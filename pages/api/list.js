export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(
    JSON.stringify([
      {
        id: "1",
        slug: "201502",
        name: "Febrero 2015",
      },
      {
        id: "2",
        slug: "201511",
        name: "Noviembre 2015",
      },
    ])
  )
}
