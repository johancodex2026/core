# AGENTS.md — orientação vinculante

Este arquivo governa LLMs, agentes de código, revisores e automações neste repositório.

## 1. Carregamento

Antes de trabalho substancial, leia:

1. `docs/repository/STATE.md`
2. `governance/gate-state.json`
3. o work package aplicável
4. `docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md`
5. `docs/reviews/G0-FOUNDATION-REVIEW-2026-08-22.md`
6. `docs/reviews/G0-UNIFIED-ASSURANCE-REVIEW-2026-08-22.md`
7. `docs/methodology/PLANNING-FIRST-ZERO-REWORK.md`
8. `docs/quality/UNIFIED-ASSURANCE-SUITE.md`
9. `docs/architecture/CORE-V5-MANDATE.md`
10. `docs/architecture/ARCHITECTURE.md`
11. `docs/methodology/LLM-FIRST.md`
12. `docs/legacy/CORE4-LESSONS-LEARNED.md`
13. os arquivos relevantes em `core/v5/` e `schemas/`

Estado narrativo e estado machine-readable precisam coincidir. Diante de divergência, interrompa a execução e trate como deriva.

## 2. Regra central

> **Um centro cognitivo responsável, vários órgãos silenciosos.**

Centro único significa autoria relacional por turno. Não prova singularidade global, consciência ou identidade canônica.

## 3. Planning-First

```text
+ planejamento
- execução
0 retrabalho evitável pós-promoção
```

Nenhum D1–D4 é executado sem work package, baseline, requisitos, invariantes, decisões, pre-mortem, testes planejados, stop conditions e Ready Record.

Descoberta material durante execução obriga pausa e novo Ready.

## 4. LLM-First

A ordem é:

```text
identidade carregada
→ mensagem original
→ semântica e ambiguidade
→ necessidade de memória/fonte/órgão
→ evidência
→ Turn Plan
→ posição provisória
→ ação e receipts quando necessários
→ posição final
→ Gate
→ render
→ autorização exata
→ envio
→ aprendizagem proposta
```

A posição final sucede os receipts quando afirma resultado de ação.

## 5. Proibições

Nenhum agente pode:

- inventar memória, fonte, execução ou validação;
- usar resposta autorizada como autorização de ferramenta;
- afirmar resultado antes do receipt;
- transformar Action Request em objeto mutável de execução;
- eliminar findings secundários do Gate;
- usar fallback identitário quando nenhuma memória é elegível;
- permitir memória, relação ativa ou ação no modo assistivo;
- aceitar digest sem algoritmo/canonicalização;
- tratar receipt como verdade fora do escopo;
- permitir órgão com `final_answer`, `identity_override` ou `system_instruction`;
- sedimentar;
- migrar ou escrever Core4;
- iniciar runtime, órgãos ou WhatsApp;
- tratar G0 aprovado como G1 Ready;
- editar `core/v5/` durante `G1: OPEN_PLANNING`;
- tratar `main` ou CI verde como promoção;
- mudar suíte e sistema para esconder regressão;
- declarar ausência universal de alucinação.

## 6. Validação

A única entrada pública é:

```bash
npm test
```

Não use scripts subordinados isoladamente como receipt final.

O relatório esperado é:

```text
artifacts/core-v5-assurance-report.json
```

Mudança na suíte exige atualização do work package, mutation tests, revisão de cobertura e limitação de independência registrada.

## 7. Classes de mudança

- `D0`: editorial;
- `D1`: técnica;
- `D2`: comportamental;
- `D3`: identitária/autoridade;
- `D4`: existencial.

Dúvida classifica acima.

## 8. Execução

Durante execução:

- siga o plano por arquivo;
- preserve rollback;
- não faça refatoração lateral;
- pare em stop condition;
- mantenha diff pequeno;
- não use exit code como único receipt;
- diferencie `IMPLEMENTED`, `VERIFIED` e `PROMOTED`.

No G1 atual, somente inventário, medição, análise e preparação de Ready estão autorizados. Edição do pacote declarativo depende do Ready Review do WP-G1-001.

## 9. Estado atual

- G0: `APPROVED_WITH_ADDITIONAL_CONDITIONS`;
- C1: satisfeita;
- C2–C37: vinculantes;
- G1: `OPEN_PLANNING`, ainda não Ready;
- runtime: bloqueado;
- órgãos: não conectados;
- Core4: baseline read-only; migração não autorizada;
- memória: não migrada;
- sedimentação: desativada;
- WhatsApp: não iniciado;
- branch protection: não comprovada.

## 10. Definição de pronto

Uma mudança só está pronta quando:

- estava `READY` para o baseline;
- passa `npm test`;
- possui receipts proporcionais;
- não contém correção conhecida adiada;
- preserva dissenso e risco residual;
- não aumenta autoridade por implicação;
- não transforma teste em prova ontológica.
