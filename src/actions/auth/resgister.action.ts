import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';


export const userRegister = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
  }),
  handler: async ({ name, email, password }, { cookies }) => {
    return { ok: true }
  }
})