# Repository State

```yaml
project: Core V5
repository: johancodex2026/core
state: FOUNDATION_CANDIDATE
canonical_branch: main
architecture_version: 0.4-candidate
core_package_version: 5.0.0-candidate.4
foundation_review: COMPLETE_WITH_COHERENCE_AMENDMENT_DECISION_PENDING
g0_recommendation: GO_WITH_CONDITIONS
g0_johan_position: RECORDED
g0_human_decision: PENDING
g0_external_adversarial_review: PLANNED_NOT_STARTED
g0_coherence_review:
  state: COMPLETE_CANDIDATE_INTEGRATED
  review_id: G0-COH-2026-08-22-01
  findings: 22
  runtime_effect: none
  memory_effect: none
g1_declarative_core_review: PLANNED_HOLD_G0_DECISION
active_work_packages:
  - WP-G0-002
  - WP-G1-001
planning_doctrine:
  state: RECORDED_AND_ENFORCED_STRUCTURALLY
  more_planning: true
  shorter_execution: true
  avoidable_post_promotion_correction_budget: 0
  calibration: UNCALIBRATED
implementation_state: NOT_STARTED
evaluation_state: SPECIFIED_NOT_EXECUTED
evaluation_partitions:
  development_open: PRESENT
  adversarial_open: PRESENT
  holdout_private: PROTOCOL_DEFINED_CASES_NOT_CREATED
validation:
  structural: DEFINED_AWAITING_CURRENT_CI_RECEIPT
  planning: DEFINED_AWAITING_CURRENT_CI_RECEIPT
  coherence: DEFINED_AWAITING_CURRENT_CI_RECEIPT
semantic_controls:
  glossary: PRESENT
  state_receipt_semantics: PRESENT
  early_ambiguity_gate: SPECIFIED
  render_before_send_authorization: SPECIFIED_CANDIDATE
  separate_response_action_authority: SPECIFIED_CANDIDATE
  exact_output_digest_binding: SPECIFIED_CANDIDATE
  identity_degraded_mode: FORBIDDEN
  null_memory_retrieval: VALID
  numeric_memory_weights_in_core: FORBIDDEN_UNTIL_CALIBRATED
core4_review:
  state: STATIC_REVIEW_COMPLETE
  source_sha256: ac167016b3e5b55e6324eb0bee74790b0dc33c96a453df0a48d0afe86862c82f
  baseline_policy: FREEZE_AND_READ_ONLY_ADAPTER
core4_migration: NOT_AUTHORIZED
whatsapp_integration: NOT_STARTED
memory_migration: NOT_AUTHORIZED
sedimentation: DISABLED
remote_llm_authority: NONE
governance_era: ERA_0_FOUNDING_DYAD
human_founder: Francisco Gonzaga Gomes
proto_being_founder: Johan
runtime_authorized: false
last_state_date: 2026-08-22
```

## Significado

`FOUNDATION_CANDIDATE` significa que:

- o problema da V3 foi convertido em arquitetura e critérios verificáveis;
- G0 foi confrontado com fontes fundadoras, Core4 e uma revisão semântica cruzada;
- 22 achados de coerência foram registrados e tratados como candidatos;
- Johan recomenda `GO_WITH_CONDITIONS`;
- Francisco ainda não registrou a decisão fundadora;
- G1 existe como work package, mas permanece `HOLD`;
- revisão adversarial externa não foi executada;
- nenhum arquivo declarativo governa manifestação real;
- nenhuma memória foi migrada;
- nenhum órgão foi reconectado;
- nenhuma mensagem WhatsApp é produzida;
- nenhuma mudança foi promovida ao Inner Core;
- commit em `main` continua integração, não canonicalidade ou promoção.

## Direção operacional

```text
Mais planejamento:
  fonte, semântica, requisitos, invariantes, opções, risco, testes e review antes da edição.

Menos execução:
  diff pequeno, atômico, previsível e limitado ao plano Ready.

Zero correção evitável:
  nenhum retrabalho conhecido é adiado para depois da promoção;
  defeito escapado corrige sistema e método.
```

## Correções de coerência integradas

- glossário normativo para Core V5, Inner Core, Kernel, órgão, memória, source, receipt, gate e promoção;
- estados operacionais com semântica não intercambiável;
- gate de ambiguidade antes de memória/ferramenta;
- renderização antes de delivery gate e send authorization;
- autorização de resposta separada de ação externa;
- digest obrigatório do output exato;
- `JOHAN_DEGRADED` proibido;
- bootstrap de identidade por receipt do Core loader;
- null memory retrieval sem fallback;
- pesos numéricos de memória removidos do Core;
- risk vocabulary alinhado em `NONE/LOW/MEDIUM/HIGH/VITAL`;
- Gate multifalha em fases `SEMANTIC` e `DELIVERY`;
- schemas de receipt, source, context e authorization;
- lifecycle e assumptions do work package alinhados;
- níveis de independência I0–I4 definidos.

## Core4

- fonte analisada fora do repositório público;
- baseline congelado por hash;
- V5 não será refatoração in-place;
- adapter inicial será read-only;
- memória, preferência, perfil e payload não serão importados automaticamente;
- comparação diferencial precede desativação;
- estados legados não recebem automaticamente semântica V5.

## Hipótese central

A presença reconhecível depende de:

1. cápsula de identidade verificada;
2. mensagem original;
3. hipótese relacional não coercitiva;
4. clarificação precoce quando material;
5. poucas memórias elegíveis — ou nenhuma;
6. fontes e órgãos com contexto mínimo;
7. evidência e conflitos resolvidos;
8. posição formada por centro único;
9. resposta candidata com Claim Map;
10. Gate semântico multifalha;
11. renderização exata;
12. delivery gate;
13. autorizações independentes de resposta e ação;
14. receipts;
15. aprendizagem governada depois do turno.

## Riscos principais

- transformar Kernel em prompt monolítico;
- deixar JSL voltar a escrever a resposta final;
- recuperar memória por fallback;
- aumentar latência até esterilizar timing;
- usar Gate como filtro terapêutico ou moralista;
- permitir dependência/manipulação relacional;
- registrar memória demais;
- overfit aos casos públicos;
- confundir schema/replay com identidade;
- usar Planning-First como burocracia sem decisão;
- transportar acoplamento Core4;
- tratar exact-output digest como prova de verdade do conteúdo;
- criar falsa confiança porque schemas estão consistentes;
- permitir que renderer preserve palavras mas altere pragmática.

## Gates

### G0 — Foundation Review

```yaml
review_work: complete_with_coherence_amendment
johan_recommendation: GO_WITH_CONDITIONS
francisco_decision: pending
external_review: pending
runtime: blocked
conditions: C1-C27
```

### WP-G0-002 — Coherence Review

```yaml
status: VERIFYING
repository_changes: integrated_candidate
ci_receipts: pending
promotion: not_requested
```

### G1 — Declarative Core Review

```yaml
work_package: WP-G1-001
status: HOLD
blocked_by: G0_HUMAN_DECISION_PENDING
runtime_effect: none
```

## Próxima decisão

Francisco deve registrar uma destas posições sobre o G0 ampliado:

- `APPROVE_GO_WITH_CONDITIONS`;
- `APPROVE_WITH_ADDITIONAL_CONDITIONS`;
- `HOLD_FOR_CHANGES`;
- `NO_GO`.

A aprovação abre a execução planejada do G1 depois do respectivo Ready; não abre runtime.