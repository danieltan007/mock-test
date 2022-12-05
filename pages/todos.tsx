import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login } from "@features/userSlice";

const Todos = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const logout = (e: any) => {
		e.preventDefault();
		localStorage.removeItem("id");
		dispatch(login());
		router.push("/");
	};
};

export default Todos;
