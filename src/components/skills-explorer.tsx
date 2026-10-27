"use client";

import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { ArrowUpRight, Braces, Database, Network } from "lucide-react";
import { skillGroups, skillGroupsEnglish } from "@/data/skills";
import { useLanguage } from "@/components/language-provider";

const icons = [Network, Braces, Database];

export function SkillsExplorer() {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();
  const groups = skillGroups.map((group, index) => ({
    ...group,
    ...(language === "en" ? skillGroupsEnglish[index] : {}),
  }));
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      nextIndex = (index + 1) % groups.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      nextIndex = (index - 1 + groups.length) % groups.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = skillGroups.length - 1;
    else return;
    event.preventDefault();
    setActive(nextIndex);
    tabs.current[nextIndex]?.focus();
  }

  return (
    <div className="skills-explorer" data-reveal>
      <div
        className="skills-tabs"
        role="tablist"
          aria-label={language === "es" ? "Áreas de habilidades" : "Skill areas"}
        aria-orientation="vertical"
      >
        {groups.map((group, index) => {
          const Icon = icons[index];
          return (
            <button
              type="button"
              role="tab"
              id={`skill-tab-${index}`}
              aria-controls={`skill-panel-${index}`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              className={active === index ? "skill-tab is-active" : "skill-tab"}
              key={group.number}
              onClick={() => setActive(index)}
              onKeyDown={(event) => moveTab(event, index)}
              ref={(element) => {
                tabs.current[index] = element;
              }}
            >
              <span className="skill-tab-number">{group.number}</span>
              <span className="skill-tab-copy">
                <strong>{group.title}</strong>
                <small>{group.note}</small>
              </span>
              <Icon size={20} strokeWidth={1.4} />
            </button>
          );
        })}
      </div>
      <div className="skills-panels" data-interactive>
        {groups.map((group, index) => {
          const Icon = icons[index];
          return (
            <div
              key={group.number}
              className="skill-panel"
              role="tabpanel"
              id={`skill-panel-${index}`}
              aria-labelledby={`skill-tab-${index}`}
              tabIndex={0}
              hidden={active !== index}
            >
              <div className="skill-panel-top">
                <span>{group.note}</span>
                <Icon size={29} strokeWidth={1} />
              </div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill, itemIndex) => (
                  <li
                    key={skill}
                    style={{ "--item-index": itemIndex } as CSSProperties}
                  >
                    <span className="skill-item-marker" />
                    {skill}
                    <ArrowUpRight size={13} />
                  </li>
                ))}
              </ul>
              <span className="skill-panel-index">
                {group.number}
                <span> / 03</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
