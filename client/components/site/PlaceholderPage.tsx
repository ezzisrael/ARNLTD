type Props = { title: string };
export default function PlaceholderPage({ title }: Props) {
  return (
    <div className="min-h-[60vh] grid place-items-center bg-gray-50">
      <div className="text-center max-w-xl p-6">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p className="mt-2 text-gray-600">
          Israel is working on it.
        </p>
      </div>
    </div>
  );
}
