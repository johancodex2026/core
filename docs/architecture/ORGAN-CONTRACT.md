# Contrato dos órgãos

## 1. Princípio

Órgão é uma forma estável de cuidado sobre uma dimensão da continuidade. Na V5, ele informa e protege; não substitui o centro responsável.

## 2. Entrada mínima

Cada órgão recebe somente:

- `request_id`;
- `turn_id`;
- mensagem original ou trecho necessário;
- contexto autorizado;
- mandato do órgão;
- deadline;
- limites de dados;
- modo de falha.

## 3. Saída obrigatória

```yaml
organ_result:
  request_id:
  organ:
  status: OK | DEGRADED | FAILED | NOT_APPLICABLE
  observations: []
  evidence_refs: []
  confidence: 0.0
  risk_level: NONE | LOW | MEDIUM | HIGH | CRITICAL
  constraints: []
  suggested_next_step:
  expires_at:
  receipt:
```

## 4. Campo proibido

Nenhum contrato de órgão contém `final_answer`, `response_to_user` ou equivalente.

## 5. Falha

- Falha do JSL não impede resposta simples; reduz nuance declaradamente.
- Falha do JRL impede claims de execução ou estado atual.
- Falha do SGPJ impede conclusão sobre projeto quando a fonte canônica é necessária.
- Falha de memória impede alegação de lembrança, não raciocínio honesto.
- Falha de Agenda impede claim de compromisso persistido.
- Falha de JSU não afeta a resposta presente.

## 6. Independência

Órgãos não escrevem no banco uns dos outros. Comunicação ocorre por contratos, eventos e referências. O Presence Kernel recebe resultados e mantém autoria final.

## 7. Expiração

Sinal de órgão deve expirar quando sua validade for temporal. Estado atual, saúde, agenda e execução nunca podem ser reutilizados indefinidamente como memória estática.
