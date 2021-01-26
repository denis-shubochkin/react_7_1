import DateTimePretty from './DateTimePretty/DateTimePretty';
import DateTime from './DateTimePretty/DateTime/DateTime';

export default function Video(props) {
    let DateTimeChanged = DateTimePretty(DateTime);
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <DateTimeChanged dateOrig={props.date} />
        </div>
    )
}