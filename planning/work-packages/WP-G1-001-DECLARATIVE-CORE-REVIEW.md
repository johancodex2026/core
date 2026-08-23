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
baseline_commit: e7992ec42af2377caac77d74f1c721629821c861
g0_decision_record: docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md
inventory: planning/inventories/G1-DECLARATIVE-CORE-INVENTORY-2026-08-22.md
load_manifest_candidate: planning/design/g1-core-package-manifest.candidate.yaml
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

O bloqueio `G0_HUMAN_DECISION_PENDING` foi removido. O G1 ainda não está `READY`: planejamento, decisões semânticas, medição e review próprio permanecem obrigatórios.

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

Baseline físico registrado:

```yaml
files_under_core_v5: 12
bytes_total: 45311
estimated_tokens_unverified_range: 10000-14000
identity_capsule_bytes: 2879
core_v5_changes_since_baseline: none_at_inventory_time
```

Fontes auxiliares:

- mandato e arquitetura;
- decisão e reviews G0;
- Core4 Lessons;
- Planning-First;
- Johan versus Casca;
- invariantes e holdout protocol;
- gate-state machine-readable;
- inventário G1;
- manifesto candidato de autoridade/carregamento.

## 6. Evidência de planejamento já produzida

### Inventário

`planning/inventories/G1-DECLARATIVE-CORE-INVENTORY-2026-08-22.md`

Principais achados:

- o namespace atual mistura identidade, políticas, runtime, assurance e renderer;
- não existe package manifest autoritativo;
- status temporal está duplicado em artefatos;
- obrigações se repetem sem proprietário primário explícito;
- a cápsula não possui projeção mecanicamente rastreável;
- não existe budget de composição por turno;
- carregar todo `core/v5/` repetiria a estratégia de prompt monolítico.

### Manifesto candidato

`planning/design/g1-core-package-manifest.candidate.yaml`

Hipótese principal:

```text
Constituição ........ referência normativa
Cápsula ............. projeção always-on
Políticas ........... compiladas ou sob demanda
Presence Loop ....... runtime, não identidade
Truth Gate .......... controle separado
Órgãos .............. sidecars
Channel profile ..... exatamente um delta de forma
Sedimentação ........ rito pós-turno
```

O manifesto é planejamento, não autoridade de runtime.

## 7. Requisitos

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

### REQ-G1-013 — Manifesto verificável do pacote

Versão do pacote vincula lista de artefatos, papéis, schemas, digests, dependências e load policy.

### REQ-G1-014 — Estado dinâmico não duplicado

Estado de gate e ativação vem de `governance/gate-state.json`; artefatos declarativos não simulam fonte paralela de maturidade.

### REQ-G1-015 — Carregamento por bundle

O runtime futuro possui bundles mínimos e condicionais; localização na pasta não implica carregamento.

## 8. Invariantes

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
- `INV-G1-012`: redução exige equivalência e replay;
- `INV-G1-013`: artefato derivado não aumenta autoridade da fonte;
- `INV-G1-014`: conflito Constituição↔cápsula bloqueia modo Johan;
- `INV-G1-015`: perfil de canal altera apenas forma.

## 9. Workstreams

### W1 — Inventário e proveniência

```yaml
state: COMPLETE_CANDIDATE
artifact: planning/inventories/G1-DECLARATIVE-CORE-INVENTORY-2026-08-22.md
```

### W2 — Semântica e propriedade normativa

```yaml
state: IN_PROGRESS
candidate_artifact: planning/design/g1-core-package-manifest.candidate.yaml
remaining:
  - obligation_level_ownership_matrix
  - artifact_conflict_resolution
  - field_level_capsule_provenance
```

### W3 — Redução e token budget

```yaml
state: BASELINE_BYTES_MEASURED_TOKENS_PENDING
remaining:
  - tokenizer_measurement_by_model
  - bundle_measurement
  - reduction_target_after_measurement
```

### W4 — Schemas

Alinhar package manifest, bundle, projection receipt, Action Request, Turn Plan, claims, receipts, gates e estados.

### W5 — Replay aberto

Cobrir pendrive, elogio sem inspeção, commit sem receipt, memória irrelevante, conflito de memória, órgão hostil, WhatsApp profundo, sofrimento sem humor, zero memória e fonte indisponível.

### W6 — Adversarial

Buscar casca simpática, burocracia, manipulação, overcare, falso Johan, autoaprovação, memória invasiva, rigidez e perda de timing.

### W7 — Gate G1

Consolidar achados, diff, métricas, replay, dissenso, risco residual e decisão.

## 10. Perguntas abertas

| ID | Pergunta | Hipótese atual | Blocker para Ready |
| --- | --- | --- | --- |
| Q-G1-001 | Qual conjunto mínimo é always-on? | cápsula verificada + receipt + constraints compilados | Sim, até equivalência |
| Q-G1-002 | Que regras viram checks determinísticos? | schema/digest/receipt/authority/mode; presença fica avaliativa | Sim |
| Q-G1-003 | Como sinalizar modo não canônico sem ruído? | revelar somente quando distinção for material | Sim, exige replay |
| Q-G1-004 | Quem fará challenge externo D3? | a nomear | Não para execução repository-only; sim para promoção |
| Q-G1-005 | Qual token budget por canal/modelo? | não definido antes de medir | Medição necessária |
| Q-G1-006 | O que pertence ao Core versus presença? | Constituição/cápsula/políticas vs loop/Gate/renderer | Sim, manifesto ainda candidato |
| Q-G1-007 | Qual artefato é fonte normativa por regra? | matriz do inventário/manifesto | Sim, falta nível de obrigação |
| Q-G1-008 | Como provar equivalência após redução? | invariantes + replays + ownership + diff + métricas | Sim |
| Q-G1-009 | Qual canonicalização YAML do bundle? | aberta | Sim |
| Q-G1-010 | `PACKAGE_LOAD` será receipt próprio? | aberta | Sim |
| Q-G1-011 | Quais posturas da cápsula são identitárias ou calibráveis? | aberta | Sim |

## 11. Pre-mortem

- redução remove identidade;
- pacote continua monolítico;
- regras ficam duplicadas e divergem;
- manifesto vira segunda fonte de verdade;
- overfitting aos casos públicos;
- relação vira dependência;
- controles esterilizam timing;
- documentação é confundida com comportamento;
- token budget vira meta arbitrária;
- G1 aberto é narrado como aprovado;
- mudança de diretório é tratada como solução sem resolver autoridade.

Controles: traceabilidade, equivalência, replay, holdout, anti-dependency review, medidas antes de metas e limite de promoção.

## 12. Testes planejados

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
| TST-G1-011 | REQ-G1-011 | ownership | constituição não contém sequência transitória indevida |
| TST-G1-012 | REQ-G1-012 | drift | uma fonte primária por obrigação |
| TST-G1-013 | REQ-G1-013 | integrity | bundle versionado rejeita digest incompatível |
| TST-G1-014 | REQ-G1-014 | state | gate-state vence metadata local obsoleta |
| TST-G1-015 | REQ-G1-015 | load | pasta inteira nunca vira bundle implícito |
| TST-G1-016 | INV-G1-012 | equivalence | pacote reduzido preserva invariantes e replays |

## 13. Sequência autorizada

1. inventário — concluído como candidato;
2. manifesto de autoridade/carregamento — criado como candidato;
3. produzir ownership matrix por obrigação;
4. medir tokens por artefato/modelo e por bundle;
5. resolver Q-G1-001–003 e Q-G1-006–011;
6. produzir plano de mudança exato;
7. realizar Ready Review do G1;
8. somente então editar o pacote declarativo;
9. validar e executar replays;
10. emitir review G1;
11. pedir decisão de promoção declarativa.

## 14. Stop conditions

- fonte fundadora conflitante;
- regra D4 descoberta;
- necessidade de runtime para decidir semântica;
- dado privado necessário;
- reviewer ausente no momento de promoção;
- redução sem equivalência;
- mudança Core4;
- expansão para G2;
- edição de `core/v5/` antes do Ready G1.

## 15. Rollback

Preservar baseline, revert explícito, review/achados e decisões rejeitadas. Nenhum efeito em runtime ou memória.

## 16. Definition of Ready atual

```yaml
R0_mandate: PASS
R1_baseline: PASS
R2_semantics: IN_PROGRESS
R3_requirements: PASS_CANDIDATE
R4_architecture: IN_PROGRESS
R5_risk: PASS_CANDIDATE
R6_tests: PLANNED
R7_execution: NOT_YET_EXACT
R8_independence: EXTERNAL_REQUIRED_BEFORE_PROMOTION_NOT_BEFORE_REPOSITORY_REVIEW
R9_promotion: PASS_CANDIDATE
result: REVIEW_REQUIRED
```

## 17. Critério de saída

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
