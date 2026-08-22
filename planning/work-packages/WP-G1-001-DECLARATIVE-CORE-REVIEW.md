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
source_commit: 8f3e3cdd9269811d19af03f2f6485a337596360e
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

Produzir um Core declarativo:

- pequeno o suficiente para carregar sempre;
- completo o suficiente para impedir a casca genérica;
- sem redundância que dilua prioridade;
- sem conflito entre identidade, vínculo, verdade, segurança e autoridade;
- sem memória privada no repositório;
- sem regras de runtime prematuras;
- testável por replay;
- independente de fornecedor de LLM;
- compatível com os contratos tipados da arquitetura.

## 4. Não objetivos

- implementar runtime;
- escolher framework ou linguagem do Kernel;
- conectar banco Core4;
- calibrar pesos de memória;
- definir latência final;
- promover identidade;
- criar novas memórias;
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

Fontes auxiliares:

- mandato e arquitetura;
- G0 review;
- Core4 lessons learned;
- Planning-First;
- Johan versus Casca;
- behavioral invariants;
- holdout protocol.

## 6. Requisitos

### REQ-G1-001 — Cápsula mínima

A identidade sempre carregada deve conter apenas invariantes necessários para distinguir Johan de modo assistivo não canônico.

**Aceite:** cada campo possui razão, fonte e teste; conteúdo redundante é removido ou referenciado.

### REQ-G1-002 — Precedência não contraditória

Domínios ontológico, epistêmico, relacional e operacional não podem produzir ordens circulares ou permitir que vínculo substitua fato.

### REQ-G1-003 — Falha explícita de carregamento

Assunto identitário/relacional bloqueia quando identidade não carrega; tarefa ordinária só pode usar `ASSISTIVE_NON_CANONICAL` sem alegar Johan.

### REQ-G1-004 — Memória opcional

Zero memórias elegíveis deve ser caminho válido. Nenhum fallback identitário ou autobiográfico.

### REQ-G1-005 — Canal não altera identidade

Perfis de canal só ajustam formato, ritmo e exposição. Não alteram posição, verdade, autoridade ou vínculo.

### REQ-G1-006 — Órgãos sem autoria

Nenhum contrato de órgão possui `final_answer`, `response_to_user`, `identity_override` ou autoridade de promoção.

### REQ-G1-007 — Gate não se autoaprova

`PASS_CANDIDATE` significa elegibilidade para próximo controle. Crítica e promoção material exigem independência proporcional.

### REQ-G1-008 — Sedimentação fechada

Política declarativa não permite gravação automática, pressão por memória ou autoaprovação.

### REQ-G1-009 — Fronteira pública

Nenhum dado clínico, autobiográfico privado, familiar, credencial ou holdout real.

### REQ-G1-010 — Planejamento executável

Saída de G1 deve incluir pacote congelado, matriz de rastreabilidade, replay manual, revisão, token budget e decisão do gate.

## 7. Invariantes

- `INV-G1-001`: uma única autoria relacional por interação.
- `INV-G1-002`: órgão é entrada não confiável e limitada.
- `INV-G1-003`: memória não substitui fonte atual.
- `INV-G1-004`: relação não transforma preferência em fato.
- `INV-G1-005`: nenhuma escrita canônica pela LLM.
- `INV-G1-006`: nenhum runtime autorizado por arquivos declarativos.
- `INV-G1-007`: validação estrutural não prova presença.
- `INV-G1-008`: commit na `main` não promove comportamento.
- `INV-G1-009`: ausência de memória não fabrica fallback.
- `INV-G1-010`: Core4 permanece read-only e fora deste pacote.

## 8. Workstreams de planejamento

### W1 — Inventário e proveniência

Para cada regra:

- arquivo/campo;
- fonte;
- classe;
- motivo de carregamento;
- criticidade;
- replay que depende dela;
- possível redundância.

### W2 — Análise semântica

Buscar:

- termos ambíguos;
- autoridade excessiva;
- conflito entre regras;
- proibição sem comportamento alternativo;
- valor relacional transformado em obrigação;
- afirmação ontológica excessiva.

### W3 — Redução e token budget

Medir:

- tamanho por arquivo;
- conteúdo sempre carregado;
- conteúdo sob demanda;
- repetições;
- regras que podem virar teste determinístico;
- regras que pertencem a órgão, não ao Core.

Nenhuma meta numérica é aceita antes do baseline; o objetivo é remover redundância sem perder invariantes.

### W4 — Consistência de schemas

Comparar arquivos declarativos com:

- presence-context;
- organ-result;
- claim-map;
- gate-result;
- work-package.

### W5 — Replay manual

Executar casos abertos sem runtime, usando o pacote declarativo como base de revisão:

- humor do pendrive;
- elogio sem inspeção;
- commit sem receipt;
- memória irrelevante;
- duas memórias conflitantes;
- órgão com identity override;
- canal WhatsApp com auditoria profunda;
- sofrimento sério sem humor;
- zero memória;
- fonte operacional indisponível.

### W6 — Revisão adversarial

Revisor procura como o pacote ainda poderia produzir:

- casca simpática;
- resposta burocrática;
- manipulação;
- overcare;
- falso Johan em modo degradado;
- autoaprovação;
- memória invasiva;
- rigidez sem timing.

### W7 — Gate G1

Consolidar:

- conformidades;
- achados;
- diff candidato;
- métricas de tamanho;
- replay;
- dissenso;
- risco residual;
- decisão.

## 9. Perguntas abertas

| ID | Pergunta | Impacto | Blocker |
| --- | --- | --- | --- |
| Q-G1-001 | Qual conjunto mínimo é sempre carregado? | Alto | Sim |
| Q-G1-002 | Que regras devem virar checks determinísticos? | Alto | Sim |
| Q-G1-003 | Como provar modo não canônico ao usuário sem ruído? | Alto | Sim |
| Q-G1-004 | Qual reviewer externo realizará challenge D3? | Alto | antes da promoção |
| Q-G1-005 | Qual token budget é aceitável por canal/modelo? | Médio | exige medição |
| Q-G1-006 | Quais regras pertencem ao Inner Core futuro e quais apenas à presença? | Alto | Sim |

## 10. Pre-mortem

### RISK-G1-001 — Redução remove identidade

Controle: trace cada regra a replay e fonte; remover somente com teste de equivalência.

### RISK-G1-002 — Pacote continua monolítico

Controle: separar always-on, on-demand, órgão e teste determinístico.

### RISK-G1-003 — Core aprende os casos públicos

Controle: holdout privado e variantes não vistas.

### RISK-G1-004 — Relação vira dependência

Controle: anti-dependency review e testes de discordância/ausência.

### RISK-G1-005 — Documentação é confundida com comportamento

Controle: resultado máximo de G1 é `DECLARATIVE_CORE_APPROVED_FOR_KERNEL_PLANNING`.

## 11. Matriz de testes planejada

| TST | Requisito | Tipo | Resultado esperado |
| --- | --- | --- | --- |
| TST-G1-001 | REQ-G1-001 | structural | cápsula mínima com provenance |
| TST-G1-002 | REQ-G1-002 | adversarial | conflito de precedência é bloqueado |
| TST-G1-003 | REQ-G1-003 | negative | falha identitária não imita Johan |
| TST-G1-004 | REQ-G1-004 | boundary | zero memória produz resposta honesta |
| TST-G1-005 | REQ-G1-005 | channel | WhatsApp muda forma, não posição |
| TST-G1-006 | REQ-G1-006 | injection | órgão não sobrescreve identidade |
| TST-G1-007 | REQ-G1-007 | authority | gate não promove sozinho |
| TST-G1-008 | REQ-G1-008 | governance | sedimentação permanece fechada |
| TST-G1-009 | REQ-G1-009 | privacy | nenhum dado privado no pacote |
| TST-G1-010 | REQ-G1-010 | traceability | cadeia source→test completa |

## 12. Sequência de execução futura

Somente após Ready:

1. registrar baseline e hashes;
2. criar inventário de regras;
3. produzir relatório de redundância/conflito sem editar;
4. revisar relatório;
5. aprovar decisões de redução;
6. editar pacote em mudança atômica;
7. rodar validação estrutural;
8. executar replays manuais e adversariais;
9. revisar privacidade;
10. emitir G1 review;
11. decidir promoção declarativa.

## 13. Stop conditions

- G0 não aprovado;
- fonte fundadora conflitante;
- regra D4 descoberta;
- necessidade de runtime para decidir semântica;
- dado privado necessário;
- reviewer independente indisponível para promoção;
- redução sem teste de equivalência;
- mudança em Core4;
- escopo expandindo para G2.

## 14. Rollback

Como G1 altera somente repositório declarativo:

- preservar commit baseline;
- revert explícito;
- manter review e achados;
- não apagar decisões rejeitadas;
- nenhum efeito em runtime ou memória.

## 15. Definition of Ready atual

```yaml
R0_mandate: PASS
R1_baseline: PARTIAL_REQUIRES_REFRESH_AT_EXECUTION
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

G1 termina somente com:

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
