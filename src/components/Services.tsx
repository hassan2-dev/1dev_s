import React from "react";
import {
  Globe,
  Smartphone,
  GraduationCap,
  Network,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "تطوير المواقع الإلكترونية",
      description:
        "تصميم وتطوير مواقع إلكترونية احترافية، متجاوبة مع جميع الأجهزة، وسهلة الاستخدام مع تحسين محركات البحث.",
      icon: <Globe className="w-12 h-12 text-primary-500" />,
      features: [
        "تصميم متجاوب",
        "واجهات مستخدم عصرية",
        "تحسين محركات البحث",
        "أداء عالي",
      ],
    },
    {
      id: 2,
      title: "تطوير تطبيقات الجوال",
      description:
        "إنشاء تطبيقات جوال عالية الأداء لنظامي Android و iOS مع واجهات مستخدم سلسة وتجربة استخدام متميزة.",
      icon: <Smartphone className="w-12 h-12 text-primary-500" />,
      features: [
        "تطبيقات Android و iOS",
        "واجهات مستخدم سلسة",
        "أداء عالي",
        "تكامل مع الخدمات السحابية",
      ],
    },
    {
      id: 3,
      title: "مشاريع التخرج",
      description:
        "مساعدة الطلاب في تنفيذ مشاريع تخرج مبتكرة وعالية الجودة في مجالات البرمجة والتقنية المختلفة.",
      icon: <GraduationCap className="w-12 h-12 text-primary-500" />,
      features: [
        "إرشاد تقني",
        "تنفيذ مشاريع مبتكرة",
        "توثيق احترافي",
        "دعم فني مستمر",
      ],
    },
    {
      id: 4,
      title: "محاكاة الشبكات",
      description:
        "تطوير أنظمة محاكاة للشبكات وأنظمة تكنولوجيا المعلومات لأغراض تعليمية وتدريبية واختبارية.",
      icon: <Network className="w-12 h-12 text-primary-500" />,
      features: [
        "نماذج محاكاة متقدمة",
        "أنظمة تدريبية تفاعلية",
        "تحليل أداء الشبكات",
        "تخطيط البنية التحتية",
      ],
    },
    {
      id: 5,
      title: "تطوير المتاجر الإلكترونية",
      description:
        "إنشاء متاجر إلكترونية متكاملة مع أنظمة دفع آمنة وإدارة مخزون وتقارير مبيعات.",
      icon: <ShoppingBag className="w-12 h-12 text-primary-500" />,
      features: [
        "نظام دفع آمن",
        "إدارة المخزون",
        "تقارير المبيعات",
        "تجربة تسوق سلسة",
      ],
    },
    {
      id: 6,
      title: "أنظمة إدارة المطاعم",
      description:
        "تطوير أنظمة متكاملة لإدارة المطاعم والمقاهي مع أنظمة طلبات وتوصيل.",
      icon: <UtensilsCrossed className="w-12 h-12 text-primary-500" />,
      features: [
        "إدارة الطلبات",
        "نظام المطبخ",
        "إدارة المخزون",
        "تقارير المبيعات",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-radial from-primary-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            خدماتنا
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto px-4 md:px-0">
            نقدم مجموعة متكاملة من الخدمات التقنية والبرمجية لتلبية احتياجات
            عملائنا في مختلف المجالات
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
