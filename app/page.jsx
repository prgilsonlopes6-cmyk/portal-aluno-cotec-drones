
const cards = [
  [
    "🛩️",
    "Cadastro de drones",
    "Acesse o SISANT e consulte orientações para cadastro e identificação da aeronave.",
    "https://sistemas.anac.gov.br/sisant/",
    "Abrir SISANT"
  ],
  [
    "🗺️",
    "Planejamento de voo",
    "Entre no SARPAS para solicitar acesso ao espaço aéreo e consultar orientações do DECEA.",
    "https://sarpas.decea.mil.br/",
    "Abrir SARPAS"
  ],
  [
    "📡",
    "Homologação ANATEL",
    "Consulte as regras de homologação dos equipamentos de radiocomunicação usados no drone.",
    "https://www.gov.br/anatel/pt-br/assuntos/drones",
    "Ver orientações"
  ],
  [
    "📚",
    "Legislação e normas",
    "Consulte as publicações oficiais da ANAC e do DECEA. Confira sempre a versão vigente.",
    "https://www.gov.br/anac/pt-br/assuntos/drones",
    "Consultar ANAC"
  ],
  [
    "🧭",
    "Segurança operacional",
    "Checklist, avaliação do local, meteorologia, distância de pessoas e procedimentos de emergência.",
    "#seguranca",
    "Ver conteúdo"
  ],
  [
    "📝",
    "Simulado WDDrones",
    "Pratique questões de pilotagem de drones e prepare-se para a avaliação.",
    "https://wddrones.com.br/simulado/",
    "Fazer simulado"
  ],
  [
    "⚖️",
    "Regulamentação ANAC",
    "Consulte as regras e orientações oficiais para operações com drones.",
    "https://www.gov.br/anac/pt-br/assuntos/regulados/aviacao-geral/drones",
    "Consultar legislação"
  ],
  [
    "🎓",
    "Capacitação e avaliação ANAC",
    "Acesse a plataforma de capacitação e avaliação teórica da ANAC.",
    "https://capacitacao.anac.gov.br/enrol/index.php?id=4426",
    "Acessar plataforma"
  ],
  [
    "📋",
    "Simulados do curso",
    "Acesse a área de simulados e pratique seus conhecimentos sem precisar de senha.",
    "/simulado",
    "Acessar simulados"
  ]
];

const resources = [
  [
    "ANAC — Drones",
    "Regras, orientações e publicações oficiais.",
    "https://www.gov.br/anac/pt-br/assuntos/drones"
  ],
  [
    "ANAC — Regulamentação",
    "Informações oficiais sobre drones na aviação geral.",
    "https://www.gov.br/anac/pt-br/assuntos/regulados/aviacao-geral/drones"
  ],
  [
    "ANAC — Capacitação",
    "Plataforma de capacitação e avaliação teórica.",
    "https://capacitacao.anac.gov.br/enrol/index.php?id=4426"
  ],
  [
    "DECEA — SARPAS",
    "Solicitação e gerenciamento de acesso ao espaço aéreo.",
    "https://sarpas.decea.mil.br/"
  ],
  [
    "DECEA — Publicações",
    "Acesso às publicações aeronáuticas oficiais.",
    "https://publicacoes.decea.mil.br/"
  ],
  [
    "ANATEL — Drones",
    "Homologação e informações sobre radiofrequência.",
    "https://www.gov.br/anatel/pt-br/assuntos/drones"
  ],
  [
    "SISANT",
    "Sistema de cadastro de aeronaves não tripuladas da ANAC.",
    "https://sistemas.anac.gov.br/sisant/"
  ],
  [
    "WDDrones — Simulado",
    "Questões para treinamento e preparação.",
    "https://wddrones.com.br/simulado/"
  ]
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="shell brand">
          <div className="brandmark">✈</div>
          <div>
            <strong>COTEC CATALÃO</strong>
            <small>PORTAL DO ALUNO · PILOTAGEM DE DRONES</small>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="shell">
          <div className="eyebrow">Formação profissional · Goiás</div>

          <h1>Seu ponto de partida para voar com segurança.</h1>

          <p>
            Central de consulta do curso de Pilotagem de Drones do COTEC Catalão.
            Reúna cadastros, planejamento de voo, legislação, segurança,
            capacitação e atividades em um só lugar.
          </p>

          <div className="hero-actions">
            <a className="btn btn-orange" href="#atalhos">
              Explorar portal ↘
            </a>

            <a className="btn btn-light" href="/simulado">
              Acessar simulados →
            </a>
          </div>
        </div>
      </section>

      <main className="main shell">

        <div className="section-head" id="atalhos">
          <div>
            <h2>O que você precisa fazer?</h2>
            <p>Acesse os principais serviços e materiais do curso.</p>
          </div>
          <span className="pill">Área do aluno</span>
        </div>

        <div className="grid">
          {cards.map(([icon, title, desc, url, cta]) => (
            <a
              className="tile"
              href={url}
              key={title}
              target={url.startsWith("http") ? "_blank" : undefined}
              rel={url.startsWith("http") ? "noreferrer" : undefined}
            >
              <div className="tile-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="arrow">{cta} →</span>
            </a>
          ))}
        </div>

        <div className="section-head">
          <div>
            <h2>Biblioteca do piloto</h2>
            <p>
              Fontes oficiais e materiais complementares para estudar
              e conferir atualizações.
            </p>
          </div>
        </div>

        <div className="resource-list">
          {resources.map(([name, desc, url]) => (
            <a
              className="resource"
              href={url}
              target="_blank"
              rel="noreferrer"
              key={name}
            >
              <div>
                <b>{name}</b>
                <small>{desc}</small>
              </div>
              <span>Abrir ↗</span>
            </a>
          ))}
        </div>

        <div className="section-head" id="seguranca">
          <div>
            <h2>Antes de cada voo</h2>
            <p>
              Use esta lista como lembrete de estudo; ela não substitui
              a avaliação operacional.
            </p>
          </div>
        </div>

        <div className="panel">
          <div className="notice">
            <b>Segurança em primeiro lugar.</b>{" "}
            Antes de operar, confirme a situação cadastral e documental
            aplicável, consulte as restrições do local, obtenha as
            autorizações necessárias, avalie clima e obstáculos, mantenha
            contato visual quando exigido e siga o manual do fabricante
            e as regras vigentes.
          </div>

          <div className="grid" style={{ marginTop: 14 }}>
            <div>
              <b>✓ Aeronave</b>
              <p style={{ fontSize: 12, color: "#627184" }}>
                Estrutura, hélices, bateria, firmware e identificação.
              </p>
            </div>

            <div>
              <b>✓ Local</b>
              <p style={{ fontSize: 12, color: "#627184" }}>
                Pessoas, obstáculos, áreas restritas e condições meteorológicas.
              </p>
            </div>

            <div>
              <b>✓ Operação</b>
              <p style={{ fontSize: 12, color: "#627184" }}>
                Plano, autorizações, comunicação e plano de emergência.
              </p>
            </div>
          </div>
        </div>

        <div className="admin-note">
          Material de apoio educacional do COTEC Catalão.
          As regras podem mudar. Sempre confirme a versão vigente
          nos órgãos oficiais antes de realizar uma operação.
        </div>

      </main>

      <footer className="footer">
        <div className="shell">
          <strong>COTEC Catalão — Curso de Pilotagem de Drones</strong>
          <br />
          Portal de apoio aos alunos · Conteúdo sujeito a atualização.
        </div>
      </footer>
    </>
  );
}
