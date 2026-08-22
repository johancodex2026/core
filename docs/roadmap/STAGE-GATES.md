# Stage Gates

## Regra comum

Todo gate D1–D4 exige:

- work package;
- baseline exato;
- Definition of Ready antes de execução;
- rastreabilidade source→test→receipt;
- pre-mortem;
- stop conditions;
- risco residual;
- decisão explícita;
- orçamento zero de correção evitável conhecida depois da promoção.

Commit em `main` não equivale ao resultado do gate.

## G0 — Foundation Review

Exige:

- mandato confrontado com fontes fundadoras;
- centro único aceito como tese candidata;
- autoridade e escopo dos órgãos delimitados;
- precedência separada por domínio;
- fases e riscos compreendidos;
- replay de desenvolvimento, adversarial e holdout definidos;
- posição de Johan registrada;
- decisão de Francisco registrada;
- plano de revisão adversarial externa;
- validação estrutural sem confusão com aprovação;
- Core4 congelado como baseline e fronteira read-only definida;
- Planning-First registrado;
- nenhum runtime iniciado prematuramente.

Estado atual:

```yaml
review: COMPLETE
johan_recommendation: GO_WITH_CONDITIONS
francisco_decision: PENDING
external_review: PLANNED_NOT_EXECUTED
runtime: BLOCKED
```

## G1 — Declarative Core Review

Exige:

- G0 aprovado por Francisco;
- `WP-G1-001` Ready para baseline atual;
- arquivos V5 pequenos e consistentes;
- ausência de instruções conflitantes;
- precedência determinística;
- memória e sedimentação explícitas;
- null retrieval válido;
- contratos/schemas alinhados;
- perfis de canal sem mudança identitária;
- redundância e token budget medidos;
- replay manual/adversarial;
- privacidade revisada;
- reviewer externo definido antes de promoção D3;
- runtime não iniciado.

Resultado máximo: aprovação do pacote declarativo para planejamento do Kernel.

## G2 — Kernel Proof

Exige work packages separados para contexto, claims, posição, resposta, envio e replay.

Critérios:

- mensagem original preservada;
- modos Johan e assistivo não canônico distinguíveis;
- posição própria observável;
- claims classificados;
- autoridade de envio separada;
- fluxo feliz e falhas;
- baseline, adversarial e holdout;
- latência/custo medidos;
- nenhum hard fail;
- nenhum claim operacional sem receipt.

## G3 — Memory and Truth Proof

Exige:

- recuperação por consequência;
- elegibilidade antes de ranking;
- justificativa `why_now/response_delta`;
- zero memória e conflito corretos;
- ausência de despejo indevido;
- bloqueio de elogio/conclusão sem base;
- crítico independente proporcional;
- falso bloqueio e invasão dentro do limite aprovado.

## G4 — Organ Shadow Proof

Exige:

- um adapter/work package por órgão;
- órgãos sem `final_answer`;
- contexto mínimo;
- injection rejeitada;
- receipt semantics;
- falhas degradam com segurança;
- voz continua una;
- Kernel não conhece banco interno;
- comparação A/B demonstra ganho.

## G5 — WhatsApp Canary

Exige:

- consentimento de Francisco;
- perfil aprovado;
- provider receipts e estados tipados;
- kill switch;
- escopo de baixo risco;
- nenhuma ação externa além do plano;
- observabilidade e replay;
- rollback/containment;
- nenhum holdout usado como few-shot.

## G6 — Sedimentation

Exige:

- proposta separada da gravação;
- provenance;
- revisão independente;
- autorização;
- versão;
- regressão completa;
- rejeição e supersession;
- fronteira privada implementada;
- nenhuma autoaprovação da mesma manifestação.

## G7 — Autonomia operacional limitada

Exige:

- capabilities tipadas;
- least privilege;
- idempotência;
- receipts;
- confirmação proporcional;
- incident response;
- restore drills;
- escaped defect process;
- promoção gradual.

## Resultado possível

- `GO`;
- `GO_WITH_CONDITIONS`;
- `HOLD`;
- `NO_GO`;
- `SUPERSEDED`.

## Promotion Record

Todo `GO` que produz efeito além do repositório registra:

```yaml
subject:
baseline_commit:
work_package:
ready_record:
test_receipts: []
reviewers: []
independence:
residual_risks: []
dissent: []
promotion_target:
decision:
activated_at:
rollback_or_recovery:
```
