import React, { useState } from 'react';
import { Dimensions, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Row from '../Flex/Row';
import { IconNext, IconPrevious } from '@sinabro/icon';
import CustomText from '../Text/Text';
import { color } from '@sinabro/design-token';
import { flex } from '@sinabro/util';
import Column from '../Flex/Column';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isoWeek);

const { width: screenWidth } = Dimensions.get('window');
const { height: screenHeight } = Dimensions.get('window');
const iPhone13MiniWidth = 375;
const iPhone13MiniHeight = 780;

const calculateWidth = (baseWidth: number) => {
  return (screenWidth / iPhone13MiniWidth) * baseWidth;
};

const calculateHeight = (baseHeight: number) => {
  return (screenHeight / iPhone13MiniHeight) * baseHeight;
};

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => prevDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => prevDate.add(1, 'month'));
  };

  const currentMonth = currentDate.format('M월');
  const currentYear = currentDate.format('YYYY');

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');

  const startDayOfWeek = startOfMonth.isoWeekday();

  const daysInMonth: (dayjs.Dayjs | null)[] = [];

  for (let i = 1; i < startDayOfWeek; i++) {
    daysInMonth.push(null);
  }

  let day = startOfMonth;
  while (day.isBefore(endOfMonth) || day.isSame(endOfMonth, 'day')) {
    daysInMonth.push(day);
    day = day.add(1, 'day');
  }

  return (
    <StyledCalender>
      <Column alignItems="center" gap={15}>
        <Row alignItems="center" gap={20}>
          <TouchableOpacity onPress={handlePreviousMonth}>
            <IconPrevious width={10} height={20} />
          </TouchableOpacity>
          <CustomText fontType="H3" color={color.white100}>
            {currentMonth} {currentYear}
          </CustomText>
          <TouchableOpacity onPress={handleNextMonth}>
            <IconNext width={10} height={20} />
          </TouchableOpacity>
        </Row>
        <CalenderBox>
          <Row gap={0} style={{ marginBottom: calculateHeight(31) }}>
            {daysOfWeek.map((dayName, index) => (
              <DayColumn key={index}>
                <CustomText fontType="B5" color={color.white100}>
                  {dayName}
                </CustomText>
              </DayColumn>
            ))}
          </Row>
          {Array.from({ length: Math.ceil(daysInMonth.length / 7) }).map(
            (_, rowIndex) => (
              <Row
                key={rowIndex}
                gap={0}
                style={{
                  width: '100%',
                  marginBottom:
                    rowIndex === Math.ceil(daysInMonth.length / 7) - 1
                      ? 0
                      : calculateHeight(30),
                }}
              >
                {daysInMonth.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, index) => (
                  <DayColumn key={index}>
                    {day ? (
                      <CustomText fontType="B5" color={color.white100}>
                        {day.date()}
                      </CustomText>
                    ) : (
                      <View />
                    )}
                  </DayColumn>
                ))}
              </Row>
            )
          )}
        </CalenderBox>
      </Column>
    </StyledCalender>
  );
};

export default Calender;

const DayColumn = styled(View)`
  width: 14.28%;
  height: ${calculateHeight(31)}px;
  align-items: center;
  justify-content: center;
`;

const StyledCalender = styled(View)`
  ${flex({ justifyContent: 'flex-start', alignItems: 'center' })}
  height: ${calculateHeight(430)}px;
  width: ${calculateWidth(335)}px;
  background-color: none;
  border-radius: 16px;
`;

const CalenderBox = styled(View)`
  ${flex({ alignItems: 'center' })}
  padding-top: ${calculateHeight(31)}px;
  padding-bottom: ${calculateHeight(30)}px;
  height: ${calculateHeight(401)}px;
  width: ${calculateWidth(335)}px;
  border-radius: 16px;
  background-color: ${color.glassWhite};
`;
