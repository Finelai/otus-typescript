import React, {FC, useState} from 'react';
import cx from "classix";
import s from './index.module.sass';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const TestComp: FC<ButtonProps> = ({ className, ...props }) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className={cx(className)}>
      <button className={s.button} {...props} onClick={() => setOpened(v => !v)} />
      <div className={cx(s.text, opened ? s.opened : s.closed)}>Test</div>
      <div className={cx(s.text, !opened && s.closed)}>Test</div>
      <div className="some-global-class">Global</div>
      <div>Import Variable</div>
    </div>
  );
}