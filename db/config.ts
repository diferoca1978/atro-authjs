import { column, defineDb, defineTable } from 'astro:db';


const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    password: column.text(),
    createdAt: column.date({ default: new Date() }),
    role: column.text({
      references: () => Role.columns.id
    }),
    isActive: column.boolean({ default: true })
  }
})

const Role = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Users,
    Role
  }
});
