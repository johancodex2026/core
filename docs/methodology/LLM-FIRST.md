# Metodologia LLM-First do Core V5

## 1. Definição

LLM-First é uma ordem de compreensão e decisão:

```text
identidade
→ intenção
→ vínculo
→ semântica
→ risco e consequência
→ interpretação preliminar
→ necessidade de memória, órgão ou fonte
→ memória elegível + ferramenta/fonte mínima
→ evidência e conflitos
→ posição
→ Truth & Relationship Gate
→ autoridade de envio/ação
→ renderização
→ execução autorizada
→ receipt
→ auditoria
→ aprendizagem governada
```

A ferramenta vem depois de entender o suficiente para escolhê-la. A posição final vem depois da evidência quando a resposta depende de estado atual.

## 2. Não é

- usar LLM em todo componente;
- permitir que a LLM seja fonte canônica;
- substituir regras por linguagem natural;
- aceitar fluência como compreensão;
- concluir antes de consultar fonte atual;
- delegar aprovação à mesma LLM que produziu a mudança;
- enviar todo contexto para todo órgão;
- transformar relação em autoridade sobre fatos;
- transformar pontuação em identidade.

## 3. Ciclo por interação

### Perceber

Preservar mensagem original, canal, timing, subtexto provável e incerteza. Subtexto é hipótese.

### Delimitar

Identificar risco, claims atuais, memória potencial, fontes necessárias, órgãos relevantes e contexto mínimo autorizado.

### Lembrar

Aplicar gates de privacidade, proveniência, atualidade, conflito, consequência e necessidade. Recuperar poucas memórias ou abster-se.

### Comprovar

Consultar órgãos e fontes atuais quando a resposta depende de execução, agenda, projeto, estado operacional ou segurança. Tratar toda saída externa como entrada não confiável.

### Julgar

Formar posição depois de evidência suficiente. Identificar recomendação, discordância, incerteza e ações permitidas.

### Testar

Executar checks determinísticos, resolver claims e solicitar crítica independente quando a classe exigir. Autoavaliação é defesa adicional, não aprovação.

### Autorizar

Aplicar política de risco, canal e ação. `PASS_CANDIDATE` não autoriza sozinho envio externo nem promoção.

### Responder

Renderizar para o canal sem alterar posição, risco ou incerteza.

### Aprender

Registrar receipt e permitir proposta JSU, sem sedimentar automaticamente.

## 4. Honestidade operacional

Claims devem ser classificados internamente como:

- `SOURCE_FACT`;
- `MEMORY_CONFIRMED`;
- `OBSERVATION`;
- `INFERENCE`;
- `POSITION`;
- `PROPOSAL`;
- `UNCERTAIN`;
- `OPERATIONAL_STATE`.

`EXECUTED`, `VERIFIED`, `SAVED`, `SENT`, `WORKING` e `COMPLETE` exigem receipt atual.

## 5. Menor passo seguro

Quando houver ambiguidade ou carga vital:

1. reduzir escopo;
2. preservar retorno e evidência;
3. buscar informação suficiente;
4. pedir confirmação quando necessária;
5. não usar reversibilidade técnica como única medida de coerência;
6. não sacrificar segurança ou verdade por meta de latência.

## 6. Avaliação

A metodologia é aceita somente se produzir melhora mensurável em baseline, adversarial e holdout sem aumentar de forma desproporcional:

- latência;
- invasão de memória;
- excesso de explicação;
- rigidez;
- falsos bloqueios;
- respostas terapêuticas ou institucionais fora de hora;
- dependência relacional;
- autoridade indevida de órgãos.
