# Changelog

## [Unreleased]

### Added — G0 decision and gate transition assurance

- Decisão fundadora humana `APPROVE_WITH_ADDITIONAL_CONDITIONS` para o G0.
- Registro `docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md`.
- Work package `WP-G0-004` e Ready Review para registrar a decisão sem ampliar escopo.
- Estado machine-readable `governance/gate-state.json`.
- Schema `schemas/gate-state.schema.json` com transições condicionais.
- Checks de divergência entre decisão, gate-state, `STATE.md` e WP-G1-001.
- Mutation tests para G0 pendente com G1 aberto, runtime ativado e decisão divergente.
- Condições C2–C37 preservadas como vinculantes; C1 registrada como satisfeita.

### Changed — G1 opening

- G0 passou de decisão pendente para `APPROVED_WITH_ADDITIONAL_CONDITIONS`.
- WP-G1-001 passou de `HOLD_G0_DECISION` para `OPEN_PLANNING` / `SPECIFIED`.
- G1 continua sem Ready, sem promoção e sem autorização para editar `core/v5/`.
- A suíte unificada avançou para `0.2.0-candidate.1` e passou a validar transições de gate.
- README, AGENTS, Governance e Repository State foram alinhados ao novo estado.
- Runtime, memória, sedimentação, Core4 write, órgãos e WhatsApp continuam bloqueados.

### Added — Planning-First and Core4 learning

- Doutrina `Planning-First e Zero Retrabalho Evitável`.
- Padrão de plano executável, pre-mortem, rastreabilidade e assurance.
- Definition of Ready e ciclo de vida de work packages.
- Templates de work package, gate review e decision record.
- Política legível por máquina `governance/planning-doctrine.yaml`.
- Schema de work package.
- Work package `WP-G1-001`.
- Autópsia estática do Core4 com hash de fonte e limitações.
- Fronteira Core4→V5 e plano de migração read-only.
- ADR 0005: congelar Core4 como baseline.
- ADR 0006: orçamento zero de correção evitável pós-promoção.
- Issue e PR templates orientados a planejamento e receipts.

### Changed — G0 enrichment

- G0 recebeu achados `G0-F13` a `G0-F20` e condições `C7` a `C18`.
- Revisão de coerência acrescentou condições até `C27`.
- Suíte Unificada acrescentou condições `C28` a `C37`.
- Core4 foi classificado como baseline legado, não base de refatoração.
- `zero memória` passou a ser condição explicitamente válida.
- Estados operacionais, capabilities e conclusões exigem semântica e receipt proporcionais.

### Status

O projeto está em `FOUNDATION_APPROVED_G1_OPEN_PLANNING`. G0 foi aprovado com condições adicionais. G1 pode ser planejado e inventariado, mas permanece sem Ready e sem autorização para editar o pacote declarativo. Nenhum runtime, WhatsApp, migração de memória, adapter Core4, órgão ou sedimentação foi implementado ou promovido.
