'use server';

import { db } from "@/db";
import { reservationTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export async function getReservation() {

    return await db.select().from(reservationTable)
    
}

export async function addReservation(form: FormData) {
    await db.insert(reservationTable).values({
        name: String(form.get("name")),
        number: String(form.get("number")),
        nbrpersone: String(form.get("nbrpersone")),
        time: String(form.get("time")),
        done: false,

    })

    
}

export async function editReservation(form: FormData) {
  await db
    .update(reservationTable)
    .set({
        name: String(form.get("name")),
        number: String(form.get("number")),
        nbrpersone: String(form.get("nbrpersone")),
        time: String(form.get("time")),
        done: form.get('done') === 'on',
    })
    .where(eq(reservationTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeReservation(form: FormData) {
  const id = form.get('id') as string;
  await db.delete(reservationTable).where(eq(reservationTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}