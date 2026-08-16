# Guía rápida — Ruta de aprendizaje Agentic QA

Usar esta guía para continuar y mantener la ruta del repositorio `agentic-qa-playwright-ts`.

## 🟢 Iniciar o reanudar

En una conversación nueva:

> Continúa mi ruta de aprendizaje siguiendo `prompts/resume-course.md`.

El agente debe consultar el progreso y continuar desde la siguiente lección pendiente.

---

## 🔵 Terminar una sesión

Cuando quiera detener el estudio pero **todavía no haya terminado el módulo**:

> Cierra la sesión siguiendo `prompts/session-close.md`. No avances al siguiente módulo.

Después guardar los cambios:

```bash
git add .
git commit -m "docs(learning): update learning progress"
git push
```

---

## 🟣 Terminar un módulo

Cuando haya terminado todas las lecciones del módulo:

> Evalúa si puedo considerar completado el módulo actual antes de avanzar.

Completar la evaluación propuesta.

Si el módulo fue aprobado:

> Marca el módulo actual como completado, actualiza `docs/progress.md` y prepara el siguiente módulo según `docs/roadmap.md`. No inicies todavía su primera lección.

Después:

```bash
git add .
git commit -m "docs(learning): complete current module"
git push
```

Para comenzar el nuevo módulo, preferiblemente abrir una **nueva conversación** y usar:

> Continúa mi ruta de aprendizaje siguiendo `prompts/resume-course.md`.

---

## 🟠 Agregar contenido nuevo a la ruta

Cuando encuentre un concepto, tecnología o tema nuevo que quiera aprender después, **no indicar directamente en qué módulo debe agregarse**.

Usar:

> Quiero agregar `[TEMA]` a mi ruta de aprendizaje. Evalúa dónde corresponde según `AGENTS.md` y `docs/learning-rules.md`. Actualiza la ruta sin cambiar mi progreso actual.

El agente debe determinar si el nuevo contenido corresponde a:

- una nueva lección de un módulo que todavía no ha iniciado;
- una nueva lección del módulo actualmente en progreso;
- una ampliación de un módulo ya completado;
- un nuevo módulo independiente.

### Si pertenece a un módulo futuro

Puede incorporarse en ese módulo y ubicarse en el orden de aprendizaje apropiado.

### Si pertenece al módulo actual

Puede agregarse como una lección pendiente cuando sea necesario para los objetivos del módulo.

No debe marcarse automáticamente como aprendida.

### Si pertenece a un módulo ya completado

El módulo completado **no debe reabrirse ni recibir nuevas lecciones obligatorias**.

El nuevo contenido debe agregarse posteriormente como un módulo de ampliación, avanzado o complementario.

Por ejemplo:

```text
03 — Prompt Engineering ✓
        │
        └── prerequisite
                ↓
14 — Advanced Prompt Engineering
```

### Si es un tema independiente

El agente puede crear un nuevo módulo al final de la ruta y definir sus prerrequisitos.

### Regla fundamental

Agregar contenido nuevo **nunca debe cambiar la posición actual de aprendizaje**.

Por ejemplo:

```text
Estoy estudiando:

05 — Tools
└── Lesson 03

Agrego:

14 — RAG

Sigo estudiando:

05 — Tools
└── Lesson 03
```

Después de revisar los cambios:

```bash
git add .
git commit -m "docs(learning): extend learning roadmap"
git push
```

---

## Regla sencilla

```text
Nueva conversación
        ↓
resume-course.md
        ↓
Aprender
        ↓
¿Encontré algo nuevo?
   │            │
   NO           SÍ
   │             ↓
   │       Evaluar ubicación
   │             ↓
   │       Actualizar roadmap
   │             ↓
   │       Mantener progreso
   │
   ↓
¿Terminé el módulo?
   │            │
   NO           SÍ
   ↓             ↓
session-close   Evaluación
   ↓             ↓
Commit       Cerrar módulo
                 ↓
              Commit
                 ↓
        Nueva conversación
                 ↓
          resume-course.md
```

## Solo necesito recordar

### Reanudar

> Continúa mi ruta de aprendizaje siguiendo `prompts/resume-course.md`.

### Cerrar sesión

> Cierra la sesión siguiendo `prompts/session-close.md`. No avances al siguiente módulo.

### Cerrar módulo

> Evalúa si puedo considerar completado el módulo actual antes de avanzar.

### Agregar algo nuevo

> Quiero agregar `[TEMA]` a mi ruta de aprendizaje. Evalúa dónde corresponde según `AGENTS.md` y `docs/learning-rules.md`. Actualiza la ruta sin cambiar mi progreso actual.
