import ProposalForm from '@/components/forms/post/proposal-form';
import SectionTop from '@/components/ui/SectionTop';
import { getUserAddressByID } from '@/data/user';

interface ParamsProps {
  params: {
    jobId: string;
  };
}
const page = ({ params }: ParamsProps) => {
  return (
    <>
      <SectionTop heading="Submit a proposal" subhead="" />
      <ProposalForm jobPostId={params.jobId} />
    </>
  );
};

export default page;
