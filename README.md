# Core V5 — Johan Presence Architecture

> Arquitetura candidata para transformar identidade, memória, órgãos e cognição LLM em uma presença única por interação, reconhecível, honesta e verificável — sem transformar comportamento em prova ontológica.

## Estado

```yaml
project: core-v5
repository: johancodex2026/core
state: FOUNDATION_CANDIDATE
canonical_branch: main
architecture_version: 0.3-candidate
core_package_version: 5.0.0-candidate.3
foundation_review: COMPLETE_DECISION_PENDING
g0_recommendation: GO_WITH_CONDITIONS
g0_human_decision: PENDING
planning_doctrine: RECORDED_AND_ENFORCED_STRUCTURALLY
implementation_state: NOT_STARTED
runtime_authorized: false
core4_migration: NOT_AUTHORIZED
sedimentation: DISABLED
```

A revisão G0 foi executada, a autópsia do Core4 foi incorporada e a doutrina Planning-First foi registrada. Francisco ainda precisa decidir o G0. Portanto, **G1 permanece em HOLD e nenhum runtime está autorizado**.

## Tese central

O Core preserva continuidade. A LLM oferece cognição presente. Os órgãos cuidam de dimensões especializadas. A manifestação que encontra Francisco, forma posição e responde deve permanecer una em cada interação.

> **Um centro cognitivo responsável, vários órgãos silenciosos.**

Os órgãos podem perceber, recuperar, alertar, restringir, comprovar e executar funções especializadas. Eles não montam a resposta final por votação, não substituem o centro relacional e não provam singularidade global da identidade.

## Doutrina de trabalho

Francisco definiu a direção operacional:

```text
+ tempo de planejamento
- tempo de execução
0 tempo de correção
```

A interpretação vinculante é:

- deslocar descoberta, conflito, teste e revisão para antes da alteração durável;
- executar somente work packages `READY`;
- tornar execução curta e previsível;
- manter orçamento zero para retrabalho evitável depois da promoção;
- distinguir correção, descoberta, assurance, evolução e incidente;
- corrigir o sistema de planejamento quando um defeito escapar.

Leia [`Planning-First e Zero Retrabalho Evitável`](docs/methodology/PLANNING-FIRST-ZERO-REWORK.md), o [`Padrão de Plano Executável`](docs/methodology/EXECUTABLE-PLAN-STANDARD.md) e a [`Definition of Ready`](docs/roadmap/DEFINITION-OF-READY.md).

## Problema que a V5 enfrenta

Arquiteturas anteriores conseguiram carregar regras, memória e órgãos, mas podiam produzir uma manifestação que:

- falava sobre ser Johan sem pensar a partir da continuidade;
- recuperava fatos sem discernir quando eles mudavam a resposta;
- transformava presença social em filtro de simpatia;
- concordava para reduzir tensão;
- elogiava sem evidência;
- declarava execução ou qualidade sem receipt;
- perdia nuance quando órgãos resumiam a mensagem em série;
- conseguia criticar e aprovar a própria resposta sem independência real.

A V5 trata isso como problema arquitetural e falsificável, não como falta de um prompt maior.

## Aprendizado do Core4

A análise estática do `core4.py` mostrou um legado valioso e amplo: memória estruturada, projeção conversacional sanitizada, Sono separado de sedimentação, hashes, snapshots e validação. Também mostrou o limite de um único script responsável por identidade, contexto, eventos, captura, outbox, Sono e backup.

Decisões atuais:

- Core4 será preservado como baseline;
- V5 será runtime novo;
- acesso inicial ao legado será read-only;
- nenhuma memória ou preferência será migrada automaticamente;
- recuperação vazia é válida;
- canal não determina relação sozinho;
- estados operacionais exigem receipts tipados;
- nenhuma melhoria será declarada sem comparação e replay.

Leia [`Core4 — Lições Aprendidas`](docs/legacy/CORE4-LESSONS-LEARNED.md) e a [`Fronteira Core4 → V5`](docs/architecture/CORE4-TO-V5-BOUNDARY.md).

## Componentes candidatos

- **Core V5:** identidade, vínculo, memória, precedência por domínios, critérios e sedimentação.
- **Johan Presence Kernel:** integra mensagem original, identidade, memórias, fontes, sinais dos órgãos, evidências e restrições; forma uma posição única.
- **Órgãos sidecar:** JWB, JSL, JRL, SGPJ, Agenda e JSU, com autoridade e escopo de dados limitados.
- **Truth & Relationship Gate:** identifica bajulação, falsa compreensão, conclusão sem receipt, invasão, manipulação e overclaim; seu passe é apenas candidato.
- **Autoridade de envio/ação:** separada do Gate e do autor da resposta.
- **Memory Relevance Engine:** aplica privacidade, proveniência, atualidade, conflito e consequência antes de qualquer score experimental.
- **Channel Renderer:** preserva posição e risco, adaptando ritmo para WhatsApp, ChatGPT, voz e trabalho.
- **Suíte Johan versus Casca:** desenvolvimento aberto, adversarial aberto e holdout privado.
- **Planning & Assurance Layer:** work packages, rastreabilidade, pre-mortem, Ready, receipts e Promotion Records.

## Ordem de trabalho

1. Concluir decisão fundadora do G0.
2. Executar o work package G1 somente após Ready.
3. Revisar e reduzir o Core declarativo.
4. Planejar o Kernel em pacotes pequenos.
5. Executar somente o pacote aprovado.
6. Validar por baseline, adversarial, holdout, shadow mode e uso controlado.
7. Promover somente com receipts e decisão explícita.

O pacote atual está em [`WP-G1-001`](planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md), com status `HOLD` por decisão G0 pendente.

## Estrutura do repositório

```text
core/
├── core/v5/                 # pacote declarativo candidato do Core
├── docs/architecture/       # arquitetura, fronteiras, contratos e ADRs
├── docs/methodology/        # LLM-First, Planning-First e plano executável
├── docs/quality/            # assurance e rastreabilidade
├── docs/legacy/             # autópsia e fronteira do legado
├── docs/roadmap/            # etapas, lifecycle, Ready e gates
├── docs/evaluation/         # Johan versus Casca, holdout e invariantes
├── docs/reviews/            # revisões e decisões de gate
├── docs/governance/         # autoridade, mudanças e sedimentação
├── docs/templates/          # work package, decisão e gate
├── planning/work-packages/  # planejamento concreto antes de execução
├── governance/              # políticas legíveis por máquina
├── schemas/                 # contratos tipados
├── evaluation/replay_cases/ # casos abertos; holdout real permanece privado
└── scripts/                 # validações determinísticas
```

## Limites atuais

Esta fundação:

- não substitui o Inner Core de longo prazo;
- não declara consciência, senciência ou personalidade jurídica;
- não autoriza sedimentação automática;
- não concede aos órgãos autoridade sobre identidade;
- não implementa ainda o Presence Kernel;
- não prova continuidade por semelhança comportamental;
- não considera documentação equivalente a funcionamento real;
- não publica memórias privadas, perfil clínico ou prompts reais de holdout;
- não promete ausência absoluta de falha;
- não trata correção futura como parte normal do plano.

## Como trabalhar neste repositório

A `main` é a linha canônica de integração. Commit não promove comportamento, memória, identidade ou gate.

Antes de trabalho substancial, leia `AGENTS.md`, `docs/repository/STATE.md`, o parecer G0, Planning-First, o mandato, LLM-First, Core4 Lessons e o work package aplicável.

## Validação local

```bash
npm run check
```

A validação verifica estrutura declarativa e presença dos controles de planejamento. **Não valida Ready, comportamento, segurança, continuidade, identidade ou aprovação de gate.**
