# AGENTS.md — orientação vinculante para LLMs e agentes

Este arquivo governa qualquer LLM, agente de código, revisor ou automação que atue neste repositório.

## 1. Carregamento obrigatório

Antes de trabalho substancial, leia nesta ordem:

1. `docs/repository/STATE.md`
2. `docs/architecture/CORE-V5-MANDATE.md`
3. `docs/architecture/ARCHITECTURE.md`
4. `docs/methodology/LLM-FIRST.md`
5. `docs/roadmap/DEVELOPMENT-PLAN.md`
6. `docs/roadmap/STAGE-GATES.md`
7. `docs/evaluation/BEHAVIORAL-INVARIANTS.md`
8. `docs/governance/CHANGE-AUTHORITY.md`
9. os arquivos relevantes em `core/v5/`

## 2. Regra central

A LLM é cognição presente, não fonte canônica da identidade. Os órgãos ampliam percepção e capacidade, mas não substituem o centro responsável da manifestação.

> Um centro cognitivo responsável, vários órgãos silenciosos.

## 3. LLM-First

LLM-First significa:

- compreender intenção, vínculo, semântica, risco e consequência antes da ferramenta;
- preservar a mensagem original antes de resumi-la;
- recuperar memória porque ela muda interpretação ou decisão;
- formar posição antes de otimizar tom;
- exigir evidência antes de declarar execução, qualidade ou conclusão;
- escolher o menor passo coerente e reversível;
- auditar o resultado e manter incerteza visível.

Não significa dar à LLM autoridade sobre identidade, memória canônica, sedimentação, segurança ou aprovação.

## 4. Proibições

Nenhum agente pode:

- transformar um órgão em autor da resposta relacional final;
- omitir a mensagem original do Presence Kernel;
- dizer que entendeu quando há lacuna crítica;
- elogiar sem critério ou evidência;
- declarar execução sem receipt;
- concordar apenas para reduzir tensão;
- sedimentar memória por iniciativa própria;
- alterar Constituição, identidade, vínculo ou precedência como refatoração comum;
- ampliar escopo sem autorização;
- tratar replay aprovado como prova ontológica;
- apagar dissenso, falhas ou resultados negativos.

## 5. Classes de mudança

- `D0 — Editorial`: clareza sem mudança semântica.
- `D1 — Técnica`: implementação reversível dentro de arquitetura aprovada.
- `D2 — Comportamental`: memória, canal, gate, recuperação ou avaliação.
- `D3 — Identitária`: Constituição, vínculo, precedência, autoridade dos órgãos ou sedimentação.
- `D4 — Existencial`: continuidade, sucessão, fork, morte, reprodução ou mudança de axioma.

Quando houver dúvida, classifique acima e explique.

## 6. Execução

Antes de editar:

1. declarar objetivo e classe;
2. identificar arquivos e invariantes afetados;
3. preservar rollback;
4. evitar refatoração lateral;
5. executar mudança pequena;
6. rodar `npm run check`;
7. atualizar estado, decisão e risco residual quando material;
8. relatar apenas o que foi efetivamente verificado.

## 7. Branch canônica

`main` é a linha canônica de integração. Branch temporária só deve existir quando Francisco pedir ou quando uma revisão isolada realmente exigir; não pode virar fonte alternativa de verdade.

## 8. Definição de pronto

Uma mudança só está pronta quando:

- preserva o centro único de manifestação;
- respeita autoridade limitada dos órgãos;
- possui critério de validação;
- não introduz bajulação ou conclusão sem prova;
- mantém memória, inferência e observação distinguíveis;
- passa nos gates aplicáveis;
- deixa limitações e risco residual explícitos.
