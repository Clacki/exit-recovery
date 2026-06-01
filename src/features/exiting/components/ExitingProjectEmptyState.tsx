import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";

export default function ExitingProjectEmptyState() {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white px-6 py-14 text-center">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <FiPlusCircle size={24} aria-hidden="true" />
      </div>
      <h2 className="text-2xl font-black text-gray-950">진행 중인 프로젝트가 없습니다</h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
        아직 함께 실행 중인 EXIT 프로젝트가 없어요. 새 프로젝트가 시작되면 이곳에서 바로 확인할 수 있습니다.
      </p>
      <Link
        href="/exiting/write"
        className="mt-7 inline-flex items-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-600"
      >
        프로젝트 만들기
      </Link>
    </div>
  );
}
