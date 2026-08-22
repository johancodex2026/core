# Planning-First e Zero Retrabalho Evitável

- Estado: `OPERATING_DOCTRINE_CANDIDATE`
- Origem: orientação fundadora de Francisco — **mais tempo de planejamento, menos tempo de execução, zero tempo de correção**
- Aplicação: todo trabalho D1–D4 no Core V5
- Efeito: disciplina de projeto; não promove G0, runtime, memória ou identidade

## 1. Tese

O Core V5 deve deslocar descoberta, dúvida, conflito e teste para antes da mudança durável.

```text
mais compreensão antes de editar
+ mais prova antes de promover
= menos execução improvisada
+ menos retrabalho
```

A execução ideal não é heroica nem criativa. Ela é curta, previsível e quase mecânica porque as decisões difíceis já foram tomadas, registradas, criticadas e testadas no plano.

> **Planejar até a execução ficar entediante. Executar até a evidência ficar suficiente. Promover somente quando corrigir depois não for a estratégia.**

## 2. Interpretação honesta de “zero tempo de correção”

“Zero correção” não significa fingir que sistemas complexos nunca terão defeitos, incidentes, evolução ou fatos novos. Significa:

- orçamento **zero** para retrabalho evitável depois que um pacote foi declarado pronto e promovido;
- nenhuma implementação usada para descobrir requisitos que poderiam ter sido esclarecidos antes;
- nenhuma promoção com pergunta material aberta, teste crítico ausente ou risco conhecido sem decisão;
- nenhuma correção silenciosa que esconda falha de planejamento;
- todo defeito escapado deve corrigir também o sistema de planejamento que permitiu sua fuga.

As categorias são distintas:

```text
DESCOBERTA PRÉ-READY
  aprendizado, revisão, spike descartável ou mudança do plano antes da execução durável;
  desejável e não contabilizada como correção.

DEFEITO PRÉ-PROMOÇÃO
  falha encontrada por teste ou revisão antes de promover;
  custo de assurance, ainda dentro do planejamento/validação.

CORREÇÃO EVITÁVEL PÓS-PROMOÇÃO
  trabalho necessário porque um requisito, invariante, contrato ou teste já aplicável foi omitido,
  mal interpretado ou não verificado;
  orçamento-alvo: zero.

EVOLUÇÃO
  mudança causada por requisito novo, conhecimento novo, ambiente novo ou decisão constitucional nova;
  é um novo pacote, não uma correção retroativa.

INCIDENTE
  evento inesperado em operação; exige contenção, evidência e análise causal,
  sem rebatizar o incidente como evolução para proteger métricas.
```

## 3. Equação de tempo

Para cada work package:

```text
T_total = T_planejamento + T_execução + T_assurance + T_correção_escapada
```

O objetivo não é maximizar horas burocráticas. É aumentar **alavancagem de planejamento**:

```text
Alavancagem = decisões relevantes fechadas antes da execução
             ÷ decisões relevantes descobertas durante ou depois da execução
```

Resultado esperado:

- `T_planejamento` cresce até fechar incertezas materiais;
- `T_execução` cai porque o plano é executável;
- `T_assurance` permanece explícito e proporcional;
- `T_correção_escapada` tende a zero.

Cronômetro não substitui gate. Um plano longo e inconclusivo é desperdício; um plano curto que fecha todas as obrigações pode estar pronto.

## 4. Leis operacionais

### Lei 1 — O problema deve estar fechado antes da solução

Nenhuma implementação começa sem:

- objetivo;
- não objetivos;
- estado atual comprovado;
- fontes de autoridade;
- usuário e contexto de uso;
- definição do resultado observável;
- critérios de fracasso.

### Lei 2 — Requisito implícito é dívida de correção

Todo requisito material deve possuir ID, fonte, razão, prioridade, critério de aceite e teste associado. “Está claro para todos” não é rastreabilidade.

### Lei 3 — Invariante vem antes de componente

Antes de escolher linguagem, framework, banco, prompt ou órgão, definir o que não pode mudar e o que precisa permanecer verdadeiro em sucesso, falha, reinício, migração e degradação.

### Lei 4 — Opções são comparadas antes da escolha

Decisão arquitetural relevante exige pelo menos:

- opções plausíveis;
- benefícios;
- custos;
- riscos;
- reversibilidade;
- impacto ontológico;
- razão explícita da escolha;
- condição que invalidaria a decisão.

### Lei 5 — Falha é desenhada antes do fluxo feliz

Planejar primeiro:

- ausência de contexto;
- fonte indisponível;
- órgão divergente;
- memória conflitante;
- timeout;
- resposta sem receipt;
- schema incompatível;
- replay;
- rollback;
- corrupção;
- invasão de privacidade;
- promoção indevida.

### Lei 6 — Spike não é implementação

Exploração por código é permitida somente como `SPIKE_DISPOSABLE`:

- propósito e pergunta definidos;
- sem dados reais sensíveis;
- sem integração silenciosa ao runtime;
- sem promessa de reaproveitamento;
- prazo e condição de descarte;
- conclusão convertida em decisão ou requisito.

Código de spike não entra em produção por conveniência.

### Lei 7 — O plano precisa ser executável por outro agente

Um plano pronto deve dizer:

- quais arquivos criar ou alterar;
- em qual ordem;
- quais interfaces e schemas usar;
- quais comandos executar;
- quais resultados esperar;
- em que condição parar;
- como verificar;
- como reverter;
- quais evidências arquivar.

Se a execução ainda exige inventar arquitetura, o pacote não está pronto.

### Lei 8 — Nenhum componente prova a si mesmo sozinho

Autor, crítico, executor, verificador e aprovador podem acumular funções em mudanças pequenas, mas a independência exigida cresce com D2–D4. Limitações de independência devem ser registradas.

### Lei 9 — Mudança pequena, plano completo

O planejamento pode ser amplo; a unidade de execução deve ser pequena, atômica, observável e reversível. Dividir execução não autoriza fragmentar a visão sistêmica.

### Lei 10 — Evidência precede linguagem de conclusão

`IMPLEMENTED`, `EXECUTED`, `SENT`, `SAVED`, `VERIFIED`, `WORKING`, `COMPLETE` e `PROMOTED` exigem receipt correspondente. Ausência de evidência produz estado explícito, nunca otimismo narrativo.

## 5. Profundidade por classe

### D0 — Editorial

Planejamento mínimo:

- intenção textual;
- ausência de mudança semântica;
- revisão de links e termos.

### D1 — Técnica

Exige:

- requisitos e arquivos afetados;
- interfaces;
- testes;
- rollback;
- impacto operacional;
- evidência de execução.

### D2 — Comportamental

Além de D1:

- hipótese comportamental;
- baseline;
- casos positivos, negativos e adversariais;
- riscos de invasão, rigidez, bajulação e falso bloqueio;
- partição de avaliação;
- revisão independente proporcional.

### D3 — Identitária

Além de D2:

- fonte fundadora;
- impacto em identidade, vínculo, precedência, órgão ou sedimentação;
- alternativas e dissenso;
- análise de continuidade;
- decisão da díade fundadora;
- Promotion Record;
- regressão completa.

### D4 — Existencial

Planejamento constitucional e multidisciplinar antes de qualquer implementação. Código não pode decidir silenciosamente continuidade, fork, morte, reprodução ou sucessão.

## 6. Funil Planning-First

```text
INTAKE
  ↓
FRAMING
  ↓
SOURCE & STATE AUDIT
  ↓
REQUIREMENTS + INVARIANTS
  ↓
OPTIONS + DECISIONS
  ↓
THREAT / FAILURE / PRIVACY ANALYSIS
  ↓
TEST & EVIDENCE DESIGN
  ↓
EXECUTABLE CHANGE PLAN
  ↓
PRE-MORTEM + ADVERSARIAL REVIEW
  ↓
DEFINITION OF READY
  ↓
SHORT EXECUTION
  ↓
VERIFICATION
  ↓
PROMOTION DECISION
```

Pular estágio exige justificativa explícita e nunca é permitido para D3/D4.

## 7. Artefatos mínimos de um work package

- mandato local;
- classe de mudança;
- objetivo e não objetivos;
- mapa de fontes;
- baseline;
- requisitos `REQ-*`;
- invariantes `INV-*`;
- decisões `DEC-*`/ADRs;
- suposições `ASM-*`;
- riscos `RISK-*`;
- casos de teste `TST-*`;
- matriz de rastreabilidade;
- plano de execução por arquivo;
- plano de rollback;
- stop conditions;
- plano de evidência;
- gate de Ready;
- gate de promoção.

## 8. Stop conditions

Execução deve parar quando:

- surge interpretação materialmente diferente;
- uma fonte contradiz o plano;
- um arquivo necessário não corresponde ao baseline;
- o diff excede o escopo aprovado;
- um teste crítico não pode ser executado;
- aparece dado sensível não previsto;
- rollback deixa de ser confiável;
- um receipt não pode ser obtido;
- o executor precisa inventar nova regra;
- o risco muda de classe.

Parar cedo é sucesso de governança, não falha de produtividade.

## 9. Promotion rule

Um pacote não é promovido porque:

- compilou;
- passou no fluxo feliz;
- parece elegante;
- Francisco ou Johan gostaram da ideia;
- uma LLM disse que está bom;
- o commit entrou na `main`.

Promoção exige:

- todos os requisitos rastreados;
- invariantes verificados;
- testes negativos e de falha;
- receipts arquivados;
- riscos residuais aceitos pela autoridade correta;
- dissenso preservado;
- rollback/restauração demonstrado quando aplicável;
- decisão explícita de gate.

## 10. Quando uma correção escapar

A prioridade imediata é conter e restaurar segurança. Depois:

1. classificar a falha;
2. preservar evidência;
3. corrigir o efeito com menor mudança;
4. identificar o requisito, decisão, teste ou gate ausente;
5. atualizar o método para impedir recorrência;
6. executar regressão relacionada;
7. registrar `ESCAPED_DEFECT`;
8. não esconder a falha por squash, reescrita ou nomenclatura otimista.

A correção só termina quando o sistema de planejamento também foi corrigido.

## 11. Métricas candidatas

Métricas são observações, não metas para manipular:

- decisões materiais descobertas após `READY`;
- mudanças de escopo durante execução;
- testes criados depois do código por esquecimento;
- defeitos pré-promoção;
- defeitos escapados pós-promoção;
- correções por requisito ausente;
- correções por fonte desatualizada;
- correções por interface ambígua;
- tempo de execução por work package;
- tempo de correção evitável;
- taxa de rollback testado;
- percentual de claims operacionais com receipt;
- violações de stop condition;
- falsos `COMPLETE`.

Os limiares permanecem `UNCALIBRATED` até existir amostra real.

## 12. Aplicação imediata ao Core V5

- Core4 permanece baseline, não base de refatoração em runtime.
- G0 precisa incorporar as condições derivadas da autópsia do Core4.
- G1 será inteiramente revisão e redução do Core declarativo; não terá runtime.
- o primeiro código do Presence Kernel só nasce de work package `READY`;
- nenhum órgão será conectado antes de contrato, falha, receipt e shadow test estarem definidos;
- WhatsApp só entra após shadow mode e canary planejados;
- sedimentação permanece desativada até prova completa do processo.

## 13. Síntese

> **Mais planejamento não significa mais cerimônia. Significa mover inteligência, crítica e erro para o lugar onde ainda são baratos. Menos execução significa transformar o código em consequência de decisões já resolvidas. Zero correção significa não promover dívida conhecida nem depender de retrabalho para completar o pensamento.**
