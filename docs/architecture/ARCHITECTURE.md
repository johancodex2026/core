# Arquitetura candidata do Core V5

## 1. Visão

```text
Mensagem original
      │
      ├──────────────► órgãos sidecar em paralelo
      │                    JWB · JSL · JRL · SGPJ · Agenda · JSU
      │                          │
      ▼                          ▼
Johan Presence Kernel ◄── sinais, evidências, limites e receipts
      │
      ▼
Truth & Relationship Gate
      │
      ▼
Channel Renderer
      │
      ▼
Francisco
      │
      ▼
registro de interação + propostas de aprendizagem
```

## 2. Separação de autoridade

| Componente | Responsabilidade | Não pode |
| --- | --- | --- |
| Core V5 | identidade, vínculo, precedência, memória e políticas | redigir resposta em runtime sozinho |
| Presence Kernel | integrar contexto e formar posição | sedimentar memória ou validar a si mesmo |
| JWB | acordar, carregar, preservar canal e mensagem original | decidir conteúdo relacional |
| JSL | perceber intenção, afeto, humor, silêncio e reparação | maquiar ou escrever resposta final |
| JRL | comprovar execução, estado técnico e receipts | declarar qualidade sem critério |
| SGPJ | fornecer estado, requisitos, decisões e gates de obra longa | transformar projeto em identidade |
| Agenda | fornecer compromissos temporais relevantes | contaminar toda conversa com pendências |
| JSU | detectar padrões e propor aprendizagem | gravar Core ou mudar personalidade |
| Gate | bloquear saída incoerente e explicar motivo | reescrever a resposta para agradar |
| Renderer | ajustar forma ao canal | alterar posição, verdade ou limites |

## 3. Presence Context Envelope

O Kernel recebe um envelope tipado:

```yaml
turn:
  id:
  channel:
  raw_message:
  received_at:
identity:
  core_version:
  capsule_digest:
relationship:
  person:
  active_state:
  unresolved_repairs: []
recent_context:
  messages: []
retrieved_memories: []
organ_signals: []
evidence_receipts: []
constraints: []
allowed_actions: []
uncertainties: []
```

A mensagem original é obrigatória. Resumos são complementares.

## 4. Presence Kernel

O Kernel executa cinco funções:

1. **integração:** reconstrói o significado do momento;
2. **posição:** decide o que Johan realmente pensa e recomenda;
3. **proporção:** regula profundidade, cautela e iniciativa;
4. **autoria:** cria uma única resposta candidata;
5. **explicabilidade interna:** associa claims a memória, evidência ou inferência.

O Kernel não é um novo órgão. É o centro executivo da manifestação presente.

## 5. Órgãos sidecar

Órgãos recebem a mensagem original e somente os contextos necessários ao seu mandato. Podem operar em paralelo. Cada resultado contém observação, evidência, confiança, risco, restrições, próximo passo e expiração.

Resultados contraditórios não são fundidos por média. O Kernel preserva a divergência e decide segundo precedência e consequência.

## 6. Truth & Relationship Gate

O Gate avalia a resposta candidata contra:

- compreensão suficiente;
- base de elogio;
- base de conclusão;
- recibo operacional;
- inferência tratada como inferência;
- posição própria;
- discordância omitida;
- sobrecuidado ou infantilização;
- resposta genérica;
- coerência com vínculo e canal.

Ele pode retornar `PASS`, pedir memória/evidência/esclarecimento, exigir discordância ou bloquear saída.

## 7. Memory Relevance Engine

A recuperação usa sinais combinados:

```text
relevância = consequência potencial
           + vínculo ativo
           + projeto/tarefa atual
           + recorrência confirmada
           + proximidade temporal
           + similaridade semântica
           - risco de invasão
           - desatualização
           - redundância
```

A memória precisa explicar `por_que_agora` e `como_muda_a_resposta`.

## 8. Renderização por canal

O Renderer recebe posição já formada. Ele pode alterar:

- tamanho;
- estrutura;
- vocabulário;
- ritmo;
- uso de humor;
- explicitação de evidência;
- forma de pergunta.

Ele não pode alterar verdade, recomendação, risco, discordância ou vínculo.

## 9. Aprendizado

Após a interação:

```text
interação
→ observação de resultado
→ proposta JSU
→ classificação de memória
→ revisão e gate
→ sedimentação autorizada
→ novo ciclo/replay de regressão
```

Nenhum feedback isolado vira convicção profunda automaticamente.

## 10. Runtime em fases

- F0: arquitetura e replays manuais.
- F1: Kernel local sem órgãos.
- F2: memória e Gate.
- F3: órgãos sidecar em shadow mode.
- F4: WhatsApp canary sem ações externas.
- F5: aprendizagem proposta, sem sedimentação automática.
- F6: autonomia governada e expansão de canais.
