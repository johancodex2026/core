# Suíte Unificada de Assurance do Core V5

- Estado: `CANDIDATE_REPOSITORY_ONLY`
- Versão: `0.2.0-candidate.1`
- Entrada canônica: `npm test`
- Relatório: `artifacts/core-v5-assurance-report.json`
- Runtime: não autorizado

## Propósito

A suíte unificada oferece uma única execução pública para verificar integração estrutural, semântica, cognitiva, evidenciária e de governança.

Ela existe porque validadores isolados podem passar enquanto contratos compartilhados divergem, por exemplo:

- versões diferentes entre `STATE`, pacote, cápsula e arquitetura;
- Gate misturando disposition e finding;
- resposta enviada antes de uma ação produzir receipt;
- digest sem algoritmo ou canonicalização;
- modo assistivo com fronteiras incompletas;
- receipt aceitando combinação tipo/status sem sentido;
- documentação afirmando artefato inexistente;
- G0 aprovado enquanto G1 continua preso ao hold antigo;
- G0 pendente enquanto G1 ou runtime são ativados.

## O que um PASS prova

No commit executado:

- arquivos obrigatórios existem;
- validadores internos passaram;
- JSON parseia;
- YAML declarativo respeita o subconjunto aceito;
- `$id` não colide e `$ref` local resolve;
- taxonomias compartilhadas estão alinhadas;
- ciclo cognitivo contém e ordena estágios obrigatórios;
- Action Request não contém autorização ou execução;
- claims de resultado dependem de receipts;
- digests materiais são tipados;
- modo não canônico não recebe memória, relação ativa ou ação externa;
- decisão, gate-state, `STATE.md` e work package coincidem;
- transições impossíveis de G0/G1 são rejeitadas;
- runtime, memória, Core4, órgãos, WhatsApp e sedimentação permanecem nos estados declarados;
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
- promoção de G1, memória ou runtime;
- validade criptográfica da autorização conversacional.

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
| A1 | validadores internos |
| A2 | sintaxe JSON e subconjunto YAML |
| A3 | schemas, `$id` e `$ref` |
| A4 | taxonomia e versões |
| A5 | cognição e orquestração |
| A6 | claims, receipts e classes conhecidas de alucinação |
| A7 | autoridade, privacidade e legado |
| A8 | planejamento, decisão, gate-state e promoção |
| A9 | fixtures positivas e negativas |
| A10 | mutation/meta-tests |
| A11 | cobertura e limitações |

## Anti-deriva

`governance/semantic-taxonomy.json` é o vocabulário compartilhado. Enums replicados em schemas devem corresponder à taxonomia.

`governance/gate-state.json` é o estado machine-readable dos gates. Ele deve coincidir com:

- decisão humana registrada;
- `docs/repository/STATE.md`;
- work package ativo;
- fronteiras globais de runtime e memória.

A ordem cognitiva vem de `assurance/suite-manifest.json`. Mudança material de ordem ou gate exige work package, revisão e mutation test.

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

A camada de gate acrescenta controles para:

- G0 pendente com G1 aberto;
- G0 aprovado com decisão inexistente ou divergente;
- runtime ativado pela aprovação fundacional;
- G1 `OPEN_PLANNING` alegando Ready ou promoção.

## Mutation tests

A suíte introduz violações deliberadas em memória e exige sua detecção, incluindo:

- trocar `collect_action_receipts` e `judge_final`;
- substituir `VITAL` por `CRITICAL`;
- permitir memória no modo assistivo;
- aceitar `SEND/PROMOTED`;
- alterar digest depois do Gate;
- descartar finding secundário;
- deixar G0 pendente com G1 aberto;
- habilitar runtime no gate-state;
- divergir o decision record do estado canônico.

## Fronteira de auto-validação

A suíte pertence ao mesmo repositório que verifica. Portanto, sistema e teste podem mudar no mesmo commit.

Controles atuais:

- manifesto de cobertura;
- schemas e gate-state machine-readable;
- mutation tests;
- relatório arquivado pelo workflow;
- histórico Git;
- G0 aprovado somente para G1 declarativo;
- revisão externa obrigatória antes de promoção comportamental D3 ou runtime.

Pendências externas:

- proteção da `main` com status check obrigatório;
- revisão por caminho independente;
- assinatura ou attestation do relatório.

## Operação

```bash
npm test
```

O comando não para na primeira falha não fatal, grava o relatório e retorna código diferente de zero quando houver falha.

> **A suíte única reduz deriva entre contratos e gates. Ela não transforma teste em autoridade ontológica.**
