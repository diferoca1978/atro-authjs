import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';


export const userLogOut = defineAction({
  accept: 'json',
  handler: async (_, { cookies }) => {
    return { ok: true }
  }
})