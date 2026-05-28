import PageLayout from "@/components/layout/PageLayout";

export default function MyPage() {
  return (
    <PageLayout>
      <section className="route-shell" aria-labelledby="my-page-title">
        <h1 id="my-page-title">My Page</h1>
        <p>Route: /myPage</p>
      </section>
    </PageLayout>
  );
}
