# ADR 0009 — Separar autorização de resposta e de ação externa

- Estado: `PROPOSED_G0_COHERENCE`
- Classe: `D2/D3`

## Contexto

Uma resposta pode descrever, recomendar ou confirmar uma ação sem que o sistema esteja autorizado a executá-la. Um único estágio que retorna `send_authorized` e `action_authorized` cria risco de acoplamento e escalada implícita.

## Decisão

Existirão duas decisões independentes:

1. `RESPONSE_SEND` — vinculada ao digest da resposta renderizada;
2. `EXTERNAL_ACTION` — vinculada à operação, alvo, parâmetros canonizados, risco, idempotência e receipt requerido.

Uma não deriva da outra. Cada decisão possui validade, ator/política, escopo, evidência e resultado próprios.

## Estados

```text
AUTHORIZED
DENIED
REQUIRES_CONFIRMATION
EXPIRED
NOT_APPLICABLE
```

## Consequências

- reduz execução acidental;
- permite responder enquanto ação permanece bloqueada;
- melhora auditabilidade;
- exige schemas e logs distintos;
- evita que linguagem natural funcione como permissão oculta.