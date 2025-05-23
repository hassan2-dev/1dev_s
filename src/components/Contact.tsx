import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, ArrowUpRight } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
            نحن هنا للإجابة على استفساراتكم ومناقشة مشاريعكم. تواصلوا معنا وسنرد
            عليكم في أقرب وقت ممكن
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              معلومات الاتصال
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 sm:p-3 rounded-full">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-900 mb-1">العنوان</h4>
                  <p className="text-gray-600">العراق, البصرة</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-900 mb-1">الهاتف</h4>
                  <p dir="ltr" className="text-gray-600">+964 785 650 5925</p>
                  <a
                    href="https://wa.me/9647856505925"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-green-600 hover:text-green-700"
                  >
                    <svg
                      className="w-5 h-5 "
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    تواصل عبر واتساب{" "}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-900 mb-1">
                    البريد الإلكتروني
                  </h4>
                  <p className="text-gray-600">hassan.21.adnan@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ساعات العمل
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">الأحد - الخميس:</span>
                  <span className="font-medium">9:00 ص - 5:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الجمعة:</span>
                  <span className="font-medium">مغلق</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">السبت:</span>
                  <span className="font-medium">10:00 ص - 2:00 م</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-gray-700 font-medium mb-2"
                >
                  الخدمة المطلوبة
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">اختر الخدمة</option>
                  <option value="web">تطوير مواقع إلكترونية</option>
                  <option value="mobile">تطوير تطبيقات جوال</option>
                  <option value="graduation">مشاريع تخرج</option>
                  <option value="network">محاكاة شبكات</option>
                  <option value="other">خدمة أخرى</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 flex items-center justify-center rounded-md text-white font-medium transition-colors ${
                    isSubmitting
                      ? "bg-gray-400"
                      : "bg-blue-900 hover:bg-blue-800"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      جاري الإرسال...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      <span>إرسال الرسالة</span>
                      <Send className="w-4 h-4 mr-2" />
                    </span>
                  )}
                </button>
              </div>

              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                  تم إرسال رسالتك بنجاح. سنتواصل معك في أقرب وقت ممكن.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
