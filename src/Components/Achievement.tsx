import * as React from 'react';
import * as moment from 'moment';
import 'moment/locale/nb';
import '../Style/AchievementStyle.css';

moment.locale('nb');

export enum Achs {
  mostCalls = 'Ringt mest idag ☎️',
  mostCallsInGroup = 'Ringt mest i gruppa ☎️',
  firstCallOfTheDay = 'Først Ut 🏎'
}

export interface User {
  name: string;
}

export interface Props {
  className?: string;
  type: string;
  who: User;
  measure: number | Date;
}

class Achievement extends React.Component<Props> {
  render() {
    const { className, type, who, measure } = this.props;

    return (
      <div className={className}>
        <div className="achievement">
          <p className="achievement__text">{type}</p>
          <p className="achievement__description">
            <span className="achievement__description--name">{who.name}</span> &nbsp;
            <span className="achievement__description--info">
                {measure instanceof Date ? moment(measure).format('LT') : measure}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Achievement;
