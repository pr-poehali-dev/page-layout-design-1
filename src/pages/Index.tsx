import React from 'react';

const Block = ({ className = '' }: { className?: string }) => (
  <div className={`bg-[#2d3748] rounded ${className}`} />
);

const TextLine = ({ w = 'w-full', h = 'h-2.5' }: { w?: string; h?: string }) => (
  <div className={`${w} ${h} bg-[#cfd5de] rounded`} />
);

const ImageBox = ({ className = '' }: { className?: string }) => (
  <div className={`bg-[#3d4a5c] rounded flex items-center justify-center ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6b7a8d" strokeWidth="1.5" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="#6b7a8d" />
      <path d="M3 16l5-5 4 4 3-3 6 6" stroke="#6b7a8d" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

const PlayBox = ({ className = '' }: { className?: string }) => (
  <div className={`bg-[#3d4a5c] rounded flex items-center justify-center ${className}`}>
    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
      <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[13px] border-transparent border-l-white ml-1" />
    </div>
  </div>
);

const Window = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 ${className}`}>
    <div className="bg-[#e8eaed] px-3 py-2 flex items-center gap-2 border-b border-gray-300">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#bbbfc7]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#bbbfc7]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#bbbfc7]" />
      </div>
      <div className="flex-1 bg-white rounded h-3.5 mx-2" />
    </div>
    {children}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-[#9ca3b0] flex items-center justify-center p-8">
      <div className="grid grid-cols-3 gap-5 max-w-5xl w-full">

        {/* 1 — Video hero */}
        <Window>
          <div className="p-3 space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <PlayBox className="col-span-2 h-24" />
              <div className="space-y-2">
                <ImageBox className="h-[44px]" />
                <ImageBox className="h-[44px]" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Block className="h-6" />
              <Block className="h-6" />
              <Block className="h-6" />
            </div>
            <div className="space-y-1.5 pt-1">
              <TextLine w="w-full" />
              <TextLine w="w-5/6" />
              <TextLine w="w-4/6" />
              <TextLine w="w-full" />
            </div>
            <Block className="h-6 w-1/2 mx-auto mt-1" />
          </div>
        </Window>

        {/* 2 — Search + cards */}
        <Window>
          <div className="p-3 space-y-2">
            <Block className="h-4 w-3/4" />
            <Block className="h-3 w-1/2" />
            <div className="flex gap-2 pt-1">
              <div className="flex-1 h-7 border-2 border-[#3d4a5c] rounded" />
              <Block className="h-7 w-8" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <ImageBox className="h-14" />
              <ImageBox className="h-14" />
              <ImageBox className="h-14" />
            </div>
            <Block className="h-1.5 w-full mt-1" />
            <Block className="h-10 w-full" />
            <div className="space-y-1 pt-1">
              <TextLine w="w-2/3" />
              <TextLine w="w-full" />
              <TextLine w="w-1/2" />
            </div>
          </div>
        </Window>

        {/* 3 — Slider */}
        <Window>
          <div className="p-3 space-y-2">
            <div className="relative">
              <ImageBox className="h-24 w-full" />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 bg-white/80 rounded-full flex items-center justify-center text-xs text-gray-600">‹</div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 bg-white/80 rounded-full flex items-center justify-center text-xs text-gray-600">›</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0,1,2].map(i => (
                <div key={i}>
                  <Block className="h-12" />
                  <div className="space-y-1 mt-1">
                    <TextLine w="w-full" h="h-1.5" />
                    <TextLine w="w-4/5" h="h-1.5" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 pt-1">
              <Block className="h-6 flex-1" />
              <Block className="h-6 flex-1" />
              <Block className="h-6 flex-1" />
            </div>
          </div>
        </Window>

        {/* 4 — Article */}
        <Window>
          <div className="p-3 space-y-2">
            <Block className="h-16 w-full" />
            <Block className="h-4 w-2/3" />
            <Block className="h-3 w-1/2" />
            <div className="flex gap-2 pt-1">
              <Block className="h-5 w-12" />
              <Block className="h-5 w-16" />
            </div>
            <div className="space-y-1.5 pt-1">
              <TextLine w="w-full" />
              <TextLine w="w-full" />
              <TextLine w="w-5/6" />
            </div>
            <div className="flex gap-2 items-center pt-1">
              <ImageBox className="h-10 w-10 shrink-0" />
              <div className="space-y-1 flex-1">
                <TextLine w="w-full" h="h-1.5" />
                <TextLine w="w-3/4" h="h-1.5" />
                <TextLine w="w-full" h="h-1.5" />
              </div>
            </div>
            <Block className="h-6 w-full" />
            <div className="flex gap-2">
              <Block className="h-6 flex-1" />
              <Block className="h-6 flex-1" />
              <Block className="h-6 flex-1" />
            </div>
          </div>
        </Window>

        {/* 5 — Map + content */}
        <Window>
          <div className="p-3 space-y-2">
            <Block className="h-4 w-2/3" />
            <Block className="h-3 w-1/3" />
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="space-y-1.5">
                <TextLine w="w-full" />
                <TextLine w="w-4/5" />
                <TextLine w="w-full" />
                <TextLine w="w-3/5" />
                <TextLine w="w-full" />
                <TextLine w="w-2/3" />
              </div>
              <div
                className="h-24 rounded"
                style={{ background: 'repeating-conic-gradient(#3d4a5c 0% 25%, #4a5568 0% 50%) 0 0 / 8px 8px' }}
              />
            </div>
            <div className="space-y-1.5 pt-1">
              <TextLine w="w-full" />
              <TextLine w="w-5/6" />
              <TextLine w="w-full" />
            </div>
            <div className="flex gap-2 pt-1">
              <Block className="h-6 flex-1" />
              <Block className="h-6 w-6" />
              <Block className="h-6 w-6" />
              <Block className="h-6 w-6" />
            </div>
          </div>
        </Window>

        {/* 6 — News layout */}
        <Window>
          <div className="p-3 space-y-2">
            <Block className="h-3 w-1/3" />
            <div className="grid grid-cols-2 gap-2">
              <ImageBox className="h-20 col-span-2" />
              <div className="space-y-1.5">
                <Block className="h-2.5 w-4/5" />
                <TextLine w="w-full" />
                <TextLine w="w-4/5" />
              </div>
              <div className="space-y-1.5">
                <Block className="h-2.5 w-4/5" />
                <TextLine w="w-full" />
                <TextLine w="w-3/4" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1 pt-1">
              {[0,1,2,3].map(i => <ImageBox key={i} className="h-9" />)}
            </div>
            <div className="space-y-1">
              <TextLine w="w-full" />
              <TextLine w="w-3/4" />
            </div>
            <div className="grid grid-cols-4 gap-1">
              {[0,1,2,3].map(i => <ImageBox key={i} className="h-9" />)}
            </div>
          </div>
        </Window>

        {/* 7 — Two cols big */}
        <Window>
          <div className="p-3 space-y-2">
            <div className="flex justify-between items-center">
              <Block className="h-3 w-1/2" />
              <div className="flex gap-1">
                <Block className="h-3 w-3" />
                <Block className="h-3 w-3" />
                <Block className="h-3 w-3" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <ImageBox className="h-20" />
              <ImageBox className="h-20" />
            </div>
            <div className="grid grid-cols-4 gap-1">
              {[0,1,2,3].map(i => <ImageBox key={i} className="h-10" />)}
            </div>
            <div className="space-y-1 pt-1">
              <TextLine w="w-full" />
              <TextLine w="w-5/6" />
              <TextLine w="w-4/6" />
            </div>
            <div className="grid grid-cols-4 gap-1 pt-1">
              {[0,1,2,3].map(i => <ImageBox key={i} className="h-10" />)}
            </div>
          </div>
        </Window>

        {/* 8 — Grid gallery */}
        <Window>
          <div className="p-3 space-y-2">
            <div className="grid grid-cols-3 gap-1.5" style={{ gridTemplateRows: 'auto auto' }}>
              <ImageBox className="col-span-2 row-span-2 h-24" />
              <ImageBox className="h-[44px]" />
              <ImageBox className="h-[44px]" />
            </div>
            <div className="space-y-1 pt-1">
              <TextLine w="w-full" />
              <TextLine w="w-4/5" />
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[0,1,2].map(i => <ImageBox key={i} className="h-11" />)}
            </div>
            <div className="space-y-1">
              <TextLine w="w-full" />
              <TextLine w="w-3/5" />
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[0,1,2].map(i => <ImageBox key={i} className="h-11" />)}
            </div>
          </div>
        </Window>

        {/* 9 — Lightbox */}
        <Window>
          <div className="p-3 space-y-2">
            <div className="relative">
              <div className="grid grid-cols-3 gap-2">
                <ImageBox className="col-span-1 h-32" />
                <div className="col-span-2 grid grid-cols-2 gap-1.5">
                  {[0,1,2,3].map(i => <ImageBox key={i} className="h-[58px]" />)}
                </div>
              </div>
              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-5 h-5 bg-white/80 rounded-full flex items-center justify-center text-xs text-gray-600">‹</div>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 bg-white/80 rounded-full flex items-center justify-center text-xs text-gray-600">›</div>
            </div>
            <div className="flex justify-center gap-1.5 pt-1">
              <div className="w-2 h-2 rounded-full bg-[#3d4a5c]" />
              <div className="w-2 h-2 rounded-full bg-[#cfd5de]" />
              <div className="w-2 h-2 rounded-full bg-[#cfd5de]" />
            </div>
            <div className="grid grid-cols-4 gap-1.5 pt-1">
              {[0,1,2,3].map(i => <ImageBox key={i} className="h-10" />)}
            </div>
          </div>
        </Window>

      </div>
    </div>
  );
};

export default Index;
