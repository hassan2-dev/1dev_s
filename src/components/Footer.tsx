import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
          <div className="flex items-center group">
            <span className="ml-2 text-2xl font-bold  text-primary-500 group-hover:text-primary-600 transition-all duration-300">
              {"</1dev_s>"}
            </span>
          </div>
          <br/>
            <p className="text-gray-400 mb-6">
              نقدم حلولاً تقنية مبتكرة لتحويل أفكاركم إلى واقع رقمي ملموس
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook size={18} />
              </a>
        
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram size={18} />
              </a>
            
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">خدماتنا</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">أعمالنا</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">خدماتنا</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">تطوير المواقع الإلكترونية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">تطوير تطبيقات الجوال</a></li>
              <li><a href="#" className="hover:text-white transition-colors">مشاريع التخرج</a></li>
              <li><a href="#" className="hover:text-white transition-colors">محاكاة الشبكات</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الاستشارات التقنية</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">النشرة البريدية</h3>
            <p className="text-gray-400 mb-4">
              اشترك في نشرتنا البريدية للحصول على آخر الأخبار والعروض
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-r-none rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-500 w-full"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-teal-500 text-white rounded-l-none rounded-r-md hover:bg-teal-600 transition-colors"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>جميع الحقوق محفوظة &copy; {currentYear} 1dev_s</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;