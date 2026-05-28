import PageLayout from "@/components/layout/PageLayout";

export default function EditOngoingProjectPage() {
  return (
    <PageLayout>
      <section className="route-shell" aria-labelledby="exiting-edit-title">
        <h1 id="exiting-edit-title">Edit Ongoing Project</h1>
        <p>Route: /exiting/[projectId]/edit</p>
      </section>
    </PageLayout>
  );
}
