import AdminEditor from "../../../components/AdminEditor";
import UserDev3 from "../dev3/Dev3";
import {useEffect} from "react";
export default function Dev6() {


    const getApi6 = () => {

    }

    useEffect(() => {



    }, []);

  return (
    <div>
      <h1>UserDev6</h1>

       <div>
           <p>Example.com/api6s</p>
           <p>get, post</p>
           <p>Example.com/api6s/:api6Id/reply6s</p>
       </div>
        <div>

            <button onClick={getApi6}>
                겟요청예시
            </button>
        </div>

    </div>
  );
}
