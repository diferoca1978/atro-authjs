//import GitHub from '@auth/core/providers/github';
import Credentials from '@auth/core/providers/credentials';
import bcrypt from 'bcryptjs'
import { db, eq, Users } from 'astro:db';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  providers: [
    // GitHub({
    //   clientId: import.meta.env.GITHUB_CLIENT_ID,
    //   clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    // }),
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async ({ email, password }) => {
        const [user] = await db
          .select()
          .from(Users)
          .where(eq(Users.email, email))

        // Validate if user exists
        if (!user) {
          throw new Error('Invalid credentials')
        }

        //Validate if password match
        if (!bcrypt.compareSync(password, user.password)) {
          throw new Error('Invalid credentials')
        }

        //Delete the password to don't send it into user logged
        const { password, ...rest } = user

        return rest

      }
    })

  ],
});