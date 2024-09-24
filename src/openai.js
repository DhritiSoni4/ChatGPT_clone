const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({ apiKey: "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"})
const openai= new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    });
    return res.data.choices[0].text;
}