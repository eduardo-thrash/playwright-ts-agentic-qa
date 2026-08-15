# Guía rápida — Ruta de aprendizaje Agentic QA

Usar esta guía para continuar la ruta del repositorio `agentic-qa-playwright-ts`.

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

## Regla sencilla

```text
Nueva conversación
        ↓
resume-course.md
        ↓
Aprender
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

### Solo necesito recordar

**Reanudar**

> Continúa mi ruta de aprendizaje siguiendo `prompts/resume-course.md`.

**Cerrar sesión**

> Cierra la sesión siguiendo `prompts/session-close.md`. No avances al siguiente módulo.

**Cerrar módulo**

> Evalúa si puedo considerar completado el módulo actual antes de avanzar.
