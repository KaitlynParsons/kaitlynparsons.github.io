import { useState } from "react";
import "./Experience.scss";
import { IExperience } from "../../../../interfaces/IExperience";

const experience: IExperience[] = [
  {
    company: "Findex",
    url: "https://www.findex.com.au",
    timeline: [
      {
        title: "Full Stack Engineer",
        duration: "Aug 2022 - Present | Full-time",
        description: `• Working in LeSS (Large Scale Scrum) framework, understanding and developing internal financial systems in a collaborative way.
        • Developed the first UI/UX iteration of a data driven set of instructions to allow financial administrators to take ownership of changes to their workflows.
        • Negotiate with Product Owner to iteratively deliver small chunks of larger features on a 2 week sprint basis.
        `
      }
    ],
    skills: "Amazon Web Services (AWS) · Jest · TypeScript · Node.js · Angular"
  },
  {
    company: "Paytron",
    url: "https://www.paytron.com",
    timeline: [
      {
        title: "Software Engineer",
        duration: "Apr 2022 - Aug 2022 | Full-time",
        description: `• I worked on a virtual cards program built from scratch in 3 months, including the ability to upload and delete receipts and supporting documentation to card transactions, Opensearch queries and aggregations of card data to display to the end user.
        • Worked on a dashboard redesign, including the use of a third party currency conversion api, Opensearch queries to display various information to the user about the company and the ability to move and enable/disable the dashboard components using react grid layout stored in local storage to retain the users layout.`
      }
    ],
    skills: "React.js · Amazon Web Services (AWS) · AWS Lambda · Amazon S3 · Amazon Dynamodb · Opensearch · Jest · TypeScript · Node.js"
  },
  {
    company: "Canstar",
    url: "https://www.canstar.com.au",
    timeline: [
      {
        title: "Software Engineer | Technology",
        duration: "Jan 2021 - Apr 2022 | Full-time",
        description: `• Working in an agile team of developers, product owners, quality analysts and scrum master.
        • Apart of technical breakdowns, sprint ceremonies, planning and retrospectives.
        • Contributed to the migration of Canstar verticals from CoffeeScript to GraphQL.
        • Migrated legacy Equifax api within the credit score microservice to their new and improved api to securely store credit score and bureau reference on the user profile microservice, refreshing it on a monthly basis once bureau reference is fetched via a cloud function with cloud scheduler.
        • Assist and upskill junior offshore team members.
        • Introduced unit tests in Jest and Bitbucket pipelines to the user profile microservice.`
      },
      {
        title: "Software Engineer | Commercial",
        duration: "Feb 2020 - Jan 2021 | Full-time",
        description: `• Debug and resolve technical issues for the wider commercial team.
        • Worked with a team of Data Engineer consultants to migrate a revenue tracking system out of google sheets into BigQuery, utilizing DBT to perform the calculations and formation of various tables within BigQuery, Fivetran to sync data from various accounting softwares and internal systems, Tableau to display the data to the stakeholders and Google Appsheet for the account managers to input numbers to line items at the end of a month.
        • Developed a Python cloud function to extract clicks and conversions on the website out of a third party marketing software via their apis into BigQuery on a daily basis for the wider team to perform analytical queries on.
        • Developed email alerting tools with GoogleScript and Google triggers.`
      }
    ],
    skills: "Microservices · Amazon Web Services (AWS) · TypeScript · Node.js · Angular · GraphQL · Fishtown Analytics dbt · Google Cloud Functions · JavaScript · Google BigQuery · Python (Programming Language) · Google Cloud Platform (GCP)"
  },
  {
    company: "In The Code",
    url: "https://www.inthecode.com.au",
    timeline: [
      {
        title: "Junior Software Developer",
        duration: "Apr 2018 - Feb 2020 | Casual",
        description: `• Developed Angular components for food safety software Squizify and painting consultancy Usher & Sons CRM.
        • Database scripts to update Squizify checklist configurations.
        • Various small enhancements on a Java and Swift based business learning mobile platform Bizveristy.`
      }
    ],
    skills: "Swift (Programming Language) · Objective-C · MongoDB · Express.js · Amazon Web Services (AWS) · TypeScript · Node.js · Angular · Java"
  }
];

const Experience = () => {
  const allExperience = experience;
  const companies = allExperience.map(role => role.company);

  const [selectedCompany, setSelectedCompany] = useState(allExperience[0]);

  const changeCompany = (selected: string) => {
    const newCompany = allExperience.find(role => role.company === selected);
    return setSelectedCompany(newCompany!);
  }

  return (
    <section className="experienceSection">
      <header>
        <h2>Experience</h2>
      </header>
      <div>
        <nav>
          {companies.map((company, index) => (
            <a
              className={selectedCompany.company === company ? "active" : ""}
              key={index}
              onClick={() => changeCompany(company)}
            >
              {company}
            </a>
          ))}
        </nav>
        <div className="padding">
        <a href={selectedCompany.url} target='_blank'>{selectedCompany.url}</a>
          {selectedCompany.timeline.map((role, index) => (
            <div key={index}>
              <h3>{role.title}</h3>
              <span>{role.duration}</span>
              <p>{role.description}</p>
            </div>
          ))}
          {selectedCompany.skills}
        </div>
      </div>
    </section>
  );
};

export default Experience;
