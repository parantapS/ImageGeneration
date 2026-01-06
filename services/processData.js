import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export async function processData( prompt ) {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    let response;
    try {
        response =  await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            size:"1024x1024",
            n:1,
            // response_format: "url",
            response_format: "b64_json",
            style: 'vivid'
        });
        console.log("OpenAI response:", response);
        return response.data[0].b64_json;
        // return response.data[0].url;

    } catch (error) {
        console.error("Error in processData:", error);
        return null;     
    }
}