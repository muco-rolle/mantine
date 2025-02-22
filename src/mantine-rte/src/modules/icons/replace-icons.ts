const CLEANUP = [
  'list',
  'strike',
  'underline',
  'link',
  'bold',
  'italic',
  'image',
  'clean',
  'align',
  'video',
  'header',
  'script',
  'blockquote',
];

export function replaceIcons(quillIconsModule: any) {
  CLEANUP.forEach((icon) => {
    // eslint-disable-next-line no-param-reassign
    quillIconsModule[icon] = {};
  });
}
