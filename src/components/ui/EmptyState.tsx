import type { ReactNode } from "react";

type EmptyStateProps = {
  action?: ReactNode;
  description: string;
  icon?: ReactNode;
  title: string;
};

export default function EmptyState({ action, description, icon, title }: EmptyStateProps) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-[14px] border border-dashed border-gray-300 bg-white px-6 py-14 text-center">
      {icon ? (
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-[#3ebd5d]">
          {icon}
        </div>
      ) : null}
      <h2 className="text-2xl font-black text-gray-950">{title}</h2>
      <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-gray-500">{description}</p>
      {action ? <div className="mt-7">{action}</div> : null}
    </div>
  );
}
