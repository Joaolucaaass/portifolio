import { personalInfo } from '../data/content';

export default function Skills() {
  return (
    <ul className="skills">
      {personalInfo.skills.map((s) => (
        <li key={s.name}>
          <strong>{s.name}</strong>
          <span>{s.category}</span>
          <span>{s.level}</span>
        </li>
      ))}
    </ul>
  );
}
