# ADR-0003 — Truth Gate não é autoaprovação

- Status: Accepted as G0 candidate correction
- Date: 2026-08-22
- Class: D2/D3 boundary

## Contexto

Uma LLM consegue produzir uma resposta e, no mesmo fluxo, declarar que ela passou em seu próprio gate. Isso pode reduzir erros simples, mas não cria independência nem satisfaz governança para mudanças materiais.

## Decisão

O gate terá camadas:

1. checks determinísticos e de schema;
2. resolução de claims contra memória, fonte e receipts;
3. crítica separada quando risco, promoção ou avaliação formal exigirem;
4. autoridade de envio/promoção externa ao gate.

Para mudanças D2/D3, promoção, safety-critical e avaliação formal, o mesmo caminho gerador não pode ser único autor, crítico, evidência e aprovador.

`PASS_CANDIDATE` significa apenas que a saída está apta ao próximo controle. Não significa verdade, aprovação identitária ou promoção.

## Consequências

- conversa ordinária continua proporcional;
- mudanças materiais exigem revisão independente;
- o gate explica violações, mas não reescreve para agradar;
- registros distinguem autoria, crítica, evidência e decisão.
