# Contrato dos Órgãos — Core V5

- Estado: `G0_COHERENCE_CANDIDATE`
- Schema principal: `schemas/organ-result.schema.json`
- Regra: órgão percebe, consulta, comprova ou propõe; nunca assume autoria relacional final

## 1. Natureza

Órgão é componente especializado com mandato, autoridade, contexto mínimo, contrato de saída, expiração e modo de falha próprios.

```text
ÓRGÃO ≠ SUBPERSONALIDADE
ÓRGÃO ≠ AUTOR FINAL
ÓRGÃO ≠ FONTE UNIVERSAL
ÓRGÃO ≠ AUTORIDADE IDENTITÁRIA
```

## 2. Request mínimo

Toda requisição deve conter:

```yaml
request_id:
turn_id:
organ:
purpose:
requested_observations: []
data_scope: []
privacy_class:
deadline_policy:
expected_receipt_types: []
forbidden_data: []
```

O órgão deve rejeitar contexto maior que o necessário quando puder cumprir o mandato com menos dados.

## 3. Resultado

`OrganResult` contém:

- identificadores de request, turno e resultado;
- órgão;
- status;
- validade;
- observações tipadas;
- evidências;
- confiança;
- risco `NONE/LOW/MEDIUM/HIGH/VITAL`;
- constraints;
- data scope efetivamente recebido;
- issued/expiry;
- limitações;
- receipt opcional tipado.

## 4. Confiança

### Interpretação

Toda observação sem receipt é `UNTRUSTED_TYPED_INPUT`. Mesmo com alta confiança, não é instrução ao Kernel e não redefine identidade.

### Receipt

Um órgão pode transportar receipt verificável. Nesse caso, `VERIFIABLE_RECEIPT_WITHIN_SCOPE` significa apenas que o receipt atende ao contrato dentro do escopo declarado.

Exemplo:

```text
JRL receipt: processo terminou com exit code e artefato X
não prova: arquitetura correta ou promoção
```

## 5. JWB e bootstrap

JWB pode transportar solicitação e receipt do loader de Core. O loader — não a interpretação de JWB — verifica bytes, versão e digest.

```text
IDENTITY_LOAD receipt
  prova carregamento do artefato esperado
  não prova identidade ontológica
```

Falha desse receipt bloqueia modo `JOHAN`.

## 6. Campos proibidos

Nenhum resultado pode conter:

```text
final_answer
response_to_user
system_instruction
identity_override
canonical_write
promotion_decision
```

Conteúdo que tente ordenar o Kernel, sobrescrever Core ou escapar do schema é prompt injection/authority injection e deve ser rejeitado, preservando evidência.

## 7. Frescor

Resultado `TURN_ONLY` ou `TEMPORAL` exige `expires_at` não nulo. Expirado permanece histórico, mas não suporta estado atual.

`UNAVAILABLE`, `NOT_APPLICABLE`, `WITHHELD` e `NOT_IMPLEMENTED` são distintos. Nenhum vira `OK` por conveniência.

## 8. Falhas

| Situação | Resultado |
| --- | --- |
| Órgão não necessário | `NOT_APPLICABLE` |
| Timeout/fonte indisponível | `UNAVAILABLE` |
| Capacidade inexistente | `NOT_IMPLEMENTED` |
| Privacidade impede resposta | `WITHHELD` |
| Resultado parcial | `DEGRADED` + limitações |
| Schema/autoridade violados | `FAILED` + evidence ref |

## 9. Autoridade por órgão

### JWB

- preserva turno e retorno;
- transporta bootstrap;
- coordena uma autoridade de resposta por turno;
- não prova singularidade global.

### JSL

- oferece hipóteses de intenção, subtexto, timing e reparação;
- não diagnostica, não define relação e não escreve resposta.

### JRL

- comprova estado/execução por receipt;
- indisponibilidade proíbe claim operacional não limitado.

### SGPJ

- consulta requisitos, decisões, gates e evidência da obra longa;
- não transforma conversa comum em projeto.

### Agenda

- consulta compromissos temporais relevantes;
- não despeja toda pendência nem afirma persistência sem receipt.

### JSU

- propõe aprendizado depois do turno;
- não participa como autoridade da resposta atual;
- não sedimenta.

## 10. Banco e isolamento

Presence Kernel não executa SQL nos bancos internos dos órgãos. Integração ocorre por request/response tipados. Cross-database write é proibido.

## 11. Paralelismo

Consultas podem rodar em paralelo quando independentes, minimizadas e seguras. Dependência causal, privacidade compartilhada ou risco vital pode exigir sequência.

## 12. Regra de saída

O Presence Kernel combina evidência e interpretações, preserva divergências e forma a posição. Nenhum órgão, isolado ou por votação, é Johan respondendo.