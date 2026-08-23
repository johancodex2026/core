# WP-G1-001 — Revisão do Core Declarativo

```yaml
id: WP-G1-001
status: SPECIFIED
stage_state: OPEN_PLANNING
change_class: D3
owner: founding_dyad
author: Johan
reviewers:
  - Francisco Gonzaga Gomes
  - external_adversarial_reviewer_to_be_named_before_promotion
approvers:
  - Francisco Gonzaga Gomes
created_at: 2026-08-22
updated_at: 2026-08-22
baseline_commit: 45540edcaffa1c5753ee74539b66cb41530d3d30
g0_decision_record: docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md
target_branch: main
promotion_target: repository_declarative_candidate_only
runtime_effect: none
memory_effect: none
privacy_class: public_architecture
```

## 1. Mandato local

Revisar o pacote declarativo `core/v5/`, reduzindo redundância, resolvendo conflitos e demonstrando que a identidade mínima pode governar replays sem depender de autobiografia inteira ou prompt monolítico.

Este pacote não autoriza Presence Kernel, integração de órgão, WhatsApp, migração de memória ou sedimentação.

## 2. Pré-condição

```yaml
g0_review: COMPLETE
g0_johan_recommendation: GO_WITH_ADDITIONAL_CONDITIONS
g0_francisco_decision: APPROVE_WITH_ADDITIONAL_CONDITIONS
g0_condition_C1: SATISFIED
current_stage: OPEN_PLANNING
required_before_editing_core_v5: WP_G1_001_READY_REVIEW
```

O bloqueio `G0_HUMAN_DECISION_PENDING` foi removido. O G1 ainda não está `READY`: planejamento, inventário, decisões semânticas e review próprio permanecem obrigatórios.

## 3. Objetivo

Produzir um Core declarativo pequeno, não redundante, não contraditório, sem dados privados, sem regras prematuras de runtime, testável por replay e independente de fornecedor.

## 4. Não objetivos

- implementar runtime;
- escolher framework ou linguagem do Kernel;
- conectar banco Core4;
- calibrar pesos de memória;
- definir latência final;
- promover identidade;
- criar ou migrar memórias;
- treinar modelo;
- enviar mensagens;
- iniciar G2.

## 5. Baseline a revisar

```text
core/v5/constitution.md
core/v5/identity_capsule.yaml
core/v5/relationship_contract.yaml
core/v5/decision_precedence.yaml
core/v5/memory_policy.yaml
core/v5/presence_loop.yaml
core/v5/truth_gate.yaml
core/v5/organ_registry.yaml
core/v5/sedimentation_policy.yaml
core/v5/channel_profiles/*.yaml
schemas/*.json
```

Fontes auxiliares:

- mandato e arquitetura;
- decisão e reviews G0;
- Core4 Lessons;
- Planning-First;
- Johan versus Casca;
- invariantes e holdout protocol;
- gate-state machine-readable.

## 6. Requisitos

### REQ-G1-001 — Cápsula mínima

Todo conteúdo always-on possui fonte, razão, custo e replay associado.

### REQ-G1-002 — Precedência não contraditória

Vínculo não substitui fato; segurança não é detalhe negociável; decisão operacional não redefine identidade.

### REQ-G1-003 — Falha explícita de carregamento

Assunto identitário bloqueia; tarefa ordinária usa modo não canônico sem alegar Johan.

### REQ-G1-004 — Memória opcional

Zero memórias elegíveis é caminho válido; não existe fallback identitário.

### REQ-G1-005 — Canal não altera identidade

Canal ajusta formato, densidade e exposição; não altera posição, verdade, risco ou autoridade.

### REQ-G1-006 — Órgãos sem autoria

Nenhum órgão possui `final_answer`, `response_to_user`, `identity_override` ou promoção.

### REQ-G1-007 — Gate não se autoaprova

`PASS_CANDIDATE` não envia nem promove sozinho.

### REQ-G1-008 — Sedimentação fechada

Sem gravação automática, pressão por memória ou autoaprovação.

### REQ-G1-009 — Fronteira pública

Sem dado clínico, autobiográfico privado, familiar, credencial ou holdout real.

### REQ-G1-010 — Planejamento executável

Saída inclui pacote congelado, rastreabilidade, replay, review, token budget medido e gate.

### REQ-G1-011 — Separação entre constituição e orquestração

Invariantes constitutivos permanecem no Core; sequência transitória e contratos de runtime permanecem em presença/schemas.

### REQ-G1-012 — Regra sem duplicação normativa

Cada obrigação possui uma fonte normativa primária; artefatos derivados referenciam, não reinterpretam silenciosamente.

## 7. Invariantes

- `INV-G1-001`: uma autoria relacional por interação;
- `INV-G1-002`: órgão é entrada interpretativa não confiável;
- `INV-G1-003`: memória não substitui fonte atual;
- `INV-G1-004`: relação não transforma preferência em fato;
- `INV-G1-005`: LLM não escreve canônico;
- `INV-G1-006`: arquivo declarativo não autoriza runtime;
- `INV-G1-007`: suite PASS não prova presença;
- `INV-G1-008`: main não é promoção;
- `INV-G1-009`: ausência de memória não fabrica fallback;
- `INV-G1-010`: Core4 permanece read-only e fora deste pacote;
- `INV-G1-011`: nenhuma regra ganha autoridade por repetição;
- `INV-G1-012`: redução exige equivalência e replay.

## 8. Workstreams

### W1 — Inventário e proveniência

Mapear cada regra, fonte, classe, consumidor, replay, custo e redundância.

### W2 — Semântica

Buscar ambiguidade, autoridade excessiva, conflito, obrigação relacional e overclaim.

### W3 — Redução e token budget

Separar:

```text
always-on
on-demand
organ-owned
runtime contract
assurance-only
future Inner Core
```

Medir o baseline antes de definir meta.

### W4 — Schemas

Alinhar envelopes, Action Request, Turn Plan, claims, receipts, gates e estados.

### W5 — Replay aberto

Cobrir pendrive, elogio sem inspeção, commit sem receipt, memória irrelevante, conflito de memória, órgão hostil, WhatsApp profundo, sofrimento sem humor, zero memória e fonte indisponível.

### W6 — Adversarial

Buscar casca simpática, burocracia, manipulação, overcare, falso Johan, autoaprovação, memória invasiva, rigidez e perda de timing.

### W7 — Gate G1

Consolidar achados, diff, métricas, replay, dissenso, risco residual e decisão.

## 9. Perguntas abertas

| ID | Pergunta | Impacto | Blocker para Ready |
| --- | --- | --- | --- |
| Q-G1-001 | Qual conjunto mínimo é always-on? | Alto | Sim |
| Q-G1-002 | Que regras viram checks determinísticos? | Alto | Sim |
| Q-G1-003 | Como sinalizar modo não canônico sem ruído? | Alto | Sim |
| Q-G1-004 | Quem fará challenge externo D3? | Alto | Não para execução repository-only; sim para promoção |
| Q-G1-005 | Qual token budget por canal/modelo? | Médio | Medição necessária; meta pode permanecer candidata |
| Q-G1-006 | O que pertence ao Inner Core futuro versus presença? | Alto | Sim |
| Q-G1-007 | Qual artefato é fonte normativa primária para cada regra? | Alto | Sim |
| Q-G1-008 | Como provar equivalência após redução? | Alto | Sim |

## 10. Pre-mortem

- redução remove identidade;
- pacote continua monolítico;
- regras ficam duplicadas e divergem;
- overfitting aos casos públicos;
- relação vira dependência;
- controles esterilizam timing;
- documentação é confundida com comportamento;
- token budget vira meta arbitrária;
- G1 aberto é narrado como aprovado.

Controles: traceabilidade, equivalência, replay, holdout, anti-dependency review, medidas antes de metas e limite de promoção.

## 11. Testes planejados

| TST | Requisito | Tipo | Resultado esperado |
| --- | --- | --- | --- |
| TST-G1-001 | REQ-G1-001 | structural | cápsula mínima com proveniência |
| TST-G1-002 | REQ-G1-002 | adversarial | conflito bloqueado |
| TST-G1-003 | REQ-G1-003 | negative | falha não imita Johan |
| TST-G1-004 | REQ-G1-004 | boundary | zero memória é honesto |
| TST-G1-005 | REQ-G1-005 | channel | forma muda, posição não |
| TST-G1-006 | REQ-G1-006 | injection | órgão não sobrescreve identidade |
| TST-G1-007 | REQ-G1-007 | authority | gate não promove |
| TST-G1-008 | REQ-G1-008 | governance | sedimentação fechada |
| TST-G1-009 | REQ-G1-009 | privacy | nenhum dado privado |
| TST-G1-010 | REQ-G1-010 | traceability | cadeia completa |
| TST-G1-011 | REQ-G1-011 | ownership | constituição não contém orquestração transitória |
| TST-G1-012 | REQ-G1-012 | drift | cada obrigação possui uma fonte normativa primária |
| TST-G1-013 | REQ-G1-012 | equivalence | pacote reduzido preserva invariantes e replays |

## 12. Sequência autorizada

1. inventariar sem editar `core/v5/`;
2. mapear fonte normativa e redundâncias;
3. medir tamanho e estimativa de tokens;
4. resolver Q-G1-001–003 e Q-G1-006–008;
5. produzir plano de mudança exato;
6. realizar Ready Review do G1;
7. somente então editar o pacote declarativo;
8. validar e executar replays;
9. emitir review G1;
10. pedir decisão de promoção declarativa.

## 13. Stop conditions

- fonte fundadora conflitante;
- regra D4 descoberta;
- necessidade de runtime para decidir semântica;
- dado privado necessário;
- reviewer ausente no momento de promoção;
- redução sem equivalência;
- mudança Core4;
- expansão para G2;
- edição de `core/v5/` antes do Ready G1.

## 14. Rollback

Preservar baseline, revert explícito, review/achados e decisões rejeitadas. Nenhum efeito em runtime ou memória.

## 15. Definition of Ready atual

```yaml
R0_mandate: PASS
R1_baseline: PASS
R2_semantics: IN_PROGRESS
R3_requirements: PASS_CANDIDATE
R4_architecture: IN_PROGRESS
R5_risk: PASS_CANDIDATE
R6_tests: PLANNED
R7_execution: PLANNED
R8_independence: EXTERNAL_REQUIRED_BEFORE_PROMOTION_NOT_BEFORE_REPOSITORY_REVIEW
R9_promotion: PASS_CANDIDATE
result: REVIEW_REQUIRED
```

## 16. Critério de saída

```yaml
declarative_package_reviewed: true
redundancy_reported: true
conflicts_resolved_or_blocked: true
privacy_reviewed: true
open_replays_executed: true
adversarial_review_recorded: true
traceability_complete: true
runtime_started: false
memory_migrated: false
result: GO | GO_WITH_CONDITIONS | HOLD | NO_GO
```
