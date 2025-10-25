import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import prisma from "../prisma/client";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true
    },
    user: {
        additionalFields: {
            role: {type: "string"},
            year: {type: "string"},
            department: {type: "string"},
            college: {type: "string"},
            phone: {type: "string"}
        }
    }
});