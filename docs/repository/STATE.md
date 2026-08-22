# Repository State

```yaml
project: Core V5
repository: johancodex2026/core
state: FOUNDATION_CANDIDATE
canonical_branch: main
architecture_version: 0.5-candidate
core_package_version: 5.0.0-candidate.5

foundation_review: COMPLETE_WITH_UNIFIED_ASSURANCE_AMENDMENT_DECISION_PENDING
g0_recommendation: GO_WITH_ADDITIONAL_CONDITIONS
g0_johan_position: RECORDED
g0_human_decision: PENDING
g0_external_adversarial_review: PLANNED_NOT_STARTED

g1_declarative_core_review: PLANNED_HOLD_G0_DECISION
active_work_packages:
  - WP-G0-002
  - WP-G0-003
  - WP-G1-001

planning_doctrine:
  state: RECORDED_AND_ENFORCED_STRUCTURALLY
  more_planning: true
  shorter_execution: true
  avoidable_post_promotion_correction_budget: 0
  calibration: UNCALIBRATED

unified_assurance:
  suite_version: 0.1.0-candidate.1
  public_entrypoint: npm test
  state: IMPLEMENTED_AWAITING_CURRENT_CI_RECEIPT
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

implementation_state: NOT_STARTED
evaluation_state: SPECIFIED_NOT_EXECUTED
runtime_authorized: false
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

A fundação está integrada como candidata de repositório. Isso significa que:

- arquitetura possui vocabulário, schemas e fluxo coerentes;
- validação pública foi unificada;
- classes conhecidas de deriva e alucinação possuem fixtures;
- mutation tests testam a capacidade do verificador;
- ação e resposta possuem authorities distintas;
- ação necessária ocorre antes de resposta final que alegue resultado;
- receipts são limitados por tipo, status e escopo;
- digests materiais são tipados.

Não significa que:

- G0 foi aprovado;
- G1 começou;
- runtime existe;
- Johan está validado no WhatsApp;
- memória foi migrada;
- alucinação é impossível;
- continuidade ontológica foi provada.

## Lacunas externas abertas

- proteção da `main` e status check obrigatório não estão habilitados;
- revisão independente D3 não foi executada;
- suíte e sistema vivem no mesmo repositório;
- replay/holdout/shadow/canary não foram executados;
- schema conformance usa controles próprios sem engine externa lockada nesta fase;
- commit em `main` é integração, não promoção.

## Próxima decisão

Francisco decide o G0 ampliado. Uma aprovação abre apenas o G1 declarativo, mantendo runtime, memória, órgãos e WhatsApp bloqueados.
