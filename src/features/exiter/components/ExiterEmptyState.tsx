import { FiUsers } from "react-icons/fi";

export default function ExiterEmptyState() {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-[14px] border border-dashed border-gray-300 bg-[#f8f8f8] px-6 py-14 text-center">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <FiUsers size={24} aria-hidden="true" />
      </div>
      <h2 className="text-2xl font-black text-gray-950">등록된 exiter가 없습니다</h2>
      <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-gray-500">
        함께 프로젝트를 실행할 멤버 정보가 준비되면 이곳에서 바로 확인할 수 있습니다.
      </p>
    </div>
  );
}
