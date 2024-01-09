import AdminEditor from "../../../components/AdminEditor";
import UserDev3 from "../dev3/Dev3";
import { useEffect, useState } from "react";
import createAxiosInstance from "../../../api/axios";
import { useUserStore } from "../../../store/useUserStore";

export default function Dev6() {
  const [boardList, setBoardList] = useState([]);

  const accessToken = useUserStore((state) => state.accessToken);
  const user = useUserStore((state) => state.user);
  console.log(user);
  console.log(accessToken);
  // Axios 인스턴스 생성
  const axiosInstance = createAxiosInstance("/api6s");

  const postApi6 = async () => {
    const body = {
      title: "test123",
      content: "test123456",
    };
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const res = await axiosInstance.post(body, config);
      if (!res) alert("통신상태 이상");
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const getApi6 = async () => {
    try {
      const res = await axiosInstance.get();
      console.log(res.data);
      const boardList = res.data;
      setBoardList(res.data);
      console.log("BoardList", boardList);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("boardList", boardList);
  }, [setBoardList]);

  return (
    <div>
      <h1>UserDev6</h1>

      <div>
        <p>Example.com/api6s</p>
        <p>get, post</p>
        <p>Example.com/api6s/:api6Id/reply6s</p>
        {boardList.map((board) => {
          return (
            <>
              <h1>{board.title}</h1>
              <p>{board.content}</p>
            </>
          );
        })}
      </div>
      <div>
        <button onClick={getApi6}>겟 요청 예시</button>
        <button onClick={postApi6}>포스트 요청 예시</button>
      </div>
    </div>
  );
}
