# ADR 0010 — Uma única suíte canônica de assurance

- Estado: `ACCEPTED_AS_REPOSITORY_CANDIDATE`
- Classe: `D2/D3`
- Runtime: nenhum
- Promoção D3: pendente

## Contexto

Três validadores separados verificavam partes da fundação. A composição dependia do `package.json`, não produzia relatório único e não testava a própria capacidade de detectar deriva.

Uma falha podia escapar quando um validador não conhecia um artefato novo, enums divergiam, documentos prometiam contratos ausentes ou um teste era removido sem reduzir o status geral.

## Decisão

1. `npm test` é a única entrada pública.
2. Os validadores anteriores tornam-se camadas subordinadas.
3. A suíte produz relatório JSON mesmo em falha.
4. Um manifesto central declara cobertura, estágios e limitações.
5. Mutation tests são obrigatórios.
6. O workflow executa somente a entrada canônica e arquiva o relatório.
7. `PASS` não é promoção nem prova universal contra alucinação.

## Consequências positivas

- uma execução;
- um exit code;
- um receipt;
- menos drift entre gates;
- enums e fluxo cruzados;
- cobertura visível.

## Consequências negativas

- a suíte se torna componente crítico;
- mudanças nela exigem revisão;
- a mesma base ainda pode modificar sistema e verificador;
- sem dependência externa, JSON Schema não é compilado por engine completa nesta fase.

## Invalidadores

Rever se a suíte virar monólito opaco ou se um framework independente, reproduzível e lockado oferecer separação superior.
