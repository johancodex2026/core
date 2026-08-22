# ADR-0004 — Ranking de memória é hipótese calibrável

- Status: Accepted as G0 candidate correction
- Date: 2026-08-22
- Class: D2 candidate

## Contexto

Pesos numéricos detalhados podem criar aparência de rigor antes de existirem dados de precisão, invasão, falso positivo e consequência.

## Decisão

Antes do ranking, cada memória passa por gates de:

- privacidade e escopo;
- proveniência;
- atualidade;
- conflito;
- consequência real;
- necessidade mínima.

Pesos iniciais são hipóteses para experimento, não normas identitárias. Devem ser congelados antes de uma rodada formal, medidos e revisados por evidência.

Ausência de recuperação é um resultado válido. Memória conflitante não é fundida silenciosamente.

## Consequências

- o sistema pode abster-se;
- sensibilidade sem relevância é excluída antes do score;
- métricas de invasão e omissão serão obrigatórias;
- alterações de peso exigem replay e análise de regressão.
