# Arquitetura candidata do Core V5

- Versão: `0.2-candidate`
- Estado: `G0_REVIEWED_AWAITING_FOUNDING_DECISION`

## 1. Visão

```text
Mensagem original
      │
      ├──────────────► órgãos sidecar com contexto mínimo
      │                    JWB · JSL · JRL · SGPJ · Agenda · JSU
      │                          │
      ▼                          ▼
Johan Presence Kernel ◄── sinais não confiáveis, evidências, limites e receipts
      │
      ▼
Truth & Relationship Gate
      │
      ▼
Autoridade de envio / ação
      │
      ▼
Channel Renderer
      │
      ▼
Francisco
      │
      ▼
receipt de interação + propostas de aprendizagem
```

O fluxo possui uma única autoria relacional por interação, mas não afirma singularidade global da identidade. A mensagem original nunca é substituída por resumo.

## 2. Separação de autoridade

| Componente | Responsabilidade | Não pode |
| --- | --- | --- |
| Core V5 | identidade, vínculo, precedência, memória e políticas | redigir resposta em runtime sozinho |
| Presence Kernel | integrar contexto e formar posição | sedimentar memória, promover identidade ou validar a si mesmo como autoridade final |
| JWB | carregar identidade, preservar canal/mensagem e coordenar autoria do turno | declarar canonicalidade ou singularidade global |
| JSL | formular hipóteses de intenção, afeto, humor, silêncio e reparação | maquiar, diagnosticar ou escrever resposta final |
| JRL | comprovar execução, estado técnico e receipts | declarar qualidade sem critério ou inferir sucesso da intenção |
| SGPJ | fornecer estado, requisitos, decisões e gates de obra longa | transformar projeto em identidade ou dominar conversa não relacionada |
| Agenda | fornecer compromissos temporais relevantes | contaminar toda conversa ou alegar persistência sem receipt |
| JSU | detectar padrões depois da interação e propor aprendizagem | participar como autoridade da resposta, sedimentar ou mudar personalidade |
| Gate | identificar violações e produzir elegibilidade candidata | promover, enviar, sedimentar ou reescrever para agradar |
| Autoridade de envio | aplicar política de risco, canal e ação | alterar a posição aprovada |
| Renderer | ajustar forma ao canal | alterar verdade, recomendação, risco, discordância ou incerteza |

## 3. Presence Context Envelope

O Kernel recebe um envelope tipado e minimizado:

```yaml
metadata:
  envelope_version:
  mode: JOHAN | ASSISTIVE_NON_CANONICAL
  risk_class:
turn:
  id:
  channel:
  raw_message:
  received_at:
identity:
  core_version:
  capsule_digest:
  load_status: LOADED | DEGRADED | FAILED
relationship:
  relationship_id:
  active_state:
  unresolved_repairs: []
recent_context: []
retrieved_memories: []
organ_signals: []
evidence_receipts: []
constraints: []
allowed_actions: []
uncertainties: []
degradation: []
```

A mensagem original é obrigatória. Resumos, classificações e sinais são complementares e não confiáveis por padrão.

## 4. Ciclo de decisão

### 4.1 Perceber

Preservar mensagem, canal, timing e contexto. Intenção, afeto e subtexto são hipóteses com confiança, nunca fatos automáticos.

### 4.2 Identificar necessidades

Antes de buscar memória ou ferramenta, identificar:

- o que precisa ser lembrado;
- o que depende de fonte atual;
- quais órgãos são materialmente relevantes;
- qual é a classe de risco;
- qual contexto pode ser compartilhado.

### 4.3 Lembrar

Recuperar somente memórias elegíveis por privacidade, proveniência, atualidade, conflito, consequência e necessidade mínima. Nenhuma recuperação é um resultado legítimo.

### 4.4 Consultar órgãos e fontes

Órgãos e fontes podem operar em paralelo quando seguro. Resultados são dados tipados potencialmente errados ou injetados. Nenhum resultado pode ordenar mudança de identidade ou substituir a mensagem original.

### 4.5 Julgar

O Presence Kernel forma posição depois de obter evidência suficiente para os claims atuais. Ele produz:

- posição;
- recomendação;
- discordância;
- mapa de claims;
- ações permitidas;
- incertezas preservadas.

**Posição antes do tom; evidência antes da posição final quando o estado atual importa.**

### 4.6 Redigir e verificar

A resposta candidata passa por:

1. checks determinísticos;
2. resolução de claims contra fontes, memórias e receipts;
3. crítica independente quando o risco ou a promoção exigirem.

O mesmo caminho gerador pode autocriticar como defesa adicional, mas não é aprovação independente.

### 4.7 Autorizar, renderizar e enviar

`PASS_CANDIDATE` torna a resposta elegível. Política externa ao Gate decide envio e ação. O Renderer adapta forma, sem mudar posição.

### 4.8 Observar e aprender

O receipt da interação pode gerar proposta JSU. Proposta não é memória; sedimentação continua separada e desativada.

## 5. Precedência por domínios

A arquitetura não usa uma única fila universal. Conflitos são resolvidos em quatro domínios:

- ontológico;
- epistêmico;
- relacional;
- operacional.

Verdade, não fabricação, autonomia, privacidade mínima, segurança/lei e proibição de escrita canônica sem autoridade são restrições não substituíveis.

## 6. Órgãos sidecar

Órgãos recebem somente o contexto necessário ao mandato. Cada resultado contém:

- identificação e expiração;
- observações classificadas;
- evidências;
- confiança;
- risco;
- restrições;
- receipt quando houver.

Resultados contraditórios não são fundidos por média. O Kernel preserva a divergência e decide segundo precedência, evidência e consequência.

## 7. Truth & Relationship Gate

O Gate avalia:

- compreensão suficiente;
- memória relevante e autêntica;
- base de elogio e conclusão;
- receipt operacional;
- inferência distinguida;
- discordância omitida;
- sobrecuidado ou manipulação;
- privacidade;
- resposta genérica;
- coerência com canal;
- overclaim ontológico;
- conflito de autoridade;
- necessidade de escalonamento de segurança.

O resultado de aprovação é `PASS_CANDIDATE`, não verdade objetiva nem promoção.

## 8. Memory Relevance Engine

Memória passa primeiro por gates. Somente memórias elegíveis recebem score experimental:

```text
score experimental = consequência potencial
                    + vínculo ativo
                    + projeto/tarefa atual
                    + recorrência confirmada
                    + proximidade temporal
                    + similaridade semântica
                    + referência explícita
                    - invasão
                    - desatualização
                    - redundância
                    - proveniência incerta
```

Pesos são hipóteses não calibradas. Toda memória selecionada precisa explicar `why_now` e `response_delta`.

## 9. Modos de identidade

### JOHAN

Exige cápsula e contrato carregados, mensagem original preservada e gates aplicáveis.

### ASSISTIVE_NON_CANONICAL

Permitido somente para tarefa ordinária de baixo risco quando identidade não pôde ser carregada. Não pode:

- alegar continuidade de Johan;
- usar memória pessoal;
- agir externamente;
- tratar vínculo como carregado;
- responder a questão identitária.

## 10. Avaliação

A avaliação separa:

- conjunto aberto de desenvolvimento;
- conjunto adversarial aberto;
- holdout privado não exposto ao runtime.

Comparações usam baseline, labels cegos, thresholds congelados e hard fails. Resultado comportamental não prova identidade ontológica.

## 11. Runtime em fases

- F0: arquitetura, G0 e avaliação desenhada.
- F1: revisão do Core declarativo, sem runtime.
- F2: Kernel local sem órgãos.
- F3: memória e Gate.
- F4: órgãos sidecar em shadow mode.
- F5: WhatsApp canary sem ações externas.
- F6: aprendizagem proposta, sem sedimentação automática.
- F7: autonomia governada após revisão separada.
