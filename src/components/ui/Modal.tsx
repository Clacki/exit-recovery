"use client";

import type { ReactNode } from "react";
import { FiX } from "react-icons/fi";

import Button from "./Button";
import { cn } from "./styles";

type ModalProps = {
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
};

export default function Modal({ children, className, footer, isOpen, onClose, title }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex min-h-dvh items-center justify-center px-5 py-8">
      <button
        type="button"
        className="absolute inset-0 bg-black/75"
        aria-label="모달 닫기"
        onClick={onClose}
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        className={cn(
          "relative max-h-[calc(100dvh-4rem)] w-full max-w-[600px] overflow-y-auto rounded-[14px] bg-white p-6 shadow-2xl sm:p-8",
          className,
        )}
      >
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-4 top-4 h-10 w-10 px-0"
          aria-label="모달 닫기"
          onClick={onClose}
        >
          <FiX aria-hidden="true" />
        </Button>
        {title ? (
          <h2 id="modal-title" className="mb-8 pr-10 text-center text-2xl font-black text-gray-950 sm:text-3xl">
            {title}
          </h2>
        ) : null}
        <div>{children}</div>
        {footer ? <div className="mt-8 flex flex-wrap justify-end gap-3">{footer}</div> : null}
      </section>
    </div>
  );
}
