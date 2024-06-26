import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Must be a valid email' }),
  password: z.string().min(3, {
    message: 'Password is required',
  }),
  otp: z.optional(z.string()),
});

export const resetSchema = z.object({
  email: z.string().email({ message: 'Must be a valid email' }),
});

export const signUpSchema = z
	.object({
		name: z.string().min(3, {
			message: 'Please enter your name',
		}),
		email: z.string().trim().email({ message: 'Must be a valid email' }),
		password: z.string().min(6, {
			message: 'Password must be atleast 6 characters long',
		}),
		passwordConfirm: z.string(),
	})
	.refine(
		(data) => {
			return data.password === data.passwordConfirm;
		},
		{
			message: 'Password do not match',
			path: ['passwordConfirm'],
		}
	);

export const newPasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: 'Password must be atleast 6 characters long',
    }),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: 'Password do not match',
      path: ['passwordConfirm'],
    },
  );
