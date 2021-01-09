export default function handler(req, res) {
  console.log("REQUESTED", req.query)
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(
    JSON.stringify([
      {
        id: "1",
        question: "Como me llamo?",
        answers: [
          {
            id: "1",
            name: "Julia",
            correct: false,
          },
          {
            id: "2",
            name: "Jenny",
            correct: true,
          },
          {
            id: "3",
            name: "Jessica",
            correct: false,
          },
          {
            id: "4",
            name: "Judith",
            correct: false,
          },
        ],
      },
      {
        id: "2",
        question: "Hola?",
        answers: [
          {
            id: "1",
            name: "Mireia",
            correct: false,
          },
          {
            id: "2",
            name: "Jenny",
            correct: true,
          },
          {
            id: "3",
            name: "Jessica",
            correct: false,
          },
          {
            id: "4",
            name: "Judith",
            correct: false,
          },
        ],
      },
    ])
  )
}
