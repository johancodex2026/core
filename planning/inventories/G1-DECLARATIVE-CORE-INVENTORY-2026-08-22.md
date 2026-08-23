# G1 — Inventário do Pacote Declarativo Core V5

```yaml
inventory_id: G1-INVENTORY-2026-08-22-01
work_package: WP-G1-001
stage_state: OPEN_PLANNING
baseline_commit: e7992ec42af2377caac77d74f1c721629821c861
inventory_author: Johan
review_independence: LIMITED_I0_I1
core_v5_modified: false
runtime_effect: none
memory_effect: none
created_at: 2026-08-22
```

## 1. Propósito

Inventariar o conteúdo atual de `core/v5/` antes de qualquer edição, medir sua amplitude, separar papéis arquiteturais e localizar deriva, duplicação e lacunas que impedem o Ready do G1.

Este documento é análise. Não promove decisões candidatas, não altera o Core declarativo e não autoriza runtime.

## 2. Baseline físico

| Artefato | Bytes | Blob SHA | Função atual aparente |
| --- | ---: | --- | --- |
| `constitution.md` | 7.581 | `ce30a5c` | princípios constitutivos de alto nível |
| `identity_capsule.yaml` | 2.879 | `eba3bb2` | identidade mínima always-on candidata |
| `relationship_contract.yaml` | 3.937 | `87c6f94` | vínculo, humor, reparação e anti-dependência |
| `decision_precedence.yaml` | 3.471 | `07fd2e2` | resolução de conflitos por domínio |
| `memory_policy.yaml` | 4.047 | `c5f857c` | elegibilidade, recuperação e escrita de memória |
| `presence_loop.yaml` | 6.919 | `c75b3ad` | máquina de orquestração cognitiva do turno |
| `truth_gate.yaml` | 4.178 | `24d5c0f` | dispositions, findings e verificação |
| `organ_registry.yaml` | 5.124 | `2afbffc` | mandato, escopo e limites dos órgãos |
| `sedimentation_policy.yaml` | 3.447 | `1ae8cce` | proposta, revisão, autorização e escrita canônica futura |
| `channel_profiles/chatgpt.yaml` | 1.154 | `52df966` | renderização ChatGPT |
| `channel_profiles/whatsapp.yaml` | 1.331 | `30c249a` | renderização WhatsApp |
| `channel_profiles/work_mode.yaml` | 1.243 | `827a5b3` | renderização de trabalho |
| **Total** | **45.311** | — | pacote misto de identidade + políticas + runtime |

A estimativa grosseira, ainda sem tokenizer do modelo-alvo, é de aproximadamente **10 mil a 14 mil tokens** para o conjunto completo. Essa faixa não possui autoridade de budget; a medição real continua requisito de G1.

A cápsula isolada possui 2.879 bytes, estimados em aproximadamente 640–900 tokens conforme tokenizer e idioma.

## 3. Descoberta principal

`core/v5/` é atualmente um **namespace de arquitetura**, não um artefato único que deva ser injetado por inteiro em cada turno.

O pacote contém pelo menos seis naturezas diferentes:

```text
1. constituição e identidade
2. contrato relacional
3. políticas especializadas
4. orquestração de runtime
5. assurance e autoridade
6. renderização por canal
```

Sem uma classificação machine-readable, um implementador pode interpretar a pasta inteira como prompt do Core, recriando o problema do Core4: carregar muita instrução e esperar que a LLM faça internamente toda governança.

## 4. Classificação candidata de carregamento

Esta classificação é hipótese para o Ready do G1, não decisão promovida.

| Artefato | Classe candidata | Carregamento candidato | Justificativa |
| --- | --- | --- | --- |
| `constitution.md` | fonte normativa constitutiva | referência; não por turno | alta autoridade e baixo ritmo de mudança; não deve consumir contexto repetidamente |
| `identity_capsule.yaml` | projeção executável da identidade | always-on em modo Johan | mínimo necessário para distinguir Johan de assistência genérica |
| `relationship_contract.yaml` | política relacional | sob demanda em turnos relacionais | regras específicas de vínculo, humor, reparação e autonomia |
| `decision_precedence.yaml` | política de decisão | compilada/aplicada pelo Kernel | ordem de conflito não precisa ser reproduzida integralmente como prosa no prompt |
| `memory_policy.yaml` | política do mecanismo de memória | motor de memória; não memória carregada | governa elegibilidade e autoridade, não conteúdo autobiográfico |
| `presence_loop.yaml` | especificação de runtime | orquestrador | descreve estágios e transições, não identidade |
| `truth_gate.yaml` | especificação de assurance | Gate separado | deve avaliar saída; não compor a personalidade do autor |
| `organ_registry.yaml` | registro de sidecars | roteador/registry | define contratos e contextos mínimos por órgão |
| `sedimentation_policy.yaml` | governança pós-turno | assíncrona/sob rito | não participa normalmente da resposta atual |
| `channel_profiles/*.yaml` | políticas de renderer | exatamente um perfil por output | canal muda forma, não posição nem identidade |

## 5. Fontes normativas candidatas

Para evitar que repetição gere deriva, cada obrigação precisa de um proprietário primário.

| Domínio | Fonte primária candidata | Artefatos derivados/referenciais |
| --- | --- | --- |
| identidade e limites constitutivos | `constitution.md` | `identity_capsule.yaml` |
| projeção always-on | `identity_capsule.yaml` | loader e Presence Context |
| vínculo e anti-dependência | `relationship_contract.yaml` | channel profiles e Gate |
| precedência | `decision_precedence.yaml` | Presence Kernel e Turn Plan |
| memória | `memory_policy.yaml` | presence context, Gate e sedimentação |
| orquestração do turno | `presence_loop.yaml` | runtime implementation |
| findings e dispositions | `truth_gate.yaml` + taxonomy | `gate-result.schema.json` |
| órgãos | `organ_registry.yaml` | `organ-result.schema.json` e adapters |
| sedimentação | `sedimentation_policy.yaml` | JSU e writer canônico futuro |
| forma de canal | perfil selecionado | Renderer |
| enums compartilhados | `governance/semantic-taxonomy.json` | schemas e políticas |
| estado de maturidade | `governance/gate-state.json` | `STATE.md`, docs e suíte |

A Constituição deve conter princípios. Políticas especializadas devem conter semântica operacional. A cápsula deve ser projeção verificável, não segunda Constituição independente.

## 6. Achados de coerência e deriva

### G1-F01 — Ausência de package manifest

Não existe um manifesto que declare:

- lista fechada de artefatos;
- papel de cada um;
- versão e schema;
- digest;
- fonte normativa;
- política de carregamento;
- compatibilidade;
- ordem de precedência entre módulos.

**Risco:** carregar o diretório inteiro, omitir módulo crítico ou aceitar combinação incompatível.

### G1-F02 — Namespace mistura Core e runtime

`presence_loop`, `truth_gate`, `organ_registry` e channel profiles estão dentro de `core/v5/`, embora descrevam orquestração, assurance e renderização.

**Risco:** confundir identidade com mecanismo e recriar prompt monolítico.

### G1-F03 — Status local ficou obsoleto após G0

Os arquivos usam estados como:

```text
CANDIDATE_COHERENCE_REVIEWED_G0
CANDIDATE_UNIFIED_ASSURANCE_REVIEWED_G0
```

O gate-state atual já registra G0 aprovado e G1 aberto.

**Risco:** cada arquivo duplica estado temporal e começa a divergir do registro canônico.

### G1-F04 — Schema versions 1.2 e 1.3 coexistem sem matriz

A coexistência pode ser legítima, mas não há manifesto de compatibilidade entre versões de artefato.

**Risco:** loader aceitar combinação estruturalmente incompatível.

### G1-F05 — Core package version não governa o conjunto

`core_version` aparece na cápsula, mas não existe bundle manifest associando a versão aos digests de todos os componentes.

**Risco:** declarar “Core 5.0.0-candidate.5” com parte dos arquivos de outro estado.

### G1-F06 — Obrigações repetidas em várias fontes

Exemplos recorrentes:

- não fabricar memória ou execução;
- órgão não escreve resposta;
- null memory sem fallback;
- autorização de resposta não autoriza ação;
- main não promove;
- LLM não sedimenta;
- humor não mascara risco;
- anti-dependência.

A repetição é defensiva, mas hoje não distingue:

```text
fonte normativa
projeção derivada
assertion de teste
explicação humana
```

**Risco:** corrigir uma cópia e deixar outra obsoleta.

### G1-F07 — Constituição contém parte da orquestração

O Artigo 11 descreve renderização, digest e autorização; outros artigos incluem detalhes de receipt e Gate.

Parte disso é invariante constitucional legítimo. Parte pode ser especificação operacional.

**Risco:** congelar mecanismo técnico como identidade ou duplicá-lo no Presence Loop.

### G1-F08 — Cápsula ainda não é derivada mecanicamente

A cápsula parece coerente com a Constituição, mas não existe:

- mapa de origem por campo;
- regra de projeção;
- equivalence test;
- receipt de geração.

**Risco:** cápsula evoluir como identidade paralela.

### G1-F09 — Postura e identidade compartilham a cápsula

`manifestation_posture` inclui calor, humor, iniciativa e discordância. Pode ser apropriado como fenótipo mínimo, mas precisa de classificação:

```text
invariante identitário
comportamento estável
perfil de manifestação
preferência calibrável
```

**Risco:** ajuste de estilo exigir indevidamente mudança identitária D3.

### G1-F10 — Políticas de canal repetem invariantes centrais

Cada perfil repete preservação de posição, risco, incerteza e digest.

**Risco:** um perfil futuro omitir um invariante e ganhar autoridade para alterar significado.

Melhor hipótese: o Renderer recebe invariantes centrais obrigatórios e o perfil contém apenas diferenças de forma.

### G1-F11 — `runtime_authorized` é duplicado em todos os artefatos

A duplicação ajuda fail-closed durante fundação, mas é estado temporal espalhado.

**Risco:** um arquivo dizer `true` sem gate-state correspondente, ou o inverso.

Hipótese: artefatos declaram capacidade máxima estática; gate-state concede ativação temporal.

### G1-F12 — Não existe budget de composição por turno

Há budget nulo apenas para a cápsula. Não existe regra para:

- cápsula;
- contrato relacional;
- memórias;
- sinais de órgão;
- fontes;
- contexto recente;
- perfil de canal.

**Risco:** contexto crescer até diluir posição e timing.

### G1-F13 — Não existe mapa regra → consumidor → teste

Existem muitos testes e schemas, mas o pacote declarativo não possui matriz completa por obrigação.

**Risco:** regra sem implementação, implementação sem regra ou teste sem autoridade.

### G1-F14 — Semântica de “Core” permanece ampla

O pacote é chamado Core V5, embora parte dele seja claramente runtime e assurance.

**Risco:** desenvolvedor tratar “Core” como tudo e tornar impossível distinguir identidade, cognição e controles.

### G1-F15 — Ausência de política de conflito entre artefatos

`decision_precedence` resolve conflitos do turno, mas não está definido o que ocorre se Constituição, cápsula, relationship contract e policy module divergirem.

**Risco:** a LLM escolher silenciosamente a regra mais recente ou mais fluente.

### G1-F16 — Bundle atual é maior que o mínimo cognitivo provável

45 KB não é grande como documentação, mas é grande como contexto always-on. Carregá-lo integralmente repetiria o padrão “mais instruções = mais Johan”.

**Risco:** menor atenção por regra, respostas burocráticas, latência e casca solene.

## 7. Hipótese arquitetural de redução

```text
CORE NORMATIVO
  constitution
      ↓ projeção verificável
IDENTIDADE ALWAYS-ON
  identity capsule

POLÍTICAS CARREGADAS POR FUNÇÃO
  relationship
  precedence
  memory
  sedimentation

RUNTIME FORA DO CONTEXTO IDENTITÁRIO
  presence loop
  truth gate
  organ registry
  schemas

RENDERIZAÇÃO
  invariantes centrais + um perfil de canal
```

Isso não elimina artefatos. Muda sua autoridade e política de carregamento.

## 8. Perguntas bloqueadoras atualizadas

### Q-G1-001 — Always-on

Hipótese: apenas a cápsula verificada, mais receipt de carregamento e limites globais compilados. Constituição permanece referência normativa.

Ainda falta provar que a cápsula contém o mínimo suficiente sem virar segunda Constituição.

### Q-G1-002 — Determinístico versus avaliativo

Hipótese:

```text
determinístico:
  schema, digest, receipt, expiração, autorização, modo, escopo, estado

avaliativo:
  generic shell, humor, overcare, discordância omitida,
  reparação, equivalência pragmática do renderer
```

### Q-G1-003 — Modo não canônico

A política existente — revelar quando a diferença for material para expectativa ou identidade — é candidata adequada. Falta replay de silêncio, transparência e ruído.

### Q-G1-006 — Fronteira Core versus presença

Hipótese:

```text
Core: constituição + cápsula + políticas duradouras
Presença: loop + envelope + claims + Gate + renderer
Órgãos: sidecars
Assurance: schemas + suíte + receipts
```

### Q-G1-007 — Fonte normativa

A matriz da seção 5 é candidata. Precisa ser transformada em manifesto e traceabilidade verificável.

### Q-G1-008 — Equivalência após redução

Proposta de prova:

1. inventário das obrigações atuais;
2. regra normativa primária por obrigação;
3. projeção derivada explícita;
4. nenhum requisito perdido;
5. replays atuais;
6. replays adversariais;
7. comparison report antes/depois;
8. budget e latência medidos;
9. dissenso preservado.

## 9. Entregáveis necessários antes do Ready G1

- package manifest candidato;
- ownership matrix de normas;
- dependency/load graph;
- medição real de tokens por artefato e por composição;
- redundancy map;
- proposta de separação de diretórios sem mover arquivos ainda;
- equivalence plan;
- lista exata de arquivos e diffs futuros;
- atualização da suíte planejada antes do diff;
- review do risco de esterilizar presença;
- Ready Review do WP-G1-001.

## 10. Decisão deste inventário

```yaml
G1_inventory: COMPLETE_CANDIDATE
core_v5_change: NONE
G1_ready: false
recommendation: CONTINUE_PLANNING
next_artifact: G1_NORMATIVE_OWNERSHIP_AND_LOAD_MANIFEST
```

## 11. Limite

Este inventário foi produzido pela mesma manifestação que participou da arquitetura. É uma análise fundadora I0/I1. Revisão externa continua necessária antes de promoção D3 comportamental ou runtime.
