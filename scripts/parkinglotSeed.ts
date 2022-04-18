import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export async function parkinglotSeeder() {
    await client.parkinglots.createMany({
        data: [
            {
                "area_name": "panchkula",
                "two_wheeler": {
                    "capacity": 15,
                    "rateperhour": 10
                },
                "car": {
                    "capacity": 25,
                    "rateperhour": 18
                },
                "hatchback": {
                    "capacity": 12,
                    "rateperhour": 28
                },
                "suv_car": {
                    "capacity": 7,
                    "rateperhour": 35
                }
            },
            {
                "area_name": "sarojini nagar",
                "two_wheeler": {
                    "capacity": 50,
                    "rateperhour": 8
                },
                "car": {
                    "capacity": 25,
                    "rateperhour": 15
                },
                "hatchback": {
                    "capacity": 5,
                    "rateperhour": 22
                },
                "suv_car": {
                    "capacity": 5,
                    "rateperhour": 40
                }
            },
            {
                "area_name": "aiims",
                "two_wheeler": {
                    "capacity": 70,
                    "rateperhour": 5
                },
                "car": {
                    "capacity": 50,
                    "rateperhour": 10
                },
                "hatchback": {
                    "capacity": 60,
                    "rateperhour": 15
                },
                "suv_car": {
                    "capacity": 40,
                    "rateperhour": 25
                }
            }
        ]
    })
}

parkinglotSeeder()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await client.$disconnect()
  })