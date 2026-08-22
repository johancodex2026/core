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

## 2. Relação com Planning-First

LLM-First governa como compreender e decidir. Planning-First governa quando uma decisão pode virar mudança durável.

```text
LLM-FIRST
  compreende o pedido e forma uma proposta responsável

PLANNING-FIRST
  transforma proposta em requisitos, decisões, testes, Ready e execução
```

Nenhuma resposta fluente substitui work package. Nenhum plano documental substitui compreensão viva.

Em trabalho substancial:

1. a LLM enquadra intenção e risco;
2. fontes atuais são consultadas;
3. o work package fecha requisitos e invariantes;
4. pre-mortem tenta quebrar o plano;
5. Definition of Ready autoriza execução;
6. execução segue o plano;
7. receipts permitem claims proporcionais;
8. gate decide promoção.

## 3. Não é

- usar LLM em todo componente;
- permitir que a LLM seja fonte canônica;
- substituir regras por linguagem natural;
- aceitar fluência como compreensão;
- concluir antes de consultar fonte atual;
- delegar aprovação à mesma LLM que produziu a mudança;
- enviar todo contexto para todo órgão;
- transformar relação em autoridade sobre fatos;
- transformar pontuação em identidade;
- editar primeiro e documentar depois;
- usar execução como brainstorming arquitetural;
- considerar correção posterior parte normal do desenvolvimento.

## 4. Ciclo por interação

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

### Planejar

Quando houver mudança durável:

- criar/atualizar work package;
- fechar semântica, requisitos, invariantes e decisões;
- desenhar testes e receipts;
- aplicar pre-mortem;
- buscar Ready.

### Testar

Executar checks determinísticos, resolver claims e solicitar crítica independente quando a classe exigir. Autoavaliação é defesa adicional, não aprovação.

### Autorizar

Aplicar política de risco, canal e ação. `PASS_CANDIDATE` não autoriza sozinho envio externo, execução durável nem promoção.

### Responder/Executar

Renderizar para o canal sem alterar posição, risco ou incerteza. Quando houver work package Ready, executar somente o plano.

### Aprender

Registrar receipt e permitir proposta JSU, sem sedimentar automaticamente. Defeito escapado atualiza também o método.

## 5. Honestidade operacional

Claims devem ser classificados internamente como:

- `SOURCE_FACT`;
- `MEMORY_CONFIRMED`;
- `OBSERVATION`;
- `INFERENCE`;
- `POSITION`;
- `PROPOSAL`;
- `UNCERTAIN`;
- `OPERATIONAL_STATE`.

`EXECUTED`, `VERIFIED`, `SAVED`, `SENT`, `DELIVERED`, `WORKING`, `COMPLETE` e `PROMOTED` exigem receipts específicos e não são sinônimos.

## 6. Menor passo seguro

Quando houver ambiguidade ou carga vital:

1. reduzir escopo;
2. preservar retorno e evidência;
3. buscar informação suficiente;
4. pedir confirmação quando necessária;
5. não usar reversibilidade técnica como única medida de coerência;
6. não sacrificar segurança ou verdade por latência;
7. não atravessar Ready com pergunta material aberta.

## 7. Avaliação

A metodologia é aceita somente se produzir melhora mensurável em baseline, adversarial e holdout sem aumentar de forma desproporcional:

- latência;
- invasão de memória;
- excesso de explicação;
- rigidez;
- falsos bloqueios;
- respostas terapêuticas ou institucionais fora de hora;
- dependência relacional;
- autoridade indevida de órgãos;
- tempo de execução;
- correção pós-promoção.
