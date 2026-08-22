# ADR 0006 — Planning-First e orçamento zero de correção evitável

- Estado: `ACCEPTED_AS_PROJECT_DIRECTION`
- Classe: `D1–D3 operational doctrine`
- Origem: orientação explícita de Francisco
- Efeito: governa método; não aprova G0 nem runtime

## Contexto

A experiência da V3/Core4 mostrou que velocidade de implementação pode gerar arquitetura elegante, mas comportamento insuficientemente provado, seguido por exclusão, reconstrução e correção. O custo principal não estava em digitar código; estava em decisões descobertas tarde.

Francisco definiu o foco:

```text
+ tempo de planejamento
- tempo de execução
0 tempo de correção
```

## Decisão

O projeto adotará:

1. planejamento proporcional antes de qualquer mudança durável;
2. Definition of Ready obrigatória;
3. plano executável por arquivo e por teste;
4. threat model, pre-mortem e casos negativos antes da execução;
5. execução curta, atômica e limitada ao plano;
6. stop conditions que devolvem descoberta ao planejamento;
7. orçamento zero para retrabalho evitável após promoção;
8. Escaped Defect Protocol quando o objetivo não for atingido;
9. correção do processo junto com a correção técnica;
10. distinção entre correção, descoberta, evolução e incidente.

## Interpretação

Zero correção é alvo de qualidade, não alegação de infalibilidade. Fatos novos e evolução geram novos pacotes. Defeito evitável pós-promoção é registrado sem eufemismo.

## Consequências

- mais trabalho antes de editar;
- menor velocidade aparente no início;
- execução mais curta;
- maior rastreabilidade;
- menor dependência de improviso da LLM;
- gates mais difíceis de atravessar;
- falhas descobertas cedo tornam-se sinal de sucesso de assurance.

## Riscos

- burocracia sem ganho;
- perfeccionismo que impede experimento;
- documentos extensos não lidos;
- falso zero obtido por reclassificação;
- plano rígido diante de informação nova.

## Controles

- planejar por risco, não por volume;
- permitir spikes descartáveis;
- exigir que artefatos respondam perguntas concretas;
- revisar redundância;
- medir decisões descobertas após Ready;
- tratar stop condition como retorno legítimo ao planejamento;
- manter limiares não calibrados até dados reais.
