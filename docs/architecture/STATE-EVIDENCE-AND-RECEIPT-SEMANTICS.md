# Semântica de Estado, Evidência e Receipts

- Estado: `G0_COHERENCE_CANDIDATE`
- Classe: `D2/D3 — comportamental e autoridade`
- Objetivo: impedir que vocabulário operacional exceda a prova disponível

## 1. Princípio

Um estado é uma afirmação com sujeito, domínio, fonte, instante e transição permitida. Palavras como `ok`, `ativo`, `enviado`, `verificado` e `concluído` não podem permanecer livres de contrato.

```text
NARRATIVA NÃO MUDA ESTADO
ESTADO NÃO PROVA ALÉM DO RECEIPT
RECEIPT NÃO PROMOVE SOZINHO
```

## 2. Estados normativos

### Ausência e capacidade

| Estado | Significado |
| --- | --- |
| `UNKNOWN` | Informação insuficiente. |
| `NOT_APPLICABLE` | Não é necessário para este sujeito/turno. |
| `NO_ELIGIBLE_RESULT` | A avaliação ocorreu e nenhum resultado passou. |
| `UNAVAILABLE` | Capacidade existe, mas não respondeu ou não pôde ser acessada. |
| `WITHHELD` | Resultado não é revelado por privacidade/autoridade. |
| `NOT_IMPLEMENTED` | Capacidade ainda não existe. |

### Planejamento e execução

| Estado | Significado |
| --- | --- |
| `PLANNED` | Existe plano; nenhuma alteração durável é alegada. |
| `READY` | Plano aprovado para baseline e validade específicos. |
| `QUEUED` | Pedido aceito em fila; execução não começou. |
| `ACCEPTED` | Sistema responsável aceitou o pedido. Não prova conclusão. |
| `EXECUTING` | Operação começou e ainda não terminou. |
| `EXECUTED` | Operação terminou segundo receipt. Não prova correção. |
| `VERIFIED` | Testes definidos atenderam ao critério. |
| `PROMOTED` | Autoridade aplicável aprovou o alvo definido. |

### Comunicação

| Estado | Significado |
| --- | --- |
| `RENDERED` | Resposta exata foi produzida para o canal. |
| `SEND_AUTHORIZED` | Digest renderizado foi autorizado para envio. |
| `SENT` | Provedor aceitou envio ou transporte informou saída. |
| `DELIVERED` | Provedor informou entrega. Não prova leitura. |
| `READ` | Canal forneceu receipt de leitura. Não prova concordância. |

### Resultado e histórico

| Estado | Significado |
| --- | --- |
| `FAILED` | Operação não alcançou o estado requerido. |
| `PARTIAL` | Subconjunto explicitado foi alcançado. |
| `EXPIRED` | Receipt ou autorização ultrapassou validade. |
| `REJECTED` | Autoridade ou gate recusou a proposta. |
| `SUPERSEDED` | Novo registro substitui uso futuro, preservando histórico. |
| `ROLLED_BACK` | Efeito técnico foi desfeito; impactos ocorridos permanecem históricos. |

## 3. Proibições semânticas

```text
NOT_IMPLEMENTED != OK
PLANNED != IMPLEMENTED
QUEUED != SENT
SENT != DELIVERED
DELIVERED != READ
EXECUTED != VERIFIED
VERIFIED != PROMOTED
MAIN_MERGED != PROMOTED
IDENTITY_LOAD_VERIFIED != IDENTITY_PROVED
ROLLBACK_COMPLETED != HISTORY_ERASED
```

## 4. Receipt mínimo

Todo receipt material registra:

- identificador, tipo e versão;
- sujeito e domínio;
- fonte/emissor;
- instante observado e emitido;
- estado exato;
- escopo;
- digest quando aplicável;
- validade/expiração;
- evidências relacionadas;
- limitações;
- privacidade;
- mecanismo de integridade quando disponível.

Campo ausente limita o claim; não pode ser preenchido por inferência otimista.

## 5. Frescor

Receipts temporais declaram `valid_until` ou política de frescor. Receipt expirado serve como história, não como prova de estado atual. Expiração não torna o registro falso; torna a atualidade desconhecida.

## 6. Autoridade específica ao domínio

A mesma fonte pode ser autoritativa para um claim e irrelevante para outro.

- JRL comprova processo e receipt técnico, não qualidade ontológica.
- Agenda comprova persistência de compromisso, não intenção emocional.
- JSL formula hipótese relacional, não diagnostica pessoa.
- GitHub comprova commit/ref, não promoção de identidade.
- Provider comprova `DELIVERED`, não compreensão.

## 7. Binding do output exato

A autorização de envio referencia o digest da resposta renderizada exata. Depois de autorizada:

- alteração material invalida autorização;
- transformação transportacional deve estar contratada;
- encoding, truncamento, anexos e links entram no objeto autorizado;
- receipt de envio referencia o mesmo digest ou transformação verificável.

## 8. Ações externas

Cada ação externa possui autorização independente com ferramenta, operação, alvo, parâmetros canonizados, risco, idempotência, validade, resultado esperado, receipt e rollback/irreversibilidade.

Resposta aprovada não é autorização implícita para executar a ação descrita.

## 9. Resultados múltiplos

Um turno pode produzir resposta autorizada, ação negada, memória não aplicável, órgão indisponível, claim limitado e pedido de clarificação. O sistema não colapsa isso em um único `ok`.

## 10. Projeções e história

Projeções derivadas podem ser reconstruídas quando fonte e algoritmo permanecem auditáveis. Decisões, receipts, propostas de memória, autorizações e promoções são históricos e usam append/supersession.

## 11. Regra de conclusão

Linguagem de conclusão deve ser compatível com o receipt mais forte disponível. Sem receipt suficiente, relatar estado real e próximo gate.