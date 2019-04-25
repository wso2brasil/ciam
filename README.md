# ciam
Demo para apresentar as funcionalidades da plataforma WSO2 para atender completamente requisitos de Customer Identity and Access Management

# Acesso ao Salesforce

Para acessar o Salesforce, basta acessar conforme os dados abaixo

# Configuração do Projeto ESB

## Alterar o ClientID e o ClienteSecret de consumo do IS (OBRIGATÓRIO)

1. Acessar o arquivo sequences/ISRegister.xml
2. Alterar a linha 23 do arquivo, que contém o conteúdo
```
<header expression="fn:concat('Basic ', base64Encode('hxeDY775u13gNxXt4x_oFXHX69oa:He8Y2apncV9iiF_rOw1T2NbCdToa'))" name="Authorization" scope="transport"/>
```
3. O conteúdo deverar estar no padrão "cliente_id:cliente_secret:"
4. Salvar, gerar novo Car file e realizar o deploy

## Alterar o Usuário/Senha de acesso ao Salesforce (Obrigatório)

1. Acessar o arquivo api/Register.xml
2. Buscar pelo <salesforce.init> e alterar as propriedades conforme necessário
3. Salvar, gerar o novo Car file e realizar o deploy.

## Consumo do ESB

Para consumir o serviço responsável por registrar um usuário no Identity Server e Criar no Salesforce, é necessário seguir as especificações abaixo:

Contexto: /register
Request Method: POST
Body: 
{
	"username" : "joaoemilio",		
	"password" : "abcd1234",
	"givenname" : "joao",
	"email" : "yilapiso@quickmail.rocks",
	"lastname" : "Zuaum",
	"mobile" : "11999994444"
}
