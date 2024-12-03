import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';


export const userRegister = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().trim().min(3, { message: 'Name must be alt least 3 characters' }),
    email: z.string().email({ message: 'Insert a valid email' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' })
  }),
  handler: async ({ name, email, password }, { cookies }) => {
    return { ok: true }
  }
})