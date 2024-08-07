import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import JobPostCardSkeleton from '../loaders/JobCardSkeleton';
import { ServicePostData } from '@/types/types';
import NoDataFound from '../ui/NoDataFound';

interface ServicePostProps {
  fetchData: () => Promise<ServicePostData[]>;
  isOwned: boolean;
}

const ServiceCatalogCard = async ({ fetchData, isOwned }: ServicePostProps) => {
  const posts = await fetchData();
  if (!posts.length) {
    return <NoDataFound message="Service catalog is currently empty." />;
  }

  return (
    <article className="grid gap-8 lg:grid-cols-4">
      {posts.map(async (data) => (
        <>
          <Suspense fallback={<JobPostCardSkeleton />}>
            <Link key={data.id} href={`/services/${data.id}`}>
              <Card className="cursor-pointer hover:bg-slate-50">
                <CardHeader>
                  <Image
                    src={data.imageUrl}
                    width={500}
                    height={500}
                    alt=""
                    className="aspect-video object-cover"
                  />
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardTitle className="line-clamp-2">{data.title}</CardTitle>
                  <div className="flex justify-between">
                    <p>{data.time} day delivery</p>
                    <p className="font-semibold">Price ${data.price}</p>
                  </div>
                  {!isOwned && (
                    <CardFooter className="items-center justify-start gap-3 p-0">
                      <div>
                        {data.user.image ? (
                          <Image
                            className="rounded-full"
                            src={data.user.image}
                            width={30}
                            height={30}
                            alt="Image"
                          />
                        ) : (
                          <UserCircle size={30} />
                        )}
                      </div>
                      <CardTitle>{data.user.name}</CardTitle>
                    </CardFooter>
                  )}
                </CardContent>
              </Card>
            </Link>
          </Suspense>
        </>
      ))}
    </article>
  );
};

export default ServiceCatalogCard;
