# WP-G0-002 — Revisão de Coerência, Semântica e Cognição LLM-First

```yaml
id: WP-G0-002
status: READY
change_class: D3
semantic_contract_version: 1.0.0-candidate.1
owner: founding_dyad
author: Johan
human_authority: Francisco Gonzaga Gomes
reviewers:
  - Johan — revisão arquitetural fundadora
review_independence: LIMITED_SAME_MANIFESTATION
created_at: 2026-08-22
updated_at: 2026-08-22
planning_baseline_commit: d39066974f88505ecc471ab19c80e18c22891b9a
ready_baseline_commit: 27529771182f59f70cde6bd4c274347a973dcf0e
ready_record_id: WP-G0-002-READY-2026-08-22-R3
ready_record_commit: null
target_branch: main
promotion_target: repository_only
runtime_effect: none
memory_effect: none
privacy_class: public_architecture
```

## 1. Mandato

Executar, antes do G1, revisão transversal da fundação para localizar e corrigir incoerências, ambiguidades semânticas, desvios LLM-First, lacunas de autoridade/evidência e contratos incapazes de impedir combinações inválidas.

Mandato humano: Francisco pediu o check, a organização e a execução das melhorias. Isso não equivale a aprovação G0.

## 2. Resultado observável

- contrato semântico humano e machine-readable;
- versões coerentes;
- semântica literal antes de hipótese relacional;
- precedência por domínio;
- ação e envio separados;
- Renderer antes do Gate;
- Gate sobre o candidato final, com outcome/findings;
- taxonomia única de risco;
- receipts tipados;
- modos coerentes;
- work packages com planning/Ready/Ready-record distintos;
- validação cruzada;
- G0 ainda pendente, G1 HOLD e runtime bloqueado.

## 3. Não objetivos

- aprovar G0;
- iniciar G1;
- implementar runtime;
- migrar memória ou Core4;
- conectar órgãos/WhatsApp;
- sedimentar;
- calibrar comportamento, latência ou pesos.

## 4. Estado comprovado

| Item | Estado no Ready baseline |
| --- | --- |
| `main` | `27529771182f59f70cde6bd4c274347a973dcf0e` |
| versão repo | arquitetura `0.3-candidate`, pacote `5.0.0-candidate.3` |
| cápsula | pacote `5.0.0-candidate.2` — divergente |
| arquitetura | `0.2-candidate` — divergente |
| G0 | decisão humana pendente |
| G1 | HOLD |
| runtime | bloqueado |

## 5. Requisitos

- `REQ-CS-001` contrato semântico único e versionado.
- `REQ-CS-002` raw turn e semântica literal antes de hipóteses relacionais.
- `REQ-CS-003` precedência por domínios sem vazamento.
- `REQ-CS-004` action authority e send authority separadas.
- `REQ-CS-005` Gate separa outcome de findings.
- `REQ-CS-006` risco normativo `NONE|LOW|MEDIUM|HIGH|VITAL`.
- `REQ-CS-007` modos `JOHAN`/`ASSISTIVE_NON_CANONICAL` semanticamente válidos.
- `REQ-CS-008` versões coerentes.
- `REQ-CS-009` planning baseline, Ready baseline e Ready record commit distintos.
- `REQ-CS-010` `npm run check` inclui coerência cruzada.
- `REQ-CS-011` G0/G1/runtime preservam autoridade.
- `REQ-CS-012` Renderer produz candidato final antes do Gate.
- `REQ-CS-013` componente autoral do turno não é tratado como identidade.
- `REQ-CS-014` modo assistivo pode devolver resposta atual, mas não executar ação externa adicional.
- `REQ-CS-015` memória consequente ausente impede PASS; zero memória aplicável é válido.
- `REQ-CS-016` generic-shell finding não força personalização em turno ordinário.

## 6. Invariantes

- mensagem original preservada;
- identidade limita autoridade, não preinterpreta;
- vínculo não altera fatos;
- órgão não escreve resposta;
- ação executada exige receipt;
- Gate não promove;
- candidato não muda após Gate;
- send authority autoriza digest exato;
- componente não é identidade;
- ausência de memória é válida;
- G0 pending, G1 HOLD;
- Core4 read-only;
- nenhum dado privado.

## 7. Perguntas abertas

| ID | Pergunta | Impacto | Blocker |
| --- | --- | --- | --- |
| Q-CS-001 | Quem fará revisão externa G0/D3? | alto para promoção | não para correção repository-only |
| Q-CS-002 | Quantos estágios preservam timing no runtime? | alto em G2 | não para fundação |
| Q-CS-003 | Como verificar equivalência do Renderer? | alto em G2 | não para contrato candidato |

## 8. Pre-mortem

- glossário vira nova fonte de conflito;
- Gate parece prova de verdade;
- digests viram segurança teatral;
- schemas permitem combinação inválida;
- controles esterilizam sagacidade;
- Ready é confundido com promoção;
- review é narrado como G0 aprovado.

## 9. Testes planejados

| TST | Resultado |
| --- | --- |
| TST-CS-001 | JSONs parseiam |
| TST-CS-002 | versões coincidem |
| TST-CS-003 | literal semantics precede relational hypotheses |
| TST-CS-004 | risco normativo único |
| TST-CS-005 | outcome/findings separados |
| TST-CS-006 | Gate/claims/receipts ligados por digests |
| TST-CS-007 | assistive mode sem memória/vínculo/ação adicional |
| TST-CS-008 | máximo de quatro memórias |
| TST-CS-009 | baselines e Ready record distintos |
| TST-CS-010 | G0 pending, G1 HOLD, runtime false |
| TST-CS-011 | Core4 migration NOT_AUTHORIZED |
| TST-CS-012 | candidato final precede Gate |
| TST-CS-013 | componente não é identidade |
| TST-CS-014 | generic shell possui escopo |
| TST-CS-015 | `npm run check` passa |

## 10. Plano por grupos

1. semântica e versões;
2. ciclo cognitivo;
3. precedência e autoridade;
4. Gate/claims/receipts;
5. schemas e modos;
6. work packages/baselines;
7. state/governance/README;
8. validators;
9. review e receipts.

## 11. Stop conditions

- runtime ou dado privado necessário;
- mudança D4;
- alteração Core4;
- conflito fundador material;
- nova decisão fora de REQ-CS-001–016;
- parent diverge do Ready record commit;
- teste crítico impossível sem limitação explícita.

## 12. Ready Record

```yaml
review_id: WP-G0-002-READY-2026-08-22-R3
planning_baseline_commit: d39066974f88505ecc471ab19c80e18c22891b9a
ready_baseline_commit: 27529771182f59f70cde6bd4c274347a973dcf0e
ready_record_commit: populated_by_first_execution_receipt
criteria:
  R0: PASS
  R1: PASS
  R2: PASS
  R3: PASS
  R4: PASS
  R5: PASS
  R6: PASS
  R7: PASS
  R8: NA_WITH_REASON_REPOSITORY_ONLY_EXTERNAL_REVIEW_REMAINS_G0_BLOCKER
  R9: PASS
result: READY
forbidden_effects:
  - G0_approval
  - G1_start
  - runtime
  - memory
  - identity_promotion
  - Core4_migration
```

## 13. Dissenso e limite

A mesma manifestação planeja e critica. Isso é suficiente somente para integrar correção candidata repository-only. Não substitui revisão externa nem promoção D3.

## 14. Critério de saída

Correções implementadas no escopo, validações executadas, limitações registradas, G0 pendente, G1 HOLD e nenhum efeito em runtime/memória.
