--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "schema"."categorias" AS ENUM('Indefinida', 'Frutíferas', 'Floríferas', 'Perenes', 'Caducifólias');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "schema"."bonsais" (
	"id" uuid PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"url" text NOT NULL,
	"descricao" text,
	"preco" numeric(9, 2) NOT NULL,
	"categoria" "schema"."categorias" DEFAULT 'Indefinida' NOT NULL,
	"sol" integer NOT NULL,
	"sol_desc" text,
	"agua" integer NOT NULL,
	"agua_desc" text,
	"tamanho" integer NOT NULL,
	"tamanho_desc" text,
	"poda" integer NOT NULL,
	"poda_desc" text,
	"solo" integer NOT NULL,
	"solo_desc" text,
	"delicadeza" integer NOT NULL,
	"delicadeza_desc" text,
	"visivel" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "schema"."clientes" (
	"id" uuid PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"telefone" text NOT NULL,
	"email" text,
	"cep" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "schema"."pedidos" (
	"id" uuid PRIMARY KEY NOT NULL,
	"bonsai_id" uuid NOT NULL,
	"clientes_id" uuid NOT NULL,
	"concluido" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "schema"."pedidos" ADD CONSTRAINT "pedidos_bonsai_id_bonsais_id_fk" FOREIGN KEY ("bonsai_id") REFERENCES "schema"."bonsais"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "schema"."pedidos" ADD CONSTRAINT "pedidos_clientes_id_clientes_id_fk" FOREIGN KEY ("clientes_id") REFERENCES "schema"."clientes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
