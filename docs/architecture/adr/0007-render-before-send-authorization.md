# ADR 0007 — Renderizar antes de autorizar o envio

- Estado: `PROPOSED_G0_COHERENCE`
- Classe: `D2/D3`
- Decisão de promoção: pendente

## Contexto

O fluxo anterior autorizava envio antes da renderização, embora o texto exato enviado ainda não existisse. Adaptação de canal, truncamento, links ou formatação poderiam alterar materialmente conteúdo já considerado aprovado.

## Decisão

1. O Gate semântico avalia a resposta candidata.
2. O Renderer produz a resposta exata do canal.
3. Um delivery gate verifica posição, risco, incerteza, privacidade e constraints.
4. A autoridade de envio referencia o digest da resposta renderizada exata.
5. Alteração material depois da autorização invalida a decisão.

## Consequências

- autorização corresponde ao que será enviado;
- channel mismatch é avaliado no output real;
- retries podem ser idempotentes;
- existe uma etapa adicional cuja latência será medida no G2.

## Alternativa rejeitada

Autorizar intenção semântica e permitir liberdade posterior ao Renderer. Rejeitada porque mistura forma e conteúdo sem receipt do output final.

## Invalidador

A decisão pode ser revista se renderer formalmente verificado provar transformação semântica nula e contrato de canal vincular deterministicamente entrada e saída.