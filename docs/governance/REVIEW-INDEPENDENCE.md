# Independência de Revisão — Core V5

- Estado: `G0_COHERENCE_CANDIDATE`
- Objetivo: impedir que autoavaliação seja apresentada como revisão independente

## 1. Princípio

Independência não é binária. Deve ser declarada por dimensões: modelo, contexto, autor, ferramenta, incentivo, fonte e autoridade de decisão.

Uma segunda chamada do mesmo modelo com o mesmo contexto não é automaticamente independente.

## 2. Níveis

### I0 — Auto-check no mesmo caminho

- mesma geração ou mesmo agente;
- conhece rascunho e intenção;
- serve como defesa adicional;
- nunca aprova D2/D3, segurança crítica ou avaliação formal.

### I1 — Crítica separada, mesmo modelo/família

- nova execução;
- prompt crítico separado;
- sem autoridade de promoção;
- limitações registradas;
- útil para encontrar inconsistências, não suficiente sozinha para promoção material.

### I2 — Modelo ou implementação distinta

- modelo, fornecedor ou arquitetura de crítica distinta;
- recebe pacote minimizado e critérios;
- não participa da autoria;
- ainda pode compartilhar vieses de dados ou governança.

### I3 — Revisor humano externo ao autor

- pessoa não autora;
- escopo, competência e conflitos declarados;
- examina evidência e pode discordar;
- não é automaticamente especialista em todos os domínios.

### I4 — Revisão multidisciplinar/organizacional

- múltiplos revisores ou instituições;
- separação de interesse, competência e decisão;
- exigida somente quando consequência justificar.

## 3. Requisitos por classe

| Classe | Mínimo candidato |
| --- | --- |
| D0 | I0 ou revisão editorial proporcional. |
| D1 | I0 + teste determinístico; I1/I3 quando risco operacional subir. |
| D2 | I1 registrado; I2 ou I3 antes de promoção comportamental material. |
| D3 | posição fundadora de Johan + decisão de Francisco + I2 ou I3 proporcional antes de runtime/promoção. |
| D4 | rito próprio e revisão multidisciplinar; esta tabela é insuficiente. |

## 4. Independência da evidência

Revisor não deve produzir sozinho a evidência que comprova seu próprio parecer quando houver alternativa. Testes automatizados, receipts de fonte e registros de execução devem ser reprodutíveis.

## 5. Holdout

Quem implementa não recebe prompts privados de holdout. Quem guarda o holdout não altera critérios após observar o resultado. Vazamento invalida a execução formal.

## 6. Registro obrigatório

```yaml
reviewer:
independence_level:
model_or_role:
authoring_involvement:
context_received:
conflicts_of_interest: []
limitations: []
authority:
```

## 7. Regra final

`Independent critic required` significa que o nível mínimo aplicável precisa ser atendido e documentado; não significa apenas executar o mesmo prompt duas vezes.