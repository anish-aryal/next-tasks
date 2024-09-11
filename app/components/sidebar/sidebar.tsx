import SidebarButton from './sidebarButton';
import "./sidebar.css"

type SidebarProps = {
  setActiveTask: (task: string) => void;
  activeTask: string;
};

export default function Sidebar({ setActiveTask, activeTask }: SidebarProps) {
  const tasks = ['Task 1', 'Task 2', 'Task 5'];

  return (
    <div className="sidebar bg-white border-r flex flex-col  p-4">
      <div className="flex items-center justify-start py-4">
      <img src="/vrit-tech-logo.jpg" alt="VritTech Logo" className="h-12" />
      </div>
      <div className="mt-8 w-full">
        {tasks.map((task) => (
          <SidebarButton
            key={task}
            task={task}
            isActive={task === activeTask}
            onClick={() => setActiveTask(task)}
          />
        ))}
      </div>
    </div>
  );
}
