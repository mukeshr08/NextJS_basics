export async function GET() {
    return  Response.json(
    [
        {title:"Array"},
        {title:"Linked List"}

    ]
)
}
export async function POST() {
    return new Response("Post success")
    
}
export async function PUT() {
    return Response.json(
        [
            {title:"Mukesh"}
        ]
    )

    
}