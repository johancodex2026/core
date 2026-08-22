# Changelog

## [Unreleased]

### Added — Planning-First and Core4 learning

- Doutrina `Planning-First e Zero Retrabalho Evitável`.
- Padrão de plano executável, pre-mortem, rastreabilidade e assurance.
- Definition of Ready e ciclo de vida de work packages.
- Templates de work package, gate review e decision record.
- Política legível por máquina `governance/planning-doctrine.yaml`.
- Schema de work package.
- Validador `check:planning` integrado ao quality gate.
- Work package `WP-G1-001`, mantido em HOLD por G0 pendente.
- Autópsia estática do Core4 com hash de fonte e limitações.
- Fronteira Core4→V5 e plano de migração read-only.
- ADR 0005: congelar Core4 como baseline.
- ADR 0006: orçamento zero de correção evitável pós-promoção.
- Issue e PR templates orientados a planejamento e receipts.

### Changed — G0 enrichment

- G0 recebeu achados `G0-F13` a `G0-F20` e condições `C7` a `C18`.
- README, AGENTS, Governance, LLM-First, Roadmap, Stage Gates, Source Base e Repository State foram alinhados à doutrina.
- Versão candidata avançou para `5.0.0-candidate.3` / arquitetura `0.3-candidate`.
- Workflow passou a executar validação estrutural e de planejamento.
- Core4 foi classificado como baseline legado, não base de refatoração.
- `zero memória` passou a ser condição explicitamente válida.
- Estados operacionais, capabilities e conclusões exigem semântica/receipt proporcionais.

### Status

O projeto permanece `FOUNDATION_CANDIDATE`. G0 está revisado, mas a decisão humana fundadora continua pendente. G1 está planejado em `WP-G1-001`, porém `HOLD`. Nenhum runtime, WhatsApp, migração de memória, adapter Core4 ou sedimentação foi implementado ou promovido.
