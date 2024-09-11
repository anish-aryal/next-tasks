

type SidebarButtonProps = {
  task: string;
  isActive: boolean;
  onClick: () => void;
}

export default function SidebarButton({ task, isActive, onClick }: SidebarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left py-2 px-4 mb-4 rounded ${
        isActive
          ? 'activeButton text-white '
          : 'bg-white text-gray-700 border'
      }`}
    >
      {task}
    </button>
  );
}
