import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "exiter", href: "/exiter" },
  { label: "exiting", href: "/exiting" },
  { label: "exited", href: "/exited" },
  { label: "검색", href: "/search" },
];

const policyItems = ["이용약관", "고객문의", "개인정보 처리 방침"];

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] text-gray-500">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:justify-between lg:px-10 lg:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="EXIT 홈">
            <Image src="/images/common/logo.svg" alt="EXIT" width={90} height={34} className="h-9 w-auto" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6">
            팀원들과 함께 프로젝트를 시작하고, 진행 중인 아이디어를 결과물로 완성하는 프로젝트 매칭 서비스입니다.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:min-w-[620px]">
          <div>
            <h2 className="text-sm font-black uppercase text-gray-900">Menu</h2>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-base font-bold">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-emerald-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase text-gray-900">Info</h2>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-base font-bold">
              {policyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 text-sm leading-6 sm:col-span-2">
            <p>
              <strong className="mr-3 font-bold text-gray-600">(주)I6</strong>
              서울특별시 구로구 디지털로 지밸리 비즈프라자
            </p>
            <p>
              <strong className="mr-3 font-bold text-gray-600">E-Mail</strong>
              i6.project.exit@gmail.com
            </p>
            <p className="pt-4 text-xs font-bold uppercase text-gray-400">Copyright © I6. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
