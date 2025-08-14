import React, { useState } from "react";

const TechStackSection = () => {
  const [openLeftIndex, setOpenLeftIndex] = useState(null);
  const [openRightIndex, setOpenRightIndex] = useState(null);

  const toggleLeft = (index) => {
    setOpenLeftIndex(openLeftIndex === index ? null : index);
  };

  const toggleRight = (index) => {
    setOpenRightIndex(openRightIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Full Stack Technologies",
      content:
        "Core Java, JSP Servlets, Hibernate, Spring, Java, Web-services/RestFul API, Spring boot, Microservices, HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, Angular, C#, .NET Core, no sql, Mongo /Cosmos DB, C#, Java, Kafka, MQ, Javascript, Angular, Node.js, Azure, AWS, GCP, AEM, Service Oriented Architecture, GIT, Splunk",
    },
    {
      title: "AI / Data Analytics",
      content:
        "R, Python, Looker, Tableau, Databricks, MLFlow, Azure Data Factory, Git, Spark, BM DemandTec, Dunnhumby Promo Analytics, NPD, Boomerang Commerce, APT, Acxiom, SAS, R, Jasper, AWS Cloud, Linux, Open LDAP, Job Scheduler, Secure FTP, SSL, Mixed Integer LP (MILP), Theano, Lasagne, Spark, Pyspark, NLP, BERT, RoBERTa, Linux/Ubuntu, TensorFlow, Scanpy, NumPy, SciPy, Scikit-learn, Pandas, Matplotlib, Regex, Seaborn, SQLAlchemy, Scrapy, Dask",
    },
    {
      title: "Testing Tools",
      content:
        "Testim, Kobiton, mabl, Katalon Studio, Telerik Test Studio,TestArchitect,QAProSoft, Selenium,Selenium WebDriver, Selenium IDE, and Selenium Grid, MicroFocus,SauceLabs, UFT/QTP, Appium,IBM Rational Functional Tester, Worksoft Certify,EggPlant Functional, Parasoft SOAtest, SmartBear ReadyAPI, Crosscheck Networks SOAPSonar, Akami CloudTest.",
    },
    {
      title: "Cloud Technologies",
      content:
        "Private clouds, Public clouds, Hybrid clouds, Multi Clouds, Infrastructure as a service (IaaS), Platform as a service (PaaS), Software as a service (SaaS), Cloudwatch, Cloud Monitoring Tool, DX infrastructure manager, AppDynamics, Relic, TrueSight Pulse, Retrace, Exoprice, Aternity, AWS, Azure, Google Cloud Platform, VMware, Adobe, Workday",
    },
  ];

  const getTitleStyle = (isOpen) => {
    return isOpen ? "text-green-600" : "text-black hover:text-orange-500";
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black text-center">
          FuGEN Solutions INC
        </h2>
        <p className="text-lg mb-8 text-center">
          FuGEN Solutions INC key players have many years of IT Projects & Product development Service.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="border rounded shadow divide-y">
            {[sections[0], sections[1]].map(({ title, content }, idx) => (
              <div key={title} className="p-4 transition-all duration-300">
                <div
                  className="flex items-center justify-between cursor-pointer bg-gray-100 px-4 py-2 rounded"
                  onClick={() => toggleLeft(idx)}
                >
                  <h3 className={`font-semibold ${getTitleStyle(openLeftIndex === idx)}`}>
                    <span className="mr-2">
                      {openLeftIndex === idx ? "−" : "▾"}
                    </span>
                    {title}
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openLeftIndex === idx ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-base text-gray-700 leading-relaxed">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="border rounded shadow divide-y">
            {[sections[2], sections[3]].map(({ title, content }, idx) => (
              <div key={title} className="p-4 transition-all duration-300">
                <div
                  className="flex items-center justify-between cursor-pointer bg-gray-100 px-4 py-2 rounded"
                  onClick={() => toggleRight(idx)}
                >
                  <h3 className={`font-semibold ${getTitleStyle(openRightIndex === idx)}`}>
                    <span className="mr-2">
                      {openRightIndex === idx ? "−" : "▾"}
                    </span>
                    {title}
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openRightIndex === idx ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-base text-gray-700 leading-relaxed">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
