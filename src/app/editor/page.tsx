
"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TaskItem, TaskList } from '@tiptap/extension-list'
import { TableKit } from '@tiptap/extension-table'
import Image from '@tiptap/extension-image'
let Editor = () => {

    const editor = useEditor({
        editorProps: {
            attributes: {
                style: "padding-left:56px;padding-right:56px",
                class: "focus:outline-none print:border-0 bg-white border border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text dark:text-[#000]"
            },
        },
        extensions: [
            StarterKit,
              Image.configure({
        resize: {
          enabled: true,
          alwaysPreserveAspectRatio: true,
        },
      }),

            TaskItem.configure({ nested: true }),
            TaskList,
            TableKit.configure({
                table: { resizable: true }
            }),

        ],
        content: `
       <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>`,

        immediatelyRender: false,
    })


    return (<div className='size-full overflow-x-auto bg-[#f9fbfd] px-4 print:bg-white print:p-0 print:overflow-visible'>
        <div className='min-w-max flex justify-center m-auto w-[816px] py-4 print:p-0 print:min-width-0 print:width-full'>

            <EditorContent editor={editor} />
        </div>

    </div>)
}



export default Editor;