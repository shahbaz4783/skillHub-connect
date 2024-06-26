'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import FormError from '../../feedback/FormError';
import FormSuccess from '../../feedback/FormSuccess';
import { profileSchema } from '@/validators/user.schema';
import { useFormState } from 'react-dom';
import Submit from '@/components/buttons/submit';
import { updateProfileAction } from '@/actions/user.action';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { UserProfile } from '@/types/types';

const UpdateUserProfileForm = ({ userTitle, skills, bio }: UserProfile) => {
  const [charCount, setCharCount] = useState<{
    title: number;
    skills: number;
    bio: number;
  }>({
    title: userTitle.length,
    skills: skills.length,
    bio: bio.length,
  });

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      userTitle,
      skills,
      bio,
    },
  });

  const [formState, formAction] = useFormState(updateProfileAction, {
    message: {},
  });

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          control={form.control}
          name="userTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Professional Title</FormLabel>
              <FormDescription>
                Enter a concise and descriptive title that summarizes your
                professional expertise and role (e.g., "Senior Full Stack
                Developer")
              </FormDescription>
              <FormControl>
                <Input
                  className="text-slate-500"
                  type="text"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setCharCount((prev) => ({
                      ...prev,
                      title: e.target.value.length,
                    }));
                  }}
                />
              </FormControl>
              <FormDescription className="text-right">
                {charCount.title}/100 characters (min. 20)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key Skills</FormLabel>
              <FormDescription>
                List your primary skills, separated by commas. This helps
                potential clients understand your core competencies (e.g.,
                "React, Node.js, Express, MongoDB").
              </FormDescription>
              <FormControl>
                <Input
                  className="text-slate-500"
                  type="text"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setCharCount((prev) => ({
                      ...prev,
                      skills: e.target.value.length,
                    }));
                  }}
                />
              </FormControl>
              <FormDescription className="text-right">
                {charCount.skills}/150 characters (min. 60)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile overview</FormLabel>
              <FormDescription>
                Write a detailed overview of your professional background,
                experience, and achievements. Use this space to highlight what
                makes you unique and why clients should choose you.
              </FormDescription>
              <FormControl>
                <Textarea
                  className="text-slate-500"
                  rows={6}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setCharCount((prev) => ({
                      ...prev,
                      bio: e.target.value.length,
                    }));
                  }}
                />
              </FormControl>
              <FormDescription className="text-right">
                {charCount.bio}/1200 characters (min. 120)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={formState.message.error} />
        <FormSuccess message={formState.message.success} />
        <Submit
          title="Update Profile"
          loadingTitle="Updating Your Profile..."
        />
      </form>
    </Form>
  );
};

export default UpdateUserProfileForm;
