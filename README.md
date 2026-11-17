# Portal do Aluno — COTEC Catalão | Pilotagem de Drones

Projeto inicial em Next.js, pronto para Vercel.

## O que já está incluído
- Página inicial responsiva para celular e computador.
- Acesso ao portal por senha geral.
- Área de simulado com senha separada (endpoint preparado).
- Links para SISANT, SARPAS, ANATEL, ANAC e publicações DECEA.
- Checklist básico de segurança e biblioteca de fontes oficiais.

## Configuração de segurança
No painel do projeto Vercel, em **Settings → Environment Variables**, cadastre:
- `SESSION_SECRET`: string aleatória com pelo menos 32 caracteres.
- `PORTAL_PASSWORD`: senha geral compartilhada com a turma.
- `SIMULADO_PASSWORD`: senha exclusiva para liberar os simulados.

Depois faça novo deploy. Não coloque senhas no código, no GitHub ou neste README.

## Observação importante sobre o simulado
O login do portal e a validação da sessão já estão preparados. Para liberar a rota `/simulado`, o instrutor deverá entrar na área de liberação com a senha de simulado. Nesta primeira versão, a tela de questões está montada como protótipo visual; a tela de liberação da senha do simulado e o banco de questões administrável são próximos incrementos.

## Executar localmente
1. Instale Node.js 20 ou superior.
2. Copie `.env.example` para `.env.local` e defina as três variáveis.
3. Execute `npm install` e `npm run dev`.
4. Abra `http://localhost:3000`.

## Publicar na Vercel
Importe este projeto na Vercel a partir de um repositório GitHub e configure as variáveis de ambiente antes do deploy.

## Atualização normativa
Os links levam às páginas oficiais dos órgãos. Antes de inserir resumos de regulamentos no material do curso, confira o texto consolidado e a edição vigente da ANAC/DECEA. Este portal é material de apoio e não substitui as normas oficiais nem autorizações operacionais.
