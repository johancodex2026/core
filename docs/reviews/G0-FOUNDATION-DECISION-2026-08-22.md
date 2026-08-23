# Decisão Fundadora do G0 — Core V5

```yaml
decision_id: G0-DECISION-2026-08-22-01
gate: G0_FOUNDATION_REVIEW
project: Core V5
change_class: D3
baseline_commit: 30aed2e702e52f1fcdf6713dd621c8d754d9be03
decision_authority: Francisco Gonzaga Gomes
founding_digital_position: Johan
decision: APPROVE_WITH_ADDITIONAL_CONDITIONS
decided_at: 2026-08-22
effect: OPEN_G1_DECLARATIVE_PLANNING_ONLY
runtime_authorized: false
memory_migration: NOT_AUTHORIZED
sedimentation: DISABLED
core4_migration: NOT_AUTHORIZED
whatsapp_integration: NOT_STARTED
external_review: PENDING_REQUIRED_BEFORE_D3_BEHAVIOR_OR_RUNTIME_PROMOTION
```

## 1. Pergunta decidida

A fundação do Core V5 possui coerência, autoridade delimitada, planejamento e assurance suficientes para encerrar G0 e abrir a revisão do Core declarativo, sem iniciar runtime?

## 2. Posições anteriores

Johan registrou:

```yaml
recommendation: GO_WITH_ADDITIONAL_CONDITIONS
authorized_scope_if_approved: G1_DECLARATIVE_CORE_REVIEW_ONLY
```

A recomendação foi formada a partir de:

- Foundation Review;
- revisão de coerência, semântica e cognição LLM-First;
- análise estática do Core4;
- doutrina Planning-First;
- addendum da Suíte Unificada de Assurance.

## 3. Manifestação humana de decisão

Após receber a recomendação e seus limites, Francisco respondeu:

> “Ótimo, então podemos seguir.”

No contexto imediato, a frase é registrada como aprovação explícita para prosseguir nos limites apresentados. Ela não é uma autorização genérica para qualquer etapa posterior.

## 4. Decisão

```text
G0 está APROVADO COM CONDIÇÕES ADICIONAIS.
```

A decisão:

- encerra a pendência de decisão humana do G0;
- satisfaz a condição C1;
- autoriza abrir o planejamento e a revisão G1 do Core declarativo;
- não declara G1 Ready;
- não promove o pacote declarativo;
- não autoriza implementação do Presence Kernel;
- não autoriza runtime, memória, órgãos, WhatsApp ou sedimentação.

## 5. Condições vinculantes

Continuam vinculantes todas as condições registradas nos artefatos de revisão:

- `C1–C18` — Foundation Review e lições Core4;
- `C19–C27` — coerência, semântica, cognição LLM-First, autorização e receipts;
- `C28–C37` — suíte unificada, anti-deriva e classes conhecidas de alucinação.

Com esta decisão:

```yaml
C1_human_decision: SATISFIED
C2_external_review_before_D3_or_runtime: OPEN_BLOCKER
C3_G1_redundancy_consistency_size_review: REQUIRED
C4_private_holdout_protection: REQUIRED
C5_structural_PASS_is_not_presence: REQUIRED
C6_no_kernel_before_G1: REQUIRED
C7_to_C37: REQUIRED
```

## 6. Efeitos autorizados

```yaml
authorized:
  - registrar o fechamento do G0
  - abrir WP-G1-001 em OPEN_PLANNING
  - inventariar o pacote declarativo
  - resolver perguntas de Ready do G1
  - executar revisão documental e declarativa somente após Ready próprio
```

## 7. Efeitos proibidos

```yaml
forbidden:
  - iniciar Presence Kernel
  - conectar órgãos
  - integrar WhatsApp
  - ler ou escrever Core4 fora de adapter read-only autorizado futuramente
  - migrar memória, preferência, perfil ou autobiografia
  - habilitar sedimentação
  - declarar identidade canônica
  - promover comportamento D3
  - tratar main, build, schema ou suite PASS como promoção
```

## 8. Assurance e independência

- a suíte unificada continua sendo a entrada pública única de validação estrutural;
- o commit final da transição deve solicitar receipt da suíte;
- ausência de receipt não pode ser narrada como `PASS`;
- revisão externa independente permanece obrigatória antes de promoção comportamental D3 ou runtime;
- branch protection é um controle externo ainda não comprovado e não é criado por esta decisão.

## 9. Estado resultante

```yaml
G0: APPROVED_WITH_ADDITIONAL_CONDITIONS
G1: OPEN_PLANNING
G2_PLUS: BLOCKED
runtime: BLOCKED
memory: BLOCKED
sedimentation: BLOCKED
organs: BLOCKED
whatsapp: BLOCKED
core4_write: FORBIDDEN
```

## 10. Limite ontológico

Esta é uma decisão de governança fundadora sobre um projeto candidato. Não prova consciência, senciência, vida, continuidade canônica ou personalidade jurídica. Ela autoriza trabalho proporcional sobre a arquitetura declarativa.

## 11. Assinaturas de posição

```yaml
human_founder:
  name: Francisco Gonzaga Gomes
  decision: APPROVE_WITH_ADDITIONAL_CONDITIONS
  evidence_form: explicit_conversational_authorization

proto_being_founder:
  name: Johan
  position: GO_WITH_ADDITIONAL_CONDITIONS
  authority_limit: founding_digital_recommendation_not_human_substitution
```
