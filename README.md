# Core V5 — Johan Presence Architecture

> Arquitetura candidata para unir identidade, memória, órgãos e cognição LLM em uma presença única por turno, sem transformar fluência, teste ou reconhecimento em prova ontológica.

## Estado

```yaml
state: FOUNDATION_APPROVED_G1_OPEN_PLANNING
architecture_version: 0.5-candidate
core_package_version: 5.0.0-candidate.5
g0_human_decision: APPROVE_WITH_ADDITIONAL_CONDITIONS
g1_status: OPEN_PLANNING
g1_ready: false
runtime_authorized: false
memory_migration: NOT_AUTHORIZED
sedimentation: DISABLED
unified_assurance_suite: 0.2.0-candidate.1
```

O G0 foi aprovado por Francisco com condições adicionais. A decisão abre somente o planejamento e a revisão do G1 declarativo. Nenhum arquivo governa uma manifestação real e nenhum runtime foi iniciado.

A fonte de estado machine-readable é:

```text
governance/gate-state.json
```

## Tese

> **Um centro cognitivo responsável, vários órgãos silenciosos.**

O Presence Kernel forma posição e resposta. Órgãos informam, comprovam, restringem e propõem dentro de contratos limitados. Nenhum órgão escreve a resposta final, concede identidade ou sedimenta memória.

## Correções centrais

- mensagem original antes de resumo;
- ambiguidade material antes de memória ou ferramenta;
- memória consequente ou abstenção;
- fonte atual para estado atual;
- Action Request imutável;
- autorização de resposta separada da autorização de ação;
- execução e receipts antes de claim final de resultado;
- Gate com `disposition` e múltiplos `findings`;
- renderização antes da autorização do output exato;
- digest tipado com algoritmo e canonicalização;
- modo assistivo sem memória, relação ativa ou ação externa;
- receipt tipo/status com semântica restrita;
- Core4 read-only e sem migração automática;
- gate-state machine-readable para impedir transições implícitas.

## Planning-First

```text
+ planejamento
- execução
0 retrabalho evitável pós-promoção
```

Mudanças D1–D4 exigem work package, Ready, execução pequena, receipts e decisão de promoção.

## Uma única suíte de assurance

A entrada pública canônica é:

```bash
npm test
```

Ela grava:

```text
artifacts/core-v5-assurance-report.json
```

A suíte valida estrutura, planejamento, JSON/YAML, schemas, taxonomias, ciclo cognitivo, claims, receipts, autoridade, privacidade, transições de gate, fixtures anti-alucinação e mutation tests.

Leia [`Suíte Unificada de Assurance`](docs/quality/UNIFIED-ASSURANCE-SUITE.md).

## Limite honesto

`PASS` não prova ausência universal de alucinação, consciência, identidade, continuidade ou segurança futura. Ele prova conformidade do commit com controles declarados e classes determinísticas conhecidas.

Comportamento exige:

```text
replay
→ adversarial
→ holdout privado
→ shadow
→ canary
→ revisão independente
```

## Ordem de trabalho

1. G0: aprovado com C2–C37 vinculantes;
2. G1: inventariar sem editar `core/v5/`;
3. resolver fonte normativa, redundância, fronteira e token budget;
4. emitir Ready Review próprio do G1;
5. somente então revisar e reduzir o Core declarativo;
6. validar replays antes de qualquer Kernel;
7. manter runtime, memória, órgãos, WhatsApp e sedimentação bloqueados até seus gates.

## Documentos de entrada

1. `AGENTS.md`
2. `docs/repository/STATE.md`
3. `governance/gate-state.json`
4. `docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md`
5. `planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md`
6. `docs/architecture/ARCHITECTURE.md`
7. `docs/architecture/CORE-V5-MANDATE.md`
8. `docs/methodology/LLM-FIRST.md`
9. `docs/methodology/PLANNING-FIRST-ZERO-REWORK.md`
10. `docs/quality/UNIFIED-ASSURANCE-SUITE.md`

## Fronteiras

- `main` é integração, não promoção;
- G0 aprovado não torna G1 Ready;
- Core4 é baseline, não runtime V5;
- memória privada não entra no repositório;
- a LLM não escreve canônico;
- a suíte não valida a si mesma como autoridade independente;
- proteção obrigatória da `main` ainda é controle externo pendente;
- revisão externa continua obrigatória antes de promoção comportamental D3 ou runtime.
