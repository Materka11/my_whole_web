interface Props {
  name: string;
  additionalName?: string;
  startDate: string;
  endDate?: string;
}

const NameWithDate = ({ name, additionalName, startDate, endDate }: Props) => (
  <>
    <div>
      <h3>
        <strong>{name}</strong>
        {additionalName && ` / ${additionalName}`}
      </h3>
      <span>
        {startDate} {endDate && ` - ${endDate}`}
      </span>
    </div>
    <br />
    <br />
  </>
);

export default NameWithDate;
