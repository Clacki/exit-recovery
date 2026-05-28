import PageLayout from "@/components/layout/PageLayout";

export default function UserDetailPage() {
  return (
    <PageLayout>
      <section className="route-shell" aria-labelledby="user-detail-title">
        <h1 id="user-detail-title">User Detail</h1>
        <p>Route: /exiter/[userId]</p>
      </section>
    </PageLayout>
  );
}
