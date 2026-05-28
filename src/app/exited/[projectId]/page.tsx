import PageLayout from "@/components/layout/PageLayout";

export default function CompletedProjectDetailPage() {
  return (
    <PageLayout>
      <section className="route-shell" aria-labelledby="exited-detail-title">
        <h1 id="exited-detail-title">Completed Project Detail</h1>
        <p>Route: /exited/[projectId]</p>
      </section>
    </PageLayout>
  );
}
