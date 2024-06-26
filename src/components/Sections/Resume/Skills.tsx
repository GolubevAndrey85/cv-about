import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';


export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold" style={{marginBottom: '20px'}}>{name}</span>
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, icon} = skill;
  // const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-row">
      <i className={icon}> {name}</i>
      {/* <span className="ml-2 text-sm font-medium">{name}<i className={icon}></i></span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div className="h-full rounded-full bg-orange-400" style={{width: `${percentage}%`}} />
      </div> */}
    </div>
  );
});

Skill.displayName = 'Skill';
