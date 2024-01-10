import { useEffect, useState } from 'react';
// import createAxiosInstance from '../../../api/axios';
// import { useUserStore } from '../../../store/useUserStore';
import MyProduct from 'api/product';

export default function Dev6() {
  const [boardList, setBoardList] = useState([]);

  const data = boardList;

  const getMyProduct = MyProduct({ endpoint: '/api6s' }).getApi();

  const postMyProduct = MyProduct({ endpoint: '/api6s', data }).postApi();

  console.log('getMyProduct', getMyProduct);

  // const accessToken = useUserStore((state) => state.accessToken);
  // const user = useUserStore((state) => state.user);
  // console.log(user);
  // console.log(accessToken);
  // // Axios 인스턴스 생성
  // const axiosInstance = createAxiosInstance("/api6s");

  // const postApi6 = async () => {
  //   const body = {
  //     title: "인풋에잇는 벨류를 타이틀",
  //     content: "텍스트 아레아 에 있는 벨류를 컨텐츠로 보냄 예시로, 슬라이드  이미지" ,
  //         // image:[''],
  //   };
  //   const config = {
  //     headers: {
  //       authorization: `Bearer ${accessToken}`,
  //     },
  //   };

  //   try {
  //     const res = await axiosInstance.post(body, config);
  //     if (!res) alert("통신상태 이상");
  //     console.log(res);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const getApi6 = async () => {
  //   try {
  //     const res = await axiosInstance.get();
  //     console.log(res.data);
  //     const boardList = res.data;
  //     setBoardList(res.data);
  //     console.log("BoardList", boardList);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    console.log('boardList', boardList);
  }, [setBoardList]);

  return (
    <div>
      <h1>UserDev6</h1>

      <div>
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
        <button onClick={getMyProduct}>겟 요청 예시</button>
        <button onClick={postMyProduct}>포스트 요청 예시</button>
      </div>
    </div>
  );
}
