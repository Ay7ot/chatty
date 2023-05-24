import {Configuration, OpenAIApi} from 'openai'
import { conversationType } from './type';


const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration)

export async function fetchReply(conversationArr: conversationType[]){
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: conversationArr
    })

    const reply = response.data.choices[0].message
    return reply
}