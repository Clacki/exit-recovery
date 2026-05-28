import PageLayout from "@/components/layout/PageLayout";

export default function ActiveProjectPage() {
  return (
    <PageLayout>
      <section className="route-shell" aria-labelledby="active-project-title">
        <h1 id="active-project-title">Active Project</h1>
        <p>Route: /currentProject/[projectId]</p>
      </section>
    </PageLayout>
  );
}
