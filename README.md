# Tem de tudo (backend)

## Definição

Celeste é proprietária da Loja Tem de Tudo, loja localizada em Pinheiros - São Paulo. Sua loja iniciou com produtos de papelaria e hoje vende diversos tipos de produtos. Celeste atualmente tem dois funcionários, porém somente ela irá usar o sistema que foi construído.

Esta é uma aplicação que realiza o controle de produtos, funcionários, clientes e vendas.

Com as informações geradas, a proprietária irá extrair as seguintes informações:

- Vendas Semanais (é a soma de todas as vendas)
- Lucro semanal (é a soma das vendas - a soma de todos valores de custo dos produtos vendidos)
- Melhores vendedores (é o vendedor que vendeu o maior valor)
- Melhores clientes (é o cliente que comprou o maior valor)

Todas as informações são dinâmicas, ou seja, para cada valor inserido os cálculos são atualizados.

# Instalação e execução

- Clone o repositório ```https://github.com/rodrigolemos/tem-de-tudo.git```
- Vá até o diretório ```cd tem-de-tudo```
- Execute ```npm install``` para instalar as dependências
- Abra o arquivo ormconfig.json e preencha com suas credenciais das instâncias dos bancos de dados
- Execute ```npm run typeorm migration:run``` para rodar as migrations 
- Execute ```npm run start:dev``` para rodar o servidor

## Autor

Rodrigo Lemos
