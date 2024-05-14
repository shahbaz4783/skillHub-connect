import { ADMIN_NAV_ITEMS } from '@/constants/navigation';
import { currentUser } from '@/lib/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';

const AdminNavbar = async () => {
  const user = await currentUser();
  return (
    <aside className="sticky top-0 hidden h-svh flex-col gap-8 bg-slate-50 p-6 md:flex">
      <header className="flex items-center">
        <Link href={'/'} className="font-serif text-xl font-semibold">
          SkillHub Connect
        </Link>
      </header>
      <section className="border-b-[1px] pb-5">
        {user?.image ? (
          <Image
            className="rounded-xl"
            src={user?.image}
            alt="User Profile Image"
            width={80}
            height={80}
          />
        ) : (
          <FaRegCircleUser size={50} />
        )}
      </section>
      <nav className="flex flex-col gap-4 ">
        {ADMIN_NAV_ITEMS.map((data, index) => (
          <Link
            key={index}
            href={data.path}
            className="flex items-center gap-2 rounded-md p-2 hover:bg-slate-200"
          >
            <span>{data.icon && <data.icon size={20} />}</span>
            <span>{data.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminNavbar;