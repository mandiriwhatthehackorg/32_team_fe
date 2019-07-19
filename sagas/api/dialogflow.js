import axios from 'axios';
import { DIALOGFLOW_API } from '../../api';

function* postQuery(query) {
    let value = {};
    yield axios
        .post(DIALOGFLOW_API,{
            "lang": "id",
            "query": query,
            "sessionId": "12345"
        },{
            headers: {
                Authorization: "Bearer 748e5b6dceb24978884fcb4337d02d85",
                "Content-Type": application/json
            }
        })
        .then(response => {
            if(response.data){
                const value = response.data;
                if(value.result){
                    if(value.result.metadata){
                        if(value.result.metadata.intentName){
                            value = value.result.metadata.intentName;
                        }else{
                            value = false;
                        }
                    }else{
                        value = false;
                    }
                }else{
                    value = false;
                }
            }else{
                value = false;
            }
        })
        .catch(error => {
            console.log(error);
            value = false;
        });

    return value;
}

export default {
    postQuery
};
// TRUE RETURN
// {
//     "id": "eb56db3a-61a5-42bf-905b-b96869e73b9d-fd8ff490",
//     "lang": "id",
//     "sessionId": "12345",
//     "timestamp": "2019-07-18T09:30:43.805Z",
//     "result": {
//         "source": "agent",
//         "resolvedQuery": "hallo saya ingin komplain",
//         "action": "",
//         "actionIncomplete": false,
//         "score": 1,
//         "parameters": {},
//         "contexts": [],
//         "metadata": {
//             "intentId": "1b7dcadb-41ca-4fa3-bfcf-d8fc77ca7288",
//             "intentName": "complain",
//             "webhookUsed": "false",
//             "webhookForSlotFillingUsed": "false",
//             "isFallbackIntent": "false"
//         },
//         "fulfillment": {
//             "speech": "",
//             "messages": [
//                 {
//                     "lang": "id",
//                     "type": 0,
//                     "speech": ""
//                 }
//             ]
//         }
//     },
//     "status": {
//         "code": 200,
//         "errorType": "success"
//     }
// }

//FALSE RETURN
// {
//     "id": "eada897f-44c0-4c73-9eeb-55db25480fe7-fd8ff490",
//     "lang": "id",
//     "sessionId": "12345",
//     "timestamp": "2019-07-18T09:33:29.754Z",
//     "result": {
//         "source": "agent",
//         "resolvedQuery": "asjdfhklasjhdf;laksjdlf",
//         "action": "",
//         "actionIncomplete": false,
//         "score": 0,
//         "contexts": [],
//         "metadata": {},
//         "fulfillment": {
//             "speech": ""
//         }
//     },
//     "status": {
//         "code": 200,
//         "errorType": "success"
//     }
// }