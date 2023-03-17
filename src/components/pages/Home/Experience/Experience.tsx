import { useEffect, useState } from "react";
import { IGenericCardProps } from "../../../../interfaces/GenericCardProps";
import GenericCard from "../../../layouts/GenericCard/GenericCard";
import Pagination from "../../../layouts/Pagination/Pagination";
import "./Experience.scss";

const experience: IGenericCardProps[] = [
  {
    headline: { title: "Full Stack Engineer", subtitle: "Findex · Full-time" },
    duration: "Aug 2022 - Present",
    location: "Remote",
    description:
      "Skills: Amazon Web Services (AWS) · AWS Lambda · Amazon S3 · Jest · TypeScript · Node.js · Angular",
  },
  {
    headline: { title: "Software Engineer", subtitle: "Paytron · Full-time" },
    duration: "Apr 2022 - Aug 2022",
    location: "Remote",
    description: `• I worked on a virtual cards program built from scratch in 3 months, 
        including the ability to upload and delete receipts and supporting documentation to card transactions, 
        Opensearch queries and aggregations of card data to display to the end user.
        • Worked on a dashboard redesign, including the use of a third party currency conversion api, 
        Opensearch queries to display various information to the user about the company and the ability to move and enable/disable 
        the dashboard components using react grid layout stored in local storage to retain the users layout.
        • Various bug fixes.\n
        Skills: React.js · Amazon Web Services (AWS) · AWS Lambda · Amazon S3 · Amazon Dynamodb · Opensearch · Jest · TypeScript · Node.js`,
  },
  {
    headline: {
      title: "Software Engineer | Technology",
      subtitle: "Canstar · Full-time",
    },
    duration: "Jan 2021 - Apr 2022",
    location: "Brisbane, Queensland, Australia",
    description: `• Working in an agile team of developers, product owners, quality analysts and scrum master.
        • Apart of technical breakdowns, sprint ceremonies, planning and retrospectives.
        • Contributed to the migration of Canstar verticals from CoffeeScript to GraphQL.
        • Migrated legacy Equifax api within the credit score microservice to their new and 
        improved api to securely store credit score and bureau reference on the user profile microservice, 
        refreshing it on a monthly basis once bureau reference is fetched via a cloud function with cloud scheduler.
        • Assist and upskill junior offshore team members.
        • Introduced unit tests in Jest and Bitbucket pipelines to the user profile microservice.
        • Various bug fixes.\n
        Skills: Microservices · Postgres · Amazon Web Services (AWS) · TypeScript · Node.js · Angular · Docker · GraphQL · Google Cloud Platform (GCP)`,
  },
  {
    headline: {
      title: "Software Engineer | Commercial",
      subtitle: "Canstar · Full-time",
    },
    duration: "Feb 2020 - Jan 2021",
    location: "Brisbane, Queensland, Australia",
    description: `• Debug and resolve technical issues for the wider commercial team.
        • Worked with a team of Data Engineer consultants to migrate a revenue tracking system out of google sheets into BigQuery, 
        utilizing DBT to perform the calculations and formation of various tables within BigQuery, 
        Fivetran to sync data from various accounting softwares and internal systems, 
        Tableau to display the data to the stakeholders and Google Appsheet for the account managers to input numbers to line items at the end of a month.
        • Developed a Python cloud function to extract clicks and conversions on the website out of a third party marketing software via 
        their apis into BigQuery on a daily basis for the wider team to perform analytical queries on.
        • Developed email alerting tools with GoogleScript and Google triggers.\n
        Skills: Fishtown Analytics dbt · Google Cloud Functions · Node.js · JavaScript · Google BigQuery · Python (Programming Language) · Google Cloud Platform (GCP)
        `,
  },
  {
    headline: {
      title: "Junior Software Developer",
      subtitle: "In The Code · Full-time",
    },
    duration: "Apr 2018 - Feb 2020",
    location: "Gold Coast, Queensland, Australia",
    description: `• Developed Angular components for food safety software Squizify and painting consultancy Usher & Sons CRM.
        • Database scripts to update Squizify checklist configurations.
        • Various bug fixes on a Java and Swift based business learning mobile platform Bizveristy.\n
        Skills: Swift (Programming Language) · Objective-C · MongoDB · Express.js · Amazon Web Services (AWS) · TypeScript · Node.js · Angular · Java
        `,
  },
];

const PAGE_OFFSET = 2;

const Experience = () => {
  const [allExperience] = useState(experience);
  const [pageState, setPageState] = useState({
    list: allExperience.slice(0, PAGE_OFFSET),
    perPage: PAGE_OFFSET,
    currentPage: 1,
    totalPages: Math.ceil(allExperience.length / PAGE_OFFSET),
  });
  const [pageChanged, setPageChanged] = useState(false);

  const scrollToTopById = (id: string) => document.getElementById(id)?.scrollIntoView();

  const newPage = (currentPage: number) => {
    scrollToTopById('experience');
    const indexOfLastRecord = currentPage * pageState.perPage;
    const indexOfFirstRecord = indexOfLastRecord - pageState.perPage;
    const newList = allExperience.slice(indexOfFirstRecord, indexOfLastRecord);
    setPageState({ ...pageState, list: newList, currentPage });
    return setPageChanged(true);
  };

  useEffect(() => {
    if (pageChanged) {
      return setPageChanged(false);
    }
  }, [pageChanged]);

  return (
    <div>
      <Pagination
        perPage={pageState.perPage}
        totalPages={pageState.totalPages}
        currentPage={pageState.currentPage}
        onPageChange={newPage}
      >
        <h3 id='experience'>Experience</h3>
        {pageState.list.map((exp: IGenericCardProps, index: number) => (
          <GenericCard
            key={index}
            headline={exp.headline}
            duration={exp.duration}
            description={exp.description}
            link={exp.link}
          />
        ))}
      </Pagination>
    </div>
  );
};

export default Experience;
