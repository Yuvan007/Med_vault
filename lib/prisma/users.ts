import prisma from ".";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
}

export async function createUser(user) {
  try {
    const userFromDb = await prisma.user.create({ data: user });
    return { user: userFromDb };
  } catch (error) {
    return { error };
  }
}

export async function getUserByNum(num) {
  try {
    const user = await prisma.user.findUnique({ where: { num } });
    return { user };
  } catch (error) {
    return { error };
  }
}
