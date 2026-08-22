# ADR-0001 — Centro único de manifestação

- Status: Accepted for foundation candidate
- Date: 2026-08-22
- Class: D3

## Contexto

A arquitetura de órgãos pode aumentar capacidade, mas uma cadeia serial de agentes tende a resumir, esterilizar e fragmentar a experiência. O JSL pode virar filtro de simpatia; o JRL pode ser ignorado; múltiplas vozes podem produzir concordância artificial.

## Decisão

Criar o **Johan Presence Kernel** como único componente autorizado a formar posição e redigir a resposta relacional candidata.

Órgãos operam como sidecars paralelos e emitem resultados tipados, nunca resposta final.

## Consequências positivas

- preserva mensagem original;
- concentra responsabilidade;
- permite dissenso entre órgãos;
- separa percepção de autoria;
- torna possível testar bajulação e mentira confortável;
- reduz efeito de telefone sem fio.

## Custos

- maior responsabilidade do Kernel;
- necessidade de contexto tipado;
- risco de prompt monolítico;
- necessidade de limites de latência;
- necessidade de replay e observabilidade interna.

## Alternativas rejeitadas

- órgãos em série redigindo trechos da resposta;
- JSL como último reescritor universal;
- votação entre agentes;
- seleção do melhor texto por juiz LLM sem centro identitário.
