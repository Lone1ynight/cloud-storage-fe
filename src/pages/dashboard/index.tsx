import { getAllFiles } from '@/api';
import { checkAuth } from '@/helpers/checkAuth';
import { Layout } from '@/layouts/Layout';
import { GetServerSidePropsContext } from 'next';

const DashboardPage = () => {
  return <div>Dashboard</div>
}

DashboardPage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard / Главная">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const items = await getAllFiles();

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