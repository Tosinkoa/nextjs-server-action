'use server'

import { revalidatePath } from "next/cache";

export const addUser = async (formData: FormData) => {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");

    await fetch((`${process.env.RETOOL_API}`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
    });

    return revalidatePath("/");
};
