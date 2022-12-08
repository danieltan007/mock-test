import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTodo } from "@features/userSlice";

const useData = () => {
	const dispatch = useDispatch();
	const isUser = useSelector((state) => {
		return state.user;
	});

	useEffect(() => {
		if (isUser.isLoading === true) {
			dispatch(fetchUserTodo());
		}
	}, [dispatch, isUser.isLoading]);

	return isUser;
};

export default useData;
