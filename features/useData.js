import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, login } from "@features/userSlice";

const useData = () => {
	const dispatch = useDispatch();
	const isUser = useSelector((state) => {
		return state;
	});

	useEffect(() => {
		if (isUser.isLoading === true) {
			dispatch(getData());
			console.log("🚀 ~ file: useData.js:14 ~ useEffect ~ isUser", isUser);
		}
	}, [isUser]);

	return isUser;
};

export default useData;
