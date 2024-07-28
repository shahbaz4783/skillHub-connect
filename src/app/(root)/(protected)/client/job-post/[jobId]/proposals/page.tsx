import { ReceivedProposals } from '@/components/cards/proposals';
import SectionHeading from '@/components/shared/SectionHeading';
import { getJobDetailsData } from '@/data/posts';

interface ParamsProps {
  params: {
    jobId: string;
  };
}

const ProposalsOnJob = async ({ params }: ParamsProps) => {
  const jobPost = await getJobDetailsData(params.jobId);
  const jobPostTitle = jobPost?.title;

  return (
    <main className="space-y-20">
      <SectionHeading title={`Proposals on "${jobPostTitle}"`} />
      <ReceivedProposals jobId={params.jobId} />
    </main>
  );
};

export default ProposalsOnJob;
