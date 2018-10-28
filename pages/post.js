import { withRouter } from 'next/router';
import Layout from '../shared/Layout';
import Content from '../shared/Content';

export default withRouter((props) => (
    <Layout>
       <Content />
    </Layout>
));

