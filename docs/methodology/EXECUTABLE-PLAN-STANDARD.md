# Padrão de Plano Executável

- Estado: `STANDARD_CANDIDATE`
- Aplica-se a: work packages D1–D4
- Objetivo: permitir que a execução seja curta, determinística e auditável

## 1. Definição

Um plano executável é um artefato suficientemente preciso para que um executor competente consiga realizar a mudança sem inventar requisitos, arquitetura, interfaces, critérios ou política durante a edição.

Ele não precisa prever cada caractere do diff, mas precisa fechar todas as decisões que podem alterar materialmente:

- semântica;
- autoridade;
- dados;
- interfaces;
- comportamento;
- segurança;
- privacidade;
- continuidade;
- teste;
- promoção.

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

Nenhum item material deve existir apenas em prosa sem identificador quando precisar ser rastreado.

## 3. Cabeçalho do work package

```yaml
id:
title:
status: DRAFT | FRAMED | SPECIFIED | REVIEWED | READY | EXECUTING | VERIFYING | PROMOTION_CANDIDATE | PROMOTED | HOLD | REJECTED | SUPERSEDED
change_class: D0 | D1 | D2 | D3 | D4
owner:
author:
reviewers: []
approvers: []
created_at:
updated_at:
source_commit:
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

Inclui:

- commit/base exatos;
- arquivos e interfaces atuais;
- receipts ou consultas utilizadas;
- limitações da inspeção;
- divergências encontradas.

“Segundo a memória” não comprova estado atual.

### 4.3 Resultado observável

Descreve o comportamento final de forma verificável. Deve permitir distinguir:

- sucesso;
- falha;
- degradação;
- não execução;
- resultado parcial.

### 4.4 Não objetivos

Evita que a execução absorva melhorias laterais ou “já que estamos aqui”.

### 4.5 Fontes e autoridade

Para cada fonte:

| Fonte | Papel | Autoridade | Frescor | Conflitos |
| --- | --- | --- | --- | --- |

Separar documento fundador, estado operacional, memória, inferência, decisão e preferência.

### 4.6 Requisitos

Cada `REQ-*` contém:

```yaml
id:
statement:
source:
rationale:
priority:
acceptance:
tests: []
risks: []
```

### 4.7 Invariantes

Cada `INV-*` define algo que permanece verdadeiro em:

- fluxo feliz;
- falha;
- reinício;
- concorrência;
- rollback;
- migração;
- modo degradado.

### 4.8 Suposições e perguntas

Suposição não validada recebe:

- impacto se falsa;
- método de validação;
- responsável;
- prazo;
- estado.

Pergunta de alto impacto bloqueia `READY`. Pergunta aceita como risco residual exige autoridade e justificativa.

### 4.9 Opções e decisões

Registrar alternativas reais, não uma opção escolhida e caricaturas. Para cada decisão:

- contexto;
- opções;
- tradeoffs;
- escolha;
- razão;
- consequências;
- invalidadores;
- reversibilidade;
- classe.

### 4.10 Arquitetura e fronteiras

Descrever:

- componentes;
- autoridade;
- fluxo de dados;
- contratos;
- estados;
- confiança;
- privacidade;
- pontos de falha;
- dependências;
- limites de cada órgão.

### 4.11 Contratos e schemas

Interfaces precisam declarar:

- versão;
- campos obrigatórios;
- tipos;
- enumerações;
- limites;
- erros;
- idempotência;
- timeout quando calibrado;
- expiração;
- autenticação/autorização;
- compatibilidade;
- exemplos positivos e negativos.

### 4.12 Threat model e pre-mortem

Perguntar: “Suponha que este pacote foi promovido e falhou de forma grave. Como?”

Cobrir, quando aplicável:

- spoofing;
- tampering;
- replay;
- privilege/authority escalation;
- prompt injection;
- data leakage;
- stale state;
- split brain;
- self-approval;
- silent fallback;
- destructive recovery;
- relational manipulation;
- ontological overclaim.

### 4.13 Plano de testes antes da execução

A matriz deve existir antes do código:

| TST | REQ/INV | Tipo | Entrada | Resultado | Evidência |
| --- | --- | --- | --- | --- | --- |

Tipos mínimos:

- positivo;
- negativo;
- boundary;
- falha/degradação;
- segurança/privacidade;
- regressão;
- adversarial;
- restore/rollback quando aplicável.

### 4.14 Plano de mudança por arquivo

Para cada arquivo:

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

O plano especifica:

1. preflight;
2. preservação/backup;
3. mudanças na ordem correta;
4. validações intermediárias;
5. stop conditions;
6. validação final;
7. receipt;
8. decisão de promoção.

### 4.16 Observabilidade e evidência

Definir antes de executar:

- quais logs são necessários;
- quais dados não podem ser logados;
- como provar execução;
- como provar não execução;
- como distinguir `IMPLEMENTED` de `PROMOTED`;
- onde guardar receipts;
- validade temporal da evidência.

### 4.17 Rollback e recuperação

Rollback não é apenas “git revert”. Deve considerar:

- dados;
- schema;
- filas;
- estado externo;
- memória;
- contratos;
- mensagens enviadas;
- caches;
- artefatos derivados;
- efeitos irreversíveis.

### 4.18 Stop conditions

Listar condições objetivas que obrigam pausa e retorno ao planejamento.

### 4.19 Critério de Ready

Referenciar `docs/roadmap/DEFINITION-OF-READY.md` e anexar o registro do gate.

### 4.20 Critério de promoção

Separar:

- implementação concluída;
- verificação concluída;
- revisão concluída;
- risco aceito;
- promoção autorizada.

## 5. Plano por risco, não por volume

Uma mudança de uma linha pode ser D3. Um arquivo novo de centenas de linhas pode ser D1 isolado. Profundidade deriva de consequência e autoridade, não de tamanho do diff.

## 6. Mudança do plano durante execução

Mudança material exige:

1. parar;
2. registrar a descoberta;
3. reclassificar risco;
4. atualizar requisitos, decisões e testes;
5. revisar novamente;
6. emitir novo Ready Record.

A execução não pode absorver decisão arquitetural silenciosa.

## 7. Plano executável não é plano infalível

O objetivo é tornar incerteza visível e pequena, não fabricar certeza. Limitações conhecidas permanecem registradas e são tratadas por gate, experimento ou risco aceito.
