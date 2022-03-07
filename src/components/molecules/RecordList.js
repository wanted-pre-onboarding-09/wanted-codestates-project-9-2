import React from 'react';
import styled from 'styled-components';
import RecordItem from './RecordItem';

const data = [
  {
    idx: 1,
    type: '3일 전',
    result: '#리타이어',
    track: '네모 산타의 비밀공간',
    cart: '폭스 V1',
    time: '-',
  },
  {
    idx: 2,
    type: '3일 전',
    result: '#1/ 8',
    track: '마비노기 이멘 마하',
    cart: '폭스 V1',
    time: `1'34'51`,
  },
  {
    idx: 3,
    type: '3일 전',
    result: '#3/ 8',
    track: '신화 신들의 세계',
    cart: '폭스 V1',
    time: `1'30'54`,
  },
  {
    idx: 4,
    type: '3일 전',
    result: '#5/ 8',
    track: '차이나 용의 운하',
    cart: '폭스 V1',
    time: `2'09'81`,
  },
  {
    idx: 5,
    type: '3일 전',
    result: '#4/ 8',
    track: '차이나 황산',
    cart: '폭스 V1',
    time: `1'22'41`,
  },
  {
    idx: 6,
    type: '3일 전',
    result: '#리타이어',
    track: '네모 산타의 비밀공간',
    cart: '폭스 V1',
    time: '-',
  },
  {
    idx: 7,
    type: '4일 전',
    result: '#1/ 6',
    track: '월드 두바이 다운타운',
    cart: '폭스 V1',
    time: `1'53'32`,
  },
  {
    idx: 8,
    type: '22일 전',
    result: '#3/ 8',
    track: '	신화 신들의 세계',
    cart: '폭스 V1',
    time: `1'30'23`,
  },
];

const RecordList = () => {
  return (
    <Container>
      {data.map((item) => (
        <RecordItem item={item} key={item.idx} />
      ))}
    </Container>
  );
};

export default RecordList;

const Container = styled.div`
  width: 660px;
`;
