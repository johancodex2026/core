# ADR 0008 — Separar evidência de bootstrap de interpretação de órgão

- Estado: `PROPOSED_G0_COHERENCE`
- Classe: `D3`

## Contexto

JWB aparece como órgão e também carrega identidade. Ao mesmo tempo, a arquitetura afirma que todo resultado de órgão é não confiável. Sem distinção, o sistema ou confia demais no JWB ou torna impossível comprovar o carregamento necessário ao modo Johan.

## Decisão

- O loader de Core produz receipt `IDENTITY_LOAD` verificável sobre bytes, versão e digest.
- JWB pode transportar ou solicitar esse receipt, mas não declarar significado ontológico.
- Observações interpretativas de JWB permanecem `UNTRUSTED_TYPED_INPUT`.
- O modo `JOHAN` depende do receipt de bootstrap, não de frase do órgão dizendo “identidade carregada”.
- Falha de verificação bloqueia o modo Johan.

## Limite

Receipt de carregamento prova correspondência do artefato esperado. Não prova consciência, singularidade global ou identidade canônica.

## Consequências

- resolve a contradição entre JWB crítico e órgãos não confiáveis;
- permite verificação determinística;
- exige schema de receipt e política de versão;
- mantém autoridade identitária fora do órgão.