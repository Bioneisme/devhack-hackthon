import React from "react";
import moment from "moment";
import { Col, Divider, Row } from "antd";

const CollapseTables = ({ application, index, applicationsLength }) => {
  const deadline = moment.utc(application.date);
  const localDeadline = deadline.local();
  const timeDiff = moment.duration(localDeadline.diff(moment()));
  const days = timeDiff.asDays().toFixed();
  const hours = timeDiff.asHours().toFixed() % 24;
  return (
    <Row
      gutter={ [0, 12] }
      justify="space-between"
      key={ application.id }
    >
      <Col span={ 24 }>
        { application.title }
      </Col>
      <Col span={ 12 }>
        Время исполнения
      </Col>
      <Col span={ 12 }>
        { days } дней { hours } часов
      </Col>
      <Col span={ 12 }>
        Исполнитель
      </Col>
      <Col span={ 12 }>
        { application.executor }
      </Col>
      <Col span={ 12 }>
        Статус
      </Col>
      <Col span={ 12 }>
        { application.status }
      </Col>
      {index !== applicationsLength && <Divider />}
    </Row>
  );
};

export default CollapseTables;
