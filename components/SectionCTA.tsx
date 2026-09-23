import { useState } from 'react';

interface SectionCTAProps {
  lang: "zh-HK" | "en";
}

const SectionCTA = ({ lang }: SectionCTAProps) => {
  const [showForm, setShowForm] = useState(false);
  
  const copy = {
    en: {
      title: 'Want to work together?',
      subtitle: 'Let\'s discuss how we can help your brand enter and grow in Hong Kong and China markets.',
      cta: 'Let\'s Talk'
    },
    'zh-HK': {
      title: '想與我們合作？',
      subtitle: '讓我們討論如何協助您的品牌進入並拓展香港及中國市場。',
      cta: '聯絡我們'
    }
  };

  // 確保lang是有效的鍵名
  const validLang = lang in copy ? lang : 'en';
  const content = copy[validLang];

  const handleOpenForm = () => {
    setShowForm(true);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };

  const handleCloseForm = () => {
    setShowForm(false);
    document.body.style.overflow = 'unset'; // 恢复背景滚动
  };

  return (
    <>
      <section id="connect" className="bg-[#101010] px-4 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="/tfv-template/collab-left.jpg" alt="" className="aspect-[0.75] h-full w-full object-cover" />
            <img src="/tfv-template/collab-right.jpg" alt="" className="mt-12 aspect-[0.75] h-full w-full object-cover" />
          </div>
          <div className="lg:pl-8">
            <h2 className="font-serif-brand text-5xl leading-tight tracking-normal md:text-7xl">
              {content.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/68 max-w-xl">
              {content.subtitle}
            </p>
            <button 
              onClick={handleOpenForm}
              className="mt-10 inline-flex items-center gap-3 border border-white bg-white px-5 py-3 text-sm font-semibold tracking-[0.18em] text-neutral-950 transition hover:bg-transparent hover:text-white cursor-pointer"
            >
              {content.cta}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Microsoft Forms Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
              aria-label="Close"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-700 hover:text-gray-900" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Microsoft Forms Iframe */}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://forms.cloud.microsoft/r/f5G1sZteJD?embed=true" 
              frameBorder="0" 
              marginWidth={0} 
              marginHeight={0} 
              style={{ border: 'none', width: '100%', height: '100%' }} 
              allowFullScreen
            >
            </iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionCTA;
