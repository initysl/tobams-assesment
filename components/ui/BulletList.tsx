import { BoltIcon } from "@/components/ui/icons";

/** The bolt-marked feature list shared by the split sections. */
export default function BulletList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <BoltIcon className="mt-0.5 size-5.5 shrink-0 text-plum" />
          <span className="text-[15px] text-slate-body sm:text-base lg:text-lg">{item}</span>
        </li>
      ))}
    </ul>
  );
}
