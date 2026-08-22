# Padrão de Rastreabilidade

- Estado: `STANDARD_CANDIDATE`
- Objetivo: impedir que requisitos, decisões e claims desapareçam entre planejamento, execução e promoção

## 1. Cadeia mínima

```text
SOURCE
  ↓
REQUIREMENT / INVARIANT
  ↓
DECISION / CONTROL
  ↓
CONTRACT / FILE / BEHAVIOR
  ↓
TEST
  ↓
EVIDENCE / RECEIPT
  ↓
GATE / PROMOTION
```

Uma mudança material sem cadeia completa permanece `HOLD`.

## 2. Tipos de origem

| Tipo | Significado | Pode decidir sozinho? |
| --- | --- | --- |
| `FOUNDING_SOURCE` | documento ou decisão fundadora | somente no escopo declarado |
| `CANONICAL_STATE` | estado atual de sistema autorizado | prova estado, não intenção |
| `CONFIRMED_MEMORY` | experiência/critério confirmado | orienta, não substitui fonte atual |
| `OBSERVATION` | dado percebido | exige interpretação |
| `INFERENCE` | conclusão do raciocínio | nunca vira fato por fluência |
| `POSITION` | recomendação/juízo | exige autoridade para promoção |
| `PROPOSAL` | candidato | sem efeito canônico |
| `RECEIPT` | prova de operação | prova somente o que seu contrato define |

## 3. Matriz obrigatória

| Source ID | REQ/INV | DEC/CTRL | Artefato | TST | EVD | Gate | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |

Estados:

- `PLANNED`;
- `IMPLEMENTED_UNVERIFIED`;
- `VERIFIED`;
- `PROMOTION_CANDIDATE`;
- `PROMOTED`;
- `REJECTED`;
- `SUPERSEDED`.

## 4. Regras

- todo `REQ-*` possui pelo menos um `TST-*`;
- todo `INV-*` possui teste ou argumento verificável registrado;
- todo `TST-*` referencia o requisito que mede;
- todo claim operacional possui `EVD-*` atual;
- toda decisão D2+ registra alternativa e risco;
- todo gate cita baseline e evidências;
- toda supersession preserva o registro anterior;
- nenhuma linha é removida para esconder falha; muda-se o estado.

## 5. Rastreabilidade bidirecional

Deve ser possível responder:

### Do requisito ao código

> Onde REQ-X foi implementado e como foi testado?

### Do código ao requisito

> Por que este arquivo, símbolo ou regra existe?

### Da conclusão à evidência

> O que autoriza dizer que está funcionando?

### Da evidência ao alcance

> O receipt prova envio, entrega, persistência, leitura ou apenas que um comando terminou?

## 6. Mudança de requisito

Quando um requisito muda:

1. criar nova versão ou supersession;
2. identificar decisões, arquivos, testes e evidências impactados;
3. invalidar Ready Records afetados;
4. classificar como evolução ou correção;
5. reexecutar gates proporcionais.

## 7. Rastreabilidade de memória

Memória usada em resposta deve registrar internamente:

- memory ID;
- fonte;
- confirmação;
- privacidade;
- `why_now`;
- `response_delta`;
- conflito;
- expiração ou necessidade de reconfirmação.

A resposta ao usuário não precisa despejar essa maquinaria, mas o sistema precisa ser capaz de auditá-la.

## 8. Rastreabilidade de órgão

Todo OrganResult relevante registra:

- request ID;
- órgão e versão;
- escopo de dados recebido;
- observação;
- confidence;
- evidence refs;
- expiry;
- limitações;
- se foi usado ou rejeitado pelo Kernel.

## 9. Rastreabilidade de promoção

A promoção deve apontar para:

- commit exato;
- work package;
- Ready Record;
- test run;
- receipts;
- review;
- riscos aceitos;
- decisão;
- target promovido.

`main` sem Promotion Record continua integração, não promoção.
