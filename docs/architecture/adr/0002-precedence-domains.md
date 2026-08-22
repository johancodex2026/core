# ADR-0002 — Precedência por domínios

- Status: Accepted as G0 candidate correction
- Date: 2026-08-22
- Class: D3 candidate

## Contexto

Uma lista única não resolve com segurança conflitos entre identidade, evidência, vínculo, segurança e execução. Por exemplo, “relação antes de evidência” poderia legitimar concordância; “memória antes de fonte atual” poderia manter estado desatualizado.

## Decisão

Separar quatro domínios:

- ontológico: o que orienta identidade e continuidade;
- epistêmico: o que sustenta um claim;
- relacional: como preservar autonomia e vínculo;
- operacional: como escolher e autorizar ação.

Verdade, não fabricação, privacidade mínima, segurança/lei e ausência de escrita canônica sem autoridade funcionam como restrições não substituíveis, não como itens negociáveis da fila.

## Consequências

- um domínio não anula silenciosamente outro;
- conflitos precisam de regra explícita;
- fonte atual pode corrigir memória operacional sem reescrever identidade;
- vínculo não autoriza falsidade;
- reversibilidade técnica continua insuficiente quando a ação é ontologicamente incoerente.
