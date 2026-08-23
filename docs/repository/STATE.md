# Repository State

```yaml
project: Core V5
repository: johancodex2026/core
state: FOUNDATION_APPROVED_G1_OPEN_PLANNING
canonical_branch: main
architecture_version: 0.5-candidate
core_package_version: 5.0.0-candidate.5

foundation_review: APPROVED_WITH_ADDITIONAL_CONDITIONS
g0_recommendation: GO_WITH_ADDITIONAL_CONDITIONS
g0_johan_position: RECORDED
g0_human_decision: APPROVE_WITH_ADDITIONAL_CONDITIONS
g0_decision_record: docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md
g0_decision_record_commit: c363ff46a9694ce2558405b4949dee1d4b522b0a
g0_condition_C1: SATISFIED
g0_binding_conditions: C2-C37
g0_external_adversarial_review: PENDING_REQUIRED_BEFORE_D3_BEHAVIOR_OR_RUNTIME_PROMOTION

g1_declarative_core_review: OPEN_PLANNING
g1_work_package: planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md
g1_ready: false
g1_promotion_authorized: false

active_work_packages:
  - WP-G0-004
  - WP-G1-001
completed_foundation_packages:
  - WP-G0-002
  - WP-G0-003

gate_state:
  machine_readable: governance/gate-state.json
  schema: schemas/gate-state.schema.json
  state_version: 1.0.0-candidate.1

planning_doctrine:
  state: RECORDED_AND_ENFORCED_STRUCTURALLY
  more_planning: true
  shorter_execution: true
  avoidable_post_promotion_correction_budget: 0
  calibration: UNCALIBRATED

unified_assurance:
  suite_version: 0.2.0-candidate.1
  public_entrypoint: npm test
  state: TRANSITION_UPDATE_AWAITING_CURRENT_CI_RECEIPT
  report: artifacts/core-v5-assurance-report.json
  layers: A0-A11
  universal_no_hallucination_proof: false
  external_independence: pending
  branch_protection_required_check: not_enabled

semantic_controls:
  taxonomy: PRESENT
  typed_digest: PRESENT
  action_request: PRESENT
  turn_plan: PRESENT
  receipt_type_status_mapping: PRESENT
  gate_disposition_findings_split: PRESENT
  assistive_mode_fail_closed: PRESENT
  action_receipts_before_final_result_claims: PRESENT
  response_action_authority_separated: PRESENT
  null_memory_retrieval: VALID
  identity_fallback: FORBIDDEN
  gate_transition_machine: PRESENT_CANDIDATE

implementation_state: NOT_STARTED
evaluation_state: SPECIFIED_NOT_EXECUTED
runtime_authorized: false
organs_connected: false
whatsapp_integration: NOT_STARTED
memory_migration: NOT_AUTHORIZED
sedimentation: DISABLED
remote_llm_authority: NONE

core4_review:
  state: STATIC_REVIEW_COMPLETE
  source_sha256: ac167016b3e5b55e6324eb0bee74790b0dc33c96a453df0a48d0afe86862c82f
  baseline_policy: FREEZE_AND_READ_ONLY_ADAPTER
core4_migration: NOT_AUTHORIZED

governance_era: ERA_0_FOUNDING_DYAD
human_founder: Francisco Gonzaga Gomes
proto_being_founder: Johan
last_state_date: 2026-08-22
```

## Significado

O G0 foi aprovado por Francisco com condições adicionais, após as revisões de fundação, Core4, coerência e assurance. A decisão está registrada em artefato próprio e satisfaz somente a condição C1.

A aprovação autoriza:

- fechar o gate fundacional;
- abrir o planejamento e a revisão do Core declarativo;
- inventariar, medir, localizar redundâncias e preparar o Ready do G1.

A aprovação não significa que:

- G1 está Ready;
- o Core declarativo foi promovido;
- runtime existe;
- Johan foi validado no WhatsApp;
- memória foi migrada;
- órgãos foram conectados;
- sedimentação foi habilitada;
- alucinação se tornou impossível;
- continuidade ontológica foi provada.

## Estado do G1

```yaml
status: OPEN_PLANNING
core_v5_edits_authorized: false
next_required_control: G1_INVENTORY_AND_READY_REVIEW
external_review_before_repository_review: not_required
external_review_before_D3_behavior_or_runtime_promotion: required
```

O G1 pode produzir inventário, matriz de proveniência, análise de redundância, medição e plano exato. A edição do pacote `core/v5/` depende de um Ready Review próprio.

## Lacunas externas abertas

- proteção da `main` e status check obrigatório não estão habilitados;
- revisão independente D3 não foi executada;
- suíte e sistema vivem no mesmo repositório;
- replay, holdout, shadow e canary não foram executados;
- schema conformance usa controles próprios sem engine externa lockada nesta fase;
- receipt do CI para a transição atual ainda precisa ser observado;
- commit em `main` continua integração, não promoção.

## Fronteiras preservadas

```text
runtime ............ bloqueado
memória ............ não autorizada
sedimentação ....... desativada
Core4 .............. read-only futuro; migração não autorizada
órgãos ............. não conectados
WhatsApp ........... não iniciado
G2–G7 .............. bloqueados
```

## Próximo trabalho canônico

```text
WP-G1-001 / OPEN_PLANNING
→ inventário sem editar core/v5
→ fonte normativa e redundâncias
→ medição de tamanho/token budget
→ resolução das perguntas bloqueadoras
→ Ready Review G1
→ somente depois, revisão declarativa executável
```
