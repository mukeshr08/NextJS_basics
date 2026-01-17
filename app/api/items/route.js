export async function GET(req) {
    const type=req.nextUrl.searchParams.get('type')
    console.log(type)
    return  Response.json(
    [
        {title:"Array"},
        {title:"Linked List"}

    ]
)
}
export async function POST (req) {
    const postitem= await req.json()
    console.log(postitem)
    return new Response("Post success")
    
}
export async function PUT() {
    return Response.json(
        [
            {title:"Mukesh"}
        ]
    )

    
}
export async function PATCH(req) {
    return Response.json(
        [
            {title:"patch completed"}
        ]
    )
}
export async function DELETE(){
    return Response.json(
        [
            {title:"post deleted"}
        ]
    )
}