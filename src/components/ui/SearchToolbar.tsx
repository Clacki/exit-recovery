import type { ChangeEventHandler } from "react";
import { FiFilter, FiSearch, FiSliders } from "react-icons/fi";

import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

type SearchToolbarProps = {
  filterLabel: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFilterClick?: () => void;
  onSortClick?: () => void;
  searchLabel?: string;
  searchPlaceholder: string;
  sortLabel: string;
  value?: string;
};

export default function SearchToolbar({
  filterLabel,
  onChange,
  onFilterClick,
  onSortClick,
  searchLabel = "검색",
  searchPlaceholder,
  sortLabel,
  value,
}: SearchToolbarProps) {
  return (
    <Card
      variant="surface"
      className="grid gap-3 rounded-[14px] p-4 shadow-[0_12px_36px_rgba(17,24,39,0.06)] lg:grid-cols-[1fr_auto_auto]"
    >
      <div className="relative">
        <span className="sr-only">{searchLabel}</span>
        <FiSearch
          className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-gray-400"
          aria-hidden="true"
        />
        <Input
          type="search"
          readOnly={!onChange}
          value={value}
          onChange={onChange}
          placeholder={searchPlaceholder}
          aria-label={searchLabel}
          className="h-12 rounded-md pl-11 text-gray-500 sm:h-12 sm:px-4 sm:pl-11 sm:text-sm"
        />
      </div>
      <Button type="button" variant="outline" size="md" onClick={onFilterClick} aria-label={`${filterLabel} 필터`}>
        <FiFilter aria-hidden="true" />
        {filterLabel}
      </Button>
      <Button type="button" variant="outline" size="md" onClick={onSortClick} aria-label="정렬">
        <FiSliders aria-hidden="true" />
        {sortLabel}
      </Button>
    </Card>
  );
}
