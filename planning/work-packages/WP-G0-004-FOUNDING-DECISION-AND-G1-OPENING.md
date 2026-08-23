# WP-G0-004 — Decisão Fundadora do G0 e Abertura Controlada do G1

```yaml
id: WP-G0-004
status: SPECIFIED
change_class: D3
owner: founding_dyad
author: Johan
human_authority: Francisco Gonzaga Gomes
created_at: 2026-08-22
updated_at: 2026-08-22
baseline_commit: 30aed2e702e52f1fcdf6713dd621c8d754d9be03
target_branch: main
promotion_target: repository_governance_only
runtime_effect: none
memory_effect: none
privacy_class: public_architecture
```

## 1. Mandato

Registrar a decisão fundadora humana emitida por Francisco após a recomendação de Johan de aprovar o G0 com condições adicionais e abrir somente o G1 declarativo.

Manifestação humana que constitui o mandato no contexto decisório imediatamente anterior:

> “Ótimo, então podemos seguir.”

A interpretação vinculante é limitada ao escopo proposto por Johan na mensagem anterior:

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
- abrir G1 em estado de planejamento/revisão, não de promoção;
- adaptar a suíte para validar transições de gate em vez de congelar `PENDING` para sempre;
- preservar todas as condições C1–C37;
- manter fronteiras de runtime e memória inalteradas.

## 3. Não objetivos

- revisar ou reduzir ainda o pacote `core/v5/`;
- declarar WP-G1-001 Ready automaticamente;
- iniciar Presence Kernel;
- conectar Core4, órgãos ou WhatsApp;
- migrar memória, preferência ou perfil;
- sedimentar;
- promover identidade ou comportamento;
- alegar revisão independente;
- habilitar branch protection por documentação.

## 4. Requisitos

- `REQ-G0D-001` A decisão humana deve ser registrada em artefato próprio, com baseline, escopo, condições e limites.
- `REQ-G0D-002` O estado machine-readable deve distinguir G0 aprovado de G1 promovido.
- `REQ-G0D-003` G1 deve sair de `HOLD_G0_DECISION` e entrar em `OPEN_PLANNING`, sem saltar para `READY` ou `EXECUTING`.
- `REQ-G0D-004` A suíte deve validar combinações legais de G0/G1 e falhar diante de transições impossíveis.
- `REQ-G0D-005` A suíte não deve continuar exigindo literalmente `g0_human_decision: PENDING`.
- `REQ-G0D-006` O registro de decisão não pode autorizar runtime, memória, sedimentação, Core4 write, órgãos ou WhatsApp.
- `REQ-G0D-007` Revisão externa D3 e proteção externa da `main` permanecem bloqueadores antes de promoção comportamental ou runtime.
- `REQ-G0D-008` O commit em `main` continua integração documental, não promoção ontológica.
- `REQ-G0D-009` O relatório da suíte no commit final deve ser solicitado; ausência de receipt externo deve permanecer visível.
- `REQ-G0D-010` O G1 deverá passar por Definition of Ready própria antes de editar o Core declarativo.

## 5. Invariantes

- a decisão humana satisfaz C1, não cancela C2–C37;
- `runtime_authorized: false`;
- `memory_migration: NOT_AUTHORIZED`;
- `core4_migration: NOT_AUTHORIZED`;
- `sedimentation: DISABLED`;
- `whatsapp_integration: NOT_STARTED`;
- G1 aberto não significa G1 aprovado;
- external review pending não é escondido;
- branch protection ausente não é narrada como habilitada;
- nenhuma mudança de `core/v5/` faz parte deste pacote.

## 6. Mudanças planejadas

### Criar

- `docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md`
- `governance/gate-state.json`
- `schemas/gate-state.schema.json`
- `docs/reviews/WP-G0-004-READY-REVIEW-2026-08-22.md`

### Atualizar

- `docs/repository/STATE.md`
- `docs/reviews/G0-FOUNDATION-REVIEW-2026-08-22.md`
- `planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md`
- `assurance/suite-manifest.json`
- `scripts/test-suite.mjs`
- `scripts/validate-foundation.mjs`
- `scripts/validate-planning.mjs`
- `scripts/validate-coherence.mjs`
- `package.json`
- `README.md`
- `CHANGELOG.md`

## 7. Máquina de estado pretendida

```text
G0: PENDING_DECISION
  └── decisão humana explícita + recomendação registrada
      → APPROVED_WITH_ADDITIONAL_CONDITIONS

G1: HOLD_G0_DECISION
  └── G0 aprovado
      → OPEN_PLANNING
      → READY somente após review próprio
      → EXECUTING_DECLARATIVE somente após Ready
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
| interpretar “seguir” como autorização ampla | decisão registra contexto e escopo exato |
| G1 saltar etapas | estado inicial `OPEN_PLANNING` e Ready próprio obrigatório |
| suíte falhar porque congelou estado anterior | gate-state machine-readable e checks de transição |
| alterar testes junto da regra e esconder deriva | mutation checks, histórico Git e revisão externa antes de promoção |
| decisão humana ser confundida com prova ontológica | limite explícito: decisão de governança da Era 0 |
| ausência de CI ser narrada como PASS | estado `AWAITING_CURRENT_CI_RECEIPT` até receipt verificável |

## 9. Testes planejados

- `TST-G0D-001` decisão e estado machine-readable coincidem;
- `TST-G0D-002` G0 aprovado aceita G1 `OPEN_PLANNING`;
- `TST-G0D-003` G0 pendente com G1 aberto falha;
- `TST-G0D-004` G0 aprovado com runtime ativo falha;
- `TST-G0D-005` G1 aberto com migração de memória falha;
- `TST-G0D-006` decisão inexistente ou divergente falha;
- `TST-G0D-007` WP-G1-001 não contém mais o hold de G0;
- `TST-G0D-008` WP-G1-001 ainda não declara `READY` sem review;
- `TST-G0D-009` `npm test` permanece entrada pública única;
- `TST-G0D-010` mudança não toca `core/v5/`.

## 10. Stop conditions

- dúvida real sobre o significado da autorização humana;
- necessidade de alterar identidade ou Constituição para registrar a decisão;
- necessidade de runtime ou dado privado;
- tentativa de usar este pacote para aprovar G1;
- alteração D4;
- conflito entre decisão e condições registradas.

## 11. Rollback

Reverter os commits de transição restaura G0 pendente e G1 em hold. Nenhum estado de runtime, memória ou Core4 será alterado.

## 12. Definition of Ready candidata

```yaml
R0_mandate: PASS
R1_baseline: PASS
R2_semantics: PASS
R3_requirements: PASS
R4_architecture: PASS
R5_risk: PASS
R6_tests: PASS
R7_execution: PASS
R8_independence: NA_WITH_REASON_RECORDING_EXPLICIT_HUMAN_DECISION_REPOSITORY_ONLY
R9_promotion: PASS
result: REVIEW_REQUIRED
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
