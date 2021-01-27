import DateTimePretty from './DateTimePretty/DateTimePretty';
import DateTime from './DateTimePretty/DateTime/DateTime';

let DateTimeChanged = DateTimePretty(DateTime);

export default function Video(props) {
    
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <DateTimeChanged dateOrig={props.date} />
        </div>
    )
}