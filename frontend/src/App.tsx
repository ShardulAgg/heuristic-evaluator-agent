import React, { useState } from 'react';
import { Button, Layout, Row, Col, Card, Input, Table, Typography } from 'antd';
import axios from 'axios';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [url, setUrl] = useState('');
  const [feedbackData, setFeedbackData] = useState([]);

  const handleConfirm = async () => {
    try {
      const response = await axios.post('http://localhost:8082/run_heuristics', { website_url:url });
      setFeedbackData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
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
                <Input 
                  placeholder="Enter the Website URL for which you want to check the heuristic" 
                  style={{ marginBottom: '16px' }} 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <Button type="primary" style={{ marginTop: '16px' }} onClick={handleConfirm}>Confirm</Button>
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