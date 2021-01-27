import moment from 'moment';
moment().format();

export default function DateTimePretty(Component) {
    return function(props) {
      const format = 'YYYY-MM-DD HH:mm:ss';
      var now = moment();
      var dateOrig = moment(props.dateOrig).format(format);
      let date;
      if(now.diff(dateOrig, 'hours')===0)
      {
        date = '12 минут назад';
      }
      else if(now.diff(dateOrig, 'hours')<24)
      {
        date = '5 часов назад';
      }
      else {
        date = `${now.diff(dateOrig, 'days')} дней назад`;
      }
     return <Component {...props} date={date} />
    }
  }