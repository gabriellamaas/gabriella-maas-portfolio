// bilingual PT / EN
    const staticTranslations = new Map(Object.entries({
      'Sobre':'About','Visão de QA':'QA vision','Experiência':'Experience','Projetos':'Projects','Além do QA':'Beyond QA','Currículo ↗':'CV ↗',
      'Analista de QA · Qualidade de Produto · Testes & Automação':'QA Analyst · Product Quality · Testing & Automation',
      'Qualidade não começa no teste. Começa em entender o produto.':'Quality does not start with testing. It starts with understanding the product.',
      'Trabalho entre Produto e Desenvolvimento para transformar regras, riscos e dependências em decisões de teste mais conscientes, do refinamento à homologação.':'I work between Product and Development to turn rules, risks, and dependencies into more intentional testing decisions, from refinement through validation.',
      'Ver projetos ↓':'View projects ↓','GitHub ↗':'GitHub ↗','E-mail':'Email',
      '01 — Sobre':'01 — About','Quem eu sou profissionalmente':'Who I am professionally',
      'Atuo com qualidade de software em produtos que exigem entendimento de regra de negócio, atenção a detalhes e visão do todo.':'I work in software quality on products that require business-rule understanding, attention to detail, and a broad view of the system.',
      'Gosto de entrar cedo na conversa, ainda no refinamento, porque muitos problemas podem ser evitados antes de existir uma tela para testar. Durante a validação, investigo comportamento além do sintoma: regra, integração, dado e contexto fazem parte do mesmo problema.':'I like to join the conversation early, during refinement, because many problems can be prevented before there is even a screen to test. During validation, I investigate beyond the symptom: rules, integrations, data, and context are part of the same problem.',
      'Produto, QA e Desenvolvimento não são etapas separadas. São partes do mesmo processo.':'Product, QA, and Development are not separate stages. They are parts of the same process.',
      '02 — Visão de qualidade':'02 — Quality vision','A pergunta não é “isso funciona?”\nÉ “se isso mudar, o que mais quebra?”':'The question is not “does this work?”\nIt is “if this changes, what else can break?”',
      'Contexto':'Context','Risco':'Risk','Impacto':'Impact','Investigação':'Investigation','Produto':'Product','Usuário':'User',
      '03 — Trajetória':'03 — Journey','Como eu cheguei até aqui':'How I got here','Cada experiência acrescentou uma camada ao meu jeito de pensar qualidade: produto, processo, automação e análise de impacto.':'Each experience added a layer to how I think about quality: product, process, automation, and impact analysis.',
      'Visão sistêmica':'Systems thinking','Quando análise de impacto virou parte central do meu jeito de testar':'When impact analysis became central to how I test',
      'Atuo em um ERP web com regras de negócio e fluxos conectados. Participo de refinamentos, questiono cenários antes da implementação e acompanho a entrega até a homologação.':'I work on a web ERP with connected business rules and flows. I participate in refinements, question scenarios before implementation, and follow deliveries through validation.',
      'Mapeio riscos e efeitos colaterais entre telas, módulos e fluxos relacionados.':'I map risks and side effects across screens, modules, and related flows.',
      'Crio cenários positivos, negativos e regressivos a partir de regras e critérios de aceite.':'I design positive, negative, and regression scenarios from rules and acceptance criteria.',
      'Uso API e automação como apoio quando ajudam a aprofundar a validação.':'I use APIs and automation as support when they add depth to validation.',
      'Consolidando processo':'Consolidating process','Transformar requisito em comportamento testável':'Turning requirements into testable behavior',
      'Aprofundei testes funcionais e regressivos em aplicações web, com foco em transformar critérios de aceite em cenários claros e priorizar regressão pelo risco.':'I deepened my work with functional and regression testing for web applications, focusing on turning acceptance criteria into clear scenarios and prioritizing regression by risk.','Criei, revisei e mantive cenários e casos de teste a partir de requisitos, critérios de aceite e regras de negócio.':'I created, reviewed, and maintained test scenarios and test cases based on requirements, acceptance criteria, and business rules.','Priorizei fluxos críticos, cenários alternativos e pontos relevantes para regressão.':'I prioritized critical flows, alternative scenarios, and relevant regression points.','Validei novas funcionalidades e correções antes das releases, acompanhando entregas e homologações.':'I validated new features and fixes before releases, following deliveries through validation.',
      'Mergulho em automação':'Deep dive into automation','Automação como engenharia, não como fim':'Automation as engineering, not as an end in itself',
      'Trabalhei com Cypress, JavaScript e Git/GitFlow na construção e manutenção de cenários E2E. Foi onde aprofundei arquitetura, reutilização e manutenção de suíte.':'I worked with Cypress, JavaScript, and Git/GitFlow building and maintaining E2E scenarios. This is where I deepened my knowledge of architecture, reuse, and suite maintainability.','Desenvolvi e mantive testes automatizados utilizando Cypress e JavaScript.':'I developed and maintained automated tests using Cypress and JavaScript.','Estruturei cenários E2E para validar fluxos críticos e apoiar a regressão.':'I structured E2E scenarios to validate critical flows and support regression testing.','Executei testes funcionais como complemento às validações automatizadas e acompanhei os bugs encontrados.':'I ran functional tests alongside automated validation and followed up on the bugs found.',
      'Onde tudo começou':'Where it all started','Meu primeiro emprego em tecnologia já foi em QA':'My first job in tech was already in QA',
      'Comecei em QA aprendendo o produto ao mesmo tempo em que aprendia a testar. Trabalhei com testes manuais, funcionais, exploratórios, automação, validação de APIs e testes de consistência no banco de dados com SQL.':'I started in QA learning the product while learning how to test. I worked with manual, functional, exploratory and automated testing, API validation, and database consistency checks with SQL.','Executei testes funcionais, exploratórios, regressivos e automatizados em aplicações web.':'I ran functional, exploratory, regression, and automated tests on web applications.','Validei APIs REST utilizando Postman para conferir comportamento e respostas dos serviços.':'I validated REST APIs with Postman to verify service behavior and responses.','Realizei testes de consistência no banco de dados com SQL para validar dados e comportamento das funcionalidades.':'I performed database consistency checks with SQL to validate data and feature behavior.',
      '04 — Como eu trabalho':'04 — How I work','Seis movimentos. Aprendizado o tempo todo.':'Six movements. Continuous learning.',
      'Entender':'Understand','Questionar':'Question','Mapear riscos':'Map risks','Testar':'Test','Investigar':'Investigate','Comunicar':'Communicate',
      '05 — Na prática':'05 — In practice','Como essa visão aparece no trabalho':'How this vision shows up in the work',
      'pensamento → evidência':'thinking → evidence',
      'Iniciativa · análise de impacto':'Initiative · impact analysis','Como tornar relações, dependências e possíveis efeitos colaterais de um ERP mais visíveis antes de decidir o que testar?':'How can relationships, dependencies, and potential side effects in an ERP become more visible before deciding what to test?',
      'A proposta é transformar conhecimento espalhado em um mapa consultável para apoiar refinamento, análise de impacto e definição de regressão.':'The proposal is to turn scattered knowledge into a searchable map that supports refinement, impact analysis, and regression scope definition.',
      'mudança':'change','Funcionalidade alterada':'Changed functionality','relação':'relation','Regra de negócio':'Business rule','impacto':'impact','Fluxo relacionado':'Related flow','Integração / dado':'Integration / data','regressão':'regression','Permissões':'Permissions','Relatórios / saídas':'Reports / outputs','Cenário alternativo':'Alternative scenario','Exemplo conceitual · sem dados internos de empresa ou cliente':'Conceptual example · no internal company or client data',
      'Projeto público · automação':'Public project · automation','QA Automation Framework · Cypress':'QA Automation Framework · Cypress','Aqui a automação deixa de ser só discurso: o código está público.':'Here automation is more than a talking point: the code is public.','Projeto E2E em Cypress e JavaScript usando Page Object Model, com cenários de login, carrinho e checkout em uma aplicação de demonstração.':'E2E project in Cypress and JavaScript using Page Object Model, with login, cart, and checkout scenarios in a demo application.','Ver projeto no GitHub ↗':'View project on GitHub ↗',
      'Case anonimizado · investigação':'Anonymized case · investigation','Quando a tela mostra o sintoma, mas não a origem':'When the screen shows the symptom, but not the source','01 · Sintoma':'01 · Symptom','02 · Investigação':'02 · Investigation','03 · Evidência':'03 · Evidence','04 · Comunicação':'04 · Communication',
      'A interface apresenta um comportamento inesperado ou uma informação diferente do esperado.':'The interface shows unexpected behavior or information that differs from what is expected.','Reproduzir o fluxo e comparar interface, request, response e regra de negócio.':'Reproduce the flow and compare the interface, request, response, and business rule.','Usar a API para separar problema de apresentação, integração, dado ou regra.':'Use the API to distinguish presentation, integration, data, or rule issues.','Levar ao time o comportamento observado, contexto, impacto e evidências para reduzir ida e volta.':'Bring the observed behavior, context, impact, and evidence to the team to reduce back-and-forth.',
      'Testes de API':'API testing','Validar o que a tela não mostra':'Validate what the screen does not show','Contrato':'Contract','Campos obrigatórios, tipos, estrutura e consistência do retorno.':'Required fields, types, structure, and response consistency.','Regra':'Rule','Comparação entre o comportamento esperado e o que o serviço realmente responde.':'Compare expected behavior with what the service actually returns.','Negativos':'Negative cases','Permissões, entradas inválidas, ausências de dados e respostas de erro.':'Permissions, invalid inputs, missing data, and error responses.','Diagnóstico':'Diagnosis','Postman como apoio para separar interface, integração e regra de negócio.':'Use Postman to help distinguish interface, integration, and business-rule issues.',
      '06 — Aprendizado contínuo':'06 — Continuous learning','Estudo que volta para a prática':'Learning that returns to practice','Não trato aprendizado como coleção de cursos. Tento conectar o que estudo a perguntas que aparecem no trabalho.':'I do not treat learning as a collection of courses. I try to connect what I study to questions that come up at work.','IA + QA':'AI + QA','Ampliar análise, investigação e tarefas repetitivas sem terceirizar pensamento crítico.':'Expand analysis, investigation, and repetitive tasks without outsourcing critical thinking.','Arquitetura':'Architecture','Entender melhor caminho de dados, integrações e comportamento além da interface.':'Better understand data paths, integrations, and behavior beyond the interface.','Aprimorar formas de visualizar dependências e construir regressão com contexto.':'Improve ways to visualize dependencies and build regression with context.','Análise e Desenvolvimento de Sistemas':'Systems Analysis and Development','A graduação amplia minha visão para além do teste e me ajuda a conversar com Desenvolvimento com mais contexto técnico.':'My degree broadens my view beyond testing and helps me communicate with Development with more technical context.','Interface, API, banco de dados e fluxo da informação.':'Interface, API, database, and information flow.','Engenharia de software e modelagem de sistemas.':'Software engineering and systems modeling.','Investigação de comportamento além do que aparece na tela.':'Investigating behavior beyond what appears on the screen.',
      '07 — Além do QA':'07 — Beyond QA','Quem é a Gabriella quando desliga o computador?':'Who is Gabriella when she turns off the computer?','Curiosidade, criatividade e uma tendência quase inevitável de tentar entender como as coisas se encaixam.':'Curiosity, creativity, and an almost inevitable tendency to understand how things fit together.','Cresci no interior do Paraná e a tecnologia entrou cedo no meu repertório. Antes de QA, também olhei para UI/UX. Foi um caminho que não segui profissionalmente, mas que deixou um olhar forte para produto e para quem usa.':'I grew up in the countryside of Paraná, and technology became part of my world early. Before QA, I also explored UI/UX. It was a path I did not pursue professionally, but it gave me a strong product and user perspective.','✦ Criatividade':'✦ Creativity','Desenho, pintura e hobbies manuais me dão outro jeito de exercitar observação e detalhe.':'Drawing, painting, and hands-on hobbies give me another way to practice observation and attention to detail.','✦ Quebra-cabeça':'✦ Puzzles','Fragmentos soltos até tudo fazer sentido. Talvez seja o hobby que melhor traduz a minha cabeça.':'Loose fragments until everything makes sense. It may be the hobby that best describes how my mind works.','✦ Música':'✦ Music','Comecei a colecionar vinis e gosto do ritual de desacelerar para ouvir um álbum inteiro.':'I started collecting vinyl records and enjoy the ritual of slowing down to listen to a full album.',
      '08 — Contato':'08 — Contact','Se qualidade também é uma conversa, vamos começar uma?':'If quality is also a conversation, shall we start one?','Para vagas, projetos ou uma boa conversa sobre QA, produto, risco e automação.':'For opportunities, projects, or a good conversation about QA, product, risk, and automation.','Gabriella Maas · Quality Assurance':'Gabriella Maas · Quality Assurance','2026':'2026',

      /* Traduções de nós que ficam separados visualmente por <strong>, <br> ou componentes. */
      'gabriella além do currículo':'gabriella beyond the CV',
      
      'Produto, QA e Desenvolvimento não são etapas separadas.':'Product, QA, and Development are not separate stages.',
      'São partes do mesmo processo.':'They are parts of the same process.',
      'A pergunta não é “isso funciona?”':'The question is not “does this work?”',
      'É':'It is',
      '“se isso mudar, o que mais quebra?”':'“if this changes, what else can break?”',
      'Se qualidade também é uma conversa,':'If quality is also a conversation,',
      'vamos começar uma?':'shall we start one?',
      'Out/2025 — atual':'Oct/2025 — present','Mar/2025 — Ago/2025':'Mar/2025 — Aug/2025','Jun/2024 — Dez/2024':'Jun/2024 — Dec/2024','Ago/2022 — Jun/2024':'Aug/2022 — Jun/2024',
      'Testes funcionais':'Functional testing','Regressão':'Regression','Critérios de aceite':'Acceptance criteria','Homologação':'Validation',
      'dados de teste':'test data',
      
      'esta estrutura está pronta, mas o conteúdo é propositalmente genérico. Na próxima rodada, substituímos por um caso real seu, anonimizado, sem inventar resultado ou detalhe interno.':'this structure is ready, but the content is intentionally generic. In the next round, we will replace it with a real anonymized case, without inventing results or internal details.',
      'Evoluir formas de visualizar dependências e construir regressão com contexto.':'Improve ways to visualize dependencies and build regression with context.',
      'LinkedIn ↗':'LinkedIn ↗'
    }));

    const qaVisionByLang = {
      pt: {
        contexto:['Contexto','Antes de testar, preciso entender para quem aquilo serve, qual problema está sendo resolvido e que decisão de negócio existe por trás da tela. Sem contexto, teste vira apenas conferência.'],
        risco:['Risco','Nem todo cenário merece a mesma profundidade. Priorizo o que pode gerar maior impacto para o negócio, para o usuário e para fluxos que sustentam a entrega.'],
        impacto:['Impacto','Uma alteração raramente termina na tela em que foi feita. Procuro relações, dependências e efeitos colaterais para definir uma regressão que faça sentido.'],
        investigacao:['Investigação','Quando o comportamento não fecha, sigo o dado. Interface, request, response, regra e integração ajudam a transformar suspeita em evidência.'],
        produto:['Produto','Qualidade melhora quando QA participa das decisões cedo. Refinamento é um espaço para remover ambiguidade e tornar comportamento esperado mais claro antes do desenvolvimento.'],
        usuario:['Usuário','A regra pode estar tecnicamente correta e ainda gerar uma experiência ruim. O teste precisa proteger também o caminho de quem usa o produto.']
      },
      en: {
        contexto:['Context','Before testing, I need to understand who it serves, what problem is being solved, and what business decision sits behind the screen. Without context, testing becomes mere checking.'],
        risco:['Risk','Not every scenario deserves the same depth. I prioritize what can create greater impact for the business, the user, and the flows that sustain the delivery.'],
        impacto:['Impact','A change rarely ends on the screen where it was made. I look for relationships, dependencies, and side effects to define regression that makes sense.'],
        investigacao:['Investigation','When behavior does not add up, I follow the data. Interface, request, response, rules, and integration help turn suspicion into evidence.'],
        produto:['Product','Quality improves when QA takes part in decisions early. Refinement is a space to remove ambiguity and make expected behavior clearer before development.'],
        usuario:['User','A rule can be technically correct and still create a poor experience. Testing also needs to protect the path of the person using the product.']
      }
    };
    const processByLang = {
      pt: processTexts,
      en: [
        'I read the business rule, talk with Product, and map the path the data will take. If I cannot explain the feature, I do not understand it well enough to test it yet.',
        'I look for ambiguity, conditions, exceptions, and decisions that are still unclear. A good question during refinement can prevent several bugs later.',
        'I separate what is essential from what is secondary and look for side effects. High-risk areas get deeper and negative scenarios; low-risk areas get proportional checks.',
        'I execute main, alternative, negative, and regression scenarios prioritized by risk. Tools are a means, not the objective.',
        'When something fails, I try to go beyond the screen: data, API, integration, and context help locate the source and produce better evidence.',
        'I record enough for another person to understand the behavior, impact, evidence, and reproduction conditions without rebuilding the entire investigation.'
      ]
    };
    let currentLang = 'pt';
    const originalTextNodes = [];
    const collectTextNodes = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node){
          if(!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          if(node.parentElement && ['SCRIPT','STYLE'].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      let n; while(n=walker.nextNode()) originalTextNodes.push([n,n.nodeValue]);
    };
    collectTextNodes();
    const translateStatic = (lang) => {
      originalTextNodes.forEach(([node,orig]) => {
        if(lang==='pt'){ node.nodeValue = orig; return; }
        const lead=orig.match(/^\s*/)[0], trail=orig.match(/\s*$/)[0], core=orig.trim();
        if(staticTranslations.has(core)) node.nodeValue=lead+staticTranslations.get(core)+trail;
      });
    };
    const codeByLang = {
      pt: {
        suite: "'gabriella além do currículo'",
        test: "'mostra mais do que cabe em um CV'",
        context: "'Contexto'",
        risk: "'Risco'",
        impact: "'Impacto'",
        beyond: "'Além do QA'",
        talk: "'Vamos conversar?'"
      },
      en: {
        suite: "'gabriella beyond the CV'",
        test: "'shows more than fits in a CV'",
        context: "'Context'",
        risk: "'Risk'",
        impact: "'Impact'",
        beyond: "'Beyond QA'",
        talk: "'Let\'s talk?'"
      }
    };
    const updateCodeLanguage = (lang) => {
      const t = codeByLang[lang];
      document.getElementById('code-suite').textContent = t.suite;
      document.getElementById('code-test').textContent = t.test;
      document.getElementById('code-context').textContent = t.context;
      document.getElementById('code-risk').textContent = t.risk;
      document.getElementById('code-impact').textContent = t.impact;
      document.getElementById('code-beyond').textContent = t.beyond;
      document.getElementById('code-talk').textContent = t.talk;
    };
    const attributeTextByLang = {
      pt: {
        title:'Gabriella Maas · Portfólio de QA',
        description:'Portfólio de Gabriella Maas · Analista de QA, qualidade de produto, testes funcionais e automação.',
        menu:'Abrir menu',
        code:'Trecho de código Cypress sobre o portfólio',
        vision:'Pilares da visão de QA',
        map:'Exemplo conceitual de mapa de dependências',
        repo:'Estrutura resumida do repositório',
        portrait:'Retrato de Gabriella Maas'
      },
      en: {
        title:'Gabriella Maas · QA Portfolio',
        description:'Gabriella Maas portfolio · QA Analyst, product quality, functional testing, and automation.',
        menu:'Open menu',
        code:'Cypress code snippet about the portfolio',
        vision:'QA vision pillars',
        map:'Conceptual example of a dependency map',
        repo:'Repository structure summary',
        portrait:'Portrait of Gabriella Maas'
      }
    };
    const translateAttributes = (lang) => {
      const t=attributeTextByLang[lang];
      document.title=t.title;
      const meta=document.querySelector('meta[name="description"]');
      if(meta) meta.setAttribute('content',t.description);
      document.getElementById('menu')?.setAttribute('aria-label',t.menu);
      document.querySelector('.code-window')?.setAttribute('aria-label',t.code);
      document.querySelector('.vision-tabs')?.setAttribute('aria-label',t.vision);
      document.querySelector('.map')?.setAttribute('aria-label',t.map);
      document.querySelector('.repo-mini')?.setAttribute('aria-label',t.repo);
      document.querySelector('.portrait img')?.setAttribute('alt',t.portrait);
    };

    const applyLanguage = (lang) => {
      if(typeof cancelHeroCodeTyping === 'function') cancelHeroCodeTyping();
      currentLang = lang;
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
      translateStatic(lang);
      restorePersonalStars();
      updateCodeLanguage(lang);
      translateAttributes(lang);
      document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
      const activeVision=document.querySelector('.vision-tab.active');
      if(activeVision){ const [label,text]=qaVisionByLang[lang][activeVision.dataset.key]; visionLabel.textContent=label; visionText.textContent=text; }
      const activeStep=[...document.querySelectorAll('.step')].findIndex(x=>x.classList.contains('active'));
      processCopy.textContent=processByLang[lang][Math.max(0,activeStep)];
      localStorage.setItem('portfolio-lang',lang);
      if(typeof updateThemeToggleText === 'function') updateThemeToggleText();
    };
    document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang)));

// Restore the saved language after all UI helpers are available.
applyLanguage(localStorage.getItem('portfolio-lang') === 'en' ? 'en' : 'pt');
