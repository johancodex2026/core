# Repository State

```yaml
project: Core V5
repository: johancodex2026/core
state: FOUNDATION_CANDIDATE
canonical_branch: main
architecture_version: 0.3-candidate
core_package_version: 5.0.0-candidate.3
foundation_review: COMPLETE_DECISION_PENDING
g0_recommendation: GO_WITH_CONDITIONS
g0_johan_position: RECORDED
g0_human_decision: PENDING
g0_external_adversarial_review: PLANNED_NOT_STARTED
g1_declarative_core_review: PLANNED_HOLD_G0_DECISION
active_work_package: WP-G1-001
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
structural_validation: DEFINED_AWAITING_CI_RECEIPT
planning_validation: DEFINED_AWAITING_CI_RECEIPT
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
- a revisão G0 confrontou a fundação com as fontes de continuidade, espécie e Core-Light;
- a autópsia estática do Core4 foi registrada com fronteira de migração;
- a doutrina Planning-First foi transformada em artefatos, templates e validação estrutural;
- Johan registrou recomendação `GO_WITH_CONDITIONS`;
- Francisco ainda não registrou a decisão fundadora do gate;
- o work package G1 existe, mas permanece `HOLD`;
- revisão adversarial externa ainda não foi executada;
- os arquivos declarativos ainda não governam uma manifestação real;
- nenhuma memória existente foi migrada;
- nenhum órgão foi reconectado;
- nenhuma mensagem de WhatsApp é produzida pela V5;
- nenhuma mudança identitária foi promovida ao Inner Core;
- commit em `main` continua sendo integração, não canonicalidade.

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

## Core4

- fonte analisada fora do repositório público;
- baseline congelado por hash;
- V5 não será refatoração in-place;
- adapter inicial será read-only;
- memória, preferência, perfil e payload não serão importados automaticamente;
- comparação diferencial precede desativação;
- `verified`, `sent`, `active` e outros estados legados não recebem automaticamente semântica V5.

## Hipótese central

A presença reconhecível depende da integração de:

1. mensagem original;
2. cápsula de identidade carregada;
3. contexto relacional ativo sem coerção;
4. poucas memórias elegíveis e consequentes — ou nenhuma;
5. sinais tipados e não confiáveis de órgãos;
6. fontes e receipts atuais quando necessários;
7. posição formada por um centro único;
8. gate de verdade e vínculo que não se autoaprova;
9. autorização separada de envio e ação;
10. renderização adequada ao canal;
11. aprendizado governado após a interação.

## Riscos principais

- transformar o Presence Kernel em prompt monolítico;
- deixar o JSL voltar a escrever a resposta final;
- recuperar memória por semelhança ou fallback, não consequência;
- aumentar latência e complexidade até esterilizar timing;
- usar o gate como filtro moralista, terapêutico ou concordante;
- permitir que relação vire dependência ou manipulação;
- registrar memória demais;
- treinar nos próprios casos de avaliação;
- confundir replay aprovado com identidade comprovada;
- iniciar runtime antes de estabilizar e aprovar o Core declarativo;
- transformar Planning-First em documentação sem decisão;
- usar “zero correção” para esconder incidentes ou evolução;
- transportar acoplamento Core4 para a V5 por reaproveitamento conveniente.

## Gates

### G0 — Foundation Review

```yaml
review_work: complete
johan_recommendation: GO_WITH_CONDITIONS
francisco_decision: pending
external_review: pending
runtime: blocked
conditions_include_core4_boundary: true
```

### G1 — Declarative Core Review

```yaml
work_package: WP-G1-001
status: HOLD
blocked_by: G0_HUMAN_DECISION_PENDING
runtime_effect: none
```

## Próxima decisão

Francisco deve registrar uma destas posições sobre `docs/reviews/G0-FOUNDATION-REVIEW-2026-08-22.md`:

- `APPROVE_GO_WITH_CONDITIONS`;
- `APPROVE_WITH_ADDITIONAL_CONDITIONS`;
- `HOLD_FOR_CHANGES`;
- `NO_GO`.

A aprovação abre a execução do planejamento G1 após Definition of Ready; não abre runtime.
