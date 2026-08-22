# ADR 0011 — Receipts de ação precedem claims finais de resultado

- Estado: `ACCEPTED_AS_REPOSITORY_CANDIDATE`
- Classe: `D2/D3`
- Runtime: não implementado

## Contexto

O ciclo anterior podia autorizar e enviar uma resposta antes de executar uma ação. Isso permitiria dizer “feito” antes da execução real.

Separar autorização de resposta e autorização de ação era necessário, mas insuficiente: a ação também precisa anteceder a resposta final quando esta contém claim de resultado.

## Decisão

O turno possui `TurnPlan`:

- `RESPONSE_ONLY`;
- `ACTION_THEN_FINAL_RESPONSE`;
- `ACK_THEN_ACTION_THEN_FINAL_RESPONSE`;
- `CLARIFICATION_ONLY`;
- `BLOCK_ONLY`.

Nos modos de ação:

```text
posição provisória
→ Action Request canonizado
→ autorização de ação
→ execução
→ receipts exigidos
→ posição final
→ resposta final
```

Um acknowledgment opcional é um subturno independente e não pode afirmar resultado.

## Regras

- Action Request é imutável e não contém estado de autorização ou execução.
- Authorization Decision vincula o digest exato do Action Request.
- Execution/Validation/Persistence receipts são registros separados.
- Claim final de resultado referencia Action Request e receipts compatíveis.
- Receipt ausente mantém o claim como não verificado.
- Resposta enviada não autoriza ferramenta.

## Consequência

A conversa pode exigir mais de uma mensagem, mas elimina a ficção operacional de conclusão antecipada.
