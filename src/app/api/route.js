export const feedback = [
    {
        id:1,
        message: "খাবার খুব মজা ছিলো"
    },
    {
        id:2,
        message: "ওয়েটারদের ব্যবহার আরো ভালো করা চাই"
    },
]

export async function GET(request) {
    return Response.json({
        status: 200,
        message: "Yahoooo. API Created"
    })
}