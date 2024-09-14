import React from 'react';
import { Button, Layout, Row, Col, Card, Image, Table, Typography } from 'antd';
import Access from './Pages/Access';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header style={{ background: '#fff', padding: '0 16px' }}>
        <h1>My App Header</h1>
      </Header>
      <Layout>
      <Content style={{ height: "100vh", padding: '16px' }}>
  <Row gutter={[16, 16]}>
    <Col span={24}>
      <Card title="Log In">
        <Image
          src="/path-to-your-screenshot.png"
          alt="Login Confirmation"
          style={{ maxWidth: '100%' }}
        />
        <Button type="primary" style={{ marginTop: '16px' }}>Confirm</Button>
      </Card>
    </Col>
    <Col span={24}>
      <Card title="Feedback Table">
        <Table
          columns={[
            { title: 'Feedback', dataIndex: 'feedback', key: 'feedback' },
            { title: 'Heuristic', dataIndex: 'heuristic', key: 'heuristic' },
            { title: 'Urgency', dataIndex: 'urgency', key: 'urgency' },
            { title: 'Advice', dataIndex: 'advice', key: 'advice' },
          ]}
          dataSource={[
            // Add your data here
            { key: 1, feedback: 'Sample', heuristic: 'Sample', urgency: 'Sample', advice: 'Sample' },
          ]}
        />
      </Card>
    </Col>
    <Col span={24}>
      <Card title="Conclusion">
        <Typography.Paragraph>
          This is the conclusion paragraph. It summarizes the key points and provides a final assessment of the situation.
        </Typography.Paragraph>
      </Card>
    </Col>
  </Row>
</Content>
      </Layout>
    </Layout>
  );
};

export default App;