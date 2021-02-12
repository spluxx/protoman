import React from 'react';
import { Row, Col, Select } from 'antd';
import EnvPicker from '../toolbar/Env/EnvPicker';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCache } from '../../redux/store';
import NodeEnvPicker from '../toolbar/NODE_ENV/NodeEnvPicker';

const PaddedRow = styled(Row)`
  padding: 8px 0px;
`;

const Title = styled('span')`
  font-size: 16pt;
  margin: 0;
`;
const CacheToolBar: React.FunctionComponent<{}> = ({}) => {
  const cache = useSelector(selectCurrentCache);
  const { currentCacheName } = cache || {};
  return (
    <PaddedRow>
      <Col span={8} style={{ display: 'flex' }}>
        <Title>{currentCacheName}</Title>
      </Col>
      <Col span={9} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <NodeEnvPicker />
      </Col>
      <Col span={7} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <EnvPicker />
      </Col>
    </PaddedRow>
  );
};

export default CacheToolBar;
