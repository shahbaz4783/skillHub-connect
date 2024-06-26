import { currentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { ProposalData } from '@/types/types';

export const getUserProposals = async (): Promise<ProposalData[]> => {
  const user = await currentUser();

  return await prisma.proposal.findMany({
    where: { userId: user?.id, isAccepted: false },
    include: {
      user: {
        select: { name: true, image: true },
      },
      jobPost: {
        select: { title: true, id: true, price: true },
      },
    },
  });
};
