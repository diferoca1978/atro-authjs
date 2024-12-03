import { db, Role, Users } from 'astro:db';
import bcrypt from 'bcryptjs'

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	const roles = [
		{ id: 'admin', name: 'Administrator' },
		{ id: 'user', name: 'SystemUser' }
	]
	const JohnDoe = {
		id: 1,
		name: 'John Doe',
		email: 'jodoe.@google.com',
		password: bcrypt.hashSync('123456'),
		role: 'user'
	}
	const JaneDoe = {
		id: 2,
		name: 'Jane Doe',
		email: 'jadoe.@google.com',
		password: bcrypt.hashSync('654321'),
		role: 'admin'
	}

	await db.insert(Role).values(roles);
	await db.insert(Users).values([JohnDoe, JaneDoe])
}

