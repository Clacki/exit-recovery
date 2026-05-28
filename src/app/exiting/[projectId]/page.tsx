import PageLayout from "@/components/layout/PageLayout";

export default function OngoingProjectDetailPage() {
  return (
    <PageLayout>
      <section className="route-shell" aria-labelledby="exiting-detail-title">
        <h1 id="exiting-detail-title">Ongoing Project Detail</h1>
        <p>Route: /exiting/[projectId]</p>
      </section>
    </PageLayout>
  );
}
