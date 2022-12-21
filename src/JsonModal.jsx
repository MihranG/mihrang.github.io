import { Modal, Table } from 'antd';
import { prepareJsonForTable } from './utils';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];

const JsonModal = ({ json, closeModal, isOpen, eraseForm }) => {
  const handleOk = () => {
    eraseForm();
    closeModal();
  };
  const dataSource = json && prepareJsonForTable(json);

  return (
    <Modal
      title="Your JSON Data"
      open={isOpen}
      onOk={handleOk}
      onCancel={closeModal}
    >
      <Table dataSource={dataSource} columns={columns} />
    </Modal>
  );
};
export default JsonModal;
