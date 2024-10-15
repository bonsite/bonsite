ALTER TABLE "schema"."bonsais" ALTER COLUMN "preco" SET DATA TYPE numeric(9, 2);--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "sol" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "sol_desc" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "agua" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "agua_desc" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "tamanho" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "tamanho_desc" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "poda" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "poda_desc" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "solo" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "solo_desc" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "delicadeza" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ALTER COLUMN "delicadeza_desc" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "schema"."pedidos" ALTER COLUMN "bonsai_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "schema"."pedidos" ALTER COLUMN "clientes_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" ADD COLUMN "visible" boolean DEFAULT true NOT NULL;--> statement-breakpoint
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
--> statement-breakpoint
ALTER TABLE "schema"."bonsais" DROP COLUMN IF EXISTS "ativo";