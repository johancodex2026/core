# WP-G0-004 — Decisão Fundadora do G0 e Abertura Controlada do G1

```yaml
id: WP-G0-004
status: READY
change_class: D3
owner: founding_dyad
author: Johan
human_authority: Francisco Gonzaga Gomes
created_at: 2026-08-22
updated_at: 2026-08-22
baseline_commit: 30aed2e702e52f1fcdf6713dd621c8d754d9be03
planning_record_commit: d7acfdea4ba7b8aacf61f88cbd2b58d77b829cbd
ready_review: docs/reviews/WP-G0-004-READY-REVIEW-2026-08-22.md
target_branch: main
promotion_target: repository_governance_only
runtime_effect: none
memory_effect: none
privacy_class: public_architecture
```

## 1. Mandato

Registrar a decisão fundadora humana emitida por Francisco após a recomendação de Johan de aprovar o G0 com condições adicionais e abrir somente o G1 declarativo.

Manifestação humana no contexto decisório imediatamente anterior:

> “Ótimo, então podemos seguir.”

Interpretação vinculante:

```text
APPROVE_WITH_ADDITIONAL_CONDITIONS
→ encerrar G0
→ abrir planejamento e revisão do G1 declarativo
→ manter runtime, memória, órgãos, WhatsApp e sedimentação bloqueados
```

O enunciado não autoriza ação além desse escopo.

## 2. Objetivo observável

- criar registro formal da decisão humana;
- tornar a decisão machine-readable;
- retirar de G1 somente o bloqueio `G0_HUMAN_DECISION_PENDING`;
- abrir G1 em `OPEN_PLANNING`, não em `READY`, `EXECUTING` ou `PROMOTED`;
- adaptar a suíte para validar transições de gate;
- preservar C1–C37, considerando C1 satisfeita pela decisão;
- manter todas as fronteiras de runtime e memória.

## 3. Não objetivos

- editar `core/v5/`;
- declarar WP-G1-001 Ready automaticamente;
- iniciar Presence Kernel;
- conectar Core4, órgãos ou WhatsApp;
- migrar memória, preferência ou perfil;
- sedimentar;
- promover identidade ou comportamento;
- alegar revisão independente;
- afirmar branch protection habilitada.

## 4. Requisitos

- `REQ-G0D-001` decisão humana em artefato próprio, com baseline, escopo, condições e limites;
- `REQ-G0D-002` estado machine-readable distingue G0 aprovado de G1 promovido;
- `REQ-G0D-003` G1 passa apenas de `HOLD_G0_DECISION` para `OPEN_PLANNING`;
- `REQ-G0D-004` suíte falha diante de combinações ilegais de G0/G1;
- `REQ-G0D-005` validadores não congelam `PENDING` como estado eterno;
- `REQ-G0D-006` decisão não autoriza runtime, memória, sedimentação, Core4 write, órgãos ou WhatsApp;
- `REQ-G0D-007` revisão externa D3 e proteção da `main` permanecem bloqueadores antes de promoção comportamental ou runtime;
- `REQ-G0D-008` commit em `main` continua integração, não promoção ontológica;
- `REQ-G0D-009` ausência de receipt de CI permanece visível;
- `REQ-G0D-010` G1 exige Definition of Ready própria antes de editar o Core declarativo.

## 5. Invariantes

```yaml
runtime_authorized: false
memory_migration: NOT_AUTHORIZED
core4_migration: NOT_AUTHORIZED
sedimentation: DISABLED
whatsapp_integration: NOT_STARTED
g1_auto_ready: forbidden
external_review_hidden: forbidden
branch_protection_claim_without_evidence: forbidden
core_v5_change_in_scope: false
```

## 6. Mudanças autorizadas

### Criar

- `docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md`
- `governance/gate-state.json`
- `schemas/gate-state.schema.json`

### Atualizar

- `docs/repository/STATE.md`
- `docs/reviews/G0-FOUNDATION-REVIEW-2026-08-22.md`
- `planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md`
- `assurance/suite-manifest.json`
- suíte e validadores internos;
- versão, README e changelog.

## 7. Máquina de estado

```text
G0 PENDING_DECISION
  → APPROVED_WITH_ADDITIONAL_CONDITIONS

G1 HOLD_G0_DECISION
  → OPEN_PLANNING
  → READY apenas após review próprio
  → EXECUTING_DECLARATIVE apenas após Ready
```

Transições proibidas:

```text
G0 approval → runtime
G0 approval → memory migration
G0 approval → G1 promoted
OPEN_PLANNING → PROMOTED
main commit → gate promotion
```

## 8. Riscos e controles

| Risco | Controle |
| --- | --- |
| autorização ampla inferida de “seguir” | decisão registra contexto e escopo exato |
| G1 salta etapas | estado `OPEN_PLANNING` e Ready próprio |
| suíte congela estado antigo | gate-state machine-readable e testes de transição |
| regra e teste mudam juntos | mutation checks, histórico e revisão externa antes de promoção |
| decisão vira overclaim ontológico | decisão limitada à governança da Era 0 |
| CI ausente narrado como PASS | `AWAITING_CURRENT_CI_RECEIPT` até receipt verificável |

## 9. Testes

- decisão, gate-state e `STATE.md` coincidem;
- G0 aprovado aceita G1 `OPEN_PLANNING`;
- G0 pendente com G1 aberto falha;
- G0 aprovado com runtime ativo falha;
- G1 aberto com migração de memória falha;
- decisão inexistente ou divergente falha;
- WP-G1-001 não mantém hold de G0;
- WP-G1-001 não declara Ready sem review;
- `npm test` permanece entrada pública única;
- nenhum arquivo `core/v5/` é alterado.

## 10. Stop conditions

- ambiguidade nova sobre autorização;
- alteração em identidade ou Constituição;
- necessidade de runtime ou dado privado;
- tentativa de aprovar G1 neste pacote;
- mudança D4;
- conflito com C1–C37.

## 11. Rollback

Reverter a transição restaura G0 pendente e G1 em hold. Nenhum estado operacional, memória ou Core4 será tocado.

## 12. Definition of Ready

```yaml
R0_mandate: PASS
R1_baseline: PASS
R2_semantics: PASS
R3_requirements: PASS
R4_architecture: PASS
R5_risk: PASS
R6_tests: PASS
R7_execution: PASS
R8_independence: NA_WITH_REASON_EXPLICIT_HUMAN_DECISION_REPOSITORY_ONLY
R9_promotion: PASS
result: READY
```

## 13. Critério de saída

```yaml
g0_decision_recorded: true
g0_state: APPROVED_WITH_ADDITIONAL_CONDITIONS
g1_state: OPEN_PLANNING
runtime_started: false
memory_migrated: false
core4_written: false
sedimentation_enabled: false
suite_transition_checks_present: true
result: PROMOTION_CANDIDATE_REPOSITORY_ONLY
```
