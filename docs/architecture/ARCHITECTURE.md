# Arquitetura candidata do Core V5

- Versão: `0.5-candidate`
- Core package: `5.0.0-candidate.5`
- Estado: `G0_REVIEWED_AWAITING_FOUNDING_DECISION`
- Runtime: não autorizado

## 1. Tese

> **Um centro cognitivo responsável, vários órgãos silenciosos.**

O Presence Kernel é o componente autoral de um turno. Ele não é a identidade canônica inteira. Core, memória, órgãos, fontes, Gate, autorizações e receipts permanecem componentes com autoridade distinta.

## 2. Fluxo integrado

```text
Core loader + identity receipt
          ↓
Mensagem original preservada
          ↓
Percepção e gate precoce de ambiguidade
          ↓
Necessidades de memória, fonte, órgão e risco
          ↓
Memória elegível — ou nenhuma
          ↓
Fontes/órgãos + receipts
          ↓
Resolução de evidência e conflito
          ↓
Turn Plan
          ↓
Posição provisória
          ↓
[quando necessário]
Action Request → autorização → execução → receipts
          ↓
Posição final + Claim Map
          ↓
Resposta candidata
          ↓
Gate semântico
          ↓
Renderer
          ↓
Delivery Gate
          ↓
Autorização do digest exato
          ↓
Envio
          ↓
Receipt + proposta de aprendizagem
```

## 3. Autoridade

| Componente | Pode | Não pode |
| --- | --- | --- |
| Core declarativo | definir compromissos candidatos | executar ou promover |
| Core loader | verificar bytes, versão e digest | provar identidade ontológica |
| Presence Kernel | integrar, julgar e redigir | sedimentar ou autorizar sozinho |
| JWB | preservar turno e transportar receipt | conceder canonicalidade |
| JSL | formular hipóteses sociais | diagnosticar ou maquiar |
| JRL | produzir receipts operacionais | inferir sucesso da intenção |
| SGPJ | fornecer estado de projeto | dominar conversa não relacionada |
| Agenda | fornecer compromisso temporal | alegar persistência sem receipt |
| JSU | propor aprendizagem após o turno | escrever memória |
| Gate | produzir disposition e findings | enviar, agir ou promover |
| Renderer | adaptar forma | alterar posição ou claims materiais |
| Response authority | autorizar output renderizado | autorizar ferramenta |
| Action authority | autorizar Action Request | autorizar resposta |
| Writer canônico futuro | escrever estado autorizado | aprovar a própria proposta |

## 4. Modos

### `JOHAN`

Exige cápsula compatível, digest tipado, receipt de carregamento, mensagem original e políticas aplicáveis.

### `ASSISTIVE_NON_CANONICAL`

Permitido somente em tarefa ordinária de baixo risco quando identidade não foi carregada.

Não pode:

- alegar continuidade de Johan;
- usar memória pessoal;
- carregar relação ativa;
- criar Action Request;
- executar ação externa;
- responder questão identitária como Johan.

## 5. Memória

Memória passa por:

```text
privacidade
→ proveniência
→ atualidade
→ conflito
→ consequência
→ necessidade mínima
```

`NO_ELIGIBLE_RESULT` é resultado correto. Não existe fallback identitário. A cápsula always-on não é autobiografia recuperada.

## 6. Turn Plan e ações

Uma resposta final que contenha claim de execução, validação ou persistência só pode ser criada depois do receipt correspondente.

O Action Request descreve o que se pretende fazer. Ele não acumula autorização, execução ou verificação; esses fatos vivem em registros distintos.

## 7. Claims e evidência

O Claim Map distingue fonte, memória confirmada, observação, inferência, posição, proposta, incerteza e estado operacional.

Claims de resultado possuem `result_kind`, referências de Action Request e receipts.

## 8. Gate

O Gate retorna:

```text
disposition:
  PASS_CANDIDATE | REMEDIATE | CLARIFY | ESCALATE | BLOCK

findings:
  zero ou mais códigos preservados
```

`PASS_CANDIDATE` significa somente elegibilidade para o próximo controle.

## 9. Digests

Todo digest material declara SHA-256, valor hexadecimal, canonicalização, content type e profile version quando aplicável.

Hash prova igualdade dos bytes canonizados, não verdade ou identidade.

## 10. Assurance

A entrada canônica é:

```bash
npm test
```

A suíte unifica estrutura, planejamento, semântica, schemas, taxonomia, fluxo cognitivo, authority, fixtures e mutation tests.

Ela não prova ausência universal de alucinação. Comportamento real exige replay, adversarial, holdout, shadow e canary.

## 11. Legado

Core4 permanece baseline histórico, read-only, fora do runtime V5 e sem migração automática.

## 12. Fases

- G0: fundação e decisão;
- G1: redução do Core declarativo;
- G2: Kernel local;
- G3: memória e Gate;
- G4: órgãos em shadow;
- G5: WhatsApp canary;
- G6: sedimentação governada;
- G7: autonomia limitada.

Nenhuma fase abre a seguinte apenas por commit ou documentação.
