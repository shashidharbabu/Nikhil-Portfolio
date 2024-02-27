import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a Data Analyst with a Google Data Analytics Certificate and experience as a Data/Business Analyst,
        specializing in knowledge generation, ETL, Machine Learning, and Visualization. Currently, I am pursuing 
        my Masters in Data Analytics at San Jose State University, where I also work as an Instructional Student 
        Assistant.

        I have previously worked as a Data Analyst at PharmEasy and Saras Analytics, where I focused on improving
        data accuracy, reducing ad-hoc business requests, enhancing experimentation strategies, and providing 
        data-driven solutions for various clients. My skill set includes expertise in Campaign Management, 
        SQL, Python, AWS, DBT, Tableau, Power BI, Hive, Presto, Redshift, BigQuery, Snowflake, MicroStrategy, and 
        Google Analytics. I am now seeking internship opportunities for my 3rd semester starting in January 2024, 
        in roles such as Data Scientist, Data Engineer, Data Analyst, or Business Analyst. I am passionate about 
        solving problems with data and delivering insights that drive growth and impact.






      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
