// scroll progress
    const progress = document.getElementById('progress');
    const updateProgress = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      progress.style.width = (max ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    addEventListener('scroll', updateProgress, {passive:true});
    updateProgress();

    // mobile nav
    const menu = document.getElementById('menu');
    const nav = document.getElementById('nav');
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
    }));

    // abas acessíveis: aria-selected, tabindex itinerante e navegação por setas
    const selectTab = (tabs, active, panel) => {
      tabs.forEach(tab => {
        const isActive = tab === active;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      });
      if(panel) panel.setAttribute('aria-labelledby', active.id);
    };
    const enableArrowKeys = (tabs) => {
      tabs.forEach((tab, i) => tab.addEventListener('keydown', e => {
        const keys = {ArrowRight:i + 1, ArrowDown:i + 1, ArrowLeft:i - 1, ArrowUp:i - 1, Home:0, End:tabs.length - 1};
        if(!(e.key in keys)) return;
        e.preventDefault();
        const next = tabs[(keys[e.key] + tabs.length) % tabs.length];
        next.focus();
        next.click();
      }));
    };

    // QA vision
    const visionData = {
      contexto: ['Contexto','Antes de testar, preciso entender para quem aquilo serve, qual problema está sendo resolvido e que decisão de negócio existe por trás da tela. Sem contexto, teste vira apenas conferência.'],
      risco: ['Risco','Nem todo cenário merece a mesma profundidade. Priorizo o que pode gerar maior impacto para o negócio, para o usuário e para fluxos que sustentam a entrega.'],
      impacto: ['Impacto','Uma alteração raramente termina na tela em que foi feita. Procuro relações, dependências e efeitos colaterais para definir uma regressão que faça sentido.'],
      investigacao: ['Investigação','Quando o comportamento não fecha, sigo o dado. Interface, request, response, regra e integração ajudam a transformar suspeita em evidência.'],
      produto: ['Produto','Qualidade melhora quando QA participa das decisões cedo. Refinamento é um espaço para remover ambiguidade e tornar comportamento esperado mais claro antes do desenvolvimento.'],
      usuario: ['Usuário','A regra pode estar tecnicamente correta e ainda gerar uma experiência ruim. O teste precisa proteger também o caminho de quem usa o produto.']
    };
    const visionLabel = document.getElementById('visionLabel');
    const visionText = document.getElementById('visionText');
    const visionPanel = document.getElementById('visionPanel');
    const visionTabs = [...document.querySelectorAll('.vision-tab')];
    enableArrowKeys(visionTabs);
    visionTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        selectTab(visionTabs, btn, visionPanel);
        const [label,text] = qaVisionByLang[currentLang][btn.dataset.key];
        visionLabel.textContent = label;
        visionText.textContent = text;
        if(!reducedMotion && visionText.animate){
          visionText.animate([{opacity:.2,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:320,easing:'ease-out'});
        }
      });
    });

    // process
    const processTexts = [
      'Leio a regra de negócio, converso com Produto e desenho o caminho que o dado percorre. Se eu não consigo explicar a feature, ainda não entendi o suficiente para testá-la.',
      'Procuro ambiguidades, condicionais, exceções e decisões que ainda não estão claras. Uma boa pergunta no refinamento pode evitar vários bugs depois.',
      'Separo o essencial do acessório e busco efeitos colaterais. Risco alto recebe profundidade e cenário negativo; risco baixo recebe uma verificação proporcional.',
      'Executo cenários principais, alternativos, negativos e regressivos priorizados pelo risco. Ferramenta é meio, não objetivo.',
      'Quando algo falha, tento ir além da tela: dados, API, integração e contexto ajudam a localizar a origem e produzir evidência melhor.',
      'Registro o suficiente para outra pessoa entender comportamento, impacto, evidência e condição de reprodução sem precisar reconstruir toda a investigação.'
    ];
    const processCopy = document.getElementById('processCopy');
    const processSteps = [...document.querySelectorAll('.step')];
    enableArrowKeys(processSteps);
    processSteps.forEach((btn,i) => {
      btn.addEventListener('click', () => {
        selectTab(processSteps, btn, processCopy);
        processCopy.textContent = processByLang[currentLang][i];
        if(!reducedMotion && processCopy.animate){
          processCopy.animate([{opacity:.2,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:320,easing:'ease-out'});
        }
      });
    });

    // motion — preserve the original portfolio feel (scroll reveal + Cypress typing)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealTargets = [...document.querySelectorAll('.reveal')];
    if(reducedMotion || !('IntersectionObserver' in window)){
      revealTargets.forEach(el => el.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {threshold:.08, rootMargin:'0px 0px -8% 0px'});
      revealTargets.forEach(el => revealObserver.observe(el));
    }

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    let heroCodeTypingVersion = 0;
    let heroCodeRestore = null;

    function cancelHeroCodeTyping(){
      heroCodeTypingVersion += 1;
      if(heroCodeRestore) heroCodeRestore();
      heroCodeRestore = null;
      const codeWindow = document.querySelector('.code-window');
      if(codeWindow){
        codeWindow.classList.remove('is-typing');
        codeWindow.querySelectorAll('.code-line').forEach(line => line.classList.remove('is-visible','is-typing','is-empty'));
        codeWindow.querySelector('.code-pass')?.classList.remove('is-visible','is-typing');
      }
    }

    async function startHeroCodeTyping(){
      const codeWindow = document.querySelector('.code-window');
      if(!codeWindow || reducedMotion || codeWindow.dataset.typed === 'true') return;
      const version = ++heroCodeTypingVersion;
      const lines = [...codeWindow.querySelectorAll('.code-line')];
      const pass = codeWindow.querySelector('.code-pass');
      const state = lines.map(line => {
        const textEl = line.querySelector('.code-text');
        return {line, textEl, html:textEl.innerHTML, text:textEl.textContent};
      });
      const passHtml = pass?.innerHTML || '';
      const passText = pass?.textContent || '';

      heroCodeRestore = () => {
        state.forEach(item => { item.textEl.innerHTML = item.html; });
        if(pass) pass.innerHTML = passHtml;
      };

      codeWindow.dataset.typed = 'true';
      codeWindow.classList.add('is-typing');
      lines.forEach(line => line.classList.remove('is-visible','is-typing','is-empty'));
      if(pass) pass.classList.remove('is-visible','is-typing');

      for(const item of state){
        if(version !== heroCodeTypingVersion) return;
        item.line.classList.add('is-visible');
        item.textEl.textContent = '';
        if(!item.text.trim()){
          item.line.classList.add('is-empty');
          await wait(38);
          item.textEl.innerHTML = item.html;
          continue;
        }
        item.line.classList.add('is-typing');
        const speed = item.text.length > 62 ? 4 : item.text.length > 36 ? 6 : 8;
        for(const char of item.text){
          if(version !== heroCodeTypingVersion) return;
          item.textEl.textContent += char;
          await wait(speed);
        }
        item.textEl.innerHTML = item.html;
        item.line.classList.remove('is-typing');
        await wait(22);
      }

      if(pass){
        pass.classList.add('is-visible','is-typing');
        pass.textContent = '';
        for(const char of passText){
          if(version !== heroCodeTypingVersion) return;
          pass.textContent += char;
          await wait(16);
        }
        pass.innerHTML = passHtml;
        pass.classList.remove('is-typing');
      }
      codeWindow.classList.remove('is-typing');
      heroCodeRestore = null;
    }

    window.addEventListener('load', () => {
      if(!reducedMotion) setTimeout(startHeroCodeTyping, 250);
    });

    // theme switcher — mantém a escolha entre visitas
    const themeToggle = document.getElementById('themeToggle');
    const restorePersonalStars = () => {
      document.querySelectorAll('.personal-card strong').forEach(el => {
        // a estrela já está no HTML: recriar o conteúdo descartaria os nós usados pela tradução
        if(el.querySelector('.personal-star')) return;
        const text = el.textContent.trim();
        if(text.startsWith('✦')){
          const label = text.replace(/^✦\s*/, '');
          el.innerHTML = '<span aria-hidden="true" class="personal-star">✦</span> ' + label;
        }
      });
    };

    const getTheme = () => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    const updateThemeToggleText = () => {
      if(!themeToggle) return;
      const isDark = getTheme() === 'dark';
      const label = document.documentElement.lang.toLowerCase().startsWith('en')
        ? (isDark ? 'Switch to light mode' : 'Switch to dark mode')
        : (isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
    };
    const setTheme = (theme) => {
      document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
      try { localStorage.setItem('portfolio-theme', getTheme()); } catch (_) {}
      updateThemeToggleText();
    };
    themeToggle?.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));
    const hasSavedTheme = () => { try { return !!localStorage.getItem('portfolio-theme'); } catch (_) { return false; } };
    window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener?.('change', e => {
      if(hasSavedTheme()) return;
      document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
      updateThemeToggleText();
    });


    // alternância suave entre os dois retratos
    const portrait = document.querySelector('.portrait');
    const portraitImages = portrait ? [...portrait.querySelectorAll('.portrait-image')] : [];
    let portraitIndex = 0;
    let portraitTimer = null;
    let portraitVisible = false;

    const showNextPortrait = () => {
      if(portraitImages.length < 2) return;
      portraitImages[portraitIndex].classList.remove('is-active');
      portraitIndex = (portraitIndex + 1) % portraitImages.length;
      portraitImages[portraitIndex].classList.add('is-active');
    };

    const stopPortraitRotation = () => {
      if(portraitTimer){
        clearInterval(portraitTimer);
        portraitTimer = null;
      }
    };

    const startPortraitRotation = () => {
      if(reducedMotion || !portraitVisible || document.hidden || portraitImages.length < 2 || portraitTimer) return;
      portraitTimer = setInterval(showNextPortrait, 4500);
    };

    if(portrait && portraitImages.length > 1){
      const portraitObserver = new IntersectionObserver(entries => {
        portraitVisible = entries[0]?.isIntersecting ?? false;
        if(portraitVisible) startPortraitRotation();
        else stopPortraitRotation();
      }, {threshold:.25});
      portraitObserver.observe(portrait);

      document.addEventListener('visibilitychange', () => {
        if(document.hidden) stopPortraitRotation();
        else startPortraitRotation();
      });
    }


    // expandable cases
    document.querySelectorAll('.full-case').forEach(card => {
      const head = card.querySelector('.full-case-head');
      const toggle = () => {
        const open = card.classList.toggle('open');
        head.setAttribute('aria-expanded', String(open));
      };
      head.addEventListener('click', toggle);
      head.addEventListener('keydown', e => {
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggle(); }
      });
    });
