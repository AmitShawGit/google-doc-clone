
"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

let Editor = () => {

    const editor = useEditor({
        editorProps: {
            attributes: {
                style:"padding-left:56px;padding-right:56px",
                class: "focus:outline-none print:border-0 bg-white border border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text dark:text-[#000]"
            },
        },
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
        // Don't render immediately on the server to avoid SSR issues
        immediatelyRender: false,
    })


    return (<div className='size-full overflow-x-auto bg-[#f9fbfd] px-4 print:bg-white print:p-0 print:overflow-visible'>
        <div className='min-w-max flex justify-center m-auto w-[816px] py-4 print:p-0 print:min-width-0 print:width-full'>

            <EditorContent editor={editor} />
        </div>

    </div>)
}



export default Editor;