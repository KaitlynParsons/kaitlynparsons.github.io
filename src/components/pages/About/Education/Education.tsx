import { useState } from "react";
import "./Education.scss";
import popup from "../../../../assets/popup.svg";
import diploma from "../../../../assets/diploma.jpg";
import QCE from "../../../../assets/QCE.jpg";
import TabCard from "../../../layouts/TabCard/TabCard";
const education = [
  {
    category: "Tertiary",
    timeline: [
      {
        educator: "TAFE Queensland",
        dateAchieved: "2018",
        qualification: "Diploma, Software Development",
        verify: {
          reference: diploma,
          type: "image",
        },
      },
    ],
  },
  {
    category: "Secondary",
    timeline: [
      {
        educator: "Pine Rivers State High School",
        dateAchieved: "2016",
        qualification: "Queensland Certificate of Education",
        verify: {
          reference: QCE,
          type: "image",
        },
      },
    ],
  },
  {
    category: "Certificates",
    timeline: [
      {
        educator: "Coursera",
        dateAchieved: "2021",
        qualification:
          "Preparing for Google Cloud Certification: Cloud Data Engineer",
        verify: {
          reference:
            "https://www.coursera.org/account/accomplishments/professional-cert/2ECM2VFFWJ2A",
          type: "link",
        },
      },
    ],
  },
];

const Education = () => {
  const allEducation = education;
  const categories = allEducation.map((school) => school.category);

  const [selectedCategory, setSelectedCategory] = useState(allEducation[0]);

  const changeCategory = (selected: string): void => {
    const newCategory = allEducation.find(
      (school) => school.category === selected
    );
    return setSelectedCategory(newCategory!);
  };

  return (
      <TabCard
        title="Education"
        nav={
          <>
            {categories.map((category, index) => (
              <a
                className={
                  selectedCategory.category === category ? "active" : ""
                }
                key={index}
                onClick={() => changeCategory(category)}
              >
                {category}
              </a>
            ))}
          </>
        }
        content={
          <>
            {selectedCategory.timeline.map((category, index) => (
              <div key={index}>
                <a href={category.verify.reference} className="no-bg" target="_blank">
                  <img src={popup} alt='verification link' />
                </a>
                <h3>{category.educator}</h3>
                <span>{category.dateAchieved}</span>
                <p>{category.qualification}</p>
              </div>
            ))}
          </>
        }
      />
  );
};

export default Education;
