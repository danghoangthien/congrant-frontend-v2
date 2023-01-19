import './article-editor/css/article-editor.min.css';
import ArticleEditor from 'utils/article-editor/article-editor';
import './article-editor/plugins/inlineformat/inlineformat';
import './article-editor/plugins/reorder/reorder';
import './article-editor/ja';

ArticleEditor.settings = {
  code: false,
  layer: false,
  css: '/article-editor/css/',
  plugins: ['inlineformat', 'reorder'],
  editor: {
    lang: 'ja',
  },
  format: ['p', 'h1', 'h2', 'ul', 'ol'],
};
