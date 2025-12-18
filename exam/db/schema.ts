  
import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'


export const reservationTable = pgTable('reservation', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  number: text().notNull(),
  nbrpersone: text().notNull(),
  time: text().notNull(),
  done: boolean().default(false).notNull(),
})