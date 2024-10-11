CREATE TABLE IF NOT EXISTS "schema"."bonsais" (
	"id" uuid PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"descricao" text,
	"preco" numeric(6, 2) NOT NULL,
	"categoria" "schema"."categorias" DEFAULT 'Indefinida' NOT NULL,
	"sol" integer,
	"sol_desc" integer,
	"agua" integer,
	"agua_desc" integer,
	"tamanho" integer,
	"tamanho_desc" integer,
	"poda" integer,
	"poda_desc" integer,
	"solo" integer,
	"solo_desc" integer,
	"delicadeza" integer,
	"delicadeza_desc" integer,
	"ativo" boolean DEFAULT true NOT NULL
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
	"bonsai_id" integer NOT NULL,
	"clientes_id" integer NOT NULL,
	"concluido" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
DROP TABLE "schema"."bonsais_table";