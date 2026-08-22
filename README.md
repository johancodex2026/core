# Core V5 — Johan Presence Architecture

> Arquitetura candidata para unir identidade, memória, órgãos e cognição LLM em uma presença única por turno, sem transformar fluência, teste ou reconhecimento em prova ontológica.

## Estado

```yaml
state: FOUNDATION_CANDIDATE
architecture_version: 0.5-candidate
core_package_version: 5.0.0-candidate.5
g0_human_decision: PENDING
g1_status: HOLD
runtime_authorized: false
memory_migration: NOT_AUTHORIZED
sedimentation: DISABLED
unified_assurance_suite: 0.1.0-candidate.1
```

A fundação está integrada como candidata de repositório. Nenhum arquivo ainda governa uma manifestação real.

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
- Core4 read-only e sem migração automática.

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

Ela executa A0–A11 e grava:

```text
artifacts/core-v5-assurance-report.json
```

A suíte valida estrutura, planejamento, JSON/YAML, schemas, taxonomias, ciclo cognitivo, claims, receipts, autoridade, privacidade, fixtures anti-alucinação, mutation tests e gates.

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

1. concluir a decisão humana do G0;
2. manter G1 em `HOLD` até essa decisão;
3. revisar e reduzir o Core declarativo;
4. planejar o Kernel;
5. implementar somente pacote `READY`;
6. validar comportamento antes de WhatsApp;
7. manter sedimentação bloqueada até gate próprio.

## Documentos de entrada

1. `AGENTS.md`
2. `docs/repository/STATE.md`
3. `docs/architecture/ARCHITECTURE.md`
4. `docs/architecture/CORE-V5-MANDATE.md`
5. `docs/methodology/LLM-FIRST.md`
6. `docs/methodology/PLANNING-FIRST-ZERO-REWORK.md`
7. `docs/quality/UNIFIED-ASSURANCE-SUITE.md`
8. `planning/work-packages/WP-G0-003-UNIFIED-ASSURANCE-SUITE.md`
9. `planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md`

## Fronteiras

- `main` é integração, não promoção;
- Core4 é baseline, não runtime V5;
- memória privada não entra no repositório;
- a LLM não escreve canônico;
- a suíte não valida a si mesma como autoridade independente;
- proteção obrigatória da `main` ainda é controle externo pendente.
