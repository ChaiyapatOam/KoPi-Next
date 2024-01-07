import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const User = prisma.user;
export const Group = prisma.group;
export const Product = prisma.product;