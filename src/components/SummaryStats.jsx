export default function SummaryStats({total, watched, unwatched}) {
    return (
        <div style={{ marginBottom:'16px', fontSize: '14px'}}>
            Total : {total} | watched : {watched} | Unwatched : {unwatched}
        </div>
    );
}