CREATE TABLE "reservation" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"number" text NOT NULL,
	"nbrpersone" text NOT NULL,
	"time" text NOT NULL,
	"done" boolean DEFAULT false NOT NULL
);
