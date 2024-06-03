import React, { ReactNode, useState } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newActiveTab: React.SetStateAction<string>
  ) => {
    event.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex border-b-2 border-[#16A1AF]">
        {children.map((child) => (
          <button
            key={child.props.label}
            type="button"
            className={`${
              activeTab === child.props.label
                ? 'border-b-4 border-[#16A1AF] font-[800]'
                : 'border-[#16A1AF]'
            } flex-1 text-center py-4 md:py-6 text-xl hover:font-[800]`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

function Tab({ label, children }: TabProps) {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
}
export { Tabs, Tab };
