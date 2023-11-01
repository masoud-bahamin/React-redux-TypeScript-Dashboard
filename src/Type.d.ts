interface UserType {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    city: string;
    age: number
}

interface CourseType {
    _id:string
    title: string;
    price: number
    category: "frontend" | "backend";
    registersCount: number;
    discount: number;
    desc: string;
}

interface UserInitialState {
    loading: boolean;
    error: string;
    status: "none" | "pending" | "success" | "rejected";
    data: UserType[]
}
interface CourseInitialState {
    loading: boolean;
    error: string;
    status: "none" | "pending" | "success" | "rejected";
    data: CourseType[]
}

