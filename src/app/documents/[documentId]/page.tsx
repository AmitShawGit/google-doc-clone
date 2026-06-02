import Editor from "@/app/editor/page"

interface documentLayoutProps {
    params: any
}
const documentIdPage = async ({ params }: documentLayoutProps) => {
    const id = await params
    return (<>


        <Editor />
    </>)
}

export default documentIdPage;

