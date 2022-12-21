import FileUploader from './FileUploader';
import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { FormComponent } from './FormComponent';

function App() {
  return (
    <div className="App">
      <Layout>
        <Content>
          <Row gutter={16}>
            <Col span={12}>
              <Content>
                <FileUploader />
              </Content>
            </Col>
            <Col span={12}>
              <FormComponent />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
