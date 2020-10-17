# Início
- Entendimento e definição de estrutura (linguagem e pastas) - 30 minutos
- Construção da estrutura inicial - 45 minutos

# Dia 1
- Criação de rotas de produtos - 15 minutos
- Configuração do ORM - 30 minutos
- Criação de tabela, modelo e repositório de produtos - 20 minutos
- Criação de serviço de listagem - 45 minutos
- Criação de serviço de inclusão - 30 minutos
- Refatoração da estrutura de pastas - 15 minutos
- Tratamento de erros - 15 minutos

# Dia 2
- Refatoração de repository de produtos e criação de DTOs - 15 minutos
- Criação de tabela, modelo e serviço de criação de clientes - 45 minutos
- Serviço de listagem de clientes - 15 minutos
- Refatoração de entidades para uso de tabela única (de clientes/vendedores para parceiros) - 20 minutos
- Criação de estrutura para vendas - 20 minutos
- Criação de tabela e entidades de vendas - 60 minutos
- Criação de serviço de listagem de vendas - 30 minutos
- Criação de inclusão de venda - 40 minutos

# Dia 3
- Inclusão de registros corretos nas tabelas - 15 minutos
- Finalização da inclusão de venda - 30 minutos
- Criação de querys para relatórios - 20 minutos

/* Vendas semanais
SELECT date, SUM(quantity), SUM(sale_price)
FROM sales
WHERE date BETWEEN '2020-03-01' AND '2020-03-30'
GROUP BY date
ORDER BY date;
*/

/* Lucro semanal
SELECT date, SUM(sale_price) - SUM(cost_price) as profit
FROM sales
WHERE date BETWEEN '2020-03-01' AND '2020-03-30'
GROUP BY date
ORDER BY date;
*/

/* Melhores vendedores
SELECT p.name, SUM(s.sale_price) as sales
FROM sales s, partners p
WHERE s.seller_id = p.id AND
s.date BETWEEN '2020-03-01' AND '2020-03-30'
GROUP BY p.name
ORDER BY sales DESC;
*/

/* Melhores vendedores
SELECT p.name, SUM(s.sale_price) as sales
FROM sales s, partners p
WHERE s.customer_id = p.id AND
s.date BETWEEN '2020-03-01' AND '2020-03-30'
GROUP BY p.name
ORDER BY sales DESC;
*/
