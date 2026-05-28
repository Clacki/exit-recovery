import PageLayout from "@/components/layout/PageLayout";

export default function SearchPage() {
  return (
    <PageLayout>
      <section className="route-shell" aria-labelledby="search-title">
        <h1 id="search-title">Search</h1>
        <p>Route: /search</p>
      </section>
    </PageLayout>
  );
}
