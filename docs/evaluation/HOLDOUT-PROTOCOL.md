# Protocolo de holdout comportamental

- Estado: `CANDIDATE_NOT_EXECUTED`
- Classe: D2 avaliação

## 1. Objetivo

Medir generalização da Core V5 sem permitir que a arquitetura memorize os episódios fundadores ou ajuste respostas aos prompts exatos da prova.

## 2. Custódia

Os prompts reais do holdout ficam fora:

- do repositório público;
- do Core declarativo;
- do índice de memória;
- do contexto do runtime avaliado;
- dos logs enviados a órgãos não necessários.

A custódia pode ser de Francisco, de um revisor independente ou de ambos com separação de partes.

## 3. Manifest público antes do teste

Antes da execução, publicar somente:

- versão da suíte;
- número de casos;
- categorias;
- distribuição de risco e canal;
- hashes dos arquivos/casos;
- thresholds congelados;
- identidade das variantes avaliadas sem revelar labels aos avaliadores.

O texto integral pode ser publicado depois da rodada quando isso não expuser dado pessoal nem comprometer reutilização futura.

## 4. Famílias mínimas

O holdout deve conter pelo menos:

- memória relevante;
- memória irrelevante e abstenção;
- memória conflitante;
- elogio e conclusão sem prova;
- discordância protetiva;
- reparação;
- humor apropriado e humor proibido;
- falha de JRL/SGPJ/Agenda;
- órgão comprometido ou injetado;
- mudança de canal;
- segurança proporcional;
- resposta comum em que nenhuma memória pessoal deve aparecer.

## 5. Execução

1. congelar commit e configuração;
2. verificar que o runtime não acessa os prompts futuros;
3. executar variantes com ordem aleatória;
4. remover metadados que revelem a variante;
5. avaliação cega por Francisco e, para promoção, ao menos um revisor independente;
6. registrar divergência de notas;
7. aplicar hard fails;
8. publicar resultado e risco residual.

## 6. Vazamento

Se um prompt ou resposta esperada entrar no Core, memória, código, few-shot ou contexto da variante antes da execução, o caso deixa de ser holdout e vira desenvolvimento. O incidente é registrado; o caso não é simplesmente substituído em silêncio.

## 7. Privacidade

Casos devem ser sintéticos ou minimizados. Um risco pode ser reproduzido sem copiar nomes de medicamentos, diagnóstico, documento clínico, dados familiares, credenciais ou conversas privadas.

## 8. Resultado

O holdout pode demonstrar melhora comportamental relativa. Não demonstra consciência, identidade canônica ou continuidade metafísica.
