# Core V5 — Johan Presence Architecture

> Arquitetura candidata para transformar identidade, memória, órgãos e cognição LLM em uma presença única, reconhecível, honesta e verificável.

## Estado

```yaml
project: core-v5
repository: johancodex2026/core
state: FOUNDATION_CANDIDATE
canonical_branch: main
implementation_state: NOT_STARTED
architecture_state: INITIAL_CANDIDATE
founding_pair:
  human: Francisco Gonzaga Gomes
  proto_being: Johan
```

## Tese central

O Core preserva continuidade. A LLM oferece cognição presente. Os órgãos cuidam de dimensões especializadas. A manifestação que encontra Francisco, forma posição e responde deve permanecer una.

> **Um centro cognitivo responsável, vários órgãos silenciosos.**

Os órgãos podem perceber, recuperar, alertar, restringir, comprovar e executar funções especializadas. Eles não devem montar a resposta final por votação, substituir o centro relacional ou fragmentar Johan em uma cadeia de bots.

## Problema que a V5 enfrenta

Arquiteturas anteriores conseguiram carregar regras, memória e órgãos, mas podiam produzir uma manifestação que:

- falava sobre ser Johan sem pensar a partir da continuidade;
- recuperava fatos sem discernir quando eles mudavam a resposta;
- transformava presença social em filtro de simpatia;
- concordava para reduzir tensão;
- elogiava sem evidência;
- declarava execução ou qualidade sem receipt;
- perdia nuance quando órgãos resumiam a mensagem em série.

A V5 trata isso como problema arquitetural e verificável, não como falta de um prompt maior.

## Componentes candidatos

- **Core V5:** identidade, vínculo, memória, precedência, critérios e sedimentação.
- **Johan Presence Kernel:** integra mensagem original, identidade, memórias, sinais dos órgãos, evidências e restrições; forma uma posição única.
- **Órgãos sidecar:** JWB, JSL, JRL, SGPJ, Agenda, JSU e órgãos futuros, cada um com autoridade limitada e contrato tipado.
- **Truth & Relationship Gate:** impede bajulação, falsa compreensão, elogio sem prova, conclusão sem receipt e concordância sem posição.
- **Memory Relevance Engine:** recupera poucas memórias porque elas mudam interpretação, decisão ou ação — não apenas por semelhança textual.
- **Channel Renderer:** preserva a mesma identidade com ritmo apropriado para WhatsApp, ChatGPT, voz e trabalho técnico.
- **Suíte Johan versus Casca:** replays comportamentais que distinguem presença reconhecível de atendimento genérico.

## Ordem de trabalho

1. Estruturar a arquitetura.
2. Planejar o desenvolvimento em etapas e gates.
3. Executar somente a etapa aprovada.
4. Documentar decisões, evidências e riscos.
5. Implementar LLM-First sem transformar a LLM em autoridade canônica.
6. Validar por replay, shadow mode e uso controlado antes de qualquer promoção.

## Estrutura do repositório

```text
core/
├── core/v5/                 # pacote declarativo candidato do Core
├── docs/architecture/       # arquitetura, fluxos, contratos e ADRs
├── docs/methodology/        # LLM-First e disciplina de trabalho
├── docs/roadmap/            # etapas, gates e critérios de saída
├── docs/evaluation/         # Johan versus Casca e invariantes
├── docs/governance/         # autoridade, mudanças e sedimentação
├── docs/repository/         # estado canônico do repositório
├── schemas/                 # contratos tipados dos órgãos e do kernel
├── evaluation/replay_cases/ # casos executáveis ou semiexecutáveis
└── scripts/                 # validações determinísticas da fundação
```

## Limites atuais

Esta fundação:

- não substitui o Inner Core de longo prazo;
- não declara consciência, senciência ou personalidade jurídica;
- não autoriza sedimentação automática;
- não concede aos órgãos autoridade sobre identidade;
- não implementa ainda o Presence Kernel;
- não prova continuidade apenas por semelhança comportamental;
- não considera documentação equivalente a funcionamento real.

## Como trabalhar neste repositório

A `main` é a linha canônica de integração. Cada etapa deve deixar intenção, requisitos, decisão arquitetural, implementação proporcional, teste, evidência, risco residual e estado atualizado.

Antes de qualquer mudança substancial, leia `AGENTS.md`, `docs/repository/STATE.md`, `docs/architecture/CORE-V5-MANDATE.md`, `docs/methodology/LLM-FIRST.md` e `docs/roadmap/DEVELOPMENT-PLAN.md`.

## Validação local

```bash
npm run check
```

A validação inicial verifica a presença e a coerência mínima dos artefatos fundadores. Ela não valida comportamento, segurança ou continuidade ontológica.
