import Database from "better-sqlite3"
import path from "path"

const dbPath =
  process.env.DATABASE_PATH ?? path.join(process.cwd(), "data", "app.db")

const db = new Database(dbPath, { readonly: true, fileMustExist: true })

export default db