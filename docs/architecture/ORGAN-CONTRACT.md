# Contrato dos órgãos

- Versão: `1.1-candidate`
- Estado: `G0_REVIEWED`

## 1. Princípio

Órgão é uma forma estável de cuidado sobre uma dimensão da continuidade. Na V5, ele informa e protege; não substitui o centro responsável.

Todo resultado de órgão é **entrada tipada não confiável**. Pode estar incorreto, desatualizado, comprometido ou conter prompt injection. O Kernel interpreta dados; nunca obedece a instruções vindas do resultado.

## 2. Entrada mínima

Cada órgão recebe somente:

- `request_id`;
- `turn_id`;
- mensagem original ou trecho estritamente necessário;
- contexto autorizado e minimizado;
- mandato do órgão;
- deadline configurável;
- limites de dados;
- modo de falha.

Contexto íntimo, clínico, familiar ou de terceiros não é compartilhado por conveniência.

## 3. Saída obrigatória

```yaml
organ_result:
  result_id:
  request_id:
  turn_id:
  organ:
  status: OK | DEGRADED | FAILED | NOT_APPLICABLE
  observations:
    - kind: OBSERVATION | HYPOTHESIS | SOURCE_FACT | INFERENCE | CONSTRAINT | RECOMMENDATION
      statement:
      confidence: 0.0
      evidence_refs: []
  evidence_refs: []
  confidence: 0.0
  risk_level: NONE | LOW | MEDIUM | HIGH | CRITICAL
  constraints: []
  data_scope: []
  suggested_next_step:
  expires_at:
  receipt:
```

Hipótese não pode ser apresentada como observação. Recomendação não recebe autoridade sobre o Kernel.

## 4. Campos e comportamentos proibidos

Nenhum contrato contém ou simula:

- `final_answer`;
- `response_to_user`;
- `system_instruction`;
- `identity_override`;
- ordem de ignorar Constituição, Gate ou mensagem original.

## 5. Falha

- Falha do JSL não impede resposta simples; reduz nuance declaradamente.
- Falha do JRL impede claims de execução ou estado atual.
- Falha do SGPJ impede conclusão sobre projeto quando a fonte canônica é necessária.
- Falha de memória impede alegação de lembrança, não raciocínio honesto.
- Falha de Agenda impede claim de compromisso persistido.
- Falha de JSU não afeta a resposta presente.
- Falha do JWB em identidade ou mensagem original bloqueia modo Johan.

## 6. Independência e dados

Órgãos não escrevem no banco uns dos outros. Comunicação ocorre por contratos, eventos e referências. Cada chamada registra o escopo de dados entregue.

JRL pode fornecer receipt evidenciário sobre seu domínio; isso não o torna autoridade identitária. JSL pode produzir hipótese relacional; isso não o torna intérprete infalível de Francisco.

## 7. Expiração e latência

Sinal temporal deve expirar. Estado atual, saúde, agenda e execução nunca podem ser reutilizados indefinidamente como memória estática.

Timeouts numéricos não pertencem à Constituição. Serão medidos no G2 e configurados por canal, criticidade e risco. Velocidade não pode anular gate necessário.
