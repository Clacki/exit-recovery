import Link from "next/link";

const categories = [
  { label: "공유 서비스", image: "/images/main/category-community.png" },
  { label: "여행", image: "/images/main/category-travel.png" },
  { label: "커머스", image: "/images/main/category-commerce.png" },
  { label: "O2O", image: "/images/main/category-o2o.png" },
  { label: "엔터테인먼트", image: "/images/main/category-entertainment.png" },
  { label: "모빌리티", image: "/images/main/category-mobility.png" },
  { label: "뷰티/패션", image: "/images/main/category-beauty-fashion.png" },
  { label: "헬스/스포츠", image: "/images/main/category-health-sports.png" },
];

export default function MainCategorySection() {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-lg font-extrabold text-[#3ebd5d]">category</p>
            <h2 className="text-3xl font-black leading-tight text-gray-950 sm:text-4xl">관심 카테고리</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.label}
              href="/exiting"
              className="group relative flex h-32 items-end overflow-hidden rounded-lg bg-white p-4 text-base font-black text-white ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,24,39,0.1)]"
            >
              <span
                className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.05)_0%,rgba(17,24,39,0.72)_100%)]" />
              <span className="relative">{category.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
