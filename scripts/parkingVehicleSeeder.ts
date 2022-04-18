import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export async function parkingVehicleSeeder() {
    await client.parkinglots.create({
        data: {
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
        }
    })
}

parkingVehicleSeeder()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await client.$disconnect()
    })