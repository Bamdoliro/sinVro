import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Row from '../Flex/Row';
import { IconNext, IconPrevious, IconLetter, IconBook } from '@sinabro/icon';
import CustomText from '../Text/Text';
import { color } from '@sinabro/design-token';
import { calculateWidth, flex } from '@sinabro/util';
import Column from '../Flex/Column';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isoWeek);

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

interface CalenderProps {
  datesWithLetter?: string[];
  datesWithDiary?: string[];
  onPressLetter?: (date: string) => void;
  onPressDiary?: (date: string) => void;
}

const Calender: React.FC<CalenderProps> = ({
  datesWithLetter,
  datesWithDiary,
  onPressDiary,
  onPressLetter,
}) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => prevDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => prevDate.add(1, 'month'));
  };

  const currentMonth = currentDate.format('M월');

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

  const hasLetter = (day: dayjs.Dayjs | null) => {
    return day && datesWithLetter?.includes(day.format('YYYY-MM-DD'));
  };

  const hasDiary = (day: dayjs.Dayjs | null) => {
    return day && datesWithDiary?.includes(day.format('YYYY-MM-DD'));
  };

  return (
    <StyledCalender>
      <Column alignItems="center" gap={calculateWidth(15)}>
        <Row alignItems="center" gap={27}>
          <TouchableOpacity onPress={handlePreviousMonth}>
            <IconPrevious width={10} height={20} />
          </TouchableOpacity>
          <CustomText fontType="H3" color={color.white100}>
            {currentMonth}
          </CustomText>
          <TouchableOpacity onPress={handleNextMonth}>
            <IconNext width={10} height={20} />
          </TouchableOpacity>
        </Row>
        <CalenderBox>
          <Row gap={0} style={{ marginBottom: calculateWidth(31) }}>
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
                      : calculateWidth(30),
                }}
              >
                {daysInMonth.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, index) => (
                  <DayColumn key={index}>
                    {day ? (
                      <DayWrapper>
                        {hasLetter(day) && (
                          <IconLetterWrapper
                            onPress={() =>
                              onPressLetter?.(day?.format('YYYY-MM-DD'))
                            }
                          >
                            <IconLetter width={39} height={23} />
                          </IconLetterWrapper>
                        )}
                        {hasDiary(day) && (
                          <IconLetterWrapper
                            onPress={() => onPressDiary?.(day.format('YYYY-MM-DD'))}
                          >
                            <IconBook width={34} height={26} />
                          </IconLetterWrapper>
                        )}
                        <CustomText fontType="B5" color={color.white100}>
                          {day.date()}
                        </CustomText>
                      </DayWrapper>
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
  height: ${calculateWidth(31)}px;
  align-items: center;
  justify-content: center;
`;

const StyledCalender = styled(View)`
  ${flex({ justifyContent: 'flex-start', alignItems: 'center' })}
  width: ${calculateWidth(335)}px;
  height: auto;
  border-radius: 16px;
`;

const CalenderBox = styled(View)`
  ${flex({ alignItems: 'center' })}
  padding-top: ${calculateWidth(19.87)}px;
  padding-bottom: ${calculateWidth(32.13)}px;
  width: ${calculateWidth(335)}px;
  height: auto;
  border-radius: 16px;
  background-color: ${color.glassWhite};
  border: 1px solid ${color.glassStroke};
`;

const DayWrapper = styled(View)`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  height: 100%;
  position: relative;
`;

const IconLetterWrapper = styled.TouchableOpacity`
  position: absolute;
  top: -20px;
  left: 5px;
`;
