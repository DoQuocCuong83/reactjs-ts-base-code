import { IDispatch } from "../../redux";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<IDispatch>()
