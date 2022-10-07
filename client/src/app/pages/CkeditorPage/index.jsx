import { useRouteMatch } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
import { Editor as ClassicEditor } from 'ckeditor5-custom-build/build/ckeditor';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import { CkeditorPageStyle } from './CkeditorPage.style';

const CkeditorPage = () => {
  const { path } = useRouteMatch();

  // const editorConfiguration = {
  //   toolbar: ['bold', 'italic'],
  // };

  console.log('path', path);
  return (
    <>
      <CkeditorPageStyle>
        <div className="editor-wrapper">
          <CKEditor
            editor={ClassicEditor}
            // config={editorConfiguration}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        </div>
      </CkeditorPageStyle>
    </>
  );
};

export default CkeditorPage;
