import React from 'react';
import FileViewer from 'react-file-viewer';

const FilePreview = ({ type, path }) => {
  return type === 'application/pdf' ? (
    <FileViewer fileType="pdf" filePath={path} key={path} />
  ) : (
    <FileViewer fileType="jpeg" filePath={path} key={path} />
  );
};

export default FilePreview;
