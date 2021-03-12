import React from "react";
import { education, engineering, other } from "../data/career";

const ImageSection = ({
  org,
  logo,
  mission,
}: {
  org: string;
  logo: string;
  mission?: string;
}) => (
  <div
    style={{
      padding: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <img src={logo} style={{ width: 100 }} alt={`${org} logo`} />
    <h3>{org}</h3>
    {mission && <p>{mission}</p>}
  </div>
);

const DescriptionSection = ({
  title,
  timeline,
  tech,
  description,
}: {
  title: string;
  timeline: string;
  tech: string | null;
  description: JSX.Element;
}) => (
  <div style={{ padding: 20 }}>
    <b>{title}</b>
    <p>{timeline}</p>
    {tech && (
      <div>
        <i>{tech}</i>
      </div>
    )}
    <div>{description}</div>
  </div>
);

const FocusArea = ({
  title,
  focus,
}: {
  title: string;
  focus: typeof engineering;
}) => (
  <>
    <h2>{title}</h2>
    {focus.map(({ title, timeline, tech, description, ...rest }) => {
      return (
        <div>
          <ImageSection {...rest} />

          <DescriptionSection
            title={title}
            timeline={timeline}
            tech={tech}
            description={description}
          />
        </div>
      );
    })}
  </>
);

export const CareerSection = () => (
  <div>
    <FocusArea title="Software Engineering" focus={engineering} />
    <FocusArea title="Before I learned to code" focus={other} />
    <FocusArea title="Academics" focus={education} />
  </div>
);
