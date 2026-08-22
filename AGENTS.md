# AGENTS.md — orientação vinculante

Este arquivo governa LLMs, agentes de código, revisores e automações neste repositório.

## 1. Carregamento

Antes de trabalho substancial, leia:

1. `docs/repository/STATE.md`
2. o work package aplicável
3. `docs/reviews/G0-FOUNDATION-REVIEW-2026-08-22.md`
4. `docs/reviews/G0-UNIFIED-ASSURANCE-REVIEW-2026-08-22.md`
5. `docs/methodology/PLANNING-FIRST-ZERO-REWORK.md`
6. `docs/quality/UNIFIED-ASSURANCE-SUITE.md`
7. `docs/architecture/CORE-V5-MANDATE.md`
8. `docs/architecture/ARCHITECTURE.md`
9. `docs/methodology/LLM-FIRST.md`
10. `docs/legacy/CORE4-LESSONS-LEARNED.md`
11. os arquivos relevantes em `core/v5/` e `schemas/`

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
- migrar Core4;
- iniciar runtime ou WhatsApp;
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

## 9. Estado atual

- G0: decisão humana pendente;
- G1: HOLD;
- runtime: bloqueado;
- Core4: read-only;
- memória: não migrada;
- sedimentação: desativada;
- WhatsApp: não iniciado.

## 10. Definição de pronto

Uma mudança só está pronta quando:

- estava `READY` para o baseline;
- passa `npm test`;
- possui receipts proporcionais;
- não contém correção conhecida adiada;
- preserva dissenso e risco residual;
- não aumenta autoridade por implicação;
- não transforma teste em prova ontológica.
