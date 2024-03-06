import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: '/login',
		error: '/error',
	},
	events: {
		async linkAccount({ user }) {
			await prisma.user.update({
				where: { id: user.id },
				data: { emailVerified: new Date() },
			});
			await prisma.user.update({
				where: { id: user.id },
				data: { username: Math.random().toString() },
			});
		},
	},
	callbacks: {
		async session({ session, user, token }) {
			return session;
		},
		async jwt({ token, user, account, profile }) {
			return token;
		},
	},
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'jwt' },
	...authConfig,
});
