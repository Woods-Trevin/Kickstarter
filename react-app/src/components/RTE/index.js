import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './RTE.css';

function RTE({campaign, handleRTE}){


  return (
    <div className="rte-body">
      <CKEditor
        editor={ ClassicEditor }
        data={campaign}
        config={ {
          removePlugins: [ 'Table', 'MediaEmbed', 'InsertImage', 'EasyImage' ]
        } }

        onReady={ editor => {
            // You can store the "editor" and use when it is needed.
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          handleRTE(data)
        } }
        onBlur={ ( event, editor ) => {
        } }
        onFocus={ ( event, editor ) => {
        } }
      />
    </div>

  )
}

export default RTE
