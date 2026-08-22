# Ciclo de Vida de Work Package

## 1. Máquina de estados

```text
IDEA
  ↓
FRAMED
  ↓
SPECIFIED
  ↓
REVIEWED
  ↓
READY
  ↓
EXECUTING
  ↓
VERIFYING
  ↓
PROMOTION_CANDIDATE
  ↓
PROMOTED
```

Estados laterais:

```text
HOLD
REJECTED
SUPERSEDED
ROLLED_BACK
ESCAPED_DEFECT
```

## 2. Significado dos estados

### IDEA

Necessidade ou hipótese ainda não delimitada. Nenhuma promessa de execução.

### FRAMED

Problema, objetivo, não objetivos, classe e fontes principais identificados.

### SPECIFIED

Requisitos, invariantes, opções, decisões, riscos, contratos e testes planejados.

### REVIEWED

Plano foi criticado; achados, dissenso e mudanças foram incorporados ou registrados.

### READY

Definition of Ready aprovada para baseline exato e por validade limitada.

### EXECUTING

Mudança durável em andamento, restrita ao plano. Descoberta material aciona stop condition.

### VERIFYING

Execução terminou, mas claims de funcionamento ainda dependem de testes e receipts.

### PROMOTION_CANDIDATE

Evidência reunida; aguarda decisão da autoridade aplicável.

### PROMOTED

Mudança autorizada para seu alvo definido. `main`, runtime, memória e identidade são alvos distintos.

### HOLD

Informação, fonte, autoridade ou evidência insuficiente. Pode retornar ao fluxo.

### REJECTED

Hipótese ou solução recusada. Evidência permanece.

### SUPERSEDED

Outro pacote substituiu o objetivo ou desenho; histórico preservado.

### ROLLED_BACK

Efeito técnico revertido. Não apaga fatos, mensagens enviadas ou impacto já ocorrido.

### ESCAPED_DEFECT

Falha evitável detectada depois da promoção. Exige correção técnica e metodológica.

## 3. Transições proibidas

- `IDEA → EXECUTING`;
- `FRAMED → PROMOTED`;
- `SPECIFIED → EXECUTING` sem revisão/Ready;
- `READY → PROMOTED` sem execução e verificação;
- `VERIFYING → PROMOTED` com receipt ausente;
- `REJECTED → PROMOTED` sem novo review;
- `ESCAPED_DEFECT → PROMOTED` apenas com patch;
- qualquer estado → `PROMOTED` porque houve commit na `main`.

## 4. Invalidação de Ready

Ready perde validade quando:

- baseline muda nos arquivos afetados;
- fonte canônica muda;
- requisito muda;
- risco sobe;
- dependência troca de versão;
- teste deixa de estar disponível;
- política ou autoridade muda;
- surge dado sensível;
- execução precisa ampliar escopo.

## 5. Tempo contabilizado

```text
Planning time:
  IDEA → READY, incluindo pesquisa, revisão, spike descartável e teste desenhado.

Execution time:
  primeira alteração durável → diff concluído.

Assurance time:
  testes, revisão, receipt e promoção.

Correction time:
  trabalho pós-promoção para corrigir obrigação já aplicável.
```

O objetivo é reduzir execution e correction, não esconder assurance dentro de execução.

## 6. Pacotes aninhados

Um estágio pode possuir vários work packages. Cada pacote precisa ser pequeno; o estágio preserva visão sistêmica e critérios agregados.

Exemplo G2:

```text
WP-G2-001 Context Envelope
WP-G2-002 Claim Map
WP-G2-003 Position Formation
WP-G2-004 Candidate Response
WP-G2-005 Send Authority Boundary
WP-G2-006 Kernel Replay Harness
```

Nenhum pacote ganha autoridade além do estágio.

## 7. Registro mínimo de transição

```yaml
work_package:
from:
to:
at:
actor:
reason:
baseline_commit:
evidence_refs: []
open_risks: []
```

## 8. Regra de execução curta

A execução deve ser pequena o suficiente para que:

- o diff possa ser revisado integralmente;
- uma falha tenha blast radius limitado;
- rollback seja compreensível;
- o receipt corresponda ao pacote;
- o executor não precise manter decisões invisíveis na cabeça.
