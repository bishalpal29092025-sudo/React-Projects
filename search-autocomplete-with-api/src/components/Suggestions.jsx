const Suggestions = ({
  data,
  handleClick,
  activeIndex,
  searchParam,
}) => {
  // 🔥 Highlight matching text
  const highlightText = (text) => {
    if (!searchParam) return text;

    const parts = text.split(
      new RegExp(`(${searchParam})`, "gi")
    );

    return parts.map((part, index) =>
      part.toLowerCase() === searchParam.toLowerCase() ? (
        <span key={index} className="text-blue-500 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <ul className="absolute w-full bg-white border rounded mt-1 max-h-60 overflow-y-auto shadow-md z-10">
      {data.map((user, index) => (
        <li
          key={user.id}
          onClick={() => handleClick(user)}
          className={`p-3 cursor-pointer ${
            index === activeIndex
              ? "bg-blue-100"
              : "hover:bg-gray-100"
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <img
              src={`https://i.pravatar.cc/40?u=${user.id}`}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />

            {/* Info */}
            <div className="flex flex-col">
              <span className="font-semibold">
                {highlightText(user.name)}
              </span>
              <span className="text-sm text-gray-500">
                {user.email}
              </span>
              <span className="text-xs text-gray-400">
                @{user.username}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;