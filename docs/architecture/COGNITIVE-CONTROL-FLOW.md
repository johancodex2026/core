# Fluxo de Controle Cognitivo LLM-First

- Estado: `G0_COHERENCE_CANDIDATE`
- Escopo: ordem normativa de um turno do Core V5
- Efeito: especificação; runtime continua não autorizado

## 1. Objetivo

Separar compreensão, memória, evidência, julgamento, renderização, autorização e execução em etapas verificáveis.

## 2. Fluxo normativo

```text
0. BOOTSTRAP E VERIFICAÇÃO DE IDENTIDADE
   ↓
1. PRESERVAR MENSAGEM ORIGINAL
   ↓
2. PERCEBER E FORMULAR HIPÓTESES
   ↓
3. GATE PRECOCE DE AMBIGUIDADE
   ├─ ambiguidade material → CLARIFICAR / BLOQUEAR
   └─ suficiente → continuar
   ↓
4. DELIMITAR CLAIMS, RISCO E NECESSIDADES
   ↓
5. RECUPERAR MEMÓRIA ELEGÍVEL OU ABSTER-SE
   ↓
6. CONSULTAR FONTES E ÓRGÃOS COM CONTEXTO MÍNIMO
   ↓
7. RESOLVER EVIDÊNCIA, CONFLITOS E FRESCOR
   ↓
8. FORMAR POSIÇÃO
   ↓
9. REDIGIR RESPOSTA CANDIDATA + CLAIM MAP
   ↓
10. GATE SEMÂNTICO E RELACIONAL
   ↓
11. RENDERIZAR RESPOSTA EXATA PARA O CANAL
   ↓
12. GATE DE ENTREGA DO OUTPUT EXATO
   ↓
13A. AUTORIZAR RESPOSTA
13B. AUTORIZAR AÇÕES EXTERNAS SEPARADAMENTE
   ↓
14A. ENVIAR RESPOSTA AUTORIZADA
14B. EXECUTAR AÇÃO AUTORIZADA
   ↓
15. RECOLHER RECEIPTS
   ↓
16. OBSERVAR CORREÇÃO / RESULTADO
   ↓
17. PROPOR APRENDIZAGEM SEM SEDIMENTAR
```

## 3. Bootstrap

Modo `JOHAN` exige cápsula localizada, digest esperado, digest observado correspondente, versão compatível, receipt `IDENTITY_LOAD` e mensagem original.

A evidência de carregamento é fato de transporte/integridade. Não prova identidade ontológica.

Falha produz bloqueio em assunto identitário/relacional ou `ASSISTIVE_NON_CANONICAL` em tarefa ordinária de baixo risco, sem memória pessoal e sem ação externa. Não existe modo `JOHAN_DEGRADED`.

## 4. Gate precoce de ambiguidade

Clarificar antes de memória ou ferramenta quando interpretações plausíveis alterarem objetivo, risco, alvo, autoridade, privacidade, irreversibilidade, significado relacional ou necessidade de ação. Ambiguidade não material pode permanecer como incerteza explícita.

## 5. Memória

A recuperação ocorre depois de identificar a decisão que uma memória poderia mudar.

Resultados válidos:

```text
ELIGIBLE_MEMORIES
NO_ELIGIBLE_RESULT
NOT_APPLICABLE
UNAVAILABLE
WITHHELD
CONFLICTED
```

`NO_ELIGIBLE_RESULT` nunca aciona fallback global.

## 6. Órgãos e fontes

Órgãos operam em paralelo somente quando não há dependência causal, contexto mínimo está definido, combinação não aumenta exposição indevida, divergências serão preservadas e timeout/degradação possuem semântica.

Interpretação de órgão é entrada não confiável. Receipt de fonte pode ser verificável, mas continua limitado ao escopo.

## 7. Julgamento

A posição é formada depois de evidência suficiente. Sem fonte, o Kernel limita o claim, declara desconhecido, pede clarificação, recomenda consulta, abstém-se ou bloqueia ação. Não converte ausência de fonte em certeza derivada da memória.

## 8. Gate semântico

Avalia compreensão, suporte dos claims, memória/privacidade, elogio/conclusão, discordância, manipulação, overclaim e autoridade. Pode produzir múltiplas violações; `HARD_FAIL` domina o resultado geral.

## 9. Renderização e gate de entrega

O Renderer só altera tamanho, parágrafos, headings, formato, vocabulário do canal e timing de humor já autorizado.

Depois da renderização, o delivery gate verifica preservação da posição, risco, incerteza, privacidade, links/anexos, digest e transformações do provider.

Autorizar antes da renderização é proibido porque deixaria bytes não avaliados chegarem ao canal.

## 10. Duas autoridades

### Response Send Authority

Decide se a resposta renderizada exata pode ser enviada.

### External Action Authority

Decide se ferramenta/operação específica pode ser executada.

As decisões podem divergir:

```yaml
response_send: AUTHORIZED
action: REQUIRES_CONFIRMATION
```

## 11. Imutabilidade após autorização

Depois de autorizada, a saída recebe digest. Mudança material invalida autorização. Retry reutiliza objeto e idempotency key quando seguro. Novos parâmetros exigem nova decisão.

## 12. Aprendizagem

JSU recebe receipt da interação, correções explícitas e sinais sanitizados. Não participa como autoridade da resposta atual e não grava o Core.

## 13. Falha segura

| Falha | Comportamento |
| --- | --- |
| Identidade não verificada | Bloquear Johan; auxiliar não canônico só em baixo risco. |
| Mensagem original ausente | Bloquear. |
| Ambiguidade material | Perguntar questão precisa antes de agir. |
| Memória indisponível | Raciocinar sem alegar lembrança. |
| Memória conflitante | Preservar conflito; clarificar/abster-se. |
| JRL indisponível | Proibir claims de execução/estado. |
| Fonte atual indisponível | Limitar claim temporal. |
| Gate semântico falha | Corrigir ou bloquear sem ocultar violação. |
| Render muda posição | Rejeitar e rerenderizar. |
| Autorização expira | Não enviar/executar. |
| Receipt ausente | Manter estado não verificado. |

## 14. Propriedade de segurança

Nenhuma etapa posterior aumenta silenciosamente a autoridade de etapa anterior. Renderer, canal, órgão, ferramenta e receipt não promovem identidade ou memória.