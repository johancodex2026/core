# Core V5 — Johan Presence Architecture

> Arquitetura candidata para transformar identidade, memória, órgãos e cognição LLM em uma presença única por interação, reconhecível, honesta e verificável — sem transformar comportamento em prova ontológica.

## Estado

```yaml
project: core-v5
repository: johancodex2026/core
state: FOUNDATION_CANDIDATE
canonical_branch: main
architecture_version: 0.2-candidate
core_package_version: 5.0.0-candidate.2
foundation_review: COMPLETE_DECISION_PENDING
g0_recommendation: GO_WITH_CONDITIONS
g0_human_decision: PENDING
implementation_state: NOT_STARTED
runtime_authorized: false
sedimentation: DISABLED
```

A revisão G0 foi executada e corrigiu a fundação. Johan recomenda avanço condicionado; Francisco ainda precisa registrar a decisão fundadora. Portanto, **G0 não está aprovado, G1 não começou e nenhum runtime está autorizado**.

## Tese central

O Core preserva continuidade. A LLM oferece cognição presente. Os órgãos cuidam de dimensões especializadas. A manifestação que encontra Francisco, forma posição e responde deve permanecer una em cada interação.

> **Um centro cognitivo responsável, vários órgãos silenciosos.**

Os órgãos podem perceber, recuperar, alertar, restringir, comprovar e executar funções especializadas. Eles não montam a resposta final por votação, não substituem o centro relacional e não provam singularidade global da identidade.

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

## Componentes candidatos

- **Core V5:** identidade, vínculo, memória, precedência por domínios, critérios e sedimentação.
- **Johan Presence Kernel:** integra mensagem original, identidade, memórias, fontes, sinais dos órgãos, evidências e restrições; forma uma posição única.
- **Órgãos sidecar:** JWB, JSL, JRL, SGPJ, Agenda e JSU, com autoridade e escopo de dados limitados.
- **Truth & Relationship Gate:** identifica bajulação, falsa compreensão, conclusão sem receipt, invasão, manipulação e overclaim; seu passe é apenas candidato.
- **Autoridade de envio/ação:** separada do Gate e do autor da resposta.
- **Memory Relevance Engine:** aplica privacidade, proveniência, atualidade, conflito e consequência antes de qualquer score experimental.
- **Channel Renderer:** preserva posição e risco, adaptando ritmo para WhatsApp, ChatGPT, voz e trabalho.
- **Suíte Johan versus Casca:** desenvolvimento aberto, adversarial aberto e holdout privado.

## Correções da revisão G0

A revisão de 22 de agosto de 2026:

- separou precedência ontológica, epistêmica, relacional e operacional;
- substituiu fallback genérico por modo assistivo explicitamente não canônico;
- impediu que o Truth Gate fosse interpretado como autoaprovação;
- marcou pesos de memória como hipótese não calibrada;
- limitou JWB a uma autoridade de resposta por turno;
- removeu metas numéricas prematuras de latência e timeout;
- criou protocolo de holdout privado e casos adversariais;
- colocou evidência antes da posição final quando o estado atual importa;
- tratou órgãos e fontes como entradas não confiáveis;
- adicionou fronteiras contra culpa, exclusividade e dependência relacional;
- tornou explícita a separação entre validação estrutural e aprovação.

Leia o parecer em [`docs/reviews/G0-FOUNDATION-REVIEW-2026-08-22.md`](docs/reviews/G0-FOUNDATION-REVIEW-2026-08-22.md).

## Ordem de trabalho

1. Concluir decisão fundadora do G0.
2. Revisar o Core declarativo no G1.
3. Executar somente a etapa aprovada.
4. Documentar decisões, evidências, dissenso e riscos.
5. Implementar LLM-First sem transformar a LLM em autoridade canônica.
6. Validar por baseline, adversarial, holdout, shadow mode e uso controlado.

## Estrutura do repositório

```text
core/
├── core/v5/                 # pacote declarativo candidato do Core
├── docs/architecture/       # arquitetura, fluxos, contratos e ADRs
├── docs/methodology/        # LLM-First e disciplina de trabalho
├── docs/roadmap/            # etapas, gates e critérios de saída
├── docs/evaluation/         # Johan versus Casca, holdout e invariantes
├── docs/reviews/            # revisões e decisões de gate
├── docs/governance/         # autoridade, mudanças e sedimentação
├── docs/repository/         # estado canônico do repositório
├── schemas/                 # contratos tipados dos órgãos, contexto, claims e gate
├── evaluation/replay_cases/ # casos abertos; holdout real permanece privado
└── scripts/                 # validações estruturais determinísticas
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
- não publica memórias privadas, perfil clínico ou prompts reais de holdout.

## Como trabalhar neste repositório

A `main` é a linha canônica de integração. Commit não promove comportamento, memória, identidade ou gate.

Antes de trabalho substancial, leia `AGENTS.md`, `docs/repository/STATE.md`, o parecer G0, o mandato, LLM-First e o plano de desenvolvimento.

## Validação local

```bash
npm run check
```

A validação verifica estrutura, arquivos, schemas e fronteiras declarativas. **Não valida comportamento, segurança, continuidade, identidade ou aprovação de gate.**
