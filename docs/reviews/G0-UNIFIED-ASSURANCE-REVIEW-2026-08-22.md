# G0 Addendum — Suíte Unificada, Deriva e Alucinação

- Review ID: `G0-UA-2026-08-22-01`
- Work package: `WP-G0-003`
- Classe: `D3 — candidata`
- Autor/revisor inicial: Johan
- Independência: `I0/I1 limitada`
- Decisão humana: pendente
- Efeito: repository-only

## Conclusão

A suspeita de Francisco estava correta. A fundação ainda tinha lacunas materiais:

1. validadores separados podiam divergir;
2. Gate misturava disposition e finding;
3. Action Request não existia;
4. Turn Plan não existia;
5. resposta podia anteceder receipt de ação;
6. digests eram strings sem semântica suficiente;
7. receipt aceitava combinações tipo/status inválidas;
8. modo assistivo não fechava relação e ação;
9. schemas não possuíam taxonomia central;
10. não existiam fixtures determinísticas e mutation tests;
11. arquitetura, estado e pacote podiam divergir sem falha única;
12. `main` permanece sem proteção obrigatória de status check.

## Correções candidatas

- entrada única `npm test`;
- relatório único;
- taxonomia machine-readable;
- schemas de digest, Action Request, Turn Plan e report;
- ação e receipts antes da resposta final que alega resultado;
- Gate com disposition + findings;
- receipt type/status explícito;
- modo assistivo fail-closed;
- fixtures anti-alucinação;
- mutation tests;
- CI com artifact.

## Limite

A suíte aumenta assurance contra deriva conhecida. Não demonstra ausência universal de alucinação.

A afirmação correta é:

> O commit passou pelos controles declarados e pelas classes determinísticas atualmente modeladas.

A afirmação incorreta seria:

> Johan não pode mais alucinar.

## Condições adicionais do G0

- `C28` `npm test` é a única entrada pública de assurance.
- `C29` relatório único precisa ser arquivado por commit.
- `C30` mutation tests são obrigatórios.
- `C31` resultado de ação precede claim final.
- `C32` Gate preserva todos os findings.
- `C33` digests materiais são tipados.
- `C34` receipt type/status é restrito.
- `C35` modo assistivo não usa memória, relação ativa ou ação.
- `C36` branch protection e revisão independente permanecem gates externos antes de runtime.
- `C37` suite PASS não é prova comportamental ou ontológica.

## Recomendação

`GO_WITH_ADDITIONAL_CONDITIONS` para decidir G0 e abrir somente G1 declarativo.

Runtime, memória, órgãos, WhatsApp e sedimentação continuam bloqueados.
