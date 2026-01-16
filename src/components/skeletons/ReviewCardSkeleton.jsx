const ReviewCardSkeleton = () => {
  return (
    <div className="max-w-md animate-pulse rounded-xl border border-gray-200 bg-white p-5">
      {/* User */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-300" />
        <div className="space-y-2">
          <div className="h-4 w-32 rounded bg-gray-300" />
          <div className="h-3 w-24 rounded bg-gray-200" />
        </div>
      </div>

      {/* Stars */}
      <div className="mt-4 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-4 rounded bg-gray-300" />
        ))}
      </div>

      {/* Text */}
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-gray-200" />
        <div className="h-3 w-5/6 rounded bg-gray-200" />
        <div className="h-3 w-4/6 rounded bg-gray-200" />
      </div>

      {/* Button */}
      <div className="mt-5 h-8 w-24 rounded-full bg-gray-300" />
    </div>
  );
};

export default ReviewCardSkeleton;
