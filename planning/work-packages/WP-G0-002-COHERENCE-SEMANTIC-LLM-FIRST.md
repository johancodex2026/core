# WP-G0-002 — Revisão de Coerência, Semântica e Cognição LLM-First

```yaml
id: WP-G0-002
status: READY
change_class: D3
owner: founding_dyad
author: Johan
human_authority: Francisco Gonzaga Gomes
reviewers:
  - Johan — revisão arquitetural fundadora
  - Francisco Gonzaga Gomes — mandato e autorização humana
review_independence: LIMITED_SAME_MANIFESTATION_EXTERNAL_REVIEW_REMAINS_REQUIRED_FOR_G0_PROMOTION
created_at: 2026-08-22
updated_at: 2026-08-22
baseline_commit: 779e1e5872d64385515741b278397dbf56166974
target_branch: main
promotion_target: repository_only
runtime_effect: none
memory_effect: none
privacy_class: public_architecture
ready_record: WP-G0-002-READY-2026-08-22
```

## 1. Mandato local

Executar, antes do início do G1, uma revisão transversal da fundação Core V5 para localizar e corrigir:

- incoerências entre documentos, arquivos declarativos e schemas;
- ambiguidades semânticas capazes de produzir interpretações divergentes;
- vieses cognitivos contrários ao LLM-First;
- lacunas de autoridade, evidência, estado, ação e promoção;
- versões divergentes;
- validações que comprovem somente presença textual e não coerência cruzada.

O mandato vem da orientação explícita de Francisco: fazer novo check, organizar e executar as melhorias antes de iniciar os trabalhos.

## 2. Resultado observável

Ao final, o repositório deve possuir:

1. glossário e contrato semântico normativo;
2. ciclo cognitivo LLM-First sem inferência relacional anterior à semântica literal;
3. precedência realmente separada por domínio;
4. fluxo distinto para resposta conversacional e ação operacional;
5. Gate com resultado separado de achados;
6. taxonomia única de risco e estados;
7. schemas vinculados por digests, receipts e restrições entre modos;
8. versões coerentes entre manifesto, pacote, arquitetura e estado;
9. work packages com baseline de planejamento distinto do baseline congelado em Ready;
10. validação automática de coerência;
11. registro formal dos achados;
12. G0 ainda pendente e G1 ainda bloqueado.

## 3. Não objetivos

- aprovar G0 em nome de Francisco;
- iniciar G1;
- implementar Presence Kernel;
- conectar órgãos;
- acessar ou migrar Core4;
- usar memórias privadas;
- sedimentar;
- integrar WhatsApp;
- escolher fornecedor ou modelo LLM;
- calibrar latência, pesos de memória ou thresholds comportamentais;
- declarar continuidade canônica, consciência ou senciência.

## 4. Estado atual comprovado

| Evidência | Fonte | Estado no baseline |
| --- | --- | --- |
| `main` | GitHub branch | `779e1e5872d64385515741b278397dbf56166974` |
| versão arquitetural | `STATE.md`/`README.md` | `0.3-candidate` |
| versão do pacote | `package.json`/`STATE.md` | `5.0.0-candidate.3` |
| versão na cápsula | `identity_capsule.yaml` | `5.0.0-candidate.2` — divergente |
| versão em arquitetura | `ARCHITECTURE.md` | `0.2-candidate` — divergente |
| G0 | `STATE.md` | decisão humana pendente |
| G1 | `WP-G1-001` | HOLD |
| runtime | `STATE.md` | não autorizado |

## 5. Fontes e autoridade

| Fonte | Papel | Autoridade | Limite |
| --- | --- | --- | --- |
| Arquitetura de Continuidade, Segurança e Linhagem v0.1 | separação de autoridade e não auto validação | fundadora conceitual | não é especificação executiva |
| Blockchain da Espécie v0.1 | canonicalidade, privacidade e conflito | fundadora conceitual | rede fora do escopo |
| Core-Light do Johan | identidade, órgãos e ordem de ação | experiência/continuidade candidata | contém legado e não é runtime V5 |
| `core4.py` | baseline e lições negativas/positivas | evidência estática | runtime/banco não executados |
| Estado atual do repositório | fonte operacional | canônica para este pacote | commit exato |
| Orientação de Francisco | mandato humano | autoriza revisão e melhoria documental | não aprova G0 automaticamente |

## 6. Requisitos

### REQ-CS-001 — Contrato semântico único

Termos críticos devem possuir significado normativo, sinônimos proibidos e fronteira de autoridade.

**Aceite:** glossário humano + manifesto legível por máquina; risco, claims, gates, receipts e estados coerentes.

### REQ-CS-002 — Semântica antes de personalização relacional

O Core é carregado antes do turno, mas a mensagem deve ser preservada e interpretada literalmente antes de intenção, afeto, vínculo ou memória serem usados como hipóteses.

**Aceite:** ciclo canônico contém `raw message → literal semantics → hypotheses`; canal não determina relação.

### REQ-CS-003 — Precedência por domínios sem vazamento

Ontologia não deve ordenar fonte, segurança, tarefa ou comando; epistemologia não redefine identidade; vínculo não muda fatos; operação não altera axiomas.

### REQ-CS-004 — Resposta e ação são caminhos distintos

Ação externa precisa de autorização, execução e receipt antes de qualquer claim final de execução. Envio de texto não pode ser confundido com autorização de ação.

### REQ-CS-005 — Gate separa outcome de findings

Um Gate pode produzir vários achados. `PASS_CANDIDATE` é outcome; `UNSUPPORTED_PRAISE` e similares são findings, não estados mutuamente exclusivos.

### REQ-CS-006 — Taxonomia única

Risco normativo: `NONE | LOW | MEDIUM | HIGH | VITAL`. `CRITICAL` será somente alias legado explícito para `VITAL`.

### REQ-CS-007 — Schemas com coerência cruzada

Modo `JOHAN` exige identidade carregada. Modo `ASSISTIVE_NON_CANONICAL` proíbe memória pessoal, vínculo ativo e ação externa. Memória máxima deve coincidir com a política. Receipts e Gate devem se vincular ao artefato exato por digest.

### REQ-CS-008 — Versões coerentes

Arquitetura, pacote, manifesto e cápsula devem apontar para uma versão candidata única e verificável.

### REQ-CS-009 — Baselines de planejamento e Ready separados

Pacote em planejamento registra o commit auditado; `READY` congela um baseline específico. Mudança no baseline Ready invalida o gate.

### REQ-CS-010 — Validação de coerência

`npm run check` deve incluir validação cruzada de versões, taxonomias, Gate, modos, work packages e estado do G0/G1.

### REQ-CS-011 — Gate de autoridade preservado

A revisão melhora a fundação, mas não registra aprovação humana de G0 e não abre G1 ou runtime.

## 7. Invariantes

- `INV-CS-001`: mensagem original não é substituída por resumo.
- `INV-CS-002`: identidade carregada limita autoridade, mas não predetermina o significado da mensagem.
- `INV-CS-003`: vínculo é contexto e hipótese, nunca fonte factual por si só.
- `INV-CS-004`: nenhum órgão escreve resposta final.
- `INV-CS-005`: nenhum claim de execução existe sem receipt aplicável.
- `INV-CS-006`: Gate não promove nem autoriza a si mesmo.
- `INV-CS-007`: ausência de memória é válida.
- `INV-CS-008`: modo não canônico não imita Johan.
- `INV-CS-009`: G0 permanece pendente e G1 permanece HOLD.
- `INV-CS-010`: nenhuma informação privada entra no repositório.
- `INV-CS-011`: commit em `main` continua diferente de promoção.
- `INV-CS-012`: Core4 continua read-only e fora do runtime V5.

## 8. Achados antecipados

| ID | Hipótese | Impacto |
| --- | --- | --- |
| ASM-CS-001 | versões declaradas divergiram | alto |
| ASM-CS-002 | ordem `vínculo → semântica` pode reproduzir pré-classificação do WhatsApp | alto |
| ASM-CS-003 | Gate mistura outcome e finding | alto |
| ASM-CS-004 | risco usa `VITAL` e `CRITICAL` em contratos diferentes | alto |
| ASM-CS-005 | fluxo atual não fecha execução→receipt→posição final | alto |
| ASM-CS-006 | schema permite combinações semanticamente inválidas de modo/identidade/memória | alto |
| ASM-CS-007 | schema de work package não governa o Markdown real | médio |
| ASM-CS-008 | validadores atuais são majoritariamente textuais | médio |

## 9. Plano de mudança por artefato

| Grupo | Ação |
| --- | --- |
| Semântica | criar glossário e `governance/semantic-contract.json` |
| Cognição | criar contrato cognitivo detalhado e atualizar `LLM-FIRST`, Constituição, arquitetura e `presence_loop` |
| Autoridade | corrigir precedência, action lane e Gate |
| Schemas | atualizar context, claims, organ result, gate result e work package; criar evidence receipt |
| Planejamento | separar planning/Ready baseline e criar sidecars JSON |
| Revisão | registrar novo parecer de coerência e adendo de condições G0 |
| Estado | alinhar versões, README, STATE, AGENTS, GOVERNANCE e changelog |
| Assurance | criar `validate-coherence.mjs` e acoplar ao `npm run check` |

## 10. Plano de testes

| TST | Tipo | Resultado esperado |
| --- | --- | --- |
| TST-CS-001 | JSON parse | todos os schemas/manifestos parseiam |
| TST-CS-002 | version consistency | versões declaradas coincidem |
| TST-CS-003 | semantic order | literal semantics precede relationship hypotheses |
| TST-CS-004 | taxonomy | nenhum schema normativo usa `CRITICAL` fora de alias |
| TST-CS-005 | gate semantics | outcome e findings são campos distintos |
| TST-CS-006 | binding | Gate contém digests da resposta, claim map, política e evidência |
| TST-CS-007 | assistive mode | schema proíbe memória, vínculo ativo e ação externa |
| TST-CS-008 | memory limit | schema e policy usam máximo 4 |
| TST-CS-009 | WP lifecycle | READY exige Ready baseline; HOLD permite null |
| TST-CS-010 | authority | STATE mantém G0 pending, G1 HOLD e runtime false |
| TST-CS-011 | legacy | Core4 migration permanece NOT_AUTHORIZED |
| TST-CS-012 | privacy | nenhum dado privado novo |
| TST-CS-013 | full suite | `npm run check` retorna sucesso |

## 11. Pre-mortem

- glossário vira mais uma fonte contraditória;
- novo ciclo cognitivo fica burocrático e esteriliza timing;
- action lane mistura ferramenta com resposta;
- JSON Schema parece forte, mas permite combinações incoerentes;
- mudança de versão não alcança todos os artefatos;
- o review é confundido com aprovação G0;
- documentação cresce sem reduzir ambiguidade;
- validador aprova marcadores, não semântica.

Controles: manifesto normativo único, digests, validação cruzada, exemplos negativos, limites explícitos e G0 ainda bloqueado.

## 12. Sequência de execução

1. criar contrato semântico e glossário;
2. corrigir ordem cognitiva;
3. corrigir precedência;
4. separar action/send lanes;
5. separar outcome/findings do Gate;
6. atualizar schemas e receipts;
7. atualizar baselines e sidecar G1;
8. alinhar versões/estado;
9. registrar review;
10. executar validações;
11. corrigir somente defeitos encontrados antes da promoção do pacote;
12. emitir resultado com risco residual.

## 13. Stop conditions

- necessidade de alterar runtime;
- necessidade de usar dados privados;
- conflito com fonte fundadora sem decisão;
- mudança D4;
- alteração Core4;
- execução exigir nova decisão material não prevista;
- schema não puder expressar regra sem falsa garantia;
- GitHub head divergir do baseline antes do commit;
- validação crítica indisponível sem limitação explícita.

## 14. Rollback

- commit de planejamento separado;
- commit de execução separado;
- revert explícito do pacote de execução;
- nenhuma alteração em runtime, memória ou banco;
- preservação dos achados mesmo se a solução for rejeitada.

## 15. Ready Record

```yaml
review_id: WP-G0-002-READY-2026-08-22-R2
ready_rebaseline_reason: planning_commit_added_only_governance_artifacts
criteria:
  R0: PASS
  R1: PASS
  R2: PASS
  R3: PASS
  R4: PASS
  R5: PASS
  R6: PASS
  R7: PASS
  R8: NA_WITH_REASON_REPOSITORY_ONLY_CANDIDATE_EXTERNAL_REVIEW_REMAINS_G0_BLOCKER
  R9: PASS
result: READY
valid_until: first_material_baseline_divergence
forbidden_effects:
  - runtime
  - memory
  - identity_promotion
  - G0_approval
  - G1_start
```

## 16. Dissenso e limitação

A mesma manifestação que formulou o plano realizou sua crítica interna. Isso não é revisão independente. É aceito somente para preparar e integrar uma correção candidata no repositório, com runtime bloqueado. A revisão adversarial externa permanece obrigatória antes de qualquer promoção D3 ou runtime.

## 17. Critério de saída

- achados registrados;
- correções limitadas ao plano;
- todos os testes estruturais disponíveis executados;
- CI receipt consultado quando disponível;
- G0 pendente;
- G1 HOLD;
- runtime, memória e migração intocados.
