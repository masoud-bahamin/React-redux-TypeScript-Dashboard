import { useAppDispatch } from '../../Hooks/ReduxHooks'
import { removeUser } from '../../Redux/store/users'
import Swal from 'sweetalert2'


export default function UserBox({ firstname, lastname, email, _id }: UserType) {

    const dispatch = useAppDispatch()

    const removeHandler = () => {
        Swal.fire({
            title: "Are you sure?",
            confirmButtonColor: "red",
            confirmButtonText: "DELETE",
            showCancelButton: true,
        }).then(res => {
            if (res.isConfirmed) {
                dispatch(removeUser(_id))
            }
        })

    }

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
                    <a href="#">{firstname} {lastname}</a>
                </p>
                <p className="text-sm text-gray-500">
                    <a href="#">{email}</a>
                </p>
            </div>
            <div className="flex-shrink-0">
                <button onClick={removeHandler}
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
