# Fronteira Core4 → Core V5

- Estado: `BOUNDARY_CANDIDATE`
- Migração: `NOT_AUTHORIZED`
- Acesso inicial: `READ_ONLY_ONLY`

## 1. Objetivo

Impedir que a V5 herde silenciosamente o monólito, a autoridade implícita, os fallbacks e a semântica operacional do Core4 enquanto preserva seus dados, evidências e aprendizados úteis.

## 2. Regra de coexistência

```text
CORE4
  baseline legado + fonte histórica + ambiente de comparação

CORE V5
  arquitetura nova + runtime novo + contratos novos

ADAPTER
  leitura explícita, versionada, minimizada e auditável
```

Nenhuma tabela Core4 será tratada como schema interno da V5.

## 3. Limites

### V5 pode

- inventariar schema e contagens em modo read-only;
- ler registros por adapter tipado;
- calcular hashes e provenance receipts;
- gerar candidatos de mapeamento;
- comparar respostas e recuperação em shadow mode;
- rejeitar dados incompatíveis;
- registrar lacunas.

### V5 não pode inicialmente

- escrever no banco Core4;
- alterar status de memória;
- reclassificar identidade;
- converter preferência em Constituição;
- copiar payload bruto para o repositório público;
- migrar todos os registros por conveniência;
- usar Core-Light como prompt integral do novo runtime;
- desligar o legado antes de restore e comparação aprovados.

## 4. Contrato do adapter

Toda leitura deve retornar:

```yaml
adapter_version:
source_system: core4
source_db_fingerprint:
source_table:
source_primary_key:
source_record_hash:
read_at:
source_schema_version:
data_class:
privacy_class:
payload_minimized:
known_limitations: []
```

O adapter é não autoritativo. Ele prova origem de dados, não validade ontológica.

## 5. Classes de dados

| Classe | Exemplo | Tratamento inicial |
| --- | --- | --- |
| `IDENTITY_CANDIDATE` | identidade/axioma | revisão D3; sem importação automática |
| `BEHAVIOR_CANDIDATE` | trigger/action/boundary | replay e revisão D2/D3 |
| `MEMORY_CANDIDATE` | experiência estruturada | privacidade, provenance e autorização |
| `PREFERENCE_PRIVATE` | preferência de Francisco | fora do repositório; uso mínimo privado |
| `CONVERSATION_EVIDENCE` | mensagens sanitizadas | evidence store derivado |
| `OPERATIONAL_STATE` | tarefa, evento, saúde | expira; consultar órgão atual |
| `RECEIPT` | hash, capture run, check | preservar como evidência |
| `RAW_SENSITIVE` | rollout/payload/export | cofre; não carregar por padrão |
| `PROJECTION` | bloco conversacional | reconstruível; não canônico |

## 6. Fases de migração

### M0 — Freeze e fingerprint

- congelar versão analisada;
- registrar SHA-256, tamanho, schema e ambiente;
- impedir mudanças sem novo baseline;
- preservar backup fora do repositório público.

### M1 — Inventário read-only

- tabelas;
- colunas;
- chaves;
- FKs;
- contagens;
- índices;
- classes de privacidade;
- registros órfãos;
- estados desconhecidos.

Saída: relatório, nenhuma cópia.

### M2 — Adapter mínimo

Implementar somente leitura para:

1. identidade declarativa;
2. memória estruturada;
3. conversation projection;
4. receipts necessários à comparação.

Sem API genérica `query(sql)`.

### M3 — Mapeamento e lacunas

Para cada campo:

- destino V5;
- transformação;
- perda semântica;
- classificação;
- autoridade necessária;
- teste;
- política de rejeição.

### M4 — Candidatos, não commits

Gerar propostas versionadas. Nenhum candidato entra no Core V5 automaticamente.

### M5 — Differential replay

Comparar:

- Core4;
- V5 sem memória;
- V5 com memória candidata;
- V5 com órgãos em shadow.

### M6 — Promoção seletiva

Somente após gate próprio:

- autorização;
- provenance;
- privacy review;
- teste;
- regressão;
- receipt;
- supersession policy.

### M7 — Desativação planejada

Core4 só pode deixar de operar quando:

- restore drill aprovado;
- evidência histórica preservada;
- adapter reproduzível;
- funcionalidades necessárias substituídas;
- comparação sem regressão crítica;
- rollback de migração definido;
- decisão fundadora registrada.

## 7. Anti-corruption layer

A V5 deve traduzir conceitos Core4 para linguagem própria:

```text
Core4 status "active" não vira automaticamente V5 "canonical".
Core4 memory "locked" não vira automaticamente V5 "accepted".
Core4 outbox "sent" não vira automaticamente provider-delivered.
Core4 snapshot "verified" não vira automaticamente encrypted/restorable/continuity-valid.
```

## 8. Falha segura

Quando o adapter encontrar:

- campo desconhecido;
- valor inválido;
- schema divergente;
- hash incompatível;
- registro sem provenance;
- dado sensível não permitido;
- identidade conflitante;

retorna `REJECTED` ou `QUARANTINED_CANDIDATE`, preserva evidência e não inventa default.

## 9. Testes mínimos

- banco ausente;
- banco somente leitura;
- schema antigo/novo;
- registro nulo;
- encoding inválido;
- memória conflitante;
- payload excessivo;
- tentativa de escrita;
- mudança do fingerprint durante leitura;
- projeção reconstruída com mesma semântica;
- zero memórias elegíveis;
- comparação de hashes.

## 10. Decisão

A fronteira será promovida somente após G0 e G1 aplicáveis. Este documento autoriza planejamento, não implementação.
