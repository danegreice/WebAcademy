1. Clonar o repositório
2. Criar os arquivos .env do backend e do frontend baseados no env.example
3. Rodar a aplicação com o comando "docker compose up"
4. Acessar o PHPMyAdmin em localhost:8080, rodar o script de criação da tabela livros na parte de execução de SQL
CREATE TABLE IF NOT EXISTS livros (
    id VARCHAR(36) PRIMARY KEY,
    nome VARCHAR(180) NOT NULL,
    sinopse TEXT NOT NULL,
    isbn VARCHAR(13) NOT NULL UNIQUE,
    autores JSON NOT NULL,
    url_imagem TEXT
);
5. Acessar o frontend em localhost:8000 e adicionar os livros.
