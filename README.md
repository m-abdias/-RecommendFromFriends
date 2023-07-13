
# Recomendador de amigos

Este projeto foi desenvolvido em Node.js, contém uma API com alguns endpoints relacionados a um sistema de cadastro de pessoas e também permite que uma pessoa obtenha sugestões
de novos amigos se baseando nas amizades já existentes.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento.
2. Clone o repositório para o seu computador.
3. Navegue até o diretório do projeto no terminal.
4. Execute o seguinte comando para instalar as dependências do projeto:


```bash
  npm install
```
    
## Executando a API

Após a instalação, você pode executar a API em sua máquina local.

1. No diretório do projeto, execute o seguinte comando para iniciar a API:

```bash
  npm start
```

Isso iniciará a API na porta 3000. Você pode acessar os endpoints da API através do seguinte URL base: http://localhost:3000.

## Executando os testes

O projeto utiliza o framework de testes Jest para executar os testes unitários.

Para executar os testes, siga as etapas abaixo:

1. No diretório do projeto, execute o seguinte comando:

```bash
  npm test
```

Isso executará todos os testes unitários presentes no projeto e exibirá os resultados no terminal.
## Documentação da API


#### Cria uma nova pessoa com base nos dados fornecidos no corpo da solicitação.

```http
  POST /person
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `cpf`      | `string` | **Obrigatório**. O cpf da pessoa que deseja realizar o cadastro |
| `name`      | `string` | **Obrigatório**. O nome da pessoa que deseja realizar o cadastro |


#### Retorna a lista de todas as pessoas cadastradas.

```http
  GET /person
```

#### Retorna os detalhes de uma pessoa com base no CPF fornecido.

```http
  GET /person/:cpf
```

#### Cria um relacionamento entre duas pessoas com base nos CPFs fornecidos.

```http
  POST /relationship
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `cpf1`      | `string` | **Obrigatório**. O cpf da pessoa1 que irá se relacionar com a pessoa2 |
| `cpf2`      | `string` | **Obrigatório**. O cpf da pessoa2 que irá se relacionar com a pessoa1 |

#### Retorna uma lista de recomendações de amigos para a pessoa com o CPF fornecido.

```http
  GET /recommendations/:cpf
```
#### Deleta todos os dados armazenados dos usuários e relacionamentos.

```http
  DELETE /clean
```
Certifique-se de substituir :cpf nos endpoints acima pelos CPFs reais das pessoas.








## Autores

- [@m-abdias](https://github.com/m-abdias)

