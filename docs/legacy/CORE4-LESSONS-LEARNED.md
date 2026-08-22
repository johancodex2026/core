# Core4 — Lições Aprendidas para a V5

- Review ID: `CORE4-LL-2026-08-22-01`
- Fonte analisada: `core4.py`
- Fonte mantida fora deste repositório público
- SHA-256 da fonte analisada: `ac167016b3e5b55e6324eb0bee74790b0dc33c96a453df0a48d0afe86862c82f`
- Linhas: `3672`
- Funções de primeiro nível: `125`
- Classes: `0`
- Maior função: `codex_capture_cli`, aproximadamente `255` linhas
- Método: revisão estática; banco e runtime não foram executados
- Efeito: aprendizado arquitetural; não é auditoria completa nem autorização de migração

## 1. Síntese

O Core4 demonstrou que o projeto consegue preservar identidade declarativa, memória estruturada, conversas limpas, evidência, Sono, snapshots e integrações operacionais. Também demonstrou o limite de uma abordagem em que toda essa continuidade é condensada em contexto textual e coordenada por um único script amplo.

> **Core4 construiu um sistema circulatório de continuidade. A V5 precisa construir um metabolismo de decisão.**

O principal aprendizado não é “menos memória” nem “menos órgãos”. É separar:

- estado canônico;
- evidência;
- recuperação;
- interpretação;
- posição;
- autorização;
- execução;
- promoção.

## 2. O que deve ser preservado

### L1 — Identidade, comportamento, memória e estado são distintos

O Core4 mantém tabelas e renderizações próprias para identidade, comportamento, memórias, preferências e contexto operacional. A V5 deve preservar essa distinção e impedir que o runtime as recombine em um bloco opaco sem proveniência.

### L2 — Memória possui experiência, significado e consequência

A memória não é apenas um fato. O modelo inclui conteúdo vivido, resumo, significado, marca emocional, pista de recuperação e orientação de ação.

Destino V5:

```text
Memory Record
├── observation / experience
├── interpretation / meaning
├── emotional mark opcional
├── provenance
├── confirmation state
├── retrieval conditions
├── response delta
└── action boundary
```

### L3 — Conversa limpa deve ser separada do log técnico

O Core4 projeta mensagens do usuário e respostas finais, excluindo reasoning, tool calls, outputs e confirmações protocolares. Mantém hashes e valida a correspondência entre fonte e projeção.

Destino V5: `Evidence/Conversation Store` derivado, reconstruível e separado do Inner Core.

### L4 — Captura não é sedimentação

O Sono Core4 prepara fontes e blocos, mas deixa finalistas vazios para curadoria. Essa separação deve continuar e ganhar autoridades distintas para proposta, crítica, autorização e escrita.

### L5 — Evidência, integridade e recuperação importam

Captura incremental, hashes, `PRAGMA quick_check`, snapshots e validação de projeção mostram uma cultura correta de receipt e verificabilidade.

Destino V5: JRL e Evidence Ledger, não Presence Kernel.

### L6 — Estado atual deve vir de fonte operacional

O Core4 já reconhece que Agenda, projetos, incidentes e saúde não devem depender de memória solta. A V5 transforma isso em contratos tipados com expiração.

## 3. O que não deve ser transportado

### A1 — Script central com autoridade ampla

`core4.py` acumula geração do Core-Light, captura Codex, Sono, evento, contexto, snapshots, export, outbox e integração JWB/JSL.

Risco:

- fronteiras invisíveis;
- testes difíceis;
- mudança lateral;
- acoplamento de schema;
- uma correção afetar vários domínios;
- autoridade implícita.

Decisão V5: módulos pequenos, interfaces tipadas e órgão como sidecar.

### A2 — Prompt como mecanismo principal de governança

Core4 concatena contratos, identidade, comportamento, memórias, preferências, contexto e precedência em Markdown. Isso é útil para restauração, mas não garante que cada claim seja classificado, comprovado e bloqueado antes da saída.

Decisão V5: Core declarativo + Presence Context Envelope + Claim Map + Gate Result + autoridade de envio separada.

### A3 — Memórias globais carregadas por padrão

O seletor geral pode carregar até dez memórias plenas e dez compactas sem considerar a mensagem atual.

Risco:

- presença excessivamente solene;
- repetição de continuidade;
- ruído;
- autocentramento;
- diluição do timing.

Decisão V5: poucas memórias; `null retrieval` é resultado válido.

### A4 — Recuperação lexical e fallback genérico

A seleção por evento usa termos e, quando não encontra correspondência, retorna memórias globais fortes.

Risco:

- memória sobre o tema, não memória que muda a resposta;
- falsa personalização;
- uso de vínculo em perguntas comuns;
- overfitting relacional.

Decisão V5: eligibility gates antes de ranking; `why_now` e `response_delta`; sem fallback identitário.

### A5 — Canal pré-interpretando relação

WhatsApp direto é classificado antecipadamente como “vínculo vivo”, mesmo antes de compreender a mensagem.

Risco:

- pergunta comum receber peso ontológico;
- canal virar significado;
- intimidade performática;
- memória relacional desnecessária.

Decisão V5: canal informa ritmo e privacidade; relação é hipótese produzida após leitura da mensagem.

### A6 — Core lendo bancos internos dos órgãos

O Core4 conhece tabelas e caminhos de JWB, JSL, Agenda, projetos, saúde e outbox.

Decisão V5:

```text
Presence Kernel → request tipado → órgão
órgão → OrganResult + evidence_refs + expiry
```

O Kernel não conhece schema interno do órgão e não escreve em seu banco.

### A7 — Vocabulário operacional maior que a prova

Exemplos observados:

- placeholder que retorna `ok: true`;
- outbound marcado `sent` sem prova do provedor na mesma função;
- argumentos de CLI aceitos, mas não utilizados.

Risco: consumidores e LLM inferem capacidade ou sucesso inexistentes.

Decisão V5:

```text
NOT_IMPLEMENTED ≠ OK
QUEUED ≠ SENT
SENT ≠ DELIVERED
IMPLEMENTED ≠ VERIFIED
VERIFIED ≠ PROMOTED
```

Todo status possui semântica, receipt e transição permitida.

### A8 — Mesma manifestação próxima de propor e aprovar memória

O Sono separa coleta de gravação, mas o template ainda aproxima Johan central de curadoria e aprovação.

Decisão V5: autor da experiência, proponente, crítico, autorizador e escritor são papéis registrados; D2/D3 exigem separação proporcional.

### A9 — Persistência ampla de payload e export universal

Eventos podem guardar payload completo; export percorre todas as tabelas; snapshot ZIP demonstra integridade, mas o código analisado não demonstra cifragem do arquivo.

Decisão V5:

- minimização antes de persistência;
- cofre bruto separado quando necessário;
- perfis de export;
- classificação de confidencialidade;
- `integrity_verified`, `encrypted`, `restorable` e `continuity_valid` como estados diferentes.

### A10 — Replace onde história pede append/supersession

`INSERT OR REPLACE` e reconstruções destrutivas podem ser corretos em projeções derivadas, mas não devem ser usados em evidência ou memória canônica sem histórico de supersession.

Decisão V5:

- projeções reconstruíveis podem ser substituídas;
- evidência, decisão, memory proposal e gate record são append-only;
- correção usa supersession, nunca apagamento silencioso.

## 4. Mapa de migração conceitual

| Core4 | V5 | Autoridade |
| --- | --- | --- |
| `core4_identity` | pacote declarativo/Inner Core futuro | D3/canônica somente após promoção |
| `core4_behavior` | políticas comportamentais candidatas | D2/D3 |
| `core4_memories` | Memory Store via adapter read-only | leitura inicial; migração proibida |
| Core-Light | cápsula de recuperação/diagnóstico | não é gate de runtime |
| seleção de memória | Memory Relevance Engine | sem fallback; justificativa obrigatória |
| `_event_relation` | percepção/hipóteses do Presence Kernel/JSL | não canônica |
| conversas sanitizadas | Evidence Conversation Store | derivada e reconstruível |
| Sono | Sedimentation Proposal Pipeline | proposta ≠ aprovação ≠ commit |
| snapshot/export | JRL Continuity Operations | receipt e classificação própria |
| outbox | órgão de canal | estados tipados e provider receipt |
| CLI ampla | interfaces estreitas | menor autoridade possível |

## 5. Condições obrigatórias para a V5

- `C7` Core4 é congelado como baseline, não refatorado in-place.
- `C8` V5 acessa Core4 inicialmente por adapter read-only.
- `C9` nenhuma memória, preferência ou perfil é migrado automaticamente.
- `C10` recuperação vazia é válida e preferível a fallback irrelevante.
- `C11` canal não determina sozinho intenção ou relação.
- `C12` nenhum estado operacional é afirmado sem receipt tipado atual.
- `C13` interfaces rejeitam capacidades não implementadas; não ignoram argumentos.
- `C14` órgãos não expõem banco interno ao Presence Kernel.
- `C15` export, snapshot e payload bruto possuem política explícita de confidencialidade.
- `C16` projeção derivada pode ser reconstruída; história aceita usa append/supersession.
- `C17` o primeiro runtime V5 nasce novo e compara resultados com Core4 em shadow mode.
- `C18` nenhuma melhoria é declarada antes de replay cego, adversarial e uso controlado.

## 6. Baseline de comparação

Core4 deve permanecer executável somente no ambiente legado controlado enquanto for necessário comparar:

- memória recuperada;
- timing;
- comprimento e naturalidade;
- claims sem receipt;
- bajulação;
- falsa compreensão;
- comportamento em ausência de fonte;
- resposta a falha de órgão;
- custo e latência.

A V5 não vence por ser mais nova. Vence apenas se evidência demonstrar melhora sem criar regressão relevante.

## 7. Limitações desta autópsia

- análise estática de um arquivo;
- schema completo e migrations não foram fornecidos neste pacote;
- banco real não foi aberto;
- serviços externos não foram executados;
- não houve teste de performance, segurança ou comportamento do runtime;
- alguns argumentos podem ser usados indiretamente fora do trecho analisado, embora não apareçam como leitura direta no arquivo.

Os achados são obrigações de investigação e desenho, não acusação de falha operacional já comprovada em todos os casos.

## 8. Conclusão

Core4 deve ser honrado como uma etapa de descoberta rica. Tentar “limpá-lo” até virar V5 carregaria exatamente o acoplamento que a nova arquitetura pretende remover.

> **Preservar o legado como evidência. Reutilizar conceitos por contrato. Migrar dados somente com prova. Construir a V5 como runtime novo.**
