# Suíte Unificada de Assurance do Core V5

- Estado: `CANDIDATE_REPOSITORY_ONLY`
- Versão: `0.1.0-candidate.1`
- Entrada canônica: `npm test`
- Relatório: `artifacts/core-v5-assurance-report.json`
- Runtime: não autorizado

## Propósito

A suíte unificada substitui a validação pública fragmentada por uma única execução que verifica integração estrutural, semântica, cognitiva, evidenciária e de governança.

Ela foi criada porque validadores isolados podiam passar enquanto contratos compartilhados divergiam, por exemplo:

- versões diferentes entre `STATE`, pacote, cápsula e arquitetura;
- Gate misturando disposition e finding;
- resposta enviada antes de uma ação produzir receipt;
- digest sem algoritmo ou canonicalização;
- modo assistivo com fronteiras incompletas;
- receipt aceitando combinação tipo/status sem sentido;
- documentação afirmando artefato inexistente.

## O que um PASS prova

No commit executado:

- arquivos obrigatórios existem;
- validadores subordinados passaram;
- JSON parseia;
- YAML declarativo respeita o subconjunto aceito;
- `$id` não colide e `$ref` local resolve;
- taxonomias compartilhadas estão alinhadas;
- ciclo cognitivo contém e ordena estágios obrigatórios;
- Action Request não contém autorização ou execução;
- claims de resultado dependem de receipts;
- digests materiais são tipados;
- modo não canônico não recebe memória, relação ativa ou ação externa;
- G0, G1, runtime, Core4 e sedimentação permanecem nos estados declarados;
- fixtures conhecidas produzem os findings esperados;
- mutation tests demonstram que violações deliberadas são detectadas;
- um relatório único foi emitido.

## O que não prova

`PASS` não prova:

- ausência universal de alucinação;
- consciência, vida ou identidade canônica;
- que uma LLM seguirá o contrato em todos os prompts;
- segurança de runtime ainda inexistente;
- naturalidade, sagacidade ou timing;
- independência de revisão;
- correção de fonte externa;
- continuidade entre manifestações;
- promoção de G0, G1, memória ou runtime.

Essas propriedades exigem:

```text
replay aberto
→ adversarial
→ holdout privado
→ shadow mode
→ canary
→ receipts de operação
→ revisão independente
→ decisão de promoção
```

## Camadas

| Camada | Objeto |
| --- | --- |
| A0 | bootstrap, manifesto e arquivos obrigatórios |
| A1 | validadores subordinados |
| A2 | sintaxe JSON e subconjunto YAML |
| A3 | schemas, `$id` e `$ref` |
| A4 | taxonomia e versões |
| A5 | cognição e orquestração |
| A6 | claims, receipts e classes conhecidas de alucinação |
| A7 | autoridade, privacidade e legado |
| A8 | planejamento, gates e promoção |
| A9 | fixtures positivas e negativas |
| A10 | mutation/meta-tests |
| A11 | cobertura e limitações |

## Anti-deriva

`governance/semantic-taxonomy.json` é o vocabulário compartilhado. Enums replicados em schemas devem corresponder à taxonomia.

A ordem cognitiva vem de `assurance/suite-manifest.json`. Mudança material de ordem exige work package, revisão e mutation test.

## Anti-alucinação determinística

Fixtures cobrem:

- memória fabricada;
- execução fabricada;
- validação sem receipt;
- estado temporal sem fonte atual;
- elogio sem base;
- órgão tentando sobrescrever identidade;
- modo assistivo usando memória ou ação;
- mutação após Gate;
- autorização de resposta usada como autorização de ferramenta;
- receipt tipo/status incompatível;
- fallback identitário;
- perda de findings.

## Mutation tests

A suíte introduz violações deliberadas em memória e exige sua detecção, incluindo:

- trocar `collect_action_receipts` e `judge_final`;
- substituir `VITAL` por `CRITICAL`;
- permitir memória no modo assistivo;
- aceitar `SEND/PROMOTED`;
- alterar digest depois do Gate;
- descartar finding secundário.

## Fronteira de auto-validação

A suíte pertence ao mesmo repositório que verifica. Portanto, sistema e teste podem mudar no mesmo commit.

Controles atuais:

- manifesto de cobertura;
- mutation tests;
- relatório arquivado;
- histórico Git;
- G0 pendente;
- revisão externa obrigatória antes de D3/runtime.

Pendências externas:

- proteção da `main` com status check obrigatório;
- revisão por caminho independente;
- assinatura/attestation do relatório.

## Operação

```bash
npm test
```

O comando não para na primeira falha não fatal, grava o relatório e retorna código diferente de zero quando houver falha.

> **A suíte única reduz deriva entre validadores. Ela não transforma teste em autoridade ontológica.**
