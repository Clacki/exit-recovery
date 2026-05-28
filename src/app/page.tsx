import PageLayout from "@/components/layout/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <section className="home-section" aria-labelledby="home-title">
        <h1 id="home-title">EXIT 프로젝트 복구</h1>
        <p>Next.js 15 기반으로 기존 EXIT 프로젝트를 복구하고 개선합니다.</p>
      </section>
    </PageLayout>
  );
}
