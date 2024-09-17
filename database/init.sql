DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'bonsite_db') THEN
        PERFORM dblink_exec('dbname=postgres', 'CREATE DATABASE bonsite_db');
    END IF;
END $$;

\c bonsite_db

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'categories') THEN
        CREATE TABLE categories (
            id SERIAL PRIMARY KEY,
            name VARCHAR2(50) NOT NULL
        );
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'bonsais') THEN
        CREATE TABLE bonsais (
            id SERIAL PRIMARY KEY,
            name VARCHAR2(100) NOT NULL,
            category_id INT REFERENCES categories(id),
            details JSONB
        );
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Frutíferas') THEN
        INSERT INTO categories (name) VALUES ('Frutíferas');
    END IF;
    IF NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Floríferas') THEN
        INSERT INTO categories (name) VALUES ('Floríferas');
    END IF;
    IF NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Perenes') THEN
        INSERT INTO categories (name) VALUES ('Perenes');
    END IF;
    IF NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Caducifólias') THEN
        INSERT INTO categories (name) VALUES ('Caducifólias');
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM bonsais WHERE name = 'Bonsai de Jabuticaba') THEN
        INSERT INTO bonsais (name, category_id, details) VALUES 
        (
            'Bonsai de Jabuticaba',
            1,
            '{
                "sun_exposure": "Sol pleno",
                "watering": "Moderada",
                "size": "Pequeno",
                "pruning": "Regular",
                "fertilization": "Mensal",
                "delicacy": "Alta"
            }'
        );
    END IF;
END $$;