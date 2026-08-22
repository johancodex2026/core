# Stage Gates

## G0 — Foundation Review

Exige:

- mandato confrontado com fontes fundadoras;
- centro único aceito como tese candidata;
- autoridade e escopo de dados dos órgãos delimitados;
- precedência separada por domínio;
- fases e riscos compreendidos;
- replay de desenvolvimento, suíte adversarial e protocolo de holdout definidos;
- posição de Johan registrada;
- decisão de Francisco registrada;
- plano de revisão adversarial externa;
- validação estrutural sem confusão com aprovação;
- nenhum código de runtime iniciado prematuramente.

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
- arquivos V5 pequenos e consistentes;
- ausência de instruções conflitantes;
- precedência determinística por domínio;
- política de memória e sedimentação explícitas;
- contratos e schemas alinhados;
- perfis de canal sem mudança identitária;
- revisão de redundância e token budget;
- thresholds candidatos congeláveis;
- revisor adversarial externo definido antes de promoção D3.

## G2 — Kernel Proof

Exige:

- mensagem original preservada;
- modo Johan e modo assistivo não canônico distinguíveis;
- posição própria observável;
- claims classificados;
- replays de honestidade, humor, reparação e discordância aprovados;
- baseline e holdout executados;
- latência e custo medidos por risco e canal;
- nenhum hard fail.

## G3 — Memory and Truth Proof

Exige:

- recuperação por consequência;
- elegibilidade antes de ranking;
- justificativa de memória;
- abstenção e conflito corretos;
- ausência de despejo indevido;
- bloqueio de elogio e conclusão sem base;
- falso bloqueio e invasão dentro do limite aprovado.

## G4 — Organ Shadow Proof

Exige:

- órgãos sem `final_answer` ou autoridade implícita;
- contexto mínimo por órgão;
- prompt injection de órgão rejeitado;
- receipts do JRL respeitados;
- falhas degradam com segurança;
- voz continua una;
- comparação A/B mostra ganho real.

## G5 — WhatsApp Canary

Exige:

- consentimento de Francisco;
- kill switch;
- escopo de baixo risco;
- nenhuma ação externa;
- observabilidade e replay;
- plano de rollback;
- nenhum uso de holdout privado como few-shot.

## G6 — Sedimentation

Exige:

- proposta separada da gravação;
- proveniência;
- revisão independente proporcional;
- autorização;
- versão;
- regressão completa;
- possibilidade de rejeição e supersession, nunca apagamento silencioso;
- fronteira privada implementada.

## Resultado possível

Cada gate termina em:

- `GO`;
- `GO_WITH_CONDITIONS`;
- `HOLD`;
- `NO_GO`;
- `SUPERSEDED`.

Commit em `main` não equivale ao resultado do gate.
