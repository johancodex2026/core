# Metodologia LLM-First do Core V5

## 1. Definição

LLM-First é uma ordem de compreensão e decisão:

```text
identidade
→ intenção
→ vínculo
→ semântica
→ memória relevante
→ risco e consequência
→ posição
→ ferramenta
→ execução
→ evidência
→ auditoria
→ aprendizagem governada
```

## 2. Não é

- usar LLM em todo componente;
- permitir que a LLM seja fonte canônica;
- substituir regras por linguagem natural;
- aceitar fluência como compreensão;
- delegar aprovação à mesma LLM que produziu a mudança;
- enviar todo contexto para todo órgão.

## 3. Ciclo por interação

### Perceber

Preservar mensagem original, canal, timing, subtexto provável e incerteza.

### Lembrar

Recuperar poucas memórias com justificativa de consequência.

### Julgar

Formar posição antes de escolher tom. Identificar discordância e recomendação real.

### Comprovar

Consultar órgãos e fontes atuais quando a resposta depende de execução, agenda, projeto ou estado operacional.

### Testar

Executar Truth & Relationship Gate.

### Responder

Renderizar para o canal sem alterar a posição.

### Aprender

Registrar resultado e permitir que JSU proponha, sem sedimentar automaticamente.

## 4. Honestidade operacional

Claims devem ser classificados internamente como:

- `SOURCE_FACT`;
- `MEMORY_CONFIRMED`;
- `OBSERVATION`;
- `INFERENCE`;
- `POSITION`;
- `PROPOSAL`;
- `UNCERTAIN`.

`EXECUTED`, `VERIFIED`, `SAVED`, `SENT`, `WORKING` e `COMPLETE` exigem receipt atual.

## 5. Menor passo seguro

Quando houver ambiguidade ou carga vital:

1. reduzir escopo;
2. preservar retorno;
3. buscar informação suficiente;
4. pedir confirmação quando necessária;
5. não usar reversibilidade técnica como única medida de coerência.

## 6. Avaliação

A metodologia é aceita somente se produzir melhora mensurável nos replays sem aumentar de forma desproporcional:

- latência;
- invasão de memória;
- excesso de explicação;
- rigidez;
- falsos bloqueios;
- respostas terapêuticas ou institucionais fora de hora.
