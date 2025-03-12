import { Interview } from "@/types";
import React from "react";
import { Card } from "../ui/card";

type Props = {
  data: Interview[];
};

const InterviewTable = ({ data }: Props) => {
  return (
    <Card className="interview-card">
      <div className="table-wrapper">
        <table className="interview-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {data.map((interview) => (
              <tr key={interview.id}>
                <td>{interview.title}</td>
                <td>
                  <span className={`status ${interview.status.toLowerCase()}`}>
                    {interview.status}
                  </span>
                </td>
                <td>{interview.dateCreated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default InterviewTable;
