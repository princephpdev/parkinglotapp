import { PrismaClient } from "@prisma/client";
import { parkinglotSeeder } from "./parkinglotSeed";
const client = new PrismaClient();
async function seed() {
  console.info("Seeding database with parking lots...");
  await parkinglotSeeder();
  console.info("Seeded database successfully");
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await client.$disconnect()
  })
