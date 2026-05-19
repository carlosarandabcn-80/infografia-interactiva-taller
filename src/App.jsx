import { useEffect, useMemo, useState } from 'react'
import {
  academicValues,
  diagnosis,
  educatorRoles,
  evaluation,
  references,
  sections,
  sessions,
  socialLayers,
  traceability,
} from './data'
import './styles.css'

function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}

function Section({ id, eyebrow, title, children, lead }) {
  return (
    <section id={id} className="section">
      <div className="section__head reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {lead ? <p className="section__lead">{lead}</p> : null}
      </div>
      <div className="section__body reveal">{children}</div>
    </section>
  )
}

function Toolbar() {
  const progress = useScrollProgress()

  return (
    <header className="toolbar" aria-label="Navegación principal">
      <div className="toolbar__inner">
        <a className="toolbar__brand" href="#inicio" aria-label="Ir al inicio">
          Decidir sin depender
        </a>
        <nav className="toolbar__nav" aria-label="Secciones">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>
        <button className="toolbar__button" type="button" onClick={() => window.print()}>
          Imprimir / PDF
        </button>
      </div>
      <div className="progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
    </header>
  )
}

function Hero() {
  const [showQuestion, setShowQuestion] = useState(false)

  return (
    <section
      id="inicio"
      className="hero"
      onMouseEnter={() => setShowQuestion(true)}
      onMouseLeave={() => setShowQuestion(false)}
    >
      <div className="hero__background" />
      <div className="hero__content">
        <div className="hero__copy reveal">
          <div className="pills" aria-label="Etiquetas del proyecto">
            <span>Infografía interactiva</span>
            <span>Educación Social</span>
            <span>15-17 años</span>
            <span>Prevención primaria</span>
          </div>
          <h1>Decidir sin depender</h1>
          <p className="hero__subtitle">
            Adolescencia, estructura social y prevención desde la Educación Social.
          </p>
          <p className="hero__text">
            Una propuesta socioeducativa que integra bienestar emocional, prevención de
            alcohol, cannabis y apuestas online, pensamiento crítico y creación de
            entornos protectores.
          </p>

          <button
            className="question"
            type="button"
            onClick={() => setShowQuestion((value) => !value)}
            aria-expanded={showQuestion}
          >
            <span className="question__icon">↗</span>
            Activar pregunta guía
          </button>

          <div className={`guide ${showQuestion ? 'guide--visible' : ''}`} aria-live="polite">
            ¿Cómo influyen las estructuras sociales en las decisiones adolescentes?
          </div>
        </div>

        <aside className="hero__card reveal" aria-label="Síntesis del taller">
          <div className="hero__cardTop">
            <span>Taller</span>
            <strong>4 sesiones · 90 min</strong>
          </div>
          <ul className="checklist">
            <li>Bienestar emocional y señales de alerta.</li>
            <li>Mitos sobre alcohol y cannabis.</li>
            <li>Apuestas online, publicidad y presión social.</li>
            <li>Hábitos saludables, ocio positivo y recursos de ayuda.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function SocialStructure() {
  const [activeId, setActiveId] = useState('individuo')
  const active = socialLayers.find((layer) => layer.id === activeId) || socialLayers[0]

  return (
    <Section
      id="estructura"
      eyebrow="Sección 2"
      title="Marco de estructura social"
      lead="La conducta adolescente se interpreta como resultado de una interacción entre agencia personal y condiciones sociales."
    >
      <div className="split">
        <div className="layerDiagram" role="group" aria-label="Capas de estructura social">
          <div className="rings" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="layerDiagram__center">
            <span>{active.icon}</span>
            <strong>{active.title}</strong>
          </div>
          {socialLayers.map((layer, index) => (
            <button
              key={layer.id}
              className={`layerButton layerButton--${index} ${layer.id === activeId ? 'is-active' : ''}`}
              type="button"
              onClick={() => setActiveId(layer.id)}
              aria-pressed={layer.id === activeId}
            >
              <span>{layer.icon}</span>
              <small>{layer.title}</small>
            </button>
          ))}
        </div>

        <div className="panel">
          <p className="panel__label">Nivel seleccionado</p>
          <h3>
            <span>{active.icon}</span> {active.title}
          </h3>
          <p className="panel__subtitle">{active.subtitle}</p>
          <p>{active.body}</p>
          <div className="note">
            La lectura estructural no niega la autonomía adolescente: explica qué
            condiciones sociales hacen más o menos probable decidir con libertad.
          </div>
        </div>
      </div>
    </Section>
  )
}

function Diagnosis() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = diagnosis[activeIndex]

  return (
    <Section
      id="diagnostico"
      eyebrow="Sección 3"
      title="Diagnóstico del colectivo"
      lead="Cada fila conecta comportamiento actual, necesidad socioeducativa, conducta objetivo y factor protector."
    >
      <div className="diagnosis">
        <div className="diagnosis__detail">
          <span className="bigIcon">{active.icon}</span>
          <p className="panel__label">Fila activa</p>
          <h3>{active.area}</h3>
          <dl>
            <div>
              <dt>Comportamiento actual</dt>
              <dd>{active.current}</dd>
            </div>
            <div>
              <dt>Necesidad detectada</dt>
              <dd>{active.need}</dd>
            </div>
            <div>
              <dt>Conducta objetivo</dt>
              <dd>{active.target}</dd>
            </div>
            <div>
              <dt>Factor protector</dt>
              <dd>{active.protection}</dd>
            </div>
          </dl>
        </div>

        <div className="diagnosis__table" role="list">
          {diagnosis.map((row, index) => (
            <button
              key={row.area}
              className={index === activeIndex ? 'is-active' : ''}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              role="listitem"
            >
              <span className="diagnosis__area">
                <span>{row.icon}</span>
                {row.area}
              </span>
              <span>{row.need}</span>
              <span>{row.protection}</span>
            </button>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Traceability() {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = traceability[activeIndex]
  const steps = [
    ['Necesidad', current.need],
    ['Objetivo', current.objective],
    ['Contenido', current.content],
    ['Sesión', current.session],
    ['Indicador', current.indicator],
  ]

  return (
    <Section
      id="trazabilidad"
      eyebrow="Sección 4"
      title="Matriz de trazabilidad"
      lead="El núcleo académico de la infografía: necesidad → objetivo → contenido → sesión → indicador."
    >
      <div className="keyMessage">Nada es casual: cada actividad responde a una necesidad social detectada.</div>
      <div className="trace">
        <div className="trace__menu" role="tablist" aria-label="Necesidades socioeducativas">
          {traceability.map((row, index) => (
            <button
              key={row.need}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              className={activeIndex === index ? 'is-active' : ''}
              onClick={() => setActiveIndex(index)}
            >
              <strong>{row.need}</strong>
              <span>{row.session}</span>
            </button>
          ))}
        </div>

        <div className="trace__flow">
          {steps.map(([label, value], index) => (
            <article key={label} className={index === steps.length - 1 ? 'traceStep traceStep--indicator' : 'traceStep'}>
              <span>{label}</span>
              <p>{value}</p>
              {index < steps.length - 1 ? <b aria-hidden="true">→</b> : null}
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Workshop() {
  const [activeId, setActiveId] = useState('S1')
  const active = sessions.find((session) => session.id === activeId) || sessions[0]

  return (
    <Section
      id="taller"
      eyebrow="Sección 5"
      title="Desarrollo del taller"
      lead="La secuencia combina reflexión, entrenamiento práctico, análisis crítico y producto de aprendizaje."
    >
      <div className="timeline">
        {sessions.map((session) => (
          <button
            key={session.id}
            type="button"
            onClick={() => setActiveId(session.id)}
            className={session.id === activeId ? 'is-active' : ''}
            aria-pressed={session.id === activeId}
          >
            <span className="timeline__dot">{session.icon}</span>
            <strong>{session.id}</strong>
            <small>{session.title}</small>
          </button>
        ))}
      </div>

      <div className="sessionCard">
        <div className="sessionCard__title">
          <span>{active.icon}</span>
          <div>
            <p>{active.id}</p>
            <h3>{active.title}</h3>
          </div>
        </div>
        <div className="sessionGrid">
          <article>
            <span>Dinámica central</span>
            <p>{active.dynamic}</p>
          </article>
          <article>
            <span>Intención educativa</span>
            <p>{active.intention}</p>
          </article>
          <article>
            <span>Producto de aprendizaje</span>
            <p>{active.product}</p>
          </article>
        </div>
      </div>
    </Section>
  )
}

function EducatorRole() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = educatorRoles[activeIndex]

  return (
    <Section
      id="rol"
      eyebrow="Sección 6"
      title="Rol del educador/a social"
      lead="La intervención no se limita a transmitir información: media, coordina, protege y acompaña."
    >
      <div className="role">
        <div className="role__visual">
          <span className="role__center">{active.icon}</span>
          {educatorRoles.map((role, index) => (
            <button
              key={role.title}
              type="button"
              className={`hotspot hotspot--${index} ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={role.title}
            >
              {role.icon}
            </button>
          ))}
        </div>

        <div className="panel">
          <p className="panel__label">Hotspot activo</p>
          <h3>
            <span>{active.icon}</span> {active.title}
          </h3>
          <p>{active.body}</p>
          <div className="role__list">
            {educatorRoles.map((role, index) => (
              <button
                key={role.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={index === activeIndex ? 'is-active' : ''}
              >
                {role.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Evaluation() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = evaluation[activeIndex]

  return (
    <Section
      id="evaluacion"
      eyebrow="Sección 7"
      title="Evaluación por capas"
      lead="La evaluación es formativa, verificable y orientada a mejora, no a control punitivo."
    >
      <div className="evaluation">
        <div className="evaluation__layers">
          <p>Evaluar no es controlar, es acompañar el aprendizaje.</p>
          <div className="circles">
            {evaluation.map((phase, index) => (
              <button
                key={phase.phase}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={index === activeIndex ? 'is-active' : ''}
                style={{ '--size': `${300 - index * 56}px`, '--z': 10 - index }}
                aria-label={phase.phase}
              >
                {index === activeIndex ? phase.icon : null}
              </button>
            ))}
          </div>
        </div>

        <div className="panel">
          <p className="panel__label">Momento evaluativo</p>
          <h3>
            <span>{active.icon}</span> {active.phase}
          </h3>
          <dl>
            <div>
              <dt>Indicadores</dt>
              <dd>{active.focus}</dd>
            </div>
            <div>
              <dt>Instrumentos</dt>
              <dd>{active.instrument}</dd>
            </div>
            <div>
              <dt>Uso de resultados</dt>
              <dd>{active.use}</dd>
            </div>
          </dl>
          <div className="role__list">
            {evaluation.map((phase, index) => (
              <button
                key={phase.phase}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={index === activeIndex ? 'is-active' : ''}
              >
                {phase.phase}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function AcademicValue() {
  return (
    <Section
      id="valor"
      eyebrow="Valor añadido académico"
      title="Diseño para defender la coherencia del trabajo"
      lead="La infografía ordena la complejidad social y permite explicar la intervención con trazabilidad."
    >
      <div className="valueGrid">
        {academicValues.map((value, index) => (
          <article key={value}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{value}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function References() {
  return (
    <section className="references" aria-labelledby="referencias-title">
      <div className="references__inner">
        <h2 id="referencias-title">Referencias incorporadas en la propuesta</h2>
        <ol>
          {references.map((ref) => (
            <li key={`${ref.entity}-${ref.year}`}>
              <strong>{ref.entity}</strong> ({ref.year}). <em>{ref.title}</em>{' '}
              <a href={ref.url} target="_blank" rel="noreferrer">
                Enlace
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Closing() {
  return (
    <section id="cierre" className="closing">
      <div className="closing__inner">
        <p>Sección 8 · Cierre</p>
        <h2>
          La prevención eficaz no se basa en el miedo,
          <span> sino en dotar de competencias personales </span>
          dentro de estructuras sociales más justas y protectoras.
        </h2>
      </div>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.15 }
    )

    reveals.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <>
      <Toolbar />
      <main>
        <Hero />
        <SocialStructure />
        <Diagnosis />
        <Traceability />
        <Workshop />
        <EducatorRole />
        <Evaluation />
        <AcademicValue />
        <References />
        <Closing />
      </main>
      <footer className="footer">
        <p>
          Decidir sin depender · Infografía interactiva para Educación Social · {year}
        </p>
      </footer>
    </>
  )
}