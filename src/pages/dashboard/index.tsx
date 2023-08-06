import {
  getAllFiles,
} from '@/api/index';
import { Files } from '@/components/files';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { Layout } from '@/layouts/Layout';
import { FileItem } from '@/types/files';
import {
  NextPage,
  NextPageContext
} from 'next';
import React from 'react';

interface Props {
  items: FileItem[];
}

const DashboardPage: NextPage<Props> = ({items}) => {
  return <DashboardLayout>{ <Files items={items} withActions={true}/>}</DashboardLayout>
}

// @ts-ignore
DashboardPage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard / Главная">{page}</Layout>;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  try {
    const items = await getAllFiles('all', ctx);

    return {
      props: {
        items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { items: [] },
    };
  }
};

export default DashboardPage