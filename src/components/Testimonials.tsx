import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  pattern: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "المدير التنفيذي",
      company: "شركة التقنية المتطورة",
      content:
        "كانت تجربتنا مع 1dev_s مثالية من جميع النواحي. قام الفريق بتطوير موقعنا الإلكتروني بشكل احترافي ومتميز، مع التركيز على تجربة المستخدم وسهولة الاستخدام. نوصي بشدة بخدماتهم.",
      pattern: "M0 0h100v100H0z M20 20h60v60H20z",
    },
    {
      id: 2,
      name: "سارة علي",
      role: "مؤسس",
      company: "ستارت أب للتجارة الإلكترونية",
      content:
        "ساعدتنا 1dev_s في إطلاق تطبيقنا للهواتف الذكية في وقت قياسي وبجودة عالية. كان الفريق متعاوناً ومرناً في التعامل مع التغييرات والتحديثات التي طلبناها خلال مراحل التطوير.",
      pattern: "M0 0h100v100H0z M30 30l40 40 M70 30l-40 40",
    },
    {
      id: 3,
      name: "محمد خالد",
      role: "طالب دراسات عليا",
      company: "جامعة التكنولوجيا",
      content:
        "كانت مساعدة 1dev_s في مشروع تخرجي لا تقدر بثمن. قدم الفريق توجيهاً ودعماً تقنياً ممتازاً مما ساعدني في إنجاز مشروع متميز نال إعجاب المشرفين والمقيمين.",
      pattern: "M0 0h100v100H0z M50 20a30 30 0 1 1 0 60 30 30 0 1 1 0-60z",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            ماذا يقول عملاؤنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto animate-fade-in-up">
            نفخر بآراء عملائنا وشهاداتهم حول تجربتهم في العمل معنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transform transition-all duration-500 ${
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-50"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-teal-400/50 transition-all duration-300 h-full relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="absolute -top-4 -left-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Quote size={40} className="text-teal-300" />
                </div>

                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>

                  <p className="text-lg mb-6 leading-relaxed text-blue-100">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center">
                    <div>
                      <h4 className="font-bold text-teal-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-200">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                <svg
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
                  viewBox="0 0 100 100"
                >
                  <path
                    d={testimonial.pattern}
                    className="fill-current text-teal-300"
                    style={{
                      animation:
                        "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    }}
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-teal-400 scale-125"
                  : "bg-white/30 hover:bg-white/50 hover:scale-110"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes pulse {
            0%, 100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.2;
            }
          }
        `,
        }}
      />
    </section>
  );
};

export default Testimonials;
