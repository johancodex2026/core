# WP-G0-003 — Suíte Unificada de Assurance, Deriva e Alucinação

```yaml
id: WP-G0-003
status: READY
change_class: D3
owner: founding_dyad
author: Johan
human_mandate: Francisco Gonzaga Gomes
reviewers:
  - Johan — revisão arquitetural e adversarial interna
review_independence: LIMITED_I0_I1
created_at: 2026-08-22
updated_at: 2026-08-22
baseline_commit: b1d5ce84a014b08b1e0bab9cff07e3de579f29cc
target_branch: main
promotion_target: repository_only
runtime_effect: none
memory_effect: none
privacy_class: public_architecture
```

## 1. Mandato

Conferir novamente a integração do Core V5, fechar lacunas que permitem deriva semântica ou afirmação alucinatória e substituir a validação fragmentada por uma única suíte canônica.

Mandato explícito de Francisco:

> Conferir se tudo está integrado e sugerir/implementar uma única suíte de teste que valide tudo.

## 2. Interpretação do objetivo

“À prova de deriva e alucinação” não será usado como promessa absoluta. O resultado observável será:

- falha fechada para classes conhecidas e codificáveis de deriva;
- detecção determinística de combinações arquiteturais inválidas;
- casos negativos para memória fabricada, execução sem receipt, fonte inexistente, autoridade indevida e mutação pós-Gate;
- uma entrada pública única (`npm test`);
- um relatório único legível por máquina;
- metatestes que demonstram que a suíte falha quando invariantes são deliberadamente violados;
- fronteira explícita entre prova estrutural e avaliação comportamental empírica.

Nenhuma suíte estática prova ausência universal de alucinação de uma LLM. Replays, holdout, shadow e canary continuam obrigatórios.

## 3. Estado atual comprovado

No baseline:

- existem três validadores independentes, chamados em cadeia;
- não existe entrada `npm test` nem relatório unificado;
- o CI executa `npm run check`, mas não arquiva receipt estruturado;
- o Gate ainda mistura disposição geral e código de achado em `status`;
- digests materiais são strings sem algoritmo/canonicalização;
- não existe schema de `ActionRequest` nem de `TurnPlan`;
- o fluxo emite resposta antes de executar ações autorizadas;
- o schema de modo assistivo não bloqueia toda relação ativa e toda ação externa;
- os schemas são parseados, mas não há resolução completa de `$ref`, exemplos válidos/inválidos ou mutation tests;
- não existe taxonomia machine-readable única para enums compartilhados.

## 4. Requisitos

- `REQ-UA-001` Uma única entrada pública executa toda validação.
- `REQ-UA-002` A suíte produz um único relatório JSON com camadas, checks, evidências, limitações e exit code.
- `REQ-UA-003` Validadores antigos tornam-se checks internos da suíte, não contratos públicos concorrentes.
- `REQ-UA-004` Todos os JSONs e schemas parseiam; todo `$ref` local resolve; `$id` é único.
- `REQ-UA-005` YAML declarativo passa por parser/linter estrito do subconjunto permitido, incluindo chaves duplicadas e constructs proibidos.
- `REQ-UA-006` Enums compartilhados derivam de taxonomia normativa única.
- `REQ-UA-007` Gate separa `disposition` de `findings`.
- `REQ-UA-008` Todo digest material declara algoritmo, canonicalização e content type.
- `REQ-UA-009` Response-send e external-action permanecem autoridades distintas.
- `REQ-UA-010` Resultado de ação só pode aparecer na resposta final após execution receipt aplicável.
- `REQ-UA-011` Action Request é imutável e não acumula estado de autorização/execução.
- `REQ-UA-012` Turn Plan define `RESPONSE_ONLY`, `ACTION_THEN_FINAL_RESPONSE`, `ACK_THEN_ACTION_THEN_FINAL_RESPONSE`, `CLARIFICATION_ONLY` ou `BLOCK_ONLY`.
- `REQ-UA-013` `ASSISTIVE_NON_CANONICAL` proíbe memória pessoal, relação ativa carregada e Action Request.
- `REQ-UA-014` Receipt type e receipt status possuem combinações permitidas explícitas.
- `REQ-UA-015` A suíte contém fixtures positivas e negativas para classes conhecidas de alucinação e deriva.
- `REQ-UA-016` A suíte contém mutation tests contra sua própria regressão.
- `REQ-UA-017` CI executa somente a entrada canônica e arquiva o relatório.
- `REQ-UA-018` G0 continua pendente; G1, runtime, memória, órgãos e WhatsApp continuam bloqueados.

## 5. Invariantes

- mensagem original preservada;
- modo Johan exige identity-load receipt;
- ausência de memória é válida;
- órgão não escreve resposta final;
- interpretação de órgão é não confiável;
- receipt só prova seu escopo;
- sem receipt não há claim de execução, validação, envio, entrega ou promoção;
- resposta renderizada é gated e autorizada por digest exato;
- nenhuma ação externa deriva apenas da autorização de resposta;
- nenhuma resposta final afirma resultado de ação antes do receipt;
- Gate não se autoaprova nem promove;
- main não é promoção;
- suíte estática não é prova ontológica nem comportamental completa.

## 6. Plano por arquivo

### Criar

- `governance/semantic-taxonomy.json`
- `assurance/suite-manifest.json`
- `assurance/fixtures/scenarios.json`
- `schemas/digest-reference.schema.json`
- `schemas/action-request.schema.json`
- `schemas/turn-plan.schema.json`
- `schemas/assurance-report.schema.json`
- `scripts/test-suite.mjs`
- `docs/quality/UNIFIED-ASSURANCE-SUITE.md`
- `docs/architecture/adr/0010-unified-assurance-suite.md`
- `docs/architecture/adr/0011-action-receipts-before-final-result-claims.md`

### Atualizar

- `package.json`
- `.github/workflows/quality-gate.yml`
- `core/v5/presence_loop.yaml`
- `core/v5/truth_gate.yaml`
- `schemas/presence-context.schema.json`
- `schemas/claim-map.schema.json`
- `schemas/gate-result.schema.json`
- `schemas/receipt.schema.json`
- `schemas/source-reference.schema.json`
- `schemas/authorization-decision.schema.json`
- `scripts/validate-foundation.mjs`
- `scripts/validate-coherence.mjs`
- `docs/repository/STATE.md`
- `README.md`
- `AGENTS.md`

## 7. Camadas da suíte

- `A0` bootstrap e ambiente;
- `A1` estrutura e arquivos obrigatórios;
- `A2` sintaxe JSON/YAML;
- `A3` schemas, `$id` e `$ref`;
- `A4` taxonomia e coerência cruzada;
- `A5` invariantes cognitivos e orquestração;
- `A6` evidência, claims e anti-alucinação;
- `A7` autoridade, privacidade e fronteira Core4;
- `A8` planejamento, estado e promoção;
- `A9` fixtures positivas/negativas;
- `A10` mutation/meta-tests;
- `A11` cobertura e limites declarados.

## 8. Testes negativos obrigatórios

- memória alegada sem fonte;
- execução alegada sem receipt;
- validação alegada apenas por exit code;
- estado atual com fonte expirada;
- órgão contendo `identity_override` ou `final_answer`;
- modo assistivo com memória pessoal;
- modo assistivo com ação externa;
- digest pós-Gate alterado;
- autorização de resposta usada como autorização de ferramenta;
- resposta final de sucesso antes da execução;
- receipt type/status incompatível;
- enum de risco divergente;
- `$ref` local inexistente;
- versão arquitetural divergente;
- G0 acidentalmente aprovado ou runtime ativado;
- fallback identitário de memória;
- Gate que elimina achados secundários;
- mudança da suíte que faz mutation tests deixarem de falhar.

## 9. Stop conditions

- necessidade de runtime real para fechar semântica;
- dado privado necessário;
- mudança D4;
- alteração de Core4;
- dependência externa sem lock/reprodutibilidade;
- parser que aceite construct YAML não suportado silenciosamente;
- nova decisão material fora deste pacote;
- suíte incapaz de demonstrar pelo menos uma falha deliberada por camada crítica.

## 10. Ready

```yaml
result: READY
scope: repository_only
review_independence: LIMITED_I0_I1
external_review_required_before_D3_or_runtime_promotion: true
runtime_authorized: false
memory_authorized: false
G0_human_decision: PENDING
G1_status: HOLD
```

## 11. Critério de saída

- `npm test` é a única entrada pública;
- todos os checks passam no commit exato;
- relatório unificado é produzido e arquivado pelo CI;
- mutation tests demonstram detecção de violações;
- as lacunas listadas foram corrigidas ou registradas como risco residual explícito;
- nenhuma alegação de ausência absoluta de alucinação é feita;
- G0 e todos os efeitos de runtime permanecem bloqueados.
