import type { GetServerSideProps, NextPage } from "next";

interface Props {
  businessID: string | undefined;
  tableID: string | undefined;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const { businessID, tableID } = query;
  return {
    props: {
      businessID: businessID as string,
      tableID: tableID as string,
    },
  };
};

const Home: NextPage<Props> = ({ businessID, tableID }: Props) => {
  return (
    <div>
      tableID: {tableID}, businessID: {businessID}
    </div>
  );
};

export default Home;
