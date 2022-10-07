import { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import Header from 'editorjs-header-with-anchor';
import LinkTool from '@editorjs/link';
import AttachesTool from '@editorjs/attaches';
import Paragraph from '@editorjs/paragraph';
import NestedList from '@editorjs/nested-list';
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';
// import Carousel from '@mr8bit/carousel-editorjs';
import editorjsColumns from '@calumk/editorjs-columns';

const ImageGallery = require('@rodrigoodhin/editorjs-image-gallery');

let column_tools = {
  header: Header,
  image: ImageTool,
};

// next define the tools in the main block
// Warning - Dont just use main_tools - you will probably generate a circular reference

const EditorPage = () => {
  const { path } = useRouteMatch();
  useEffect(() => {
    const editor = new EditorJS({
      // holder: 'editorjs',
      tools: {
        columns: {
          class: editorjsColumns,
          config: {
            tools: column_tools, // ref the column_tools
          },
        },
        imageGallery: ImageGallery,
        embed: {
          class: Embed,
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          tunes: ['anyTuneName'],
        },
        anyTuneName: {
          class: AlignmentTuneTool,
          config: {
            default: 'left',
            blocks: {
              header: 'center',
              list: 'right',
            },
          },
        },
        attaches: {
          class: AttachesTool,
          config: {
            endpoint: 'http://localhost:8008/uploadFile',
          },
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
          },
        },
        header: {
          class: Header,
          tunes: ['anyTuneName'],
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered',
          },
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            },
          },
        },
      },
      data: {
        time: 1552744582955,
        blocks: [
          {
            type: 'list',
            data: {
              style: 'unordered',
              items: [
                'It is a block-styled editor',
                'It returns clean data output in JSON',
                'Designed to be extendable and pluggable with a simple API',
              ],
            },
          },
        ],
        version: '2.11.10',
      },
      onChange: () => {
        saved();
      },
    });

    function saved() {
      editor
        .save()
        .then(savedData => {
          console.log('salvado', savedData);
        })
        .catch(error => {
          console.log('fallo al guardar', error);
        });
    }
  }, []);

  console.log('path', path);

  return (
    <>
      <div id="editorjs" />
    </>
  );
};
export default EditorPage;
