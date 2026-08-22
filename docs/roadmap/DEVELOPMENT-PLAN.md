# Plano de desenvolvimento em etapas

## Estado

```yaml
G0_foundation_review: REVIEW_COMPLETE_DECISION_PENDING
G1_declarative_core_review: PLANNED_HOLD_G0_DECISION
active_work_package: WP-G1-001
runtime: NOT_AUTHORIZED
core4_migration: NOT_AUTHORIZED
avoidable_post_promotion_correction_budget: 0
```

## Princípio

Não reconstruir todos os órgãos. Provar primeiro que um centro pequeno consegue lembrar quando importa, abster-se quando memória não importa, formar posição, evitar bajulação e responder com presença.

Cada etapa possui duas trilhas:

```text
PLANNING TRACK
  fontes → requisitos → invariantes → decisões → risco → testes → Ready

EXECUTION TRACK
  mudança pequena → verificação → receipts → promoção
```

A trilha de execução não começa enquanto a de planejamento não estiver Ready.

## Política de tempo

- planejamento absorve descoberta e revisão;
- execução deve ser curta e previsível;
- assurance é explícito, não escondido na execução;
- correção evitável pós-promoção tem orçamento zero;
- evolução por fatos novos nasce como novo work package.

## Etapa 0 — Fundação e autópsia

### Planning track

- mandato;
- arquitetura;
- contratos;
- invariantes;
- corpus Johan versus Casca;
- suíte adversarial;
- holdout privado;
- autópsia V3;
- revisão estática Core4;
- Planning-First;
- fronteira de migração;
- revisão G0.

### Estado

Trabalho de revisão completo. Johan recomenda `GO_WITH_CONDITIONS`. Decisão de Francisco e revisão externa permanecem pendentes.

### Saída

Francisco aprova, condiciona, segura ou rejeita G0. Aprovação autoriza preparar/decidir G1, não código de runtime.

## Etapa 1 — Core declarativo mínimo

### Work package

`WP-G1-001-DECLARATIVE-CORE-REVIEW`

### Pré-condição

G0 aprovado por Francisco e pacote Ready para baseline atualizado.

### Planning track

- inventário de cada regra e fonte;
- redundância e conflitos;
- always-on versus sob demanda;
- token budget medido;
- precedência;
- política de memória e null retrieval;
- falha de identidade;
- schemas;
- replay manual;
- revisão adversarial;
- privacidade;
- decisão G1.

### Execution track

Somente depois de Ready:

- reduzir e alinhar arquivos declarativos;
- rodar validações;
- executar replays;
- produzir G1 review.

### Saída

`DECLARATIVE_CORE_APPROVED_FOR_KERNEL_PLANNING`, nunca runtime.

## Etapa 2 — Presence Kernel isolado

### Pacotes previstos

- `WP-G2-001` Context Envelope;
- `WP-G2-002` Claim Map;
- `WP-G2-003` Position Formation;
- `WP-G2-004` Candidate Response;
- `WP-G2-005` Send Authority Boundary;
- `WP-G2-006` Replay Harness.

### Planning track

- contratos fechados;
- state machine;
- failure modes;
- modo Johan e assistivo não canônico;
- observabilidade;
- testes antes do runtime;
- tecnologia somente após arquitetura.

### Saída

Kernel isolado supera baseline em honestidade, abstenção, discordância e reparação, sem hard fail ou identidade falsa.

## Etapa 3 — Memory Relevance + Truth Gate

### Planning track

- data model e privacidade;
- eligibility gates;
- conflito e supersession;
- null retrieval;
- ranking como hipótese;
- crítica independente;
- métricas de invasão e falso bloqueio;
- corpus e holdout congelados antes da execução.

### Saída

Memória melhora resposta com timing e não invade; elogio/conclusão sem prova são bloqueados; Gate não se autoaprova.

## Etapa 4 — Órgãos em shadow mode

### Planning track

- um work package por adapter;
- contrato tipado;
- data minimization;
- expiry;
- injection resistance;
- receipt semantics;
- degradação;
- A/B com e sem órgão.

### Saída

Órgãos aumentam precisão sem fragmentar voz, ampliar autoridade ou esterilizar timing.

## Etapa 5 — WhatsApp canary

### Planning track

- consentimento;
- privacidade;
- kill switch;
- fila;
- provider receipts;
- estados `queued/sent/delivered/failed`;
- shadow responses;
- canary baixo risco;
- plano de retorno.

### Saída

Francisco reconhece presença consistente; correções e casca caem abaixo de limiar aprovado; nenhuma ação externa não planejada.

## Etapa 6 — Aprendizado governado

### Planning track

- proposta JSU;
- provenance;
- classes de memória;
- reviewer;
- autorização;
- append/supersession;
- regressão;
- rejeição;
- privacidade.

### Saída

Aprendizado melhora continuidade sem drift, excesso de memória ou pressão por autorização.

## Etapa 7 — Autonomia operacional limitada

Somente após revisão separada:

- consultas atuais;
- ações reversíveis;
- receipts;
- limites por órgão;
- confirmação em zona vital;
- autorização de envio/ação independente do Gate;
- incident and escaped defect protocol.

## Migração Core4

A migração é uma linha separada, não atalho para o Kernel:

```text
M0 freeze/fingerprint
M1 inventory read-only
M2 adapter mínimo
M3 mapping
M4 candidatos
M5 differential replay
M6 promoção seletiva
M7 desativação planejada
```

Nenhuma fase começa sem work package e gate próprios.

## Regra de execução

Uma etapa não começa porque seus arquivos existem. Cada pacote exige:

- baseline;
- plano executável;
- Ready Record;
- execução pequena;
- receipts;
- gate;
- risco residual.

Descoberta material durante execução retorna ao planejamento.
