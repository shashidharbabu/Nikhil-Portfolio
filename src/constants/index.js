import {
  mobile,
  backend,
  creator,
  web,
  planets,


  tableau,
  sql_2,
  office,
  java,
  kafka,
  airflow,
  powerbi,
  python,
  excel,
  docker,
  git,
  spark,

  
  lstm,
  profile,
  multi,
  
  
  capillary,
  pharmeasy,
  saras,
  sjsu,
  y2y,
  bart,
  
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Data/Business Analyst",
    icon: web,
  },
  {
    title: "Data Engineer ",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [

  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "Spark",
    icon: spark,
  },
  {
    name: "Airflow",
    icon: airflow,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Java",
    icon: java,
  },
  
  {
    name: "SQL",
    icon: sql_2,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Microsoft Excel",
    icon: excel,
  },
  {
    name: "Microsoft Office",
    icon: office,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [

  {
    title: "Instructional Student Assistant",
    company_name: "San Jose State University",
    icon: sjsu,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - Present",
    points: [
      "After completing my Research Project on Urban Audio Classification with ESC-50 and UrbanSound8k datasets throughout the last semester, I was given the opportunity to take up the position of Instructional Student Assistant for DATA 270 under the guidance of Prof. Eduardo Chan."
    ],
  },
  {
    title: "Data Analyst",
    company_name: "PharmEasy",
    icon: pharmeasy,
    iconBg: "#FFFFFF",
    date: "Dec 2021 - Jan 2023",
    points: [
      "Utilized SQL,Python & Integrating AWS and applying basic CV principles through Apache Airflow workflows, to improve data accuracy leveraging correctness, completeness, and Product Listing Rank concepts, driving a 4% growth.",
      "Executed sophisticated data pipelines in BigQuery, Redshift using Airflow, DBT while implementing TensorFlow, SKLearn on Hive, Presto, and Redshift reducing ad-hoc business requests by 40% by creating MicroStrategy dashboards.",
      "Integrated TensorFlow with Python’s PyMC3 for extensive A/B testing using Bayesian methods, applying Natural Language Processing techniques for user interfaces assessment, enhancing experimentation strategies by 15%.",
      "Employed Google Analytics and MicroStrategy within GCP for real-time analysis and insightful visualizations of user interactions, utilizing CNN on tensorflow for predictive insights, achieving an 8% improvement in conversion rates.",
      "Developed predictive lapsation models employing Gradient Boosting and Survival Analysis, achieving 82% accuracy and enabling the implementation of proactive retention strategies, reducing customer churn by 18%.",
      "Data Pipelines: Airflow DAGS to write workflows which populate the data in the base tables, which are used to create the background views for MicroStrategy Dashboards.",
      "Visualization: Built various MicroStrategy dashboards using the Data models which are created from airflow workflows on the raw tables from different DBs like MongoDB, Nebula Arango, and Nebula Graph in Hue (hive), and Redshift instances.",
      "Business Reports: Business Usecases like Product Information, and LQS(Listing Quality Score) which gives a listing rank for the products present in the catalog based on the Catalog completeness and correctness.",
      "Stakeholders Management: Responsible for the satisfaction of the Business Product Teams and hierarchies with respect to their Analytics requirements, adhocs and planned Analytics item.",

    ],
  },
  {
    title: "Business Data Analyst",
    company_name: "Saras Analytics",
    icon: saras,
    iconBg: "#FFFFFF",
    date: "Jan 2021 - Dec 2021 ",
    points: [
      "Account Management: Engagement with Amazon Sellers, Shopify Sellers to come up with Data driven solutions for business usecases by creating data pipelines, empowering various Dashboards thus providing the required visibility of KPI trends",
      "Stream Analytics: Google analytics pipelines for automated KPI reports which can reduce Funnel drop rate and increase the Click through rate (CTR), and Conversion rate(CR)",
      "ELT Process: Data Extraction from Seller DBs through inhouse data connectors, applying transformations through DBT and loading back into Data warehouses like BigQuery, and Snowflake",
      "Real time development and Production environment data pipelines and testing",
      "Data Validation and Modelling: Keeping the accuracy to 100% for most of the Seller Reports, and modelling these tables as relations by identifying the Primary keys and foreign keys thereby removing any duplication caused by batch numbers",
      "Data Analysis: Techniques like Market Basket Analysis, Product Lapsation Modelling, Funnel Drop troubleshooting to extract key information which can boost revenue and margins",
      "Data Visualization: Sales, Margin, Customer Dashboards in PowerBI, DataStudio, Tableau, and MicroStrategy built on the Data pipelines from these Data warehouses",
      "Data Warehousing: Star schemas, Datalakes, Datamarts, Cubes implementation on BigQuery, and Snowflake warehouses. Cloud pipelines using GCP and variety of API’s to create key dimesion tables",
      "Analytics tools: Worked with various Products like DBT, BigQuery, Snowflake, Data Studio, PowerBI, Tableau, PowerPoint, Excel, Go Dashbords, Daton Data Connectors, Magento DB and PostGres"
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Capillary Technologies",
    icon: capillary,
    iconBg: "#FFFFFF",
    date: "Jan 2019 - Dec 2020",
    points: [
      "Account Management: Successfully retained churning customers by effectively allocating resources, time, and through the diligent execution of different requests like reporting, ad-hoc tasks, operations, and Campaign Management resulting in the complete satisfaction and happiness of the client",
      "Data Cleaning and Validation: Validated Offline retail POS data with the Client reports by using Excel, SQL, and visualization tools to explain the anomalies, and methods to rectify the errors",
      "Data Analysis and Visualization: Exhaustive Data Analysis on Transactional, Customer and Geo level Offline Retail data using SQL, Python. Key Insights communicated through reports in Excel, PowerBI, and Business Review meetings",
      "Campaign Strategy and Design: Customer segmentation techniques like RFM Modelling, Lapsation Model, K-means to design personalised campaigns based on the purchase history and promotions/discounts respective to that brand",
      "Tracking KPI’s: Devising Key Performance Indicators by briefly collaborating with stakeholders, Queries written in SQL, and Python to create different emailers and Newsletters to communicate trends in the KPIs",
    ],
  },
  {
    title: "Content Writer",
    company_name: "y2y",
    icon: y2y,
    iconBg: "#FFFFFF",
    date: "May 2017 - Jun 2017 ",
    points: [
      "A short term Summer Internship in which I was assigned the role of technical content writer for the Y2Y firm which specialized in AWS and Cloud Computing. This was the first Industry Experience and It was quite helpful in designing my future.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "Kevin has consistently demonstrated exceptional skills and dedication as a developer. His commitment to excellence and involvement in various initiatives made them an invaluable asset to our team.",
//     name: "Vijay Kumar",
//     designation: "CEO",
//     company: "InApp",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "Kevin's contributions extended beyond technical excellence; He actively engaged in all aspects of our organization, including extracurricular activities.",
//     name: "Biju Kumar",
//     designation: "HR",
//     company: "InApp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "The kind of content that Kevin creates is unique and always the best out there. He's just amazing at anything he does!",
//     name: "Jay Louise",
//     designation: "International Team Head",
//     company: "University of Liverpool",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Exploring BART & VTA Data Models through R-DBMS",
    description:
      "The primary goal of the course project is to analyze and extract valuable insights from the Bay Area Rapid Transit (BART) and VTA transportation systems’ datasets.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "bigquery",
        color: "green-text-gradient",
      },
      {
        name: "tableau",
        color: "pink-text-gradient",
      },
    ],
    image: bart,
    source_code_link: "https://medium.com/@nikhil.thota_81762/exploring-bart-vta-data-models-through-r-dbms-3d9aa7f197ee",
  },
  {
    name: "Classification of celestial bodies using CNN",
    description:
      "Web application developed using CNN and Flask which classifies any celestial body present in an image. This project aims to automate and enhance the analysis of astronomical data",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "imageclassification",
        color: "pink-text-gradient",
      },
    ],
    image: planets,
    source_code_link: "https://github.com/kevinmathew247/CNN-Image-Detection-For-Celestial-Bodies",
  },
  {
    name: "Multi-Armed Bandits",
    description:
      "Implementation of various multi-armed bandits algorithms using Python",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "reinforcementlearning",
        color: "green-text-gradient",
      },
    ],
    image: multi,
    source_code_link: "https://github.com/kevinmathew247/Multi-Armed-Bandit/tree/main/Multi_Armed_Bandit",
  },
];

// const creativeprojects = [
//   {
//     name: "Instagram",
//     description:"Check out my Instagram profile to view my creative works and reels",
//     tags: [
//       {
//         name: "contentcreation",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mycreativeside",
//         color: "green-text-gradient",
//       },
//     ],
//     image: profile,
//     source_code_link: "https://www.instagram.com/_kevin_mathew_/reels/?next=%2F",
//   },
// ];

//export { services, technologies, experiences, testimonials, projects };
export { services, technologies, experiences, projects };
