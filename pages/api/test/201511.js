export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(
    JSON.stringify([
      {
        id: "1",
        question: "El principio de prioridad es:",
        answers: [
          {
            id: "1",
            name:
              "El principio en cuya virtud el acto registral que ingresa primero en el Registro de la Propiedad se antepone, con preferencia excluyente o superioridad de rango, a cualquier otro acto registrable que, siéndole incompatible o perjudicial, aun no hubiere ingresado en el Registro, aunque fuese de fecha anterior.",
            correct: true,
          },
          {
            id: "2",
            name:
              "El principio en cuya virtud el acto registral que ahora ingresa en el Registro de la Propiedad es preferido a cualquier otro acto registrable, incompatible o perjudicial, que ya haya ingresado en dicho Registro.",
            correct: false,
          },
          {
            id: "3",
            name:
              "El principio en cuya virtud el acto registral que ingresa primero en el Registro de la Propiedad se antepone, con preferencia excluyente o superioridad de rango, a cualquier otro acto registrable que aun no hubiere ingresado en el Registro, aunque sea de fecha anterior.",
            correct: false,
          },
        ],
      },
      {
        id: "2",
        question: "Las notas marginales de oficina tienen por objeto:",
        answers: [
          {
            id: "1",
            name:
              "Proporcionar conocimiento de determinadas situaciones que afectan a fincas inscritas.",
            correct: false,
          },
          {
            id: "2",
            name:
              "Consignar registralmente hechos o circunstancias que alteran la situación jurídica registrada.",
            correct: false,
          },
          {
            id: "3",
            name:
              "Relacionar unos asientos con otros, para coordinar las operaciones registrales, constituyendo un medio que facilita el modo de llevar los libros del Registro.",
            correct: true,
          },
        ],
      },
      {
        id: "3",
        question: "La mención registral de las legítimas se cancela:",
        answers: [
          {
            id: "1",
            name:
              "Por caducidad, cumplidos 20 años desde el fallecimiento del causante.",
            correct: true,
          },
          {
            id: "2",
            name:
              "Por caducidad, cumplidos 15 años desde el fallecimiento del causante.",
            correct: false,
          },
          {
            id: "3",
            name:
              "Por caducidad, cumplidos 20 años desde la fecha en que fueron extendidas",
            correct: false,
          },
        ],
      },
      {
        id: "4",
        question: "El asiento de cancelación siempre es:",
        answers: [
          {
            id: "1",
            name: "Un asiento principal.",
            correct: true,
          },
          {
            id: "2",
            name: "Un asiento que extingue el derecho registrado.",
            correct: false,
          },
          {
            id: "3",
            name: "Un asiento accesorio.",
            correct: false,
          },
        ],
      },
      {
        id: "5",
        question:
          "La inscripción a favor del legatario de inmuebles específicamente legados puede realizarse en virtud de:",
        answers: [
          {
            id: "1",
            name:
              "Solicitud del legatario cuando no existiere contador partidor ni se hubiese facultado al albacea para la entrega.",
            correct: false,
          },
          {
            id: "2",
            name:
              "Solicitud del legatario cuando parte de la herencia se hubiese distribuido en legados y no existiere contador paratidor ni se hubiese facultado al albacea para la entrega.",
            correct: false,
          },
          {
            id: "3",
            name:
              "Solicitud del legatario cuando toda la herncia se hubiese distrubuido en legados y no exitiere contador partidor ni se hubiese facultado al albacea para la entrega.",
            correct: true,
          },
        ],
      },
      {
        id: "5",
        question:
          "La inscripción a favor del legatario de inmuebles específicamente legados puede realizarse en virtud de:",
        answers: [
          {
            id: "1",
            name:
              "Solicitud del legatario cuando no existiere contador partidor ni se hubiese facultado al albacea para la entrega.",
            correct: false,
          },
          {
            id: "2",
            name:
              "Solicitud del legatario cuando parte de la herencia se hubiese distribuido en legados y no existiere contador paratidor ni se hubiese facultado al albacea para la entrega.",
            correct: false,
          },
          {
            id: "3",
            name:
              "Solicitud del legatario cuando toda la herncia se hubiese distrubuido en legados y no exitiere contador partidor ni se hubiese facultado al albacea para la entrega.",
            correct: true,
          },
        ],
      },
      {
        id: "6",
        question:
          "Los libros de inscripciones siguen el siguiente esquema de ordenación:",
        answers: [
          {
            id: "1",
            name:
              "Al establecerse el Registro se abren tomos para cada ayuntamiento que se numeran correlativamente por orden de antigüedad en cada término. Además, se da a cada tomo un número correlativo en relación con el total del archivo, que es lo que se denomina libro. Es decir, cada libro lleva doble numeración, por orden de antigüedad en el Registro (número de Libro) y por orden correlativo dentro de cada municipio (número de Tomo).",
            correct: false,
          },
          {
            id: "2",
            name:
              "A medida que es necesario se abren libros para cada ayuntamiento que se numeran correlativamente por orden de antigüedad en cada término. Además, se da a cada libro un número correlativo en relación con el total del archivo, que es lo que se denomina tomo. Es decir, cada libro lleva doble numeración, por orden de antigüedad en el Registro (número de Tomo) y por orden correlativo dentro de cada municipio (número de Libro).",
            correct: true,
          },
          {
            id: "3",
            name:
              "A medida que es necesario, se abren libros para todo el Registro por orden de antigüedad. Además, se abre un legajo con un número correlativo en relación con el total del municipio, para controlar el movimiento de cada uno de los que integran el Registro.",
            correct: false,
          },
        ],
      },
      {
        id: "7",
        question: "¿Qué es lo que se inscribe en el Registro de la Propiedad?",
        answers: [
          {
            id: "1",
            name:
              "Se presentan formularios encasillados, títulos en sentido formal; se inscirben los actos y contratos que resultan de aquéllos y el Registro pública y se garantiza frente a terceros quienes han intervenido en ellos.",
            correct: false,
          },
          {
            id: "2",
            name:
              "Se presentan escrituras públicas, títulos en sentido formal; se escriben actos y contratos que originan una mutación jurídico real y el Registro pública y se garantiza frente a terceros son las transmisiones patrimoniales sobre derechos reales.",
            correct: false,
          },
          {
            id: "3",
            name:
              "Se presentan documentos, títulos en sentido formal; se inscriben títulos en snetido material, actos y contratos que originan una mutación jurídico real y lo que el Registro pública y se garantiza frente a terceros son titularidades sobre derechos reales",
            correct: true,
          },
        ],
      },
      {
        id: "8",
        question:
          "Una condición será inscribible en el Registro de la Propiedad si:",
        answers: [
          {
            id: "1",
            name: "Tienen transcendencia personal.",
            correct: false,
          },
          {
            id: "2",
            name: "Crean una situación de pendencia permanente.",
            correct: false,
          },
          {
            id: "3",
            name: "Son condiciones en sentido técnico-jurídico y válidas.",
            correct: true,
          },
        ],
      },
      {
        id: "9",
        question:
          "En el Derecho Civil Común Español, los regímenes económicos matrimoniales son:",
        answers: [
          {
            id: "1",
            name:
              "Régimen de sociedad legal de gananciales, régimen de participación y régimen de separación de bienes.",
            correct: true,
          },
          {
            id: "2",
            name:
              "Régimen de sociedad legal de gananciales y régimen de separación de bienes.",
            correct: false,
          },
          {
            id: "3",
            name:
              "Régimen de sociedad legal de gananciales, régimen de participación, régimen de separación de bienes y comunidad universal de ganancias.",
            correct: false,
          },
        ],
      },
      {
        id: "10",
        question: "El objeto de anotación preventiva es:",
        answers: [
          {
            id: "1",
            name:
              "El dominio, los derechos reales o demás situaciones jurídico-reales.",
            correct: false,
          },
          {
            id: "2",
            name:
              "Las resoluciones judiciales relativas a la capacidad civil de las personas.",
            correct: false,
          },
          {
            id: "3",
            name:
              "Las situaciones que, por diversos motivos, no pueden causar un asiento de inscripción, pero que se considera conveniente que tengan algún reflejo registral.",
            correct: true,
          },
        ],
      },
      {
        id: "11",
        question: "",
        answers: [
          {
            id: "1",
            name: "",
            correct: false,
          },
          {
            id: "2",
            name: "",
            correct: false,
          },
          {
            id: "3",
            name: "",
            correct: true,
          },
        ],
      },
      {
        id: "12",
        question: "",
        answers: [
          {
            id: "1",
            name: "",
            correct: false,
          },
          {
            id: "2",
            name: "",
            correct: false,
          },
          {
            id: "3",
            name: "",
            correct: true,
          },
        ],
      },
      {
        id: "13",
        question: "",
        answers: [
          {
            id: "1",
            name: "",
            correct: false,
          },
          {
            id: "2",
            name: "",
            correct: false,
          },
          {
            id: "3",
            name: "",
            correct: true,
          },
        ],
      },
      {
        id: "14",
        question: "",
        answers: [
          {
            id: "1",
            name: "",
            correct: false,
          },
          {
            id: "2",
            name: "",
            correct: false,
          },
          {
            id: "3",
            name: "",
            correct: true,
          },
        ],
      },
      {
        id: "15",
        question: "",
        answers: [
          {
            id: "1",
            name: "",
            correct: false,
          },
          {
            id: "2",
            name: "",
            correct: false,
          },
          {
            id: "3",
            name: "",
            correct: true,
          },
        ],
      },
    ])
  )
}
