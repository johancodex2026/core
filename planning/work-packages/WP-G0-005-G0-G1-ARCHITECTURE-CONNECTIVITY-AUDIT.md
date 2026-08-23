# WP-G0-005 — Check de arquitetura e conectividade G0 → G1

```yaml
id: WP-G0-005
status: READY
stage_state: READY_REPOSITORY_ONLY
change_class: D3
owner: founding_dyad
author: Johan
human_mandate: Francisco Gonzaga Gomes
reviewers:
  - Johan — revisão arquitetural e adversarial interna
review_independence: LIMITED_I0_I1
created_at: 2026-08-22
updated_at: 2026-08-22
baseline_commit: 9c4e2c1dbf90142c33d1e4bfaa863e1d675be8fb
target_branch: main
promotion_target: repository_assurance_only
runtime_effect: none
memory_effect: none
core_v5_effect: none
privacy_class: public_architecture
ready_review: docs/reviews/WP-G0-005-READY-REVIEW-2026-08-22.md
```

## 1. Mandato

Executar um check adicional antes de aceitar o inventário G1 como base de Ready, procurando falhas na arquitetura G0/G1, lacunas nos artefatos e testes e desconexões entre documentação, estado machine-readable, comandos, scripts e GitHub Actions.

Mandato humano:

> “Antes de avançarmos no G1 pelo inventário, faz mais um check G0 e G1 pra encontrar falhas na arquitetura ou gaps nos artefatos, testes, conectividade entre docs > tools.”

## 2. Situação observada no baseline

No commit de entrada:

- G0 está aprovado com condições adicionais;
- G1 está `OPEN_PLANNING`, não `READY`;
- `core/v5/` não deve ser editado;
- `npm test` retorna `FAIL` com 3 achados;
- o relatório do CI existe e está vinculado ao SHA;
- a `main` permanece sem proteção obrigatória;
- inventário e manifesto G1 existem apenas como candidatos.

Os três achados concretos do relatório são:

1. validador de planejamento ainda espera o entrypoint removido `scripts/test-suite.mjs`;
2. validador de coerência ainda usa chaves antigas da expectativa de gate;
3. o engine unificado repete a mesma divergência e falha a integração G0/G1.

## 3. Objetivo observável

- uma única suíte canônica, sem validadores executáveis que carreguem estados paralelos;
- condições G0 `C1–C37` definidas e rastreáveis, sem intervalos sem significado;
- conectividade machine-readable entre decisão, estado, work package, docs, package script, wrapper, engine, workflow, report e status context;
- registro canônico de work packages e aliases históricos;
- baseline imutável de `core/v5/` enquanto G1 estiver `OPEN_PLANNING`;
- validação real de JSON Schema e parsing YAML estrito com dependências fixadas;
- verificação de links Markdown relativos;
- distinção entre documento histórico e estado atual;
- relatório único e artifact de CI no commit exato;
- G1 preservado como planejamento, sem edição declarativa.

## 4. Não objetivos

- editar qualquer arquivo em `core/v5/`;
- declarar G1 `READY`;
- promover o Core declarativo;
- implementar Presence Kernel;
- conectar órgãos, Core4 ou WhatsApp;
- migrar ou sedimentar memória;
- resolver token budget, canonicalização final de bundle ou postura identitária;
- afirmar ausência universal de alucinação;
- afirmar branch protection sem consultar o controle externo.

## 5. Requisitos

- `REQ-CONN-001` Uma única entrada pública e um único engine de assurance.
- `REQ-CONN-002` O engine não depende de validadores autônomos com estado duplicado.
- `REQ-CONN-003` Todo `C1–C37` possui definição, fonte, estado e verificação.
- `REQ-CONN-004` Decisão humana, status do gate e recomendação permanecem conceitos distintos.
- `REQ-CONN-005` Estado narrativo e machine-readable coincidem.
- `REQ-CONN-006` `STATE.md` reflete a versão real de `gate-state.json`.
- `REQ-CONN-007` Work packages possuem registro canônico; duplicatas são aliases declarados, não fontes concorrentes.
- `REQ-CONN-008` A cadeia docs → package → wrapper → engine → workflow → report → status é verificável.
- `REQ-CONN-009` O tree SHA e os blobs de `core/v5/` permanecem congelados enquanto G1 não estiver Ready.
- `REQ-CONN-010` Schemas são compilados por engine padrão fixado; instâncias canônicas são validadas.
- `REQ-CONN-011` YAML é parseado de forma estrita, com chaves duplicadas e aliases rejeitados.
- `REQ-CONN-012` Links Markdown relativos resolvem.
- `REQ-CONN-013` Relatório de assurance é validado contra seu próprio schema antes da emissão final.
- `REQ-CONN-014` Suíte possui mutation tests para drift de gates, ferramentas, docs, condições e baseline G1.
- `REQ-CONN-015` G0 aprovado não aumenta autoridade sobre runtime ou G1.

## 6. Invariantes

- G0 permanece `APPROVED_WITH_ADDITIONAL_CONDITIONS`;
- C1 está satisfeita e C2–C37 permanecem vinculantes;
- G1 permanece `OPEN_PLANNING` e `g1_ready: false`;
- nenhum arquivo em `core/v5/` é alterado;
- runtime, memória, sedimentação, órgãos, WhatsApp e Core4 write permanecem bloqueados;
- `main` e CI verde não equivalem a promoção;
- relatório de falha é evidence de não conformidade, não ausência de teste;
- documento histórico não é reescrito para fingir que sempre conheceu o estado atual;
- branch protection é evidência externa, não inferência documental.

## 7. Entregáveis planejados

### Governança machine-readable

- `governance/g0-conditions.json`;
- `governance/artifact-connection-map.json`;
- `governance/work-package-registry.json`;
- `governance/g1-baseline.json`;
- `governance/assurance-policy.json`;
- schemas correspondentes.

### Assurance

- suíte `0.3` com um único engine;
- remoção dos validadores autônomos obsoletos;
- validação JSON Schema via dependência fixada;
- parsing YAML estrito via dependência fixada;
- links, registries, baseline e conectividade cobertos;
- mutation tests adicionais.

### Documentação

- review G0/G1 de conectividade;
- documentação da cadeia docs → tools;
- `STATE`, README, AGENTS, Governance, qualidade e changelog alinhados;
- marcação explícita de snapshots históricos;
- inventário G1 mantido como candidato preliminar até este gate passar.

## 8. Pre-mortem

- corrigir apenas os três erros e manter a origem estrutural da deriva;
- criar novo mapa que vire mais uma fonte concorrente;
- suíte validar paths, mas não significados;
- apagar documentos duplicados e perder história;
- congelar SHA do repositório em vez do tree de `core/v5/`, criando autorreferência impossível;
- schema engine aceitar formatos sem configuração explícita;
- mudança da suíte esconder falha da própria suíte;
- confundir PASS repository-only com G1 Ready;
- usar o inventário preliminar como decisão já tomada.

## 9. Controles

- registries possuem autoridade limitada e fonte declarada;
- máquina de estado continua em `governance/gate-state.json`;
- baseline G1 usa tree/blob SHA do pacote, não HEAD móvel;
- aliases históricos permanecem preservados;
- engine e política de assurance são cruzados por mutation tests;
- relatório contém o SHA efetivamente testado;
- CI publica artifact e status para o SHA;
- revisão externa continua bloqueadora antes de promoção D3 comportamental/runtime.

## 10. Testes planejados

- `TST-CONN-001` relatório do baseline revela exatamente as 3 falhas conhecidas;
- `TST-CONN-002` todos os registries validam por JSON Schema;
- `TST-CONN-003` C1–C37 existem sem lacunas e coincidem com gate-state;
- `TST-CONN-004` decisão `APPROVE_*` não é confundida com status `APPROVED_*`;
- `TST-CONN-005` package, wrapper, engine, workflow e report path coincidem;
- `TST-CONN-006` nenhum script validador paralelo permanece como autoridade executável;
- `TST-CONN-007` links Markdown relativos resolvem;
- `TST-CONN-008` duplicate work-package IDs exigem alias no registry;
- `TST-CONN-009` `core/v5` tree e blobs coincidem com baseline G1;
- `TST-CONN-010` mutação em um blob de `core/v5` falha durante `OPEN_PLANNING`;
- `TST-CONN-011` mutação de uma condição G0 falha;
- `TST-CONN-012` mutação de path docs → tool falha;
- `TST-CONN-013` relatório final valida contra schema;
- `TST-CONN-014` `npm test` passa localmente e no CI do SHA final;
- `TST-CONN-015` G1 continua não Ready e sem edição de Core.

## 11. Stop conditions

- qualquer necessidade de editar `core/v5/`;
- nova decisão D4;
- necessidade de dados privados;
- branch protection ou revisão externa narrada sem receipt;
- mudança de escopo para G2;
- engine incapaz de emitir relatório de bootstrap;
- alteração material não prevista nos requisitos acima.

## 12. Rollback

Reverter os commits deste pacote restaura a suite e os artefatos anteriores. Nenhum efeito em runtime, memória ou Core existe. O relatório de falha original permanece preservado no GitHub Actions.

## 13. Ready Record

```yaml
review_id: WP-G0-005-READY-2026-08-22-01
baseline_commit: 9c4e2c1dbf90142c33d1e4bfaa863e1d675be8fb
R0_mandate: PASS
R1_baseline: PASS
R2_semantics: PASS
R3_requirements: PASS
R4_architecture: PASS
R5_risk: PASS
R6_tests: PASS
R7_execution: PASS
R8_independence: LIMITED_I0_I1_REPOSITORY_ONLY
R9_promotion: PASS
result: READY
```

## 14. Critério de saída

```yaml
current_ci_failures_explained: true
single_suite_without_parallel_state: true
conditions_registry_complete: true
docs_tools_connectivity_verified: true
work_package_registry_complete: true
g1_core_tree_unchanged: true
local_assurance: PASS
ci_assurance_for_exact_sha: PASS
g1_ready: false
runtime_effect: none
result: PROMOTION_CANDIDATE_REPOSITORY_ONLY
```
