import React from 'react';
import Layout from './hoc/layout';
import Router from './router';
import axios from 'axios'
import { Auth } from './hoc/auth';

axios.defaults.withCredentials = true

const App = () => {
  return (
    <div>
      <Auth>
        <Layout>
          <Router/>
        </Layout>
      </Auth>
    </div>
  );
}; 

export default App;