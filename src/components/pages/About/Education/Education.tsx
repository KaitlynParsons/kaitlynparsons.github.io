import { useState } from "react";
import "./Education.scss";

const education = [
  {
    category: "Tertiary",
    timeline: [
      {
        educator: "TAFE Queensland",
        dateAchieved: "2018",
        qualification: "Diploma, Software Development"
      }
    ]
  },
  {
    category: "Secondary",
    timeline: [
      {
        educator: "Pine Rivers State High School",
        dateAchieved: "2016",
        qualification: "Queensland Certificate of Education"
      }
    ]
  },
  {
    category: "Certificates",
    timeline: [
      {
        educator: "Coursera",
        dateAchieved: "2021",
        qualification: "Preparing for Google Cloud Certification: Cloud Data Engineer"
      }
    ]
  }
];

const Education = () => {
  const allEducation = education;
  const categories = allEducation.map(school => school.category);

  const [selectedCategory, setSelectedCategory] = useState(allEducation[0]);

  const changeCategory = (selected: string) => {
    const newCategory = allEducation.find(school => school.category === selected);
    return setSelectedCategory(newCategory!);
  }
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
              <h3>{category.educator}</h3>
              <span>{category.dateAchieved}</span>
              <p>{category.qualification}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
