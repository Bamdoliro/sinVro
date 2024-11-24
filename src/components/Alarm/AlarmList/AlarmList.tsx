import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import AlarmItem from './AlarmItem/AlarmItem';
import { useNotificationListQuery } from 'services/notification/quries';

const AlarmList = () => {
  const { data: notificationData } = useNotificationListQuery();

  return (
    <ScrollView>
      {notificationData?.map((question) => (
        <AlarmItem
          key={question.id}
          id={question.id}
          title={question.title}
          content={question.body}
        />
      ))}
    </ScrollView>
  );
};

export default AlarmList;
