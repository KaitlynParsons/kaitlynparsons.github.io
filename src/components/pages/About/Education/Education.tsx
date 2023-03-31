import { useState } from "react";
import "./Education.scss";
import popup from "../../../../assets/popup.svg";
import diploma from "../../../../assets/diploma.jpg";
import QCE from "../../../../assets/QCE.jpg";
import Dialog from "../../../layouts/Dialog/Dialog";

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
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  const changeCategory = (selected: string): void => {
    const newCategory = allEducation.find(
      (school) => school.category === selected
    );
    return setSelectedCategory(newCategory!);
  };

  return (
    <section className="educationSection">
      <header>
        <h2>Education</h2>
      </header>
      <div>
        <nav>
          {categories.map((category, index) => (
            <a
              className={selectedCategory.category === category ? "active" : ""}
              key={index}
              onClick={() => changeCategory(category)}
            >
              {category}
            </a>
          ))}
        </nav>
        <div className="padding">
          {selectedCategory.timeline.map((category, index) => (
            <div key={index}>
              {category.verify.type !== "image" && (
                <a href={category.verify.reference} target="_blank">
                  <img src={popup} alt={category.educator} />
                </a>
              )}
              <h3>{category.educator}</h3>
              <span>{category.dateAchieved}</span>
              <p>{category.qualification}</p>
              <>
                {showDialog && (
                  <div>
                    <Dialog
                      title={category.qualification}
                      image={category.verify.reference}
                      isOpen={showDialog}
                      onClose={setShowDialog}
                    />
                  </div>
                )}
              </>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
