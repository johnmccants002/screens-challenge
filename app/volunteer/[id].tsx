import VolunteerDetails from "@/components/VolunteerDetails";
import React from "react";

type Props = {};
const sampleOpportunity = {
  id: "123",
  title: "Community Garden Volunteer",
  organization: "Green Thumb Community",
  mission:
    "To foster community bonds and promote sustainability through gardening.",
  task: "Volunteers will help in planting, weeding, and general maintenance of the community garden. No prior gardening experience is required, as guidance will be provided.",
  timeCommitment: "4 hours, Saturday mornings",
};

const Page = (props: Props) => {
  return <VolunteerDetails opportunity={sampleOpportunity} />;
};

export default Page;
