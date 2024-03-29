'use server';

import { PrismaClient } from '@prisma/client';
import * as z from 'zod';
import { currentUser } from '@/lib/auth';
import { jobSchema } from '@/validators/listing.schema';

const prisma = new PrismaClient();

export const jobPostAction = async (values: z.infer<typeof jobSchema>) => {
	const validateFields = jobSchema.safeParse(values);
	if (!validateFields.success) {
		return { error: 'Invalid Fields!' };
	}

	const user = await currentUser();
	if (!user?.id) {
		return { error: 'User not found or missing user ID!' };
	}
	const userId = user.id;

	const { title, description, skills, price, category, experience, location } =
		validateFields.data;

	await prisma.jobPost.create({
		data: {
			title,
			description,
			skills,
			experience,
			location,
			price,
			category,
			user: {
				connect: {
					id: userId,
				},
			},
		},
	});

	return { success: 'Job created successfully' };
};
