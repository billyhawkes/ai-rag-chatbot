import { env } from "@/lib/env.mjs";
import type { Config } from "drizzle-kit";

export default {
	schema: "./lib/db/schema",
	dialect: "postgresql",
	out: "./lib/db/migrations",
	dbCredentials: {
		url: env.POSTGRES_URL!,
	},
} satisfies Config;
