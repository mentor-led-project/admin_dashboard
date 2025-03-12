import CreateButton from "@/components/CreateButton";
import InterviewTable from "@/components/InterviewTable";
import { mockInterviews } from "@/constants";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className='dashboard-container'>
      {" "}
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <CreateButton />
      <InterviewTable data={mockInterviews} />
    </div>
  );
};

export default Dashboard;
