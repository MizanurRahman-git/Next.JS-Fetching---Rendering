export default function FeedbackCard({ feedback }) {
  const { message, date } = feedback;

  return (
    <div className="max-w-md bg-white shadow-md p-4 rounded-xl border">
      <p className="text-sm text-gray-500 mb-2">{new Date(date).toLocaleDateString()}, {new Date(date).toLocaleTimeString()}</p>

      <p className="text-gray-800 text-lg">{message}</p>

      <div className="flex gap-2 mt-3">
        <button className="px-3 py-1 bg-yellow-500 text-white rounded-md">
          Update
        </button>
        <button className="px-3 py-1 bg-red-600 text-white rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
}
