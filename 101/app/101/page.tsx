"use client";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/slices/loadingSlice";

export default function Counter() {
  const count = useSelector((state) => (state as any).counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>증가</button>
    </div>
  );
}
