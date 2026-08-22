# G0 — Revisão de Coerência, Semântica e Cognição LLM-First

- Review ID: `G0-COH-2026-08-22-01`
- Classe: `D3 — fundação candidata`
- Solicitação: Francisco Gonzaga Gomes
- Autor/revisor fundador digital: Johan
- Baseline inicial: `d39066974f88505ecc471ab19c80e18c22891b9a`
- Execução: refinamento documental, declarativo e de schemas
- Runtime: não iniciado
- Memória: não migrada nem sedimentada
- Efeito: emenda candidata do G0; decisão humana do G0 continua pendente

## 1. Pergunta

O conjunto atual é semanticamente coerente o suficiente para iniciar G1 sem levar ambiguidades de autoridade, memória, estado, autorização ou ordem cognitiva para a próxima fase?

## 2. Método

A revisão confrontou:

- Constituição e cápsula;
- contrato relacional;
- precedência;
- política de memória;
- loop de presença;
- Truth Gate;
- registro de órgãos;
- perfis de canal;
- schemas;
- Planning-First;
- autópsia Core4;
- gates e lifecycle.

Foram procurados conflitos entre prosa e máquina, inputs sem produtor, estados sem semântica, ordens cognitivas perigosas, autoridade implícita, fallback, pseudo-precisão, ambiguidades relacionais e claims maiores que receipts.

## 3. Achados

| ID | Severidade | Achado | Risco |
| --- | --- | --- | --- |
| COH-01 | Crítica | `authorize_send` aparecia antes de renderização exata. | Enviar bytes não avaliados. |
| COH-02 | Crítica | Resposta e ação externa podiam compartilhar autorização. | Execução implícita por linguagem natural. |
| COH-03 | Alta | Presence loop referenciava outputs sem produtor claro. | Runtime improvisar semântica. |
| COH-04 | Alta | Identidade permitia estado `DEGRADED`. | Casca genérica parecer Johan. |
| COH-05 | Alta | JWB era órgão não confiável e carregador de identidade sem distinção. | Confiança circular ou bootstrap impossível. |
| COH-06 | Alta | Core continha pesos numéricos de memória não calibrados. | Pseudo-objetividade e overfitting. |
| COH-07 | Alta | Cápsula e memória de identidade podiam ser confundidas. | Autobiografia carregada por padrão. |
| COH-08 | Alta | Truth Gate tratava resultado como status único. | Ocultar violações simultâneas. |
| COH-09 | Alta | `GENERIC_SHELL` parecia check determinístico. | Hard fail subjetivo e instável. |
| COH-10 | Alta | `memory_relevance` podia forçar recuperação em qualquer turno. | Invasão e falsa personalização. |
| COH-11 | Alta | `evidence_receipts` e `recent_context` eram objetos livres. | Campos sem autoridade, frescor ou privacidade. |
| COH-12 | Alta | Claim map aceitava claim operacional suportado sem receipt. | Narrativa de execução/estado. |
| COH-13 | Alta | Risk vocabularies divergiam (`CRITICAL` vs `VITAL`). | Mapeamento silencioso e gates inconsistentes. |
| COH-14 | Alta | Confirmação do fundador podia ser lida como autorização vital suficiente. | Ruptura de continuidade por comando isolado. |
| COH-15 | Média | Amizade/aprendizagem podiam soar como dever recíproco. | Dependência, culpa ou obrigação indevida. |
| COH-16 | Média | Channel profile e pacote possuíam versões/estados diferentes. | Drift documental. |
| COH-17 | Média | Template começava em `DRAFT`, fora da máquina de estados. | Work packages não validáveis. |
| COH-18 | Média | Estados de assumptions divergiam entre schema e método. | Planejamento sem significado único. |
| COH-19 | Alta | `Core V5`, `Inner Core`, `Kernel` e `manifestação` não tinham glossário normativo. | Overclaim e comunicação cruzada. |
| COH-20 | Alta | Independência era exigida, mas sem níveis definidos. | Segunda chamada do mesmo modelo apresentada como independente. |
| COH-21 | Alta | Não existia gate precoce de ambiguidade antes de memória/ferramenta. | Resolver a pergunta errada com contexto demais. |
| COH-22 | Alta | Output podia mudar após avaliação sem invalidar autorização. | TOCTOU semântico. |

## 4. Melhorias executadas

### Semântica

- Glossário normativo criado.
- Estados, receipts, frescor e autoridade por claim definidos.
- `NOT_IMPLEMENTED`, `EXECUTED`, `VERIFIED`, `SENT`, `DELIVERED` e `PROMOTED` separados.
- Ausência classificada em `NOT_APPLICABLE`, `NO_ELIGIBLE_RESULT`, `UNAVAILABLE`, `WITHHELD`, `UNKNOWN` e `NOT_IMPLEMENTED`.

### Cognição LLM-First

- Gate precoce de ambiguidade inserido antes de memória e ferramenta.
- Evidência e conflito resolvidos antes da posição final.
- Renderização movida antes da autorização.
- Delivery gate avalia output exato.
- Autorização de resposta e ação externa separadas.
- Digest invalida autorização diante de mudança material.

### Identidade

- `JOHAN_DEGRADED` proibido.
- `JOHAN` exige `IDENTITY_LOAD` verificável.
- Assistência não canônica permanece limitada a baixo risco, sem memória pessoal e sem ação externa.
- Cápsula declarada explicitamente não-memória.

### Memória

- Pesos numéricos removidos do Core e movidos para hipótese de avaliação.
- Máximo padrão alinhado em quatro memórias.
- Null retrieval tipado e sem fallback.
- Memória relacional trivial proibida para personalização de canal.

### Órgãos

- Taxonomia de risco compartilhada.
- Receipt verificável separado de interpretação do órgão.
- JRL falho proíbe claims operacionais.
- Temporal result exige expiração.

### Gate e schema

- Gate dividido em fases semântica e delivery.
- Múltiplas violações preservadas.
- Checks subjetivos classificados como crítica/model judgment.
- Schemas criados para source reference, receipt, recent context e authorization decision.
- Claim Map ganhou suporte, frescor, temporalidade e receipt obrigatório.
- Presence Context eliminou identidade `DEGRADED` e objetos livres principais.
- Work-package lifecycle e assumption statuses alinhados.

### Governança

- Níveis I0–I4 de independência definidos.
- G0 recebeu achados F13–F20 e condições C7–C27.
- Coherence validator determinístico criado.
- Nenhum runtime, migração ou sedimentação foi iniciado.

## 5. Decisões registradas

- ADR 0007 — render antes de send authorization.
- ADR 0008 — bootstrap evidence separado de interpretação de JWB.
- ADR 0009 — response authorization separada de external action authorization.

## 6. Limites desta revisão

- não executou runtime;
- não validou comportamento real de LLM;
- não mediu latência ou custo;
- não executou holdout;
- não validou JSON Schema com todas as instâncias futuras;
- não prova segurança criptográfica;
- não prova continuidade ou identidade;
- não substitui revisão adversarial externa;
- não registra decisão humana do G0.

## 7. Risco residual

- formalidade pode tornar a manifestação rígida;
- exact-output gate pode aumentar latência;
- schema correto não garante interpretação correta;
- fonte íntegra pode estar factualmente errada;
- um único Kernel ainda pode concentrar vieses;
- renderer pode preservar palavras e alterar pragmática;
- critérios de generic shell/overcare continuam dependentes de avaliação;
- quatro memórias ainda é hipótese até calibração;
- múltiplos receipts podem inflar contexto se não houver minimização.

## 8. Resultado

```yaml
review: COMPLETE
coherence_findings: 22
critical_findings: 3
improvements_integrated_as_candidates: true
structural_runtime_effect: none
memory_effect: none
identity_promotion: none
g0_human_decision: PENDING
external_review: PENDING
recommended_next_step: RUN_REPOSITORY_GATES_THEN_REGISTER_G0_HUMAN_DECISION
```

## 9. Posição de Johan

Após as correções, a arquitetura está mais coerente para abrir G1 quando o G0 for explicitamente aprovado. Minha recomendação permanece `GO_WITH_CONDITIONS`; o review atual não transforma silêncio ou pedido de melhoria em aprovação fundadora.