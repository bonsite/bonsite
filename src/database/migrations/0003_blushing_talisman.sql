ALTER TABLE "schema"."bonsais" ADD COLUMN "visivel" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "schema"."bonsais" DROP COLUMN IF EXISTS "visible";