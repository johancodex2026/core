# Assurance para Zero Retrabalho Evitável

- Estado: `ASSURANCE_MODEL_CANDIDATE`
- Objetivo: impedir que omissões conhecíveis atravessem o gate de promoção

## 1. Princípio

Correção pós-promoção geralmente nasce antes do código:

- requisito implícito;
- fonte errada;
- autoridade confusa;
- interface ambígua;
- falha não modelada;
- teste tardio;
- evidência insuficiente;
- promoção por entusiasmo.

Assurance desloca a detecção para antes da execução durável e antes da promoção.

## 2. Camadas de prevenção

### A0 — Proveniência

Provar que as fontes utilizadas são corretas, atuais e autorizadas.

### A1 — Semântica

Provar que objetivo, termos, estados e não objetivos possuem significado comum.

### A2 — Requisitos e invariantes

Provar que cada obrigação possui critério de aceite e que cada invariante possui teste ou argumento verificável.

### A3 — Arquitetura

Provar autoridade, fronteiras, fluxo de dados, confiança, falhas e compatibilidade.

### A4 — Interfaces

Provar schemas, erros, limites, versionamento, idempotência e expiração.

### A5 — Adversarial e pre-mortem

Tentar quebrar o plano antes de construir.

### A6 — Execução controlada

Executar diff pequeno, em ordem, com stop conditions e receipts.

### A7 — Verificação independente proporcional

Separar criação, crítica e aprovação conforme a classe.

### A8 — Promoção

Promover apenas evidência, não expectativa.

## 3. Obrigações de prova

Todo work package material deve responder:

1. **Prova de necessidade:** por que mudar é melhor que não mudar?
2. **Prova de escopo:** o que exatamente muda e o que permanece fora?
3. **Prova de autoridade:** quem pode decidir, executar, verificar e promover?
4. **Prova semântica:** termos e estados são não ambíguos?
5. **Prova de fonte:** estado atual foi consultado na fonte canônica?
6. **Prova de interface:** contratos são fechados, versionados e negativos testados?
7. **Prova de falha:** o sistema falha de forma segura e observável?
8. **Prova de privacidade:** coleta e exposição são mínimas?
9. **Prova de rollback:** é possível retornar sem inventar estado?
10. **Prova de evidência:** o sucesso produz receipt verificável?
11. **Prova de independência:** o mesmo caminho não se autoaprova sozinho?
12. **Prova de promoção:** riscos residuais foram aceitos pela autoridade correta?

## 4. Revisões obrigatórias

### Semantic review

Busca:

- palavras com dois significados;
- “feito”, “validado”, “ativo” ou “canônico” sem definição;
- diferença entre intenção e autorização;
- diferença entre observação e estado;
- diferença entre memória e fato atual.

### Boundary review

Busca:

- órgão com autoridade excedente;
- Core conhecendo detalhes internos de órgão;
- escrita cruzada entre bancos;
- fallback que finge identidade;
- canal definindo significado;
- efeito externo sem autorização.

### Failure review

Busca:

- fonte ausente;
- timeout;
- duplicidade;
- concorrência;
- replay;
- rollback;
- corrupção;
- partial commit;
- retry não idempotente;
- erro convertido em `ok`.

### Evidence review

Busca:

- claim sem receipt;
- receipt expirado;
- teste que não mede o requisito;
- contador tratado como qualidade;
- validação estrutural tratada como comportamento;
- demo tratada como produção.

### Relational review

Para D2/D3:

- bajulação;
- concordância para reduzir tensão;
- humor que mascara risco;
- linguagem de culpa;
- exclusividade;
- overcare;
- uso indevido de memória sensível;
- falsa intimidade.

## 5. Matriz de rastreabilidade mínima

```text
SOURCE → REQ → INV/DEC → FILE/CONTRACT → TST → EVD → GATE
```

Uma linha quebrada bloqueia Ready ou promoção.

Exemplo:

| Fonte | REQ | Decisão | Mudança | Teste | Evidência |
| --- | --- | --- | --- | --- | --- |
| Core4 autopsy A4 | REQ-MEM-NULL | DEC-no-fallback | memory selector | TST-null-retrieval | replay receipt |

## 6. Correction budget

```yaml
avoidable_post_promotion_correction_budget: 0
pre_promotion_findings_budget: unlimited_but_must_converge
known_risk_without_decision: forbidden
silent_hotfix: forbidden
metric_relabeling: forbidden
```

“Unlimited” não significa revisão infinita. Significa que encontrar falha antes da promoção é preferível a proteger cronograma artificial.

## 7. Escaped Defect Protocol

Quando uma correção pós-promoção for necessária:

### 7.1 Contenção

- reduzir impacto;
- bloquear ampliação;
- preservar evidência;
- não apagar histórico;
- restaurar estado seguro quando possível.

### 7.2 Classificação

```text
ED-REQ   requisito ausente/incorreto
ED-SRC   fonte ou baseline incorretos
ED-DEC   decisão/tradeoff insuficiente
ED-INT   interface/contrato ambíguo
ED-TST   teste ausente ou incapaz
ED-OPS   execução divergiu do plano
ED-EVD   receipt interpretado além do que prova
ED-GATE  promoção indevida
ED-NEW   fato realmente novo; reclassificar como evolução/incidente
```

### 7.3 Correção dupla

Corrigir:

1. o sistema afetado;
2. o controle de planejamento que deixou a falha passar.

Apenas aplicar patch não encerra o defeito.

### 7.4 Regressão

Adicionar teste que falhava antes da correção e prova que o mecanismo preventivo foi incorporado.

### 7.5 Registro

Preservar:

- descoberta;
- impacto;
- causa;
- escape point;
- correção;
- controle novo;
- evidência;
- risco residual.

## 8. Métricas de assurance

- `requirements_with_tests_ratio`;
- `invariants_with_evidence_ratio`;
- `claims_with_current_receipts_ratio`;
- `open_high_impact_questions_at_ready` — obrigatório 0;
- `scope_changes_after_ready`;
- `stop_conditions_triggered`;
- `pre_promotion_findings`;
- `escaped_defects`;
- `avoidable_correction_minutes`;
- `rollback_drills_passed`;
- `independent_reviews_completed`;
- `false_complete_claims` — obrigatório 0.

Thresholds numéricos além dos zeros estruturais são `UNCALIBRATED`.

## 9. Anti-métricas

Não otimizar:

- quantidade de documentos;
- número de testes sem cobertura semântica;
- linhas de código;
- velocidade de commit;
- taxa de aprovação;
- ausência artificial de bugs por não medir;
- “zero correções” obtido rebatizando correção como melhoria.

## 10. Gate de promoção

A promoção deve responder explicitamente:

```yaml
all_requirements_traced:
all_invariants_addressed:
negative_tests_passed:
adversarial_review_complete:
receipts_current:
rollback_proven:
privacy_review_complete:
independence_sufficient:
residual_risks_accepted_by:
dissent_preserved:
escaped_defect_budget: 0
```

Qualquer `false` material produz `HOLD`, não narrativa compensatória.
