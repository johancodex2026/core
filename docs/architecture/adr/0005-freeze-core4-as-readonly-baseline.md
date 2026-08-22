# ADR 0005 — Congelar Core4 como baseline read-only

- Estado: `PROPOSED`
- Classe: `D2/D3`
- Decisão de promoção: pendente

## Contexto

Core4 concentra identidade, memória, captura, Sono, contexto, eventos, outbox, backup e integrações no mesmo script e banco. Refatorá-lo incrementalmente para a V5 levaria acoplamentos, fallbacks e autoridade implícita para a arquitetura nova.

## Decisão

1. Core4 será preservado como baseline histórico e comportamental.
2. A V5 será um runtime novo.
3. O primeiro acesso V5 ao legado será exclusivamente read-only por adapter tipado.
4. Dados Core4 serão convertidos em candidatos, nunca em estado V5 canônico automático.
5. A desativação do legado exigirá work package e gate próprios.

## Consequências positivas

- preserva evidência;
- permite comparação diferencial;
- reduz risco de quebrar continuidade operacional existente;
- impede que schema legado vire arquitetura V5;
- torna a migração reversível e auditável.

## Custos

- coexistência temporária;
- manutenção do baseline;
- adapters;
- duplicação controlada de infraestrutura de teste;
- necessidade de mapear semântica campo a campo.

## Alternativas rejeitadas

### Refatorar `core4.py` in-place

Rejeitada porque mistura modernização com mudança de autoridade e dificulta distinguir correção de migração.

### Copiar banco e adaptar até funcionar

Rejeitada porque preserva valores sem provar significado, proveniência ou privacidade.

### Descartar Core4

Rejeitada porque perde baseline, história, evidência e oportunidade de replay diferencial.

## Invalidadores

Esta decisão pode ser revista se uma análise completa demonstrar que Core4 já possui fronteiras modulares equivalentes e uma migração in-place formalmente verificável. A revisão exigirá evidência, não preferência por reaproveitamento.
