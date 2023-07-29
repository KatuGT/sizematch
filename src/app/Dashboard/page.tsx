import { Metadata } from "next";
import FormAndTable from "./FormAndTable";

export const metadata: Metadata = {
  title: "Size Match - Post Parts",
  description: "Post a new sparepart or edit a existing one",
};

const Dashboard = () => {
  return <FormAndTable />;
};

export default Dashboard;
