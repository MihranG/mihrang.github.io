import React, {useEffect, useState} from 'react';
import {Upload} from 'antd';
import {InboxOutlined} from "@ant-design/icons";
import FilePreview from "./FilePreview";

const { Dragger } = Upload;

const FileUploader = () => {
    const [fileList, setFileList] = useState([]);
    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList)
        return false
    };

    const lastElement = fileList.length ? fileList[fileList.length-1] : null
    const filePath = lastElement && URL.createObjectURL(lastElement.originFileObj)

    return (
        <div>
            {lastElement && <FilePreview path={filePath} type={lastElement.type}/>}
            <Dragger
                listType="picture"
                onChange={handleChange}
                beforeUpload={()=>false}
                accept=".pdf,image/jpeg"
                onDrop={(e)=>handleChange(e.dataTransfer.files)}
                list

            >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
            </Dragger>

        </div>

    );
};

export default FileUploader;
