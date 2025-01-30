"use client";
import { useSelector, useDispatch } from "react-redux";
import { startLoading, endLoading } from "./store/slices/loadingSlice";
import { RootState } from "./store";
import { useEffect } from "react";

export default function Home() {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const dispatch = useDispatch();

  // isLoading 값이 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log("isLoading 값이 변경됨:", isLoading);
  }, [isLoading]);

  const fetchData = async () => {
    console.log("데이터를 가져오는 중...");
    dispatch(startLoading());

    try {
      // 2초 대기 추가
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(endLoading());
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>로딩 중...</div>
      ) : (
        <button onClick={fetchData}>데이터 가져오기</button>
      )}
    </div>
  );
}
