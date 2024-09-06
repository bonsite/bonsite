-- 1. Criar o banco de dados

CREATE DATABASE bonsite_db;

-- 2. Criação da tabela de categorias
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- 3. Criação da tabela de bonsais com JSONB para detalhes
CREATE TABLE bonsais (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT REFERENCES categories(id),
    details JSONB
);

-- 4. Inserção das categorias
INSERT INTO categories (name) VALUES 
('Frutíferas'), 
('Floríferas'), 
('Perenes'), 
('Caducifólias');

-- 5. Inserção de exemplo de bonsai com detalhes
INSERT INTO bonsais (name, category_id, details) VALUES 
('Bonsai de Jabuticaba', 1, 
'{
    "sun_exposure": "Sol pleno",
    "watering": "Moderada",
    "size": "Pequeno",
    "pruning": "Regular",
    "fertilization": "Mensal",
    "delicacy": "Alta"
}');

-- 6. Consultar os dados para verificar a inserção
SELECT * FROM bonsais;
