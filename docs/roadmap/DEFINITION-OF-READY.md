# Definition of Ready — Core V5

- Estado: `READY_GATE_CANDIDATE`
- Regra: nenhuma execução durável D1–D4 sem Ready Record

## 1. Significado

`READY` não significa que o trabalho parece claro. Significa que o pacote possui informação, decisões, testes e autoridade suficientes para que a execução não precise descobrir arquitetura material.

Ready é revogável. Se o baseline ou uma decisão mudar, o pacote retorna ao planejamento.

## 2. Critérios universais

### R0 — Mandato

- [ ] objetivo identificado;
- [ ] classe D0–D4;
- [ ] autoridade superior citada;
- [ ] não objetivos definidos;
- [ ] efeito sobre runtime, memória, identidade e dados explicitado.

### R1 — Baseline

- [ ] branch/commit registrados;
- [ ] estado atual consultado em fonte canônica;
- [ ] arquivos e interfaces afetados inventariados;
- [ ] limitações de inspeção registradas;
- [ ] nenhuma dependência crítica presumida.

### R2 — Semântica

- [ ] termos críticos definidos;
- [ ] estados possuem significado e transição;
- [ ] sucesso, parcial, não execução e falha distinguíveis;
- [ ] `implemented`, `verified` e `promoted` não são sinônimos.

### R3 — Requisitos e invariantes

- [ ] todos os requisitos materiais possuem IDs;
- [ ] cada requisito possui aceite e teste;
- [ ] invariantes cobrem falha e recuperação;
- [ ] nenhuma pergunta material permanece aberta;
- [ ] conflitos possuem decisão ou bloqueio.

### R4 — Arquitetura

- [ ] autoridade de cada componente delimitada;
- [ ] fluxo de dados definido;
- [ ] trust boundaries definidas;
- [ ] schemas versionados;
- [ ] nenhum órgão recebe contexto maior que o necessário;
- [ ] nenhuma escrita cruzada implícita.

### R5 — Risco

- [ ] threat model proporcional;
- [ ] pre-mortem realizado;
- [ ] privacidade classificada;
- [ ] failure modes e degradação definidos;
- [ ] riscos residuais possuem owner;
- [ ] risco aceito pela autoridade correta.

### R6 — Teste

- [ ] matriz criada antes do código;
- [ ] fluxo feliz;
- [ ] negativo;
- [ ] boundary;
- [ ] falha/degradação;
- [ ] adversarial quando D2+;
- [ ] regressão;
- [ ] rollback/restore quando aplicável;
- [ ] evidência esperada definida.

### R7 — Execução

- [ ] arquivos e ações enumerados;
- [ ] ordem transacional;
- [ ] comandos e resultados esperados;
- [ ] mudança pequena e limitada;
- [ ] dependências disponíveis;
- [ ] stop conditions objetivas;
- [ ] rollback definido.

### R8 — Revisão e independência

- [ ] autor identificado;
- [ ] crítico identificado;
- [ ] aprovador identificado;
- [ ] limitações de independência registradas;
- [ ] dissenso preservado;
- [ ] revisão externa prevista quando exigida.

### R9 — Promoção

- [ ] target de promoção definido;
- [ ] Promotion Record planejado;
- [ ] receipts necessários definidos;
- [ ] observabilidade mínima definida;
- [ ] efeito irreversível identificado;
- [ ] rollback não é tratado como cura ontológica automática.

## 3. Bloqueadores absolutos

O pacote não pode ficar `READY` se houver:

- pergunta material de alta consequência;
- source of truth desconhecida;
- alteração D3/D4 sem autoridade;
- requisito sem critério de aceite;
- teste crítico planejado para “depois”;
- interface não versionada;
- dado sensível sem política;
- ação externa sem receipt;
- rollback prometido, mas não descrito;
- fallback silencioso;
- capability não implementada aceita pela interface;
- uso de memória sem provenance;
- execução que exige acesso direto ao banco de outro órgão;
- correção pós-promoção assumida como fase normal.

## 4. Resultado do gate

```yaml
work_package:
baseline_commit:
reviewed_at:
reviewers: []
criteria:
  R0: PASS | FAIL | NA_WITH_REASON
  R1: PASS | FAIL | NA_WITH_REASON
  R2: PASS | FAIL | NA_WITH_REASON
  R3: PASS | FAIL | NA_WITH_REASON
  R4: PASS | FAIL | NA_WITH_REASON
  R5: PASS | FAIL | NA_WITH_REASON
  R6: PASS | FAIL | NA_WITH_REASON
  R7: PASS | FAIL | NA_WITH_REASON
  R8: PASS | FAIL | NA_WITH_REASON
  R9: PASS | FAIL | NA_WITH_REASON
open_questions: []
accepted_risks: []
result: READY | HOLD | REJECTED
valid_until:
invalidators: []
```

## 5. Ready por classe

- D0 pode justificar `NA_WITH_REASON` em vários domínios.
- D1 exige R0–R7 e promoção proporcional.
- D2 exige replay, adversarial e relational review.
- D3 exige díade fundadora e revisão independente proporcional.
- D4 exige rito constitucional próprio; este checklist é insuficiente sozinho.

## 6. Regra final

> **Quando o executor ainda precisa decidir o que o sistema significa, o pacote não está Ready.**
