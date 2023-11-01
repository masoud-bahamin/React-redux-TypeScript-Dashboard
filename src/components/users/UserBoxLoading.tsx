

export default function UserBoxLoading() {
  return (
    <li className="flex items-center py-4 space-x-3 animate-pulse">
      <div className="flex-shrink-0">
        <div
          className="h-8 w-8 rounded-full bg-gray-300"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium bg-gray-300 h-3 mb-3 rounded-lg"> </p>
        <p className="text-sm bg-gray-300 h-3 rounded-lg"></p>
      </div>
    </li>
  )
}
