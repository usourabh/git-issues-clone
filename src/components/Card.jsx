export const Card = ({ username, createdAt, description }) => {
  return (
    <div className="flex flex-col border border-neutral-500">
      <div className="flex items-center gap-2 text-sm font-semibold w-full px-4 py-2 bg-neutral-600 border-b border-neutral-500">
        <span className="text-blue-400">{username}</span>
        <span className="text-neutral-200">{createdAt}</span>
      </div>
      <p className="p-4">{description}</p>
    </div>
  );
};
