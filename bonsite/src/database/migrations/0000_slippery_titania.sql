CREATE SCHEMA "schema";
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "schema"."categorias" AS ENUM('Indefinida', 'Frutíferas', 'Floríferas', 'Perenes', 'Caducifólias');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "schema"."bonsais_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"descricao" text,
	"preco" numeric(6, 2) NOT NULL,
	"categoria" "schema"."categorias" DEFAULT 'Indefinida' NOT NULL,
	"sol" integer,
	"agua" integer,
	"tamanho" integer,
	"poda" integer,
	"solo" integer,
	"delicadeza" integer
);
