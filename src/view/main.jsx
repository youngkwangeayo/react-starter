import { useEffect } from "react"
import { connectMqtt } from "../controller/mqtt";

export default function MainDisplay (){

    useEffect(() => {
        const url = 'wss://ac9hu6rgxhrxm-ats.iot.ap-northeast-2.amazonaws.com/mqtt?X-Amz-Date=20250508T093150Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVKGE5P2F5BFLYGN7%2F20250508%2Fap-northeast-2%2Fiotdevicegateway%2Faws4_request&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=8e7926b1a7f86df6cbda0a8edebeec61b8db5479893a295093bc8cd0f7696bd0'; // presigned URL
        const topic = '10107';
        connectMqtt(url, topic);
      }, []);

    useEffect(()=>{
        console.log("이팩트");
    },[]);

    return (
        <div>MAIN PAGHE</div>
    )
}