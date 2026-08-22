# Pre-mortem e Fechamento de Suposições

## 1. Objetivo

Descobrir antes da execução como o pacote pode falhar e quais certezas são apenas suposições confortáveis.

## 2. Regra do pre-mortem

Antes de Ready, a equipe assume:

> “O pacote foi promovido e causou retrabalho, perda de confiança ou regressão. O que aconteceu?”

Cada participante produz falhas independentemente antes da consolidação para reduzir ancoragem.

## 3. Dimensões obrigatórias

### Semântica

- termo interpretado de duas formas;
- pedido confundido com autorização;
- `sent` confundido com `delivered`;
- observação confundida com canonicalidade.

### Memória

- memória irrelevante recuperada;
- memória sensível exposta;
- preferência antiga venceu instrução atual;
- duas memórias foram fundidas silenciosamente;
- fallback fingiu presença.

### Órgãos

- órgão assumiu autoria;
- resultado continha prompt injection;
- órgão estava stale;
- Kernel acessou banco interno;
- falha foi convertida em sucesso.

### Execução

- argumento aceito e ignorado;
- partial commit;
- retry duplicou efeito;
- rollback não restaurou dados externos;
- escopo cresceu durante edição.

### Relação

- Johan concordou para reduzir tensão;
- humor encobriu risco;
- cuidado virou tutela excessiva;
- continuidade foi usada como culpa;
- resposta ficou institucional e sem timing.

### Governança

- mesma LLM criou e aprovou;
- commit foi tratado como promoção;
- risco foi aceito por ator sem autoridade;
- revisão estrutural foi chamada de prova comportamental;
- dissenso foi omitido.

### Privacidade e segurança

- payload bruto persistido;
- export vazou dados;
- receipt continha segredo;
- canal errado recebeu memória;
- log tornou rotina pessoal inferível.

## 4. Registro de risco

```yaml
id: RISK-XXX
failure_story:
trigger:
impact:
detectability:
preventive_controls: []
detective_controls: []
recovery:
tests: []
residual:
owner:
```

## 5. Fechamento de suposições

Toda suposição recebe um dos estados:

- `OPEN` — bloqueia Ready se impacto material;
- `VALIDATED` — evidência associada;
- `REJECTED` — plano precisa mudar;
- `ACCEPTED_RISK` — autoridade, razão e residual registrados;
- `IRRELEVANT` — justificação explícita;
- `SUPERSEDED` — substituída sem apagar histórico.

## 6. Perguntas adversariais

- O que estamos chamando de fato sem receipt?
- Qual parte do plano depende de uma convenção não escrita?
- O que quebra quando a fonte está stale?
- O que acontece com zero memórias?
- O que acontece com memórias conflitantes?
- O que acontece quando todos os órgãos falham?
- O que acontece quando um órgão mente?
- Como o sistema prova que não executou?
- Qual efeito não pode ser revertido por Git?
- Quem se beneficia se o gate aprovar cedo?
- Qual teste passaria mesmo com a implementação errada?
- Qual correção estamos assumindo que faremos depois?

## 7. Critério de conclusão

Pre-mortem termina quando:

- falhas materiais foram transformadas em controle, teste ou risco aceito;
- nenhuma suposição de alto impacto permanece aberta;
- o plano mudou quando necessário;
- os participantes conseguem explicar por que o pacote pode estar errado;
- não há dependência de “vamos observar depois” para requisito já aplicável.

## 8. Anti-perfeccionismo

O objetivo não é remover toda incerteza. É impedir que incerteza conhecida seja escondida dentro da execução. Experimentos podem seguir quando:

- são declarados;
- possuem blast radius pequeno;
- não produzem efeito canônico;
- têm stop condition;
- não são promovidos como produto final.
