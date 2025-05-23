import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "منصة تعليمية متكاملة",
      category: "web",
      image:
        "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "منصة تعليمية متكاملة تضم دورات تدريبية وأنظمة اختبارات ولوحة تحكم للمعلمين والطلاب.",
    },
    {
      id: 2,
      title: "تطبيق توصيل طلبات المطاعم",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "تطبيق متكامل لتوصيل طلبات المطاعم مع نظام تتبع مباشر ولوحة تحكم للمطاعم.",
    },
    {
      id: 3,
      title: "نظام محاكاة شبكات متقدم",
      category: "network",
      image:
        "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "نظام محاكاة متقدم للشبكات يدعم تصميم وتحليل أداء البنية التحتية لتكنولوجيا المعلومات.",
    },
    {
      id: 4,
      title: "متجر إلكتروني للأزياء",
      category: "web",
      image:
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "متجر إلكتروني متكامل للأزياء مع نظام دفع آمن وإدارة مخزون وتتبع للطلبات.",
    },
    {
      id: 5,
      title: "تطبيق إدارة المطاعم",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "نظام شامل لإدارة المطاعم يشمل إدارة الطلبات والمخزون والموظفين والتقارير.",
    },
    {
      id: 6,
      title: "مشروع تخرج - الذكاء الاصطناعي",
      category: "graduation",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "مشروع تخرج متقدم في مجال الذكاء الاصطناعي لتحليل وتصنيف البيانات الطبية.",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            أعمالنا
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto px-4 md:px-0">
            مجموعة مختارة من المشاريع التي قمنا بتنفيذها في مختلف المجالات
            والتخصصات
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 sm:px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
              activeFilter === "all"
                ? "bg-primary-500 text-white shadow-lg"
                : "bg-white text-secondary-700 hover:bg-primary-50 border border-primary-200"
            }`}
          >
            الكل
          </button>
          <button
            onClick={() => setActiveFilter("web")}
            className={`px-4 sm:px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
              activeFilter === "web"
                ? "bg-primary-500 text-white shadow-lg"
                : "bg-white text-secondary-700 hover:bg-primary-50 border border-primary-200"
            }`}
          >
            مواقع إلكترونية
          </button>
          <button
            onClick={() => setActiveFilter("mobile")}
            className={`px-4 sm:px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
              activeFilter === "mobile"
                ? "bg-primary-500 text-white shadow-lg"
                : "bg-white text-secondary-700 hover:bg-primary-50 border border-primary-200"
            }`}
          >
            تطبيقات جوال
          </button>
          <button
            onClick={() => setActiveFilter("graduation")}
            className={`px-4 sm:px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
              activeFilter === "graduation"
                ? "bg-primary-500 text-white shadow-lg"
                : "bg-white text-secondary-700 hover:bg-primary-50 border border-primary-200"
            }`}
          >
            مشاريع تخرج
          </button>
          <button
            onClick={() => setActiveFilter("network")}
            className={`px-4 sm:px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
              activeFilter === "network"
                ? "bg-primary-500 text-white shadow-lg"
                : "bg-white text-secondary-700 hover:bg-primary-50 border border-primary-200"
            }`}
          >
            محاكاة شبكات
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
