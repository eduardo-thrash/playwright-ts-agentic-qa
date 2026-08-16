# IA sin bata

Una guía de bolsillo para entender conceptos de inteligencia artificial sin
necesitar un doctorado ni un diccionario al lado.

Este documento acompaña al [glosario técnico](glossary.md). Conserva los
nombres originales en inglés porque son los que aparecen en documentación,
herramientas y conversaciones reales, pero los explica en español y con
ejemplos cotidianos.

Los términos están agrupados por el módulo de `docs/roadmap.md` donde se
enseñan. Los conceptos transversales del proyecto aparecen en una sección
separada.

> **Idea importante:** entender algo de forma sencilla no significa explicarlo
> de manera incorrecta. Aquí simplificamos el lenguaje, no los conceptos.

## Módulo 01 — Fundamentos de IA y LLM

### LLM — El autocompletado que creció muchísimo

#### En pocas palabras

Un **Large Language Model** o **modelo grande de lenguaje** es un sistema que
aprendió patrones a partir de enormes cantidades de texto. Usa esos patrones
para predecir qué debería venir después y así construir una respuesta.

#### Imagínalo así

Es parecido al autocompletado del celular, pero después de leer una biblioteca
gigantesca. No se limita a sugerir una palabra: puede formar explicaciones,
historias, conversaciones y código.

#### Lo que realmente ocurre

El modelo recibe texto, lo divide en tokens y calcula cuál podría ser el
siguiente. Repite esa operación muchas veces hasta formar una respuesta. Que
parezca razonar como una persona no significa que piense o comprenda exactamente
como nosotros.

#### Ejemplo en QA

Un LLM puede proponer casos de prueba para un formulario de registro. Es una
buena fuente de ideas, pero un tester todavía debe comprobar si esos casos son
correctos y relevantes para el producto real.

#### Ojo con esto

Un LLM genera texto probable, no consulta automáticamente una base de datos con
la verdad.

### Token — Las fichas con las que lee el modelo

#### En pocas palabras

Un **token** es una pequeña unidad de texto que el modelo puede leer o generar.
Puede ser una palabra completa, una parte de una palabra, un signo o incluso un
espacio, según el caso.

#### Imagínalo así

Antes de procesar una oración, el modelo la corta en piezas parecidas a fichas
de LEGO. Después trabaja con esas fichas, no directamente con las palabras tal
como las vemos nosotros.

#### Ejemplo en QA

Un reporte de pruebas muy largo consume más tokens. Si llenamos el contexto con
logs innecesarios, dejamos menos espacio para el código, los requisitos y la
respuesta que realmente importan.

#### Ojo con esto

Un token no equivale siempre a una palabra. Por eso la longitud y el costo de
una interacción se miden en tokens, no simplemente en palabras o caracteres.

### Inference — El modelo trabajando en vivo

#### En pocas palabras

La **inferencia** ocurre cuando un modelo ya entrenado recibe una petición y
genera una respuesta en ese momento.

#### Imagínalo así

Entrenar fue estudiar durante meses. La inferencia es sentarse a resolver el
examen usando lo aprendido.

#### Lo que realmente ocurre

El modelo calcula probabilidades para el siguiente token, elige uno y vuelve a
hacer el cálculo con el texto actualizado. La respuesta aparece paso a paso,
token por token.

#### Ejemplo en QA

Cuando le pedimos a un agente que analice un error de Playwright, el modelo está
haciendo inferencia mientras interpreta el mensaje y redacta su explicación.

#### Ojo con esto

Inferencia y entrenamiento no son lo mismo. El modelo normalmente no vuelve a
entrenarse ni modifica permanentemente lo que sabe por mantener una conversación.

### Hallucination — Una respuesta convincente pero inventada

#### En pocas palabras

Una **alucinación** es una respuesta que suena segura y bien escrita, pero
contiene información falsa o inventada.

#### Imagínalo así

Es como responder una pregunta en una exposición improvisando algo que parece
lógico para no quedarse en silencio. La explicación puede sonar excelente y
seguir siendo incorrecta.

#### Lo que realmente ocurre

El modelo siempre intenta continuar el texto de forma probable. Si no tiene la
información correcta en su conocimiento o en el contexto recibido, puede
completar el hueco con algo plausible. No está mintiendo de forma consciente.

#### Ejemplo en QA

Si preguntamos qué locator usa una página sin mostrar el archivo, el modelo
podría inventar `getByRole('button')` aunque el proyecto use un selector distinto.

#### Ojo con esto

El tono de seguridad no demuestra que la respuesta sea cierta. Para datos
concretos hay que revisar el archivo, la aplicación o una fuente confiable.

### Model Knowledge — Lo aprendido antes de conocerte

También se conoce como **Parametric Knowledge** o **conocimiento paramétrico**.

#### En pocas palabras

Es la información general y los patrones que quedaron guardados en los pesos
del modelo durante su entrenamiento.

#### Imagínalo así

Es todo lo que una persona recuerda después de estudiar, en contraste con el
libro o los apuntes que tiene abiertos sobre la mesa en este momento.

#### Lo que realmente ocurre

Ese conocimiento está repartido estadísticamente dentro del modelo. No funciona
como una colección de documentos que el modelo pueda abrir y citar, ni se
actualiza en tiempo real. Además, tiene una fecha límite de entrenamiento.

#### Ejemplo en QA

El modelo puede conocer patrones comunes de Playwright gracias a su entrenamiento,
pero no puede saber cómo está construida nuestra `LoginPage` actual sin recibir
el archivo como contexto.

#### Ojo con esto

Conocimiento general no es conocimiento del proyecto. Para preguntas específicas,
el contexto real tiene prioridad.

### Temperature — El control de la improvisación

#### En pocas palabras

La **temperatura** es un parámetro que controla cuánta variación puede haber al
elegir el siguiente token.

#### Imagínalo así

Con temperatura baja, una persona pide siempre su plato favorito. Con temperatura
alta, se anima a probar combinaciones nuevas y menos predecibles.

#### Lo que realmente ocurre

Una temperatura baja favorece las opciones con mayor probabilidad. Una alta
permite que opciones menos probables tengan más oportunidad de ser elegidas.

#### Ejemplo en QA

Para generar ideas creativas de pruebas exploratorias puede servir cierta
variedad. Para producir una salida con formato estricto normalmente preferimos
un comportamiento más predecible.

#### Ojo con esto

Bajar la temperatura no convierte al modelo en una fuente infalible. Una
respuesta constante también puede estar constantemente equivocada.

### Prompt — Lo que le pides al modelo

#### En pocas palabras

Un **prompt** es la instrucción o entrada que recibe el modelo.

#### Imagínalo así

Es como darle una tarea a un compañero. «Revisa esto» deja muchas dudas;
«revisa este escenario buscando errores de accesibilidad y explica la evidencia»
marca una dirección mucho más clara.

#### Ejemplo en QA

```text
Lee el escenario de login y encuentra casos límite.
No modifiques archivos. Explica por qué importa cada caso.
```

#### Ojo con esto

Un buen prompt ayuda, pero no reemplaza la información que falta. Ninguna frase
mágica permite conocer un archivo que el modelo no ha visto.

### Context — Lo que está sobre la mesa ahora

#### En pocas palabras

El **contexto** es toda la información disponible para el modelo durante la tarea
actual: instrucciones, mensajes, archivos leídos, resultados de herramientas y
otros datos suministrados.

#### Imagínalo así

Es el escritorio de trabajo. El modelo solo puede usar los documentos que están
sobre él, además de lo que recuerda de su entrenamiento.

#### Ejemplo en QA

Si el agente lee el feature, los step definitions y el error de ejecución, esos
tres elementos pasan a formar parte del contexto para diagnosticar el fallo.

#### Ojo con esto

Que un archivo exista en el repositorio no significa que el modelo ya lo haya
visto. Primero debe leerlo o recibir su contenido.

### Context Window — El tamaño del escritorio

#### En pocas palabras

La **ventana de contexto** es la cantidad máxima de información que el modelo
puede considerar a la vez.

#### Imagínalo así

Puedes tener una biblioteca enorme, pero tu escritorio solo admite cierta
cantidad de libros abiertos. Si lo llenas de papeles inútiles, queda menos sitio
para lo importante.

#### Ejemplo en QA

Enviar miles de líneas de logs puede desplazar o esconder los requisitos y el
código relevante. Elegir fragmentos útiles mejora el análisis.

#### Ojo con esto

Una ventana grande no garantiza buen contexto. La calidad y la relevancia de la
información siguen importando.

## Módulo 05 — Herramientas

### Tool — Las manos del agente

#### En pocas palabras

Una **tool** o **herramienta** es una capacidad externa que un agente puede usar
para observar o actuar más allá de simplemente generar texto.

#### Imagínalo así

El modelo es el cerebro y las herramientas son sus manos, ojos y calculadora.
Puede saber cómo revisar una página, pero necesita una herramienta para abrirla
y hacer clic realmente.

#### Ejemplo en QA

Una herramienta puede permitirle leer archivos, buscar código, ejecutar pruebas,
consultar una API o controlar un navegador con Playwright.

#### Ojo con esto

El modelo decide cómo pedir el uso de la herramienta; la herramienta es la que
realiza la operación y devuelve un resultado verificable.

## Módulo 06 — Skills

### Skill — Una receta reutilizable

#### En pocas palabras

Una **skill** o **habilidad** es un procedimiento guardado que enseña al agente
cómo resolver correctamente una clase de tarea que se repite.

#### Imagínalo así

Es una receta de cocina: contiene pasos, criterios y recursos para no improvisar
desde cero cada vez que se prepara el mismo plato.

#### Ejemplo en QA

Una skill para investigar pruebas fallidas podría indicar qué reportes leer,
cómo distinguir un fallo del producto de uno del test y qué verificaciones hacer
antes de proponer cambios.

#### Ojo con esto

Una skill no es solo información sobre un tema. Debe orientar una forma de
trabajar repetible.

## Módulo 07 — Agentes

### Agent — Un modelo con misión y equipo de trabajo

#### En pocas palabras

Un **agente** combina un modelo con un objetivo, instrucciones, contexto y
herramientas para completar tareas que pueden requerir varios pasos.

#### Imagínalo así

Un modelo aislado es alguien capaz de conversar. Un agente es esa misma persona
con una misión, reglas, acceso al computador y permiso para trabajar paso a paso.

#### Ejemplo en QA

Un agente puede leer un bug, localizar el test relacionado, ejecutar la prueba,
analizar el error, editar el código cuando tiene autorización y verificar el
resultado.

#### Ojo con esto

Ser agente no lo vuelve autónomo sin límites. Sus acciones siguen dependiendo de
los permisos, las instrucciones, las herramientas y la supervisión humana.

## Módulo 08 — Subagentes

### Subagent — Un especialista con una tarea concreta

#### En pocas palabras

Un **subagente** es un agente al que se le delega una parte limitada y bien
definida de un trabajo mayor.

#### Imagínalo así

En un proyecto escolar, una persona investiga, otra diseña y otra revisa. Cada
una se concentra en su parte y luego entrega el resultado al coordinador.

#### Ejemplo en QA

Un agente principal podría delegar a un subagente la revisión de accesibilidad de
una pantalla mientras otro analiza los contratos de la API.

#### Ojo con esto

Dividir una tarea tiene un costo de coordinación. Un subagente resulta útil
cuando el trabajo es claro, independiente y suficientemente grande.

## Módulo 09 — Fundamentos de MCP

### MCP — Un enchufe universal para la IA

**MCP** significa **Model Context Protocol**.

#### En pocas palabras

Es un protocolo estándar que permite que aplicaciones de IA se conecten con
herramientas, recursos y prompts ofrecidos por otros programas.

#### Imagínalo así

Antes, cada aparato podía necesitar un cable distinto. MCP intenta funcionar
como un tipo de enchufe conocido por ambos lados: la aplicación de IA sabe cómo
conectarse y el servicio sabe cómo ofrecer sus capacidades.

#### Ejemplo en QA

Mediante un servidor MCP de Playwright, un agente puede recibir capacidades para
explorar una página en el navegador sin que cada aplicación invente su propia
forma de integración.

#### Ojo con esto

MCP define cómo se comunican las partes; no garantiza que una herramienta sea
segura, correcta o adecuada. Los permisos y la validación siguen siendo necesarios.

### MCP Client — El lado que pide

#### En pocas palabras

El **cliente MCP** es la aplicación de IA que se conecta a un servidor MCP,
descubre lo que ofrece y solicita usar esas capacidades.

#### Imagínalo así

En un restaurante, es el cliente que consulta el menú y hace un pedido.

#### Ejemplo en QA

Un coding agent puede actuar como cliente MCP cuando descubre y utiliza las
herramientas expuestas por Playwright MCP.

#### Ojo con esto

«Cliente» no significa la persona que usa el producto; en este caso es una
función técnica dentro de la comunicación.

### MCP Server — El lado que ofrece

#### En pocas palabras

El **servidor MCP** es el programa que publica herramientas, recursos o prompts
siguiendo las reglas de MCP.

#### Imagínalo así

Siguiendo el ejemplo del restaurante, es la cocina: anuncia qué puede preparar,
recibe pedidos y devuelve resultados.

#### Ejemplo en QA

Playwright MCP puede funcionar como servidor y ofrecer acciones para navegar,
inspeccionar páginas e interactuar con elementos.

#### Ojo con esto

Un servidor MCP no tiene que ser una máquina remota en internet. También puede
ser un proceso ejecutándose localmente.

## Módulo 12 — Flujos de trabajo agénticos

### Human in the Loop — La persona conserva las decisiones clave

#### En pocas palabras

**Human in the Loop** es un flujo donde ciertas decisiones o acciones necesitan
la revisión o aprobación de una persona.

#### Imagínalo así

Un aprendiz puede preparar el trabajo, pero pide autorización antes de enviar un
correo importante, gastar dinero o borrar información.

#### Ejemplo en QA

Un agente puede investigar un fallo y preparar una corrección, mientras una
persona revisa el cambio antes de publicarlo o ejecutarlo en producción.

#### Ojo con esto

La supervisión humana no significa revisar absolutamente cada paso. Se coloca en
los puntos donde un error tendría consecuencias importantes o difíciles de
revertir.

## Terminología transversal del proyecto

### ADR — La memoria de una decisión importante

**ADR** significa **Architecture Decision Record** o **registro de decisión de
arquitectura**. No es un término exclusivo de inteligencia artificial.

#### En pocas palabras

Es un documento corto y versionado que registra una decisión técnica importante,
las razones que llevaron a tomarla y, normalmente, sus consecuencias.

#### Imagínalo así

Meses después todos recuerdan qué se decidió, pero nadie recuerda por qué. Un ADR
es la nota que evita repetir la misma discusión o deshacer una buena decisión por
falta de contexto.

#### Ejemplo en este proyecto

La ADR-002 establece que un coding agent puede usar Playwright MCP para explorar
e interactuar con el navegador, pero la suite permanente continúa como código
versionado con Playwright y playwright-bdd. La exploración del agente puede
variar; las pruebas permanentes deben ser reproducibles y deterministas.

#### Ojo con esto

Un ADR no intenta documentar cada detalle del sistema. Registra decisiones que
merecen conservar tanto el resultado como su razonamiento.

---

## Un mapa rápido para unir las ideas

1. Escribes un **prompt**.
2. El **agent** recibe ese prompt junto con su **context**.
3. Todo debe caber en la **context window** y se procesa como **tokens**.
4. El **LLM** usa su **model knowledge** y realiza **inference** para responder.
5. La **temperature** influye en cuánto puede variar la generación.
6. Si falta información, puede aparecer una **hallucination**.
7. El agente puede seguir una **skill**, usar una **tool** o delegar a un
   **subagent**.
8. Algunas herramientas llegan mediante **MCP**, conectando un **MCP client** con
   un **MCP server**.
9. Las acciones delicadas pueden detenerse para aplicar **Human in the Loop**.
10. Las decisiones técnicas duraderas pueden conservarse mediante un **ADR**.
