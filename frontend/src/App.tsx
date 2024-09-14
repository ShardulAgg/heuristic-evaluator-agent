import React from 'react';
import { Button, Layout } from 'antd';
import Access from './Pages/Access';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header style={{ background: '#fff', padding: '0 16px' }}>
        <h1>My App Header</h1>
      </Header>
      <Layout>
        <Content style={{height:"100vh", padding: '16px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ width: '48%' }}>
    <h2>Section 1</h2>
    <Button type="primary">Ant Design Button</Button>
  </div>
  <div style={{ width: '48%' }}>
    <h2>Section 2</h2>
    <p>This is the content of section 2.</p>
  </div>
</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;