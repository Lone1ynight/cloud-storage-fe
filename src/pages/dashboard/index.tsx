import {
  getAllFiles,
} from '@/api/index';
import { FileList } from '@/components/fileList';
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
  return <DashboardLayout>
    <FileList items={items} onFileSelect={() => console.log('asd')} />
  </DashboardLayout>
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