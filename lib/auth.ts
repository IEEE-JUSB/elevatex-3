import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import prisma from "../prisma/client";
// import { sendWelcomeEmail } from "./mail";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true,
        // requireEmailVerification: true
    },
    // emailVerification: {
    //     sendVerificationEmail: async ({user, url}) => {
    //         await sendWelcomeEmail(user.email, user.name);
    //     }
    // },
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