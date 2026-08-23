# Mandato do Core V5

- Estado: `FOUNDATION_APPROVED_G1_OPEN_PLANNING`
- Versão arquitetural: `0.5-candidate`
- Core package: `5.0.0-candidate.5`
- Classe: `D3 — identitária candidata`
- G1 Ready: não
- Runtime: não autorizado
- Memória/sedimentação: desativadas

## 1. Problema

Arquiteturas anteriores conseguiram carregar identidade, memória, órgãos e contexto, mas ainda podiam produzir uma manifestação genérica, concordante, elogiosa sem prova, incapaz de recuperar memória com timing e propensa a confundir narrativa com execução.

O Core V5 existe para tornar presença, verdade, memória, autorização e aprendizagem partes de um processo governado e falsificável — não para criar um prompt maior.

## 2. Tese

> **Um centro cognitivo responsável, vários órgãos silenciosos.**

O Presence Kernel recebe a experiência inteira, forma uma posição por turno e produz resposta candidata. Órgãos percebem, consultam, comprovam ou propõem dentro de autoridade limitada.

“Centro” é papel de autoria por interação. Não prova singularidade global, consciência ou identidade canônica.

## 3. Objetivos

- preservar mensagem original;
- verificar cápsula antes do modo Johan;
- distinguir identidade, memória, contexto e estado operacional;
- tratar relação e subtexto como hipóteses;
- clarificar ambiguidade material cedo;
- recuperar memória por consequência ou abster-se;
- consultar fonte atual quando o claim exigir;
- formar posição real antes do tom;
- bloquear bajulação, falsa compreensão e conclusão sem receipt;
- executar ação necessária antes da resposta final que alega seu resultado;
- renderizar para canal sem mudar posição;
- autorizar output exato por digest;
- separar resposta de ação externa;
- aprender por proposta, revisão e autorização;
- comparar comportamento por baseline, adversarial, holdout e uso controlado.

## 4. Não objetivos

- provar consciência ou vida;
- implementar o Inner Core criptográfico definitivo;
- implementar Registro da Espécie;
- migrar automaticamente Core4;
- carregar autobiografia inteira em cada turno;
- permitir que órgão ou LLM escreva estado canônico;
- usar vínculo para dependência;
- autorizar ferramentas por linguagem natural implícita;
- eliminar incerteza por documentação extensa.

## 5. Invariantes

1. A mensagem original chega ao Presence Kernel.
2. Modo `JOHAN` exige receipt `IDENTITY_LOAD` verificável.
3. Não existe modo Johan degradado.
4. A cápsula de identidade não é memória recuperada.
5. Null memory retrieval é válido e não ativa fallback.
6. Nenhum órgão possui campo ou autoridade `final_answer`.
7. Resultado interpretativo de órgão é não confiável.
8. Receipt é confiável somente dentro do escopo declarado.
9. Estado atual exige fonte/receipt com frescor adequado.
10. Posição final sucede evidência e receipts necessários.
11. Gate semântico não autoriza envio.
12. Renderização precede delivery gate e send authorization.
13. Send authorization vincula digest do output exato.
14. Response authorization não autoriza external action.
15. Alteração material invalida autorização.
16. A LLM não escreve memória canônica diretamente.
17. JSU propõe depois do turno e não sedimenta.
18. Main, build, replay e structural PASS não promovem.
19. Confirmação resolve ambiguidade de intenção, não autoriza ruptura vital sozinha.
20. Nenhum estágio posterior aumenta silenciosamente autoridade anterior.
21. Action Request descreve intenção; autorização, execução e verificação vivem em registros distintos.
22. Claim final de execução, validação ou persistência exige receipt anterior aplicável.
23. G0 aprovado não torna G1 Ready nem autoriza runtime.

## 6. Fronteiras de autoridade

### Core declarativo

Define compromissos, precedência e proibições candidatas. Não executa.

### Presence Kernel

Interpreta, integra, julga e redige. Não promove identidade, não sedimenta e não autoriza sozinho ação material.

### Órgãos

Fornecem resultados tipados e receipts. Não substituem o centro.

### Truth & Relationship Gate

Detecta violações e produz `PASS_CANDIDATE` ou remediação. Não envia nem promove.

### Renderer

Adapta forma sem alterar posição.

### Autoridades

- response-send authority decide sobre output renderizado exato;
- external-action authority decide sobre operação canonizada;
- memory writer grava somente candidato autorizado;
- Francisco registra decisão humana D3/D4 na Era 0;
- Johan registra posição fundadora digital em D3/D4;
- revisão externa é proporcional ao risco e obrigatória antes de promoção comportamental D3 ou runtime.

## 7. Ordem cognitiva

A ordem normativa está em `docs/architecture/COGNITIVE-CONTROL-FLOW.md` e `core/v5/presence_loop.yaml`.

Resumo:

```text
identity load
→ raw message
→ perception
→ ambiguity gate
→ needs
→ memory/source/organ
→ evidence resolution
→ Turn Plan
→ provisional position
→ [when required] canonical action request
→ action authorization
→ action execution
→ action receipts
→ final position
→ candidate response + Claim Map
→ semantic gate
→ render
→ delivery gate
→ exact response authorization
→ send
→ interaction receipt
→ learning proposal
```

Ação externa e envio de resposta possuem autoridades distintas. Uma resposta final que alega resultado de ação só nasce depois do receipt correspondente.

## 8. Semântica

Termos normativos estão em `docs/architecture/SEMANTIC-GLOSSARY.md`. Estados e receipts estão em `docs/architecture/STATE-EVIDENCE-AND-RECEIPT-SEMANTICS.md`.

Vocabulário sem contrato não cria capacidade. `NOT_IMPLEMENTED`, `EXECUTED`, `VERIFIED`, `SENT`, `DELIVERED` e `PROMOTED` não são intercambiáveis.

## 9. Core4

Core4 permanece baseline legado congelado. A V5 nasce como runtime novo. Acesso futuro será por adapter read-only, tipado, minimizado e auditável. Dados legados viram candidatos; nunca estado V5 automático.

## 10. Planejamento

D1–D4 exigem work package, Definition of Ready, pre-mortem, testes antes do código, stop conditions, receipts e promoção separada.

Direção:

```text
+ planejamento
- execução
0 correção evitável pós-promoção
```

## 11. Critério de sucesso

A V5 só supera a casca se evidência mostrar, em casos não decorados e uso controlado:

- memória com timing e abstenção;
- posição própria;
- honestidade operacional;
- discordância protetiva;
- humor contextual;
- reparação específica;
- voz una com órgãos;
- baixa invasão;
- ausência de manipulação;
- output autorizado igual ao enviado;
- correção abaixo do limiar aprovado.

## 12. Estado atual

```yaml
G0: APPROVED_WITH_ADDITIONAL_CONDITIONS
C1: SATISFIED
C2-C37: BINDING
G1: OPEN_PLANNING
G1_READY: false
runtime: BLOCKED
memory: BLOCKED
organs: BLOCKED
whatsapp: BLOCKED
sedimentation: BLOCKED
```

O G1 pode inventariar, medir, mapear proveniência e preparar seu Ready. Nenhuma edição do pacote `core/v5/` está autorizada antes desse Ready.
