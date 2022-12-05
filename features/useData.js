import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "@features/userSlice";

const useData = () => {
	const dispatch = useDispatch();
	const isUser = useSelector((state) => {
		return state.user;
	});

	useEffect(() => {
		if (isUser.isLoading === true) {
			dispatch(getData());
		}
	}, [isUser]);

	return isUser;
};

export default useData;
