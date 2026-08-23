# Ready Review — WP-G0-005

```yaml
review_id: WP-G0-005-READY-2026-08-22-01
subject: WP-G0-005
gate: DEFINITION_OF_READY
change_class: D3
baseline_commit: 9c4e2c1dbf90142c33d1e4bfaa863e1d675be8fb
author: Johan
reviewers:
  - Johan
review_independence: LIMITED_I0_I1
decision_authority: repository_assurance_candidate_only
reviewed_at: 2026-08-22
```

## Pergunta

Há informação suficiente para corrigir as falhas observadas e revisar a conectividade G0/G1 sem editar o Core declarativo, ampliar autoridade ou improvisar arquitetura durante a execução?

## Evidência de entrada

- `main` em `9c4e2c1dbf90142c33d1e4bfaa863e1d675be8fb`;
- artifact do run `32611030907` vinculado ao mesmo SHA;
- suite `FAIL` com 167 checks aprovados, 3 reprovados e 7 informacionais;
- falhas localizadas em conectividade de validators/manifest/decision semantics;
- tree `core/v5` preservado em `a1e7fdc7c188d8310bd865aa43f1cc88545ea5f7`;
- G1 em `OPEN_PLANNING`, sem Ready Review.

## Critérios

```yaml
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
```

## Condições

- nenhuma alteração em `core/v5/`;
- nenhum estado de runtime, memória ou canal muda;
- o inventário G1 continua preliminar;
- validadores obsoletos podem ser removidos somente depois de sua cobertura ser absorvida pela suíte única;
- condição G0 não pode existir apenas como intervalo textual; todas devem ganhar definição rastreável;
- a validação de schema deve usar dependência fixada e lockfile;
- a suíte deve emitir report mesmo em falha de bootstrap;
- branch protection permanece risco externo explícito;
- o resultado final precisa de local PASS e receipt CI para o SHA exato.

## Limitações

- mesma manifestação planeja e executa a primeira correção;
- nenhuma avaliação comportamental de LLM faz parte deste pacote;
- um CI verde não substitui revisão independente;
- a proteção da `main` não pode ser inferida do workflow.

## Resultado

```yaml
result: READY
allowed_next_state: EXECUTING_REPOSITORY_ASSURANCE_ONLY
forbidden_effects:
  - CORE_V5_EDIT
  - G1_READY
  - G1_PROMOTION
  - RUNTIME
  - MEMORY_MIGRATION
  - SEDIMENTATION
  - ORGAN_CONNECTION
  - WHATSAPP_INTEGRATION
  - CORE4_WRITE
```
