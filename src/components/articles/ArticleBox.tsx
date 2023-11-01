
export default function ArticleBox() {
  return (
    <li className="flex items-center py-4 space-x-3">
            <div className="flex-shrink-0">
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt=""
                />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                    <a href="#"></a>
                </p>
                <p className="text-sm text-gray-500">
                    <a href="#"></a>
                </p>
            </div>
            <div className="flex-shrink-0">
                <button 
                    type="button"
                    className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100 mr-1">
                    Delete
                </button>
                <button
                    type="button"
                    className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-green-700 hover:bg-rose-100"
                >
                    View
                </button>
            </div>
        </li>
  )
}
