import UpdateUserProfileForm from '@/components/forms/user/update-user-profile';
import SectionHeading from '@/components/shared/SectionHeading';
import { getUserProfileByID } from '@/data/user';
import { currentUser } from '@/lib/auth';

const ProfileUpdatePage = async () => {
  const user = await currentUser();
  if (!user?.id) return null;
  const profile = await getUserProfileByID(user?.id);

  return (
    <section className="space-y-12 lg:w-3/4">
      <SectionHeading
        title="Update your Profile"
        subTitle="Craft a compelling title, highlight your skills, and share your bio to stand out."
      />

      <UpdateUserProfileForm
        userTitle={profile?.userTitle || ''}
        skills={profile?.skills || ''}
        bio={profile?.bio || ''}
      />
    </section>
  );
};

export default ProfileUpdatePage;
