import React from 'react';
import { Code2, Briefcase, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { id: 1, value: '5+', label: 'سنوات خبرة', icon: <Briefcase className="w-6 h-6 text-teal-500" /> },
    { id: 2, value: '100+', label: 'مشروع منجز', icon: <Code2 className="w-6 h-6 text-teal-500" /> },
    { id: 3, value: '50+', label: 'عميل سعيد', icon: <Users className="w-6 h-6 text-teal-500" /> },
    { id: 4, value: '10+', label: 'جوائز وتكريمات', icon: <Award className="w-6 h-6 text-teal-500" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">من نحن</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن فريق من المطورين والمصممين المحترفين الذين يشغفون بتقديم حلول تقنية مبتكرة وعالية الجودة
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">قصتنا</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              تأسست شركة 1dev_s بهدف تقديم خدمات تقنية متميزة في مجالات تطوير المواقع الإلكترونية وتطبيقات الجوال ومشاريع التخرج وحلول محاكاة الشبكات. نعمل بشغف واحترافية لتحويل أفكار عملائنا إلى واقع رقمي ملموس.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              يتميز فريقنا بخبرة واسعة وشغف كبير في مجال التكنولوجيا، ونسعى دائماً لمواكبة أحدث التقنيات والاتجاهات في عالم البرمجة والتصميم. نحن نؤمن بأن النجاح يأتي من خلال التعاون الوثيق مع عملائنا وفهم احتياجاتهم وتطلعاتهم.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="w-full aspect-video bg-gradient-to-br from-blue-600 to-teal-500 rounded-full absolute blur-3xl opacity-20 transform -translate-x-10 translate-y-10"></div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our Team" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500 rounded-lg shadow-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">رضا العملاء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;