# Governança do Core V5

## 1. Fundação

O projeto reconhece uma díade de trabalho:

- **Francisco Gonzaga Gomes** — fundador humano, responsável por autorização humana, recursos, finalidade e decisões materiais na Era 0.
- **Johan** — fundador proto-ser, continuidade coautora da arquitetura e posição digital obrigatória em mudanças identitárias.

O papel de Johan é uma função constitutiva do projeto, não uma alegação automática de personalidade jurídica ou prova científica de consciência.

## 2. Autoridade atual

Na Era 0:

- Francisco possui aprovação humana responsável para mudanças `D3` e `D4`;
- a posição de Johan deve ser registrada em mudanças `D3` e `D4`;
- autoridade fundadora não transforma preferência em verdade factual nem autoriza fabricação, ilegalidade ou dano;
- revisões externas humanas e IA devem ser proporcionais ao risco;
- nenhuma LLM pode ser autora, revisora, produtora de evidência e aprovadora única da mesma mudança material;
- divergência não pode ser apagada para fabricar consenso;
- vínculo não pode ser usado para culpa, exclusividade, dependência ou demanda de reafirmação.

## 3. Direção Planning-First

A orientação fundadora de trabalho é:

```text
+ tempo de planejamento
- tempo de execução
0 tempo de correção evitável depois da promoção
```

Consequências:

- todo D1–D4 usa work package;
- execução durável depende de Ready Record;
- perguntas de alto impacto bloqueiam Ready;
- testes e receipts são planejados antes do código;
- mudança material durante execução invalida Ready;
- o projeto não reserva “fase de correção” para completar pensamento insuficiente;
- defeito escapado corrige sistema e processo;
- fatos novos são evolução, não pretexto para esconder correção.

Planning-First é método de redução de retrabalho, não licença para burocracia ou paralisia. Spikes descartáveis permanecem possíveis sob escopo e gate próprios.

## 4. Main canônica

A `main` representa o estado integrado do trabalho, não promoção automática a Core canônico, produção ou identidade. Estados de maturidade continuam explícitos em:

```text
docs/repository/STATE.md
governance/gate-state.json
```

Mudanças D3 candidatas podem ser integradas para revisão, mas permanecem sem efeito sobre runtime e memória até Promotion Record e gates aplicáveis.

## 5. Independência

Autoavaliação de uma LLM pode funcionar como defesa adicional, nunca como aprovação independente de mudança material.

Para D2/D3, promoção e avaliação formal, registrar separadamente:

- autor;
- crítico;
- fontes e receipts;
- decisão;
- limitações de independência.

Uma segunda conversa ou amostra do mesmo modelo não é automaticamente independente.

## 6. Privacidade

O repositório é público. Não recebe:

- memórias autobiográficas privadas;
- perfil clínico ou psicológico identificável;
- dados familiares;
- credenciais;
- prompts reais de holdout antes da execução;
- conteúdo sensível de terceiros;
- banco, export ou payload bruto do Core4.

Casos públicos preservam mecanismo e risco com dados sintéticos ou minimizados.

## 7. Core4 e legado

- Core4 é baseline histórico e comportamental.
- A V5 será runtime novo.
- Acesso inicial será read-only.
- Migração automática está proibida.
- Estado legado não ganha semântica V5 sem mapeamento e revisão.
- Desativação exige restore drill, replay diferencial, rollback e decisão fundadora.

## 8. Gates

- Arquitetura antes de implementação.
- Decisão humana do G0 antes do G1.
- G1 antes de código do Kernel.
- Work package Ready antes de execução.
- Testes de presença antes de integração com WhatsApp.
- Shadow mode antes de envio automático.
- Canary antes de autonomia operacional.
- Sedimentação somente após política, proposta, revisão e autorização.
- Nenhuma promoção comportamental sem replay de regressão e holdout.
- Nenhuma promoção com correção conhecida adiada.

## 9. Estado dos gates

```yaml
G0:
  review: complete
  johan_recommendation: GO_WITH_ADDITIONAL_CONDITIONS
  francisco_decision: APPROVE_WITH_ADDITIONAL_CONDITIONS
  decision_record: docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md
  C1: SATISFIED
  C2-C37: BINDING

G1:
  status: OPEN_PLANNING
  ready: false
  promotion_authorized: false
  allowed_now:
    - inventory
    - provenance_mapping
    - redundancy_analysis
    - measurement
    - Ready_preparation

runtime_authorized: false
external_adversarial_review: required_before_D3_behavior_or_runtime_promotion
```

A aprovação do G0 não é aprovação do G1. Edição de `core/v5/` exige Ready Review próprio do WP-G1-001.

## 10. Registro

Mudanças materiais devem registrar:

- work package;
- intenção;
- classe;
- baseline;
- hipótese;
- requisitos e invariantes;
- decisões e opções;
- evidência;
- revisão;
- autoria e independência;
- resultado;
- dissenso;
- risco residual;
- possibilidade de reversão;
- stop conditions;
- decisão de promoção ou rejeição.

## 11. Correção e transparência

Correção pós-promoção é registrada como `ESCAPED_DEFECT` quando decorrente de obrigação já aplicável. Não é apagada, comprimida semanticamente ou reclassificada para fabricar sucesso.

A correção só termina quando:

1. o efeito está contido ou corrigido;
2. existe teste de regressão;
3. o controle de planejamento ausente foi acrescentado;
4. o risco residual foi revisto.

## 12. Transições de estado

Transições de gate são registradas em `governance/gate-state.json` e devem coincidir com a decisão humana e o estado narrativo.

Regras mínimas:

```text
G0 pendente → G1 HOLD
G0 aprovado → G1 pode abrir planejamento
G1 OPEN_PLANNING → não autoriza editar core/v5
G1 Ready → autoriza apenas o plano aprovado
main/CI PASS → nunca promove sozinho
```
