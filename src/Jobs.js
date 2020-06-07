import React from "react";
import Job from "./Job";
import Typography from "./node_modules/@material-ui/core/Typography";

export default function Jobs({ jobs }) {
  return (
    <div className="jobs">
      <Typography varient="h1">Entry level Software Jobs</Typography>
      {jobs.map(job => (
        <Job job={job} />
      ))}
    </div>
  );
}
