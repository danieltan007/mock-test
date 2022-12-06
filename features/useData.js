import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTodo } from "@features/userSlice";

const useData = () => {
	const dispatch = useDispatch();
	const isUser = useSelector((state) => {
		return state;
	});

	useEffect(() => {
		if (isUser.isLoading === true) {
			dispatch(fetchUserTodo());
		}
	}, [isUser]);

	return isUser;
};

export default useData;
