# Padrão de Plano Executável

- Estado: `STANDARD_CANDIDATE`
- Aplica-se a: work packages D1–D4
- Objetivo: permitir que a execução seja curta, determinística e auditável

## 1. Definição

Um plano executável é um artefato suficientemente preciso para que um executor competente consiga realizar a mudança sem inventar requisitos, arquitetura, interfaces, critérios ou política durante a edição.

Ele não precisa prever cada caractere do diff, mas precisa fechar todas as decisões que podem alterar materialmente semântica, autoridade, dados, interfaces, comportamento, segurança, privacidade, continuidade, teste ou promoção.

## 2. Identificadores obrigatórios

```text
WP-*    work package
REQ-*   requisito
INV-*   invariante
ASM-*   suposição
Q-*     pergunta aberta
DEC-*   decisão
ADR-*   decisão arquitetural durável
RISK-*  risco
CTRL-*  controle
TST-*   teste
EVD-*   evidência/receipt
EXC-*   exceção
```

## 3. Cabeçalho do work package

```yaml
id:
title:
status: IDEA | FRAMED | SPECIFIED | REVIEWED | READY | EXECUTING | VERIFYING | PROMOTION_CANDIDATE | PROMOTED | HOLD | REJECTED | SUPERSEDED
change_class: D0 | D1 | D2 | D3 | D4
owner:
author:
reviewers: []
approvers: []
created_at:
updated_at:
baseline_commit:
target_branch: main
promotion_target:
runtime_effect: none | shadow | canary | active
memory_effect: none | proposal | candidate | canonical
privacy_class:
```

## 4. Seções obrigatórias

### 4.1 Mandato local

Explica por que o pacote existe, qual decisão superior o autoriza e o que está fora de alcance.

### 4.2 Estado atual comprovado

Inclui commit/base exatos, arquivos/interfaces atuais, receipts utilizados, limitações da inspeção e divergências. “Segundo a memória” não comprova estado atual.

### 4.3 Resultado observável

Permite distinguir sucesso, falha, degradação, não execução e resultado parcial.

### 4.4 Não objetivos

Evita melhorias laterais e “já que estamos aqui”.

### 4.5 Fontes e autoridade

| Fonte | Papel | Autoridade | Frescor | Conflitos |
| --- | --- | --- | --- | --- |

Separar documento fundador, estado operacional, memória, inferência, decisão e preferência.

### 4.6 Requisitos

Cada `REQ-*` contém statement, source, rationale, priority, acceptance, tests e risks.

### 4.7 Invariantes

Cada `INV-*` define algo que permanece verdadeiro no fluxo feliz, falha, reinício, concorrência, rollback, migração e modo degradado.

### 4.8 Suposições e perguntas

Suposição não validada recebe impacto, método de validação, responsável, prazo e estado. Pergunta de alto impacto bloqueia `READY`.

### 4.9 Opções e decisões

Registrar alternativas reais, tradeoffs, escolha, razão, consequências, invalidadores, reversibilidade e classe.

### 4.10 Arquitetura e fronteiras

Descrever componentes, autoridade, fluxo de dados, contratos, estados, confiança, privacidade, falhas, dependências e limites de cada órgão.

### 4.11 Contratos e schemas

Interfaces declaram versão, campos, tipos, limites, erros, idempotência, expiração, autorização, compatibilidade e exemplos negativos.

### 4.12 Threat model e pre-mortem

Cobrir ausência de contexto, stale state, prompt injection, replay, autoridade excessiva, vazamento, split brain, self-approval, fallback, recuperação destrutiva e overclaim.

### 4.13 Plano de testes antes da execução

| TST | REQ/INV | Tipo | Entrada | Resultado | Evidência |
| --- | --- | --- | --- | --- | --- |

Tipos mínimos: positivo, negativo, boundary, falha/degradação, segurança/privacidade, regressão, adversarial e restore/rollback quando aplicável.

### 4.14 Plano de mudança por arquivo

```yaml
path:
action: create | update | delete | move
purpose:
requirements: []
expected_symbols: []
forbidden_scope: []
validation: []
rollback:
```

### 4.15 Sequência transacional

Preflight, preservação, mudanças na ordem, validações intermediárias, stop conditions, validação final, receipt e promoção.

### 4.16 Observabilidade e evidência

Definir logs necessários, dados proibidos, prova de execução/não execução, onde guardar receipts e sua validade.

### 4.17 Rollback e recuperação

Considerar dados, schema, filas, estado externo, memória, contratos, mensagens, caches e artefatos derivados — não apenas Git.

### 4.18 Stop conditions

Listar condições que obrigam pausa e retorno ao planejamento.

### 4.19 Critério de Ready

Referenciar `docs/roadmap/DEFINITION-OF-READY.md` e anexar o registro.

### 4.20 Critério de promoção

Separar implementação, verificação, revisão, risco aceito e promoção.

## 5. Plano por risco, não por volume

Uma linha pode ser D3; centenas de linhas podem ser D1 isolado. Profundidade deriva da consequência e autoridade.

## 6. Mudança do plano durante execução

Mudança material exige parar, registrar, reclassificar, atualizar requisitos/testes, revisar e emitir novo Ready Record.

## 7. Plano executável não é plano infalível

O objetivo é tornar incerteza visível e pequena, não fabricar certeza. Limitações conhecidas permanecem registradas.
