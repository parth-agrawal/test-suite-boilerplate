import prisma from "../prisma/client";
import seedData from "./seedData";

const seedDatabase = async () => {
    await prisma.user.deleteMany({ // clears database on each test run
        where: {},
    });

    const users = await prisma.user.createMany({
        data: seedData
    })

}

export default seedDatabase;