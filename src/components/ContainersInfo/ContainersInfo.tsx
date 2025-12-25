import { SKILLS } from "../../consts/skills.consts";
import { EXPERIENCE } from "../../consts/commercialExperience.consts";
import { ContainerInfo } from "../ContainerInfo/ContainerInfo";
import React, { useState } from "react";
import styles from "./ContainersInfo.module.scss";
import { Timeline } from "../Timelline/Timeline";

export const ContainersInfo = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPosition({ x, y });
  };

  return (
    <>
      <ContainerInfo title="About" classContainer="history">
        <hr />
        <p>
          Innovative and detail-oriented Frontend and Web Developer with over
          two years of experience building high-performance web and mobile
          applications. Expert in React, Next.js, and Expo, with a proven track
          record of optimizing user interfaces and cross-platform experiences.
          Achieved measurable improvements in performance and SEO, including a
          25% increase in site traffic and a 30% reduction in load times.
          Proficient in leveraging Expo to deliver scalable, native-quality
          mobile solutions efficiently. Dedicated to continuous learning and
          seeking to contribute to cutting-edge projects within technology,
          e-commerce, or SaaS industries.
        </p>
      </ContainerInfo>

      <ContainerInfo title="My Skills" classContainer="skill">
        <div className={styles.containerSkills}>
          <h3>Frontend</h3>
          <div>
            {SKILLS?.frontend?.map(({ Icon, label }) => (
              <div
                key={label}
                onMouseMove={handleMouseMove}
                style={
                  {
                    "--x": `${hoverPosition.x}px`,
                    "--y": `${hoverPosition.y}px`,
                  } as React.CSSProperties
                }
              >
                <Icon width="2rem" height="2rem" />
                <h4>{label}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.containerSkills}>
          <h3>Backend</h3>
          <div>
            {SKILLS?.backend?.map(({ Icon, label }) => (
              <div
                key={label}
                onMouseMove={handleMouseMove}
                style={
                  {
                    "--x": `${hoverPosition.x}px`,
                    "--y": `${hoverPosition.y}px`,
                  } as React.CSSProperties
                }
              >
                <Icon width="2rem" height="2rem" />
                <h4>{label}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.containerSkills}>
          <h3>Tool</h3>
          <div>
            {SKILLS?.tools?.map(({ Icon, label }) => (
              <div
                key={label}
                onMouseMove={handleMouseMove}
                style={
                  {
                    "--x": `${hoverPosition.x}px`,
                    "--y": `${hoverPosition.y}px`,
                  } as React.CSSProperties
                }
              >
                <Icon width="2rem" height="2rem" />
                <h4>{label}</h4>
              </div>
            ))}
          </div>
        </div>
      </ContainerInfo>

      <ContainerInfo title="Experience" classContainer="experience">
        <Timeline data={EXPERIENCE} />
      </ContainerInfo>
    </>
  );
};
