export default function handler(req, res) {
  console.log("REQUESTED", req.query)
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(
    JSON.stringify([
      {
        id: "1",
        question: "El artículo 1 de la Ley Hipotecaria señala que:",
        answers: [
          {
            id: "1",
            name:
              "El Registro de la Propiedad tiene por objeto la inscripción o anotación de los actos y contratos relativos al dominio y demás derechos reales sobre bienes muebles.",
            correct: false,
          },
          {
            id: "2",
            name:
              "El Registro de la Propiedad tiene por objeto la inscripción o anotación de los actos y contratos relativos al dominio y demás derechos reales sobre bienes immuebles.",
            correct: true,
          },
          {
            id: "3",
            name:
              "El Registro de la Propiedad tiene por objeto la inscripción o anotación de los actos y contratos relativos al dominio y demás derechos reales sobre bienes inmuebles.",
            correct: false,
          },
          {
            id: "4",
            name:
              "El Registro de la Propiedad tiene por objeto la inscripción o anotación de los actos, contratos y certificaciones administrativas relativas al dominio y demás derechos reales sobre bienes inmuebles.",
            correct: false,
          },
        ],
      },
      {
        id: "2",
        question:
          "La concesión administrativa, como acto administrativo en virtud del cual se crea sobre bienes de dominio público y a favor de un particular un derecho subjetivo de uso, aprovechamiento o explotación exclusiva de aquél bien:",
        answers: [
          {
            id: "1",
            name:
              "Solo puede inscribirse en el registro de la propiedad si así está previsto en función de la naturaleza del bien sobre el que se constituye la concesión administrativa.",
            correct: false,
          },
          {
            id: "2",
            name:
              "Solo puede inscribirse en el registro de la propiedad si así está previsto en función de la naturaleza del bien sobre el que se constituye la concesión administrativa.",
            correct: true,
          },
          {
            id: "3",
            name:
              "Solo puede inscribirse en el registro de la propiedad si así está previsto en función de la naturaleza del bien sobre el que se constituye la concesión administrativa",
            correct: false,
          },
          {
            id: "4",
            name:
              "Solo puede inscribirse en el registro de la propiedad si así está previsto en función de la naturaleza del bien sobre el que se constituye la concesión administrativa",
            correct: false,
          },
        ],
      },
    ])
  )
}
