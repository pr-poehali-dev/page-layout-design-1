import React from 'react';

const Block = ({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <div className={`bg-[#2d3748] rounded ${className}`} style={style} />
);

const TextLines = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className="h-2.5 bg-[#cfd5de] rounded" style={{ width: i === lines - 1 ? '60%' : '100%' }} />
    ))}
  </div>
);

const ImageBox = ({ className = '' }: { className?: string }) => (
  <div className={`bg-[#3d4a5c] rounded flex items-center justify-center ${className}`}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6b7a8d" strokeWidth="1.5" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="#6b7a8d" />
      <path d="M3 16l5-5 4 4 3-3 6 6" stroke="#6b7a8d" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

const TopBar = () => (
  <div className="border-b border-gray-200 px-8 py-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <Block className="h-5 w-5 rounded-full" />
      <Block className="h-4 w-36" />
    </div>
    <Block className="h-4 w-44" />
    <div className="flex items-center gap-3">
      <Block className="h-9 w-16 rounded-full" />
      <Block className="h-9 w-40 rounded-full" />
    </div>
  </div>
);

const NavBar = () => (
  <div className="border-b border-gray-200 px-8 py-4 flex items-center justify-center gap-8">
    {[80, 60, 60, 80, 110, 52, 68].map((w, i) => (
      <div key={i} className="flex items-center gap-1.5">
        <Block className="h-4 w-4 rounded" />
        <Block className="h-3" style={{ width: w }} />
      </div>
    ))}
  </div>
);

const Breadcrumb = ({ depth = 1 }: { depth?: number }) => (
  <div className="bg-gray-50 px-8 py-3 flex gap-2 items-center">
    {Array.from({ length: depth }).map((_, i) => (
      <React.Fragment key={i}>
        {i > 0 && <div className="h-3 w-2 bg-[#cfd5de] rounded" />}
        <Block className="h-3 w-16" />
      </React.Fragment>
    ))}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-[#e8eaed] space-y-3 p-4">

      {/* ====== СТРАНИЦА 1: Главная ====== */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <TopBar />
        <NavBar />
        <Breadcrumb depth={1} />

        {/* Hero */}
        <div className="px-8 py-12 grid grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <Block className="h-9 w-3/4" />
            <Block className="h-14 w-full" />
            <Block className="h-6 w-5/6" />
            <Block className="h-5 w-3/5" />
            <div className="flex gap-4 pt-3">
              <Block className="h-12 w-44 rounded-full" />
              <Block className="h-12 w-32 rounded-full" style={{ background: 'transparent', border: '2px solid #2d3748' }} />
            </div>
          </div>
          <ImageBox className="h-72 w-full rounded-2xl" />
        </div>

        {/* 3 карточки */}
        <div className="px-8 pb-10 grid grid-cols-3 gap-5">
          {[0, 1, 2].map(i => (
            <div key={i} className="border-2 border-gray-200 rounded-2xl p-6 space-y-3">
              <Block className="h-12 w-12 rounded-xl" />
              <Block className="h-4 w-3/4" />
              <TextLines lines={3} />
            </div>
          ))}
        </div>
      </div>

      {/* ====== СТРАНИЦА 2: Услуги ====== */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <TopBar />
        <NavBar />
        <Breadcrumb depth={2} />

        {/* Заголовок */}
        <div className="px-8 pt-10 pb-6">
          <Block className="h-9 w-1/3 mb-4" />
          <TextLines lines={2} />
        </div>

        {/* Сетка услуг 4 колонки */}
        <div className="px-8 pb-10 grid grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-5 space-y-3">
              <Block className="h-11 w-11 rounded-xl" />
              <Block className="h-4 w-4/5" />
              <TextLines lines={2} />
            </div>
          ))}
        </div>
      </div>

      {/* ====== СТРАНИЦА 3: Врачи ====== */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <TopBar />
        <NavBar />
        <Breadcrumb depth={2} />

        {/* Заголовок + фильтры */}
        <div className="px-8 pt-10 pb-6 flex justify-between items-end">
          <Block className="h-9 w-1/4" />
          <div className="flex gap-3">
            {[96, 112, 88].map((w, i) => (
              <Block key={i} className="h-9 rounded-full" style={{ width: w }} />
            ))}
          </div>
        </div>

        {/* Карточки врачей */}
        <div className="px-8 pb-10 grid grid-cols-4 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <ImageBox className="h-44 w-full rounded-none" />
              <div className="p-4 space-y-2">
                <Block className="h-4 w-4/5" />
                <Block className="h-3 w-3/5" />
                <TextLines lines={2} />
                <Block className="h-9 w-full rounded-full mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== СТРАНИЦА 4: Акции ====== */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <TopBar />
        <NavBar />
        <Breadcrumb depth={2} />

        {/* Баннер */}
        <div className="px-8 pt-10 pb-6">
          <div className="rounded-2xl overflow-hidden grid grid-cols-2">
            <div className="bg-[#3d4a5c] p-10 space-y-4">
              <Block className="h-8 w-3/4" style={{ background: '#4a5a70' }} />
              <Block className="h-5 w-2/3" style={{ background: '#4a5a70' }} />
              <Block className="h-11 w-40 rounded-full mt-4" style={{ background: '#5a6a80' }} />
            </div>
            <ImageBox className="h-44 rounded-none" />
          </div>
        </div>

        {/* Карточки акций */}
        <div className="px-8 pb-10 grid grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <ImageBox className="h-36 w-full rounded-none" />
              <div className="p-4 space-y-2">
                <Block className="h-4 w-4/5" />
                <TextLines lines={2} />
                <Block className="h-9 w-full rounded-full mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== СТРАНИЦА 5: Контакты ====== */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <TopBar />
        <NavBar />
        <Breadcrumb depth={2} />

        <div className="px-8 py-10 grid grid-cols-2 gap-10">
          {/* Контактная инфо */}
          <div className="space-y-6">
            <Block className="h-9 w-1/2" />
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="flex items-start gap-4">
                <Block className="h-10 w-10 rounded-xl shrink-0" />
                <div className="space-y-2 flex-1">
                  <Block className="h-3.5 w-1/2" />
                  <TextLines lines={2} />
                </div>
              </div>
            ))}
            <Block className="h-12 w-44 rounded-full mt-4" />
          </div>

          {/* Карта */}
          <div
            className="h-80 rounded-2xl"
            style={{ background: 'repeating-conic-gradient(#3d4a5c 0% 25%, #4a5568 0% 50%) 0 0 / 12px 12px' }}
          />
        </div>
      </div>

    </div>
  );
};

export default Index;
