import React, { useState } from 'react';
import styled from 'styled-components';
import { collection, DocumentData, onSnapshot } from 'firebase/firestore';
import { db } from 'firebase-config/firebase-config';
import HistoryItem from 'components/molecules/HistoryItem/HistoryItem';
import { firebase } from 'consts/firebaseConsts';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 100px 20px 20px 20px;
  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    min-height: max-content;
    padding: 20px;
    margin-top: 100px;
    margin-bottom: 100px;
    border-radius: ${({ theme }) => theme.borderRadius.m};
  }
`;

const HomePage: React.FC = () => {
  const [items, setItems] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);

  onSnapshot(
    collection(db, firebase.collections.calculations),
    (querySnapshot) => {
      const calculations: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        calculations.push({ ...doc.data(), id: doc.id });
      });
      if (loading == true) {
        const sortedObjects = calculations.sort(
          (a, b) => b.timestamp.seconds - a.timestamp.seconds
        );
        setItems(sortedObjects);
        setLoading(false);
      }
    }
  );

  return (
    <Wrapper>
      {items.length != 0 ? (
        items.map((item: DocumentData) => {
          return (
            <HistoryItem
              key={item.id}
              expression={item.expression}
              result={item.result}
              seconds={item.timestamp.seconds}
              id={item.id}
            />
          );
        })
      ) : (
        <span>Brak obliczeń</span>
      )}
    </Wrapper>
  );
};

export default HomePage;
