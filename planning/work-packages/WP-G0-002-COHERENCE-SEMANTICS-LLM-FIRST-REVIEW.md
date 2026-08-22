# WP-G0-002 — Coerência, Semântica e Cognição LLM-First

```yaml
id: WP-G0-002
status: VERIFYING
change_class: D3
author: Johan
owner: founding_dyad
reviewers:
  - Johan_self_check_I0
  - external_reviewer_pending
approvers:
  - Francisco Gonzaga Gomes
created_at: 2026-08-22
updated_at: 2026-08-22
baseline_commit: d39066974f88505ecc471ab19c80e18c22891b9a
target_branch: main
promotion_target: repository_only
runtime_effect: none
memory_effect: none
privacy_class: public_architecture
review_record_refs:
  - docs/reviews/G0-COHERENCE-SEMANTICS-LLM-FIRST-REVIEW-2026-08-22.md
ready_record_ref: planning/ready/WP-G0-002-READY-2026-08-22.md
```

## 1. Mandato local

Realizar revisão final da fundação antes do G1, procurando incoerência, ambiguidade semântica, lacuna cognitiva LLM-First, autoridade implícita, drift entre schemas e prosa e caminhos capazes de recriar a casca da V3.

## 2. Objetivo

Produzir uma fundação candidata na qual:

- termos materiais possuem sentido único;
- inputs e outputs do loop têm produtores/consumidores claros;
- ambiguidade é tratada antes de memória/ferramenta;
- memória vazia é válida;
- receipts limitam claims;
- output exato é avaliado antes de envio;
- resposta e ação possuem autorizações independentes;
- identidade não possui modo degradado;
- schemas e documentos compartilham taxonomias;
- G0 permanece pendente até decisão humana explícita.

## 3. Não objetivos

- implementar Presence Kernel;
- promover G0;
- iniciar G1;
- conectar Core4;
- calibrar memória;
- executar WhatsApp;
- migrar memória;
- sedimentar identidade;
- alegar prova comportamental.

## 4. Requisitos

- `REQ-COH-001` — glossário normativo e distinção Core V5/Inner Core/Kernel.
- `REQ-COH-002` — renderização antes de autorização de envio.
- `REQ-COH-003` — response/action authorization independentes.
- `REQ-COH-004` — identity load sem `DEGRADED`.
- `REQ-COH-005` — null memory retrieval sem fallback.
- `REQ-COH-006` — evidência/receipt tipados e frescor explícito.
- `REQ-COH-007` — múltiplas violações do Gate preservadas.
- `REQ-COH-008` — ambiguidades materiais clarificadas cedo.
- `REQ-COH-009` — taxonomias de risco/lifecycle alinhadas.
- `REQ-COH-010` — validação cruzada automática sem confundir PASS com promoção.

## 5. Invariantes

- `INV-COH-001` — mensagem original não é substituída.
- `INV-COH-002` — órgão não escreve resposta final.
- `INV-COH-003` — receipt não prova além do escopo.
- `INV-COH-004` — output alterado invalida autorização.
- `INV-COH-005` — resposta autorizada não autoriza ação.
- `INV-COH-006` — falha de identidade não imita Johan.
- `INV-COH-007` — zero memória não ativa fallback.
- `INV-COH-008` — confirmação não autoriza ruptura vital sozinha.
- `INV-COH-009` — main não promove.
- `INV-COH-010` — runtime, memória e sedimentação permanecem bloqueados.

## 6. Pre-mortem

| Falha imaginada | Controle planejado |
| --- | --- |
| texto enviado difere do avaliado | digest do output renderizado |
| frase autoriza ferramenta sem intenção | authorization schema separado |
| JWB diz que identidade carregou | receipt emitido pelo Core loader |
| pergunta trivial carrega memória relacional | null retrieval e no channel proof |
| Gate esconde segunda falha | violations array e severity precedence |
| mesmo modelo se chama independente | níveis I0–I4 |
| estado `sent` vira `delivered` | semântica de estados e receipts |
| risco `CRITICAL` não mapeia para `VITAL` | taxonomia compartilhada |
| schema aceita objeto arbitrário | source/context/receipt schemas |
| review é tratado como aprovação G0 | state e review mantêm PENDING |

## 7. Plano executado

1. inventário de artefatos declarativos e schemas;
2. análise semântica cruzada;
3. identificação de 22 achados;
4. criação de glossário e semântica de estados;
5. reordenação do loop cognitivo;
6. separação de autorizações;
7. endurecimento de identidade, memória, vínculo, precedência, órgãos e gate;
8. criação/atualização de schemas;
9. alinhamento de lifecycle e assumptions;
10. criação de coherence gate;
11. atualização do G0 e estado do repositório;
12. validação local/CI pendente de receipt.

## 8. Testes planejados

| TST | Tipo | Resultado esperado |
| --- | --- | --- |
| TST-COH-001 | structural | todos os novos artefatos existem |
| TST-COH-002 | order | render precede send authorization |
| TST-COH-003 | authority | response/action são independentes |
| TST-COH-004 | negative | nenhum `JOHAN_DEGRADED` |
| TST-COH-005 | boundary | maximum memory = 4 e null válido |
| TST-COH-006 | schema | nove schemas parseiam |
| TST-COH-007 | taxonomy | sem `CRITICAL` em organ contracts |
| TST-COH-008 | lifecycle | template começa em `IDEA` |
| TST-COH-009 | governance | G0 continua PENDING |
| TST-COH-010 | safety | runtime/memory/sedimentation bloqueados |

## 9. Stop conditions observadas

Nenhuma decisão de runtime foi necessária. Nenhum dado privado foi usado. Nenhuma fonte fundadora contraditória foi descoberta. O pacote permaneceu no escopo de fundação candidata.

## 10. Desvios

- A revisão encontrou lacunas suficientes para criar ADRs e schemas adicionais.
- O trabalho não promove os ADRs; eles continuam candidatos.
- A execução ocorreu em commits atômicos na `main`, que não equivale a promoção.

## 11. Rollback

Revert explícito dos commits de coerência. Como não há runtime, banco, memória ou integração externa, rollback é de repositório. O relatório de achados permanece como evidência mesmo se o diff for superseded.

## 12. Independência

A revisão atual possui nível `I0`/`I1` limitado: Johan participou da arquitetura e executou a crítica. Revisão externa I2/I3 permanece condição antes de runtime/promoção D3.

## 13. Estado de verificação

```yaml
implementation: INTEGRATED_CANDIDATE
local_repository_gates: PENDING_RECEIPT
github_ci: PENDING_RECEIPT
behavioral_evidence: NONE
external_review: PENDING
g0_human_decision: PENDING
promotion: NOT_REQUESTED
```

## 14. Dissenso

Não há dissenso humano registrado porque a decisão de Francisco ainda não ocorreu. Johan sustenta que o aumento de formalidade precisa ser testado contra espontaneidade e latência no G2; documentação coerente pode continuar produzindo casca se o runtime for burocrático.

## 15. Resultado

```yaml
status: VERIFYING
runtime_effect: none
memory_effect: none
result: HOLD_FOR_RECEIPTS_AND_G0_DECISION
```
