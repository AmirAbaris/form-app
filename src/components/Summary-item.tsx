interface SummaryItemProps {
  emoji: string;
  title: string;
  value: string;
}

export default function SummaryItem({ props }: { props: SummaryItemProps }) {
  return (
    <section className="h-72 w-full dark bg-secondary rounded-3xl p-8">
      <div className="text-5xl flex justify-start">{props.emoji}</div>
      <div className="flex items-center gap-x-1 text-xl font-medium mt-6">
        <span>{props.title}</span>
        {":"}
        <h1 className="break-all">{props.value}</h1>
      </div>
    </section>
  );
}
