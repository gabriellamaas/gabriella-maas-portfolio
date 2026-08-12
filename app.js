const qaContent = {
  contexto: {
    label: 'Contexto',
    text: 'Antes de testar, eu preciso entender para quem aquilo serve, qual problema está sendo resolvido e que decisão de negócio existe por trás da tela. Sem contexto, teste vira apenas conferência.'
  },
  risco: {
    label: 'Risco',
    text: 'Nem tudo merece o mesmo esforço. Eu priorizo pelo que pode causar mais impacto se falhar: regra sensível, fluxo financeiro, integração, permissão ou dado difícil de corrigir depois.'
  },
  impacto: {
    label: 'Impacto',
    text: 'Toda mudança tem um raio de alcance. Meu trabalho é entender até onde ela pode chegar: telas relacionadas, módulos vizinhos, relatórios, rotinas e integrações que dependem do mesmo dado.'
  },
  investigacao: {
    label: 'Investigação',
    text: 'Reproduzir um bug é só uma parte. Eu gosto de isolar dado, regra, ambiente e caminho para entender em que condição ele acontece e o que isso revela sobre o sistema.'
  },
  produto: {
    label: 'Produto',
    text: 'Qualidade não é apenas ausência de erro. A feature também precisa resolver o problema certo. Quando funciona tecnicamente, mas não atende a necessidade do usuário ou do negócio, ainda existe um problema de qualidade.'
  },
  usuario: {
    label: 'Usuário',
    text: 'A pessoa do outro lado nem sempre usa o sistema como o fluxo foi desenhado. Usabilidade, atalhos, pressa, contexto e dados imperfeitos também fazem parte do teste.'
  }
}

const processTexts = [
  'Leio a regra de negócio, converso com Produto e desenho o caminho que o dado vai percorrer. Se eu não consigo explicar a feature, ainda não entendi o suficiente para testá-la.',
  'Faço as perguntas que podem mudar o entendimento da história: e se o campo vier vazio? e se o registro já existir? quem usa esse dado depois? que comportamento esperamos em uma exceção?',
  'Separo o que é crítico do que tem menor impacto. Riscos altos recebem uma análise mais aprofundada e cenários negativos; riscos baixos passam por uma verificação mais rápida.',
  'Funcional, exploratório, regressão, E2E ou API. A técnica vem depois da pergunta que preciso responder e do risco que preciso cobrir.',
  'Quando algo falha, tento não parar no sintoma. Isolo dados, ambiente e passos para chegar mais perto da causa e abrir o bug com contexto suficiente para ajudar a investigação.',
  'Um bug bem escrito economiza tempo do time. Registro evidência, comportamento esperado, comportamento obtido, impacto e o que já consegui descartar durante a análise.',
  'Depois da entrega, o que escapou vira aprendizado: cenário de regressão, nova pergunta para o refinamento ou uma mudança no processo para reduzir a chance de repetir o mesmo problema.'
]

const header = document.getElementById('siteHeader')
const progress = document.getElementById('scrollProgress')
const menuToggle = document.getElementById('menuToggle')
const mainNav = document.getElementById('mainNav')

function updateScroll() {
  const root = document.documentElement
  const max = Math.max(1, root.scrollHeight - root.clientHeight)
  const ratio = Math.min(1, root.scrollTop / max)
  progress.style.width = `${ratio * 100}%`
  header.classList.toggle('is-compact', root.scrollTop > 70)
}

window.addEventListener('scroll', updateScroll, { passive: true })
updateScroll()

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!open))
  mainNav.classList.toggle('is-open', !open)
})

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    mainNav.classList.remove('is-open')
  })
})

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const reveals = document.querySelectorAll('.reveal')
if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach(el => el.classList.add('is-visible'))
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' })
  reveals.forEach(el => observer.observe(el))
}

const qaTabs = [...document.querySelectorAll('.qa-tab')]
const qaLabel = document.getElementById('qaLabel')
const qaText = document.getElementById('qaText')
qaTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    qaTabs.forEach(item => {
      item.classList.remove('is-active')
      item.setAttribute('aria-selected', 'false')
    })
    tab.classList.add('is-active')
    tab.setAttribute('aria-selected', 'true')
    const data = qaContent[tab.dataset.qa]
    qaLabel.textContent = data.label
    qaText.animate([{ opacity: .2, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: reducedMotion ? 0 : 320, easing: 'ease-out' })
    qaText.textContent = data.text
  })
})

const processTabs = [...document.querySelectorAll('.process-tab')]
const processText = document.getElementById('processText')
processTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    processTabs.forEach(item => item.classList.remove('is-active'))
    tab.classList.add('is-active')
    const index = Number(tab.dataset.stage)
    processText.textContent = processTexts[index]
    processText.animate([{ opacity: .2, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: reducedMotion ? 0 : 320, easing: 'ease-out' })
  })
})

const projects = [...document.querySelectorAll('.project')]
projects.forEach(project => {
  const button = project.querySelector('.project-toggle')
  button.addEventListener('click', () => {
    const open = project.classList.toggle('is-open')
    button.setAttribute('aria-expanded', String(open))
  })
})

const diaryPages = [...document.querySelectorAll('.diary-page')]
const diaryDotsWrap = document.getElementById('diaryDots')
const prevDiary = document.getElementById('prevDiary')
const nextDiary = document.getElementById('nextDiary')
const diaryStage = document.getElementById('diaryStage')
let currentDiaryPage = 0
let diaryTouchStartX = null

function buildDiaryDots() {
  if (!diaryDotsWrap || !diaryPages.length) return
  diaryDotsWrap.innerHTML = ''
  diaryPages.forEach((_, index) => {
    const dot = document.createElement('button')
    dot.className = `diary-dot${index === 0 ? ' is-active' : ''}`
    dot.setAttribute('aria-label', `Mostrar página ${index + 1}`)
    dot.addEventListener('click', () => showDiaryPage(index))
    diaryDotsWrap.appendChild(dot)
  })
}

function showDiaryPage(index) {
  if (!diaryPages.length) return
  currentDiaryPage = (index + diaryPages.length) % diaryPages.length
  diaryPages.forEach((page, pageIndex) => page.classList.toggle('is-active', pageIndex === currentDiaryPage))
  if (diaryDotsWrap) [...diaryDotsWrap.children].forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === currentDiaryPage))
}

const beyondSection = document.getElementById('alem')
const beyondTrigger = document.getElementById('beyondTrigger')
const beyondContent = document.getElementById('beyondContent')

if (beyondTrigger && beyondSection && beyondContent) {
  beyondTrigger.addEventListener('click', () => {
    const open = beyondSection.classList.toggle('is-open')
    beyondTrigger.setAttribute('aria-expanded', String(open))
    beyondContent.setAttribute('aria-hidden', String(!open))
    if (open) showDiaryPage(currentDiaryPage)
  })
}

if (prevDiary) prevDiary.addEventListener('click', () => showDiaryPage(currentDiaryPage - 1))
if (nextDiary) nextDiary.addEventListener('click', () => showDiaryPage(currentDiaryPage + 1))

if (diaryStage) {
  diaryStage.addEventListener('touchstart', event => {
    diaryTouchStartX = event.touches[0].clientX
  }, { passive: true })
  diaryStage.addEventListener('touchend', event => {
    if (diaryTouchStartX === null) return
    const endX = event.changedTouches[0].clientX
    const delta = endX - diaryTouchStartX
    if (Math.abs(delta) > 45) showDiaryPage(currentDiaryPage + (delta < 0 ? 1 : -1))
    diaryTouchStartX = null
  }, { passive: true })
}

buildDiaryDots()
showDiaryPage(0)


function getCodeSegments(codeEl) {
  return [...codeEl.childNodes].map(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      return { text: node.textContent.replace(/ /g, ' ') }
    }
    return { text: node.textContent.replace(/ /g, ' '), className: node.className || '' }
  })
}

function appendCharacter(target, char) {
  if (target.nodeType === Node.TEXT_NODE) target.textContent += char
  else target.textContent += char
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

let codeTypingVersion = 0
function cancelHeroCodeTyping() { codeTypingVersion += 1 }

async function typeIntoCode(codeEl, segments, speed, version) {
  codeEl.innerHTML = ''
  for (const segment of segments) {
    const target = segment.className
      ? Object.assign(document.createElement('span'), { className: segment.className })
      : document.createTextNode('')

    codeEl.appendChild(target)

    for (const char of segment.text) {
      if (version !== codeTypingVersion) return false
      appendCharacter(target, char)
      await wait(speed)
    }
  }
  return version === codeTypingVersion
}

async function startHeroCodeTyping() {
  const codeWindow = document.querySelector('.code-window')
  if (!codeWindow || codeWindow.dataset.typed === 'true' || reducedMotion) return
  const version = ++codeTypingVersion

  const lines = [...codeWindow.querySelectorAll('.code-line')]
  const result = codeWindow.querySelector('.code-result')
  const resultLabel = result ? result.querySelector('small') : null
  if (result && !result.querySelector('.code-result-text')) {
    const textNode = [...result.childNodes].find(node => node.nodeType === Node.TEXT_NODE)
    const typed = document.createElement('span')
    typed.className = 'code-result-text'
    typed.textContent = textNode ? textNode.textContent.trim() : '1 passing'
    if (textNode) result.replaceChild(typed, textNode)
    else if (resultLabel) result.insertBefore(typed, resultLabel)
  }
  const resultText = result ? result.querySelector('.code-result-text') : null

  const lineData = lines.map(line => {
    const code = line.querySelector('code')
    return { line, code, segments: getCodeSegments(code), isEmpty: code.textContent.trim().length === 0 }
  })

  codeWindow.classList.add('is-typing')
  codeWindow.dataset.typed = 'true'

  for (const item of lineData) {
    item.line.classList.add('is-visible')
    if (item.isEmpty) {
      item.line.classList.add('is-empty')
      await wait(45)
      continue
    }

    item.line.classList.add('is-typing')
    const chars = item.segments.reduce((sum, seg) => sum + seg.text.length, 0)
    const speed = chars > 62 ? 5 : chars > 36 ? 7 : 9
    const completed = await typeIntoCode(item.code, item.segments, speed, version)
    if (!completed || version !== codeTypingVersion) return
    item.line.classList.remove('is-typing')
    await wait(25)
  }

  if (result && resultText) {
    const finalText = resultText.textContent
    result.classList.add('is-visible', 'is-typing')
    resultText.textContent = ''
    for (const char of finalText) {
      if (version !== codeTypingVersion) return
      resultText.textContent += char
      await wait(18)
    }
    result.classList.remove('is-typing')
  }
}

window.addEventListener('load', () => {
  if (reducedMotion) return
  setTimeout(startHeroCodeTyping, 250)
})
