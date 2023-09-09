interface Props {
  nameComapany: string;
  positionJob: string;
  startJob: string;
  endJob: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const CommercialExperience = ({
  description,
  endJob,
  nameComapany,
  positionJob,
  responsibilities,
  startJob,
  technologies,
}: Props) => (
  <>
    <h3>
      <strong>{nameComapany}</strong> / {positionJob}
    </h3>
    <span>
      {startJob} - {endJob}
    </span>
    <div>
      <p>
        {description}
        <br />
        My responsibilities included:
      </p>
      <ul>
        {responsibilities.map((responsibilitie) => (
          <li key={responsibilitie}>{responsibilitie}</li>
        ))}
      </ul>
      <p>
        Technologies used: <strong>{technologies.join(", ")}</strong>
      </p>
    </div>
  </>
);
