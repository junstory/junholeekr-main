// src/app/page.tsx
export default function HomePage() {
  return (
    // 눈에 확 띄는 클래스로 테스트해봅니다.
    // 화면 전체가 빨갛게 변해야 합니다.
    <main className="min-h-screen bg-red-500 flex items-center justify-center">
      <h1 className="text-white text-5xl font-bold">
        CSS 적용 테스트
      </h1>
    </main>
  );
}