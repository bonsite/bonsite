CREATE TABLE IF NOT EXISTS "bonsai" (
	"id" bigint PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"amount" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" bigint PRIMARY KEY NOT NULL,
	"bonsai_id" bigint NOT NULL,
	"amount" bigint NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_bonsai_id_bonsai_id_fk" FOREIGN KEY ("bonsai_id") REFERENCES "public"."bonsai"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
