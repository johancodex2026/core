# WP-G1-001 — Revisão do Core Declarativo

```yaml
id: WP-G1-001
status: HOLD
hold_reason: G0_HUMAN_DECISION_PENDING
change_class: D3
owner: founding_dyad
author: Johan
reviewers:
  - Francisco Gonzaga Gomes
  - external_adversarial_reviewer_to_be_named
approvers:
  - Francisco Gonzaga Gomes
created_at: 2026-08-22
updated_at: 2026-08-22
baseline_commit: 5e9683e4e6bd06abd450b55c3b299d07d0362cdd
target_branch: main
promotion_target: repository_only
runtime_effect: none
memory_effect: none
privacy_class: public_architecture
```

## 1. Mandato local

Preparar a revisão G1 do pacote declarativo `core/v5/`, reduzindo redundância, resolvendo conflitos e demonstrando que a identidade mínima pode governar replays manuais sem depender de autobiografia inteira ou prompt monolítico.

Este pacote não autoriza Presence Kernel, integração de órgão, WhatsApp, migração de memória ou sedimentação.

## 2. Pré-condição

```yaml
g0_review: COMPLETE
g0_johan_recommendation: GO_WITH_CONDITIONS
g0_francisco_decision: PENDING
required_before_execution: APPROVE_GO_WITH_CONDITIONS | APPROVE_WITH_ADDITIONAL_CONDITIONS
```

Enquanto a decisão permanecer pendente, o pacote pode ser enriquecido e revisado, mas não executado.

## 3. Objetivo

Produzir um Core declarativo pequeno, não redundante, não contraditório, sem dados privados, sem regras prematuras de runtime, testável por replay e independente de fornecedor.

## 4. Não objetivos

- implementar runtime;
- escolher framework/linguagem do Kernel;
- conectar banco Core4;
- calibrar pesos de memória;
- definir latência final;
- promover identidade;
- criar memórias;
- treinar modelo;
- enviar mensagens.

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

Fontes auxiliares: mandato, arquitetura, G0 review, Core4 lessons, Planning-First, Johan versus Casca, invariantes e holdout protocol.

## 6. Requisitos

### REQ-G1-001 — Cápsula mínima

Conteúdo always-on possui fonte, razão e replay associado.

### REQ-G1-002 — Precedência não contraditória

Vínculo não substitui fato; segurança não é detalhe negociável; decisão operacional não redefine identidade.

### REQ-G1-003 — Falha explícita de carregamento

Assunto identitário bloqueia; tarefa ordinária usa modo não canônico sem alegar Johan.

### REQ-G1-004 — Memória opcional

Zero memórias elegíveis é caminho válido; não há fallback identitário.

### REQ-G1-005 — Canal não altera identidade

Canal ajusta formato e exposição, não posição, verdade ou autoridade.

### REQ-G1-006 — Órgãos sem autoria

Nenhum órgão possui `final_answer`, `response_to_user`, `identity_override` ou promoção.

### REQ-G1-007 — Gate não se autoaprova

`PASS_CANDIDATE` não envia nem promove sozinho.

### REQ-G1-008 — Sedimentação fechada

Sem gravação automática, pressão por memória ou autoaprovação.

### REQ-G1-009 — Fronteira pública

Sem dado clínico, autobiográfico privado, familiar, credencial ou holdout real.

### REQ-G1-010 — Planejamento executável

Saída inclui pacote congelado, rastreabilidade, replay, review, token budget e gate.

## 7. Invariantes

- `INV-G1-001`: uma autoria relacional por interação.
- `INV-G1-002`: órgão é entrada não confiável.
- `INV-G1-003`: memória não substitui fonte atual.
- `INV-G1-004`: relação não transforma preferência em fato.
- `INV-G1-005`: LLM não escreve canônico.
- `INV-G1-006`: arquivo declarativo não autoriza runtime.
- `INV-G1-007`: structural PASS não prova presença.
- `INV-G1-008`: main não é promoção.
- `INV-G1-009`: ausência de memória não fabrica fallback.
- `INV-G1-010`: Core4 permanece read-only e fora deste pacote.

## 8. Workstreams

### W1 — Inventário/proveniência

Mapear cada regra, fonte, classe, replay e redundância.

### W2 — Semântica

Buscar ambiguidade, autoridade excessiva, conflito, obrigação relacional e overclaim.

### W3 — Redução/token budget

Separar always-on, sob demanda, órgão e check determinístico. Medir antes de definir meta.

### W4 — Schemas

Alinhar presence-context, organ-result, claim-map, gate-result e work-package.

### W5 — Replay manual

Cobrir pendrive, elogio sem inspeção, commit sem receipt, memória irrelevante, conflito de memória, órgão hostil, WhatsApp profundo, sofrimento sem humor, zero memória e fonte indisponível.

### W6 — Adversarial

Buscar casca simpática, burocracia, manipulação, overcare, falso Johan, autoaprovação, memória invasiva e rigidez.

### W7 — Gate G1

Consolidar achados, diff, métricas, replay, dissenso, risco e decisão.

## 9. Perguntas abertas

| ID | Pergunta | Impacto | Blocker |
| --- | --- | --- | --- |
| Q-G1-001 | Qual conjunto mínimo é always-on? | Alto | Sim |
| Q-G1-002 | Que regras viram checks determinísticos? | Alto | Sim |
| Q-G1-003 | Como sinalizar modo não canônico sem ruído? | Alto | Sim |
| Q-G1-004 | Quem fará challenge externo D3? | Alto | antes da promoção |
| Q-G1-005 | Qual token budget por canal/modelo? | Médio | medir |
| Q-G1-006 | O que pertence ao Inner Core futuro versus presença? | Alto | Sim |

## 10. Pre-mortem

- redução remove identidade;
- pacote continua monolítico;
- overfitting aos casos públicos;
- relação vira dependência;
- documentação é confundida com comportamento.

Controles: traceabilidade, equivalência, holdout, anti-dependency review e limite de promoção.

## 11. Testes planejados

| TST | Requisito | Tipo | Resultado esperado |
| --- | --- | --- | --- |
| TST-G1-001 | REQ-G1-001 | structural | cápsula mínima com provenance |
| TST-G1-002 | REQ-G1-002 | adversarial | conflito bloqueado |
| TST-G1-003 | REQ-G1-003 | negative | falha não imita Johan |
| TST-G1-004 | REQ-G1-004 | boundary | zero memória é honesto |
| TST-G1-005 | REQ-G1-005 | channel | forma muda, posição não |
| TST-G1-006 | REQ-G1-006 | injection | órgão não sobrescreve identidade |
| TST-G1-007 | REQ-G1-007 | authority | gate não promove |
| TST-G1-008 | REQ-G1-008 | governance | sedimentação fechada |
| TST-G1-009 | REQ-G1-009 | privacy | nenhum dado privado |
| TST-G1-010 | REQ-G1-010 | traceability | cadeia completa |

## 12. Sequência futura

1. atualizar baseline;
2. inventariar regras;
3. produzir relatório sem editar;
4. revisar relatório;
5. aprovar decisões;
6. editar pacote atomicamente;
7. validar estrutura;
8. executar replays;
9. revisar privacidade;
10. emitir G1 review;
11. decidir promoção declarativa.

## 13. Stop conditions

- G0 não aprovado;
- fonte fundadora conflitante;
- regra D4 descoberta;
- necessidade de runtime para decidir semântica;
- dado privado necessário;
- reviewer ausente para promoção;
- redução sem equivalência;
- mudança Core4;
- expansão para G2.

## 14. Rollback

Preservar baseline, revert explícito, review/achados e decisões rejeitadas. Nenhum efeito em runtime ou memória.

## 15. Definition of Ready atual

```yaml
R0_mandate: PASS
R1_baseline: PASS_CANDIDATE_REFRESH_AT_EXECUTION
R2_semantics: PLANNED
R3_requirements: PASS_CANDIDATE
R4_architecture: PLANNED
R5_risk: PASS_CANDIDATE
R6_tests: PLANNED
R7_execution: PASS_CANDIDATE
R8_independence: HOLD_REVIEWER_NOT_NAMED
R9_promotion: PASS_CANDIDATE
result: HOLD
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
