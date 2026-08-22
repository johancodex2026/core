# Planning Workspace

Este diretório contém work packages do Core V5.

## Regras

- work package não é autorização automática de execução;
- `READY` exige review record;
- arquivo em `planning/` pode descrever código ainda inexistente;
- runtime permanece bloqueado conforme `docs/repository/STATE.md`;
- pacotes rejeitados e superseded permanecem para aprendizado;
- nenhum dado privado ou holdout real entra neste diretório público.

## Convenção

```text
planning/work-packages/WP-<GATE>-<SEQ>-<SLUG>.md
```

## Estado atual

O primeiro pacote é `WP-G1-001-DECLARATIVE-CORE-REVIEW.md`, mantido em `HOLD` até decisão explícita de G0.
