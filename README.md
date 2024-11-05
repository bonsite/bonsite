## The official repository for Bonsite | The go to website for all your bonsai needs!

### Quality and security

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=bonsite_bonsite)](https://sonarcloud.io/summary/new_code?id=bonsite_bonsite)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=bonsite_bonsite&metric=bugs)](https://sonarcloud.io/summary/new_code?id=bonsite_bonsite)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=bonsite_bonsite&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=bonsite_bonsite)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=bonsite_bonsite&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=bonsite_bonsite)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=bonsite_bonsite&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=bonsite_bonsite)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=bonsite_bonsite&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=bonsite_bonsite)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=bonsite_bonsite&metric=coverage)](https://sonarcloud.io/summary/new_code?id=bonsite_bonsite)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=bonsite_bonsite&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=bonsite_bonsite)

-----


### To run
```console
terraform apply
```

### To stop
```console
terraform destroy
```

---------------

## Descrição

Bonsite é uma aplicação web para gerenciar bonsais. Com ela, você pode criar, editar e visualizar informações sobre diferentes tipos de bonsais.

## Funcionalidades

- **Autenticação**: Login e logout de usuários.
- **Visualização de Produtos**: Lista e detalhes dos produtos disponíveis.
- **API**: Endpoints para integração com outras aplicações.

## Tecnologias Utilizadas

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Banco de Dados**: PostgreSQL
- **Infraestrutura**: Docker, Terraform

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/bonsite.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd bonsite
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```
4. Configure as variáveis de ambiente:
    ```sh
    cp [.env.EXAMPLE](http://_vscodecontentref_/0) .env
    ```
5. Inicie a aplicação:
    ```sh
    npm run dev
    ```

## Testes

Para rodar os testes, utilize o comando:
```sh
npm test
```

### To run
```console
terraform apply
```

### To stop
```console
terraform destroy
```
