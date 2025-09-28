type Props = { title: string };
export default function PlaceholderPage({ title }: Props) {
  return (
    <div className="min-h-[60vh] grid place-items-center bg-gray-50">
      <div className="text-center max-w-xl p-6">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p className="mt-2 text-gray-600">
          This page is ready to be filled. Tell us what content and layout you
          want, and we’ll build it to match your vision.
        </p>
      </div>
    </div>
  );
}
