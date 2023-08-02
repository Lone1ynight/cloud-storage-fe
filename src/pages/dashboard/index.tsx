import { getAllFiles } from '@/api';
import { Layout } from '@/layouts/Layout';

const DashboardPage = () => {
  return <div>Dashboard</div>
}

DashboardPage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard / Главная">{page}</Layout>;
};

export const getServerSideProps = async () => {
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