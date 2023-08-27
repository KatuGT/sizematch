import { Metadata } from "next";
import FormAndTable from "./FormAndTable";

export const metadata: Metadata = {
  title: "Size Match - Post Parts",
  description: "Post a new sparepart or edit a existing one",
  metadataBase: new URL('https://www.sizematch.net/'),
  alternates: {
    canonical: 'Dashboard',
    languages: {
      'en-US': '/en-US',
    },
  },
};

const Dashboard = () => {
  return <FormAndTable />;
};

export default Dashboard;
